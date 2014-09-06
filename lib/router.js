Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'fourohfour',
    waitOn: function () {
        return Meteor.subscribe('statuses');
    }
});

Router.onRun(function() {
    window.scrollTo(0, 0);
});


Router.map(function() {

    this.route('tickets', {
        path: '/tickets',
        waitOn: function () {
            return Meteor.subscribe('tickets');
        }
    });

    this.route('viewTicket', {
        path: '/tickets/:_id',
        waitOn: function () {
            return [
                Meteor.subscribe('singleTicket', this.params._id),
                Meteor.subscribe('notes', this.params._id)
            ];
        },
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
            this.redirect('/tickets');
        }
    });
});
