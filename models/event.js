const fs = require('fs');
const path = require('path');

class Event {
    constructor({ id, title, description, date, maxSeats }) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.date = date;
        this.maxSeats = maxSeats;
    }

    static getAllEvents() {
        const eventsFilePath = path.join(__dirname, '../db/events.json');

        try {
            const eventsData = fs.readFileSync(eventsFilePath, 'utf8');
            return JSON.parse(eventsData);
        } catch (error) {
            return [];
        }
    }

    static filterEvents(query) {
        const events = Event.getAllEvents();
        // ! URL ESEMPIO PER FILTRARE: http://localhost:3000/events?id=1
        if (query.id) {
            const eventId = parseInt(query.id, 10);
            return events.filter(event => event.id === eventId);
        }
        return events;
    }

    static saveEvent(event) {
        const eventsFilePath = path.join(__dirname, '../db/events.json');
        const events = Event.getAllEvents();

        event.id = events.length + 1; // Assegna un nuovo ID
        events.push(event);

        fs.writeFileSync(eventsFilePath, JSON.stringify(events, null, 2), 'utf8');
        return event;
    }
}

module.exports = Event;
