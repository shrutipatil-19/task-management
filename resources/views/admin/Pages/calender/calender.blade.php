@extends('admin.layout.app')


@section('page-content')
<div class="page-content">

    <div class="row">
        <div class="col-md-12">
            <div class="row">
                <div class="col-md-3 d-none d-md-block">
                    <div class="card">
                        <div class="card-body">
                            <h6 class="card-title mb-4">Full calendar</h6>
                            <div id='external-events' class='external-events'>
                                <h6 class="mb-2 text-secondary">Draggable Events</h6>
                                <div class='fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event'>
                                    <div class='fc-event-main'>Birth Day</div>
                                </div>
                                <div class='fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event'>
                                    <div class='fc-event-main'>New Project</div>
                                </div>
                                <div class='fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event'>
                                    <div class='fc-event-main'>Anniversary</div>
                                </div>
                                <div class='fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event'>
                                    <div class='fc-event-main'>Clent Meeting</div>
                                </div>
                                <div class='fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event hii'>
                                    <div class='fc-event-main'>Office Trip</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-9">
                    <div class="card">
                        <div class="card-body">
                            <div id='fullcalendar'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id="fullCalModal" class="modal fade">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 id="modalTitle1" class="modal-title"></h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"><span class="visually-hidden">close</span></button>
                </div>
                <div id="modalBody1" class="modal-body"></div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button class="btn btn-primary">Event Page</button>
                </div>
            </div>
        </div>
    </div>

    <div id="fullcalendar"></div>

    <!-- Modal -->
    <div id="createEventModal" class="modal fade">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 id="modalTitle2" class="modal-title">Add Event</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"><span class="visually-hidden">close</span></button>
                </div>
                <div class="modal-body">
                    <form id="addEventForm">
                        @csrf
                        <div class="mb-3">
                            <label for="Title" class="form-label">Title</label>
                            <input type="text" name="title" class="form-control" id="Title" required>
                        </div>
                        <div class="mb-3">
                            <label for="description" class="form-label">Description</label>
                            <input type="text" name="description" class="form-control" id="description">
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" id="addEventBtn">Add</button>
                </div>
            </div>
        </div>
    </div>


</div>
@endsection

@push('scripts')
<!-- FullCalendar CSS -->
<link href="https://cdn.jsdelivr.net/npm/fullcalendar@6.1.8/main.min.css" rel="stylesheet" />
<!-- FullCalendar JS (GLOBAL build with all plugins included) -->
<script src="https://cdn.jsdelivr.net/npm/fullcalendar@6.1.8/index.global.min.js"></script>

<script>
    document.addEventListener('DOMContentLoaded', function() {
        var calendarEl = document.getElementById('fullcalendar');
        var calendar = new FullCalendar.Calendar(calendarEl, {
            initialView: 'dayGridMonth',
            selectable: true,
            events: "{{ url('/admin/calendar/events') }}", // Load from DB

            dateClick: function(info) {
                // Show the modal to add event
                $('#createEventModal').modal('show');
                $('#addEventForm').data('selected-date', info.dateStr);
            },

            eventClick: function(info) {
                // Show event details modal
                info.jsEvent.preventDefault();

                $('#modalTitle1').text(info.event.title);
                $('#modalBody1').html(`
                    <p>${info.event.extendedProps.description || 'No description provided.'}</p>
                    <p><strong>Date:</strong> ${info.event.startStr}</p>
                `);

                $('#fullCalModal').modal('show');
            }
        });

        calendar.render();

        // Add event to calendar via AJAX
        $('.btn-primary:contains("Add")').on('click', function() {
            let date = $('#addEventForm').data('selected-date');
            let title = $('#Title').val();
            let description = $('#description').val();

            if (title && date) {
                $.ajax({
                    url: "{{ url('/admin/calendar/events/store') }}",
                    method: 'POST',
                    data: {
                        _token: '{{ csrf_token() }}',
                        title: title,
                        description: description,
                        start: date
                    },
                    success: function(event) {
                        // Add new event to calendar
                        calendar.addEvent({
                            id: event.id,
                            title: event.title,
                            start: event.start,
                            extendedProps: {
                                description: event.description
                            }
                        });

                        // Clear modal and close
                        $('#createEventModal').modal('hide');
                        $('#Title').val('');
                        $('#description').val('');
                    }
                });
            }
        });
    });
</script>

@endpush