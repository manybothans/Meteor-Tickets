Router.configure({
    layoutTemplate: 'layout'
});


Router.map(function() {

    this.route('tickets', {
        path: '/tickets',
    });

    this.route('addTicket', {
        path: '/tickets/add',
    });

    this.route('viewTicket', {
        path: '/tickets/view',
    });

    this.route('home', {
        path: '/',
        onBeforeAction: function() {
            this.redirect('/tickets')
        }
    });
});