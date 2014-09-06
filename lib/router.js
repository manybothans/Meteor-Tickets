Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'fourohfour',
    waitOn: function () {
        return [
            Meteor.subscribe('tickets'),
            Meteor.subscribe('notes'),
            Meteor.subscribe('statuses')
        ];
    }
});

Router.onRun(function() {
    window.scrollTo(0, 0);
});


Router.map(function() {

    this.route('tickets', {
        path: '/tickets',
    });

    this.route('viewTicket', {
        path: '/tickets/:_id',
        data: function() {
            return Tickets.findOne(this.params._id);
        },
        onRun: function() {
            Session.set('currentTicket', this.params._id);
        }
    });

    this.route('home', {
        path: '/',
        onBeforeAction: function() {
            this.redirect('/tickets')
        }
    });
});
