if (Tickets.find().count() === 0) {

    var now = new Date().getTime();

    Tickets.insert({
        summary: "Ticket 1",
        description: "This is a support ticket.",
        submitted: now++,
        updated: now
    });
    Tickets.insert({
        summary: "Ticket 2",
        description: "This is a support ticket.",
        submitted: now++,
        updated: now
    });
    Tickets.insert({
        summary: "Ticket 3",
        description: "This is a support ticket.",
        submitted: now++,
        updated: now
    });
    Tickets.insert({
        summary: "Ticket 4",
        description: "This is a support ticket.",
        submitted: now++,
        updated: now
    });
    Tickets.insert({
        summary: "Ticket 5",
        description: "This is a support ticket.",
        submitted: now++,
        updated: now
    });
}