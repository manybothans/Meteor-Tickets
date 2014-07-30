Template.tickets.helpers({
    tickets: function() {
        return Tickets.find({}, {
            sort: {
                updated: 1,
                _id: 1
            }
        });
    }
});

Template.viewTicket.rendered = function() {

    $.fn.editable.defaults.mode = 'inline';

    $('#summary').editable({
        type: "text",
        placeholder: "Short Issue Summary",
        emptytext: "Click to enter text",
        autotext: "always",
        success: function(response, newValue) {
            Tickets.update(Session.get('currentTicket'), {
                $set: {
                    summary: newValue,
                    updated: new Date().getTime()
                }
            });
        }
    });
    $('#description').editable({
        type: "textarea",
        placeholder: "Enter text",
        emptytext: "Click to enter text",
        rows: "4",
        autotext: "always",
        success: function(response, newValue) {
            Tickets.update(Session.get('currentTicket'), {
                $set: {
                    description: newValue,
                    updated: new Date().getTime()
                }
            });
        }
    });
};


Template.addTicketDialog.events({
    'submit form.add-ticket': function(e) {
        e.preventDefault();

        var now = new Date().getTime();

        Tickets.insert({
            summary: $(e.target).find('[name=summary]').val(),
            description: $(e.target).find('[name=description]').val(),
            submitted: now,
            updated: now
        });

        $('#add-ticket-modal').modal('hide');
    }
});