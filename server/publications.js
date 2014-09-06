Meteor.publish('tickets', function() {
    return Tickets.find();
});
Meteor.publish('singleTicket', function(ticketId) {
    return Tickets.find(ticketId);
});
Meteor.publish('notes', function(ticketId) {
    return Notes.find({
    	ticketId: ticketId
    });
});
Meteor.publish('statuses', function() {
    return Statuses.find();
});