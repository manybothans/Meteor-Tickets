Meteor.publish('tickets', function(id) {
    return Tickets.find();
});
Meteor.publish('notes', function(id) {
    return Notes.find();
});
Meteor.publish('statuses', function(id) {
    return Statuses.find();
});