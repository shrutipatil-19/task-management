<x-mail::message>
# Event Reminder: {{ $eventTitle }}

Hello,

This is a friendly reminder for your event: **{{ $eventTitle }}**.

It is scheduled for: **{{ $eventDate }}**.

We hope you're ready!

Thanks,
{{ config('app.name') }}
</x-mail::message>