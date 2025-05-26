<h2>Reminder: {{ $event->title }}</h2>
<p>{{ $event->description }}</p>
<p><strong>Date:</strong> {{ \Carbon\Carbon::parse($event->start)->format('F j, Y') }}</p>
