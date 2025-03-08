import React, { useState } from 'react';
import { format } from 'date-fns';
import { Calendar, MapPin, Filter } from 'lucide-react';
import { Event } from '../types';

const initialEvents: Event[] = [
  {
    id: '1',
    title: 'Interfaith Dialog Session',
    date: '2024-03-25',
    location: 'Community Center',
    description: 'Join us for an engaging discussion about different faith traditions.',
    category: 'Religious'
  },
  {
    id: '2',
    title: 'Community Picnic',
    date: '2024-03-30',
    location: 'Central Park',
    description: 'A social gathering for families and individuals to connect.',
    category: 'Social'
  },
  {
    id: '3',
    title: 'Food Drive',
    date: '2024-04-05',
    location: 'Local Food Bank',
    description: 'Help us collect and distribute food to those in need.',
    category: 'Charity'
  }
];

const Events = () => {
  const [events, setEvents] = useState<Event[]>(initialEvents);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [newEvent, setNewEvent] = useState<Partial<Event>>({
    title: '',
    date: '',
    location: '',
    description: '',
    category: 'Social'
  });

  const filteredEvents = selectedCategory === 'all'
    ? events
    : events.filter(event => event.category === selectedCategory);

  const handleAddEvent = (e: React.FormEvent) => {
    e.preventDefault();
    if (newEvent.title && newEvent.date && newEvent.location && newEvent.category) {
      const event: Event = {
        id: Date.now().toString(),
        title: newEvent.title,
        date: newEvent.date,
        location: newEvent.location,
        description: newEvent.description || '',
        category: newEvent.category as Event['category']
      };
      setEvents([...events, event]);
      setNewEvent({
        title: '',
        date: '',
        location: '',
        description: '',
        category: 'Social'
      });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="flex flex-col lg:flex-row lg:space-x-8">
        {/* Events List Section */}
        <div className="lg:w-2/3">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 animate-fade-in">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-0">Community Events</h2>
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-500" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border rounded-md py-1 px-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
                         transition-shadow duration-200"
              >
                <option value="all">All Categories</option>
                <option value="Religious">Religious</option>
                <option value="Social">Social</option>
                <option value="Charity">Charity</option>
              </select>
            </div>
          </div>

          <div className="space-y-6">
            {filteredEvents.map((event, index) => (
              <div
                key={event.id}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300
                         transform hover:-translate-y-1 animate-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 sm:mb-0">{event.title}</h3>
                  <span className="px-3 py-1 rounded-full text-sm font-medium self-start sm:self-auto
                                 transform transition-transform duration-300 hover:scale-105" 
                        style={{
                          backgroundColor: 
                            event.category === 'Religious' ? '#E0F2FE' :
                            event.category === 'Social' ? '#FCE7F3' :
                            '#ECFDF5',
                          color:
                            event.category === 'Religious' ? '#0369A1' :
                            event.category === 'Social' ? '#BE185D' :
                            '#047857'
                        }}>
                    {event.category}
                  </span>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    {format(new Date(event.date), 'MMMM d, yyyy')}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    {event.location}
                  </div>
                  <p className="text-gray-600 mt-2">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Add Event Form */}
        <div className="lg:w-1/3 mt-8 lg:mt-0 animate-fade-in stagger-delay-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
            <h3 className="text-xl font-semibold mb-4">Add New Event</h3>
            <form onSubmit={handleAddEvent} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Title</label>
                <input
                  type="text"
                  value={newEvent.title}
                  onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm
                           focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
                           transition-shadow duration-200"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Date</label>
                <input
                  type="date"
                  value={newEvent.date}
                  onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm
                           focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
                           transition-shadow duration-200"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Location</label>
                <input
                  type="text"
                  value={newEvent.location}
                  onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm
                           focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
                           transition-shadow duration-200"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Category</label>
                <select
                  value={newEvent.category}
                  onChange={(e) => setNewEvent({ ...newEvent, category: e.target.value as Event['category'] })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm
                           focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
                           transition-shadow duration-200"
                  required
                >
                  <option value="Religious">Religious</option>
                  <option value="Social">Social</option>
                  <option value="Charity">Charity</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  value={newEvent.description}
                  onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm
                           focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
                           transition-shadow duration-200"
                  rows={3}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md
                         hover:bg-indigo-700 transform hover:scale-105
                         transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Add Event
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;