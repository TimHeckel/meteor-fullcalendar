Package.describe({
    summary: "Full-sized drag and drop event calendar (jQuery plugin)"
});

Package.on_use(function (api) {
    api.use('jquery', 'client');
    api.add_files([
        'css/fullcalendar.css',
        'css/fullcalendar.print.css',
        'lib/fullcalendar.js',
        'lib/gcal.js'
    ], 'client');
});
