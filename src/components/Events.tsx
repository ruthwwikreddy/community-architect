import { motion } from "framer-motion";
import { useState } from "react";
import { MapPin, Calendar, Users, Clock, ChevronRight, X, ExternalLink } from "lucide-react";
import eventsData from "@/data/events.json";

interface Event {
  id: number;
  key: string;
  highlightLabel: string;
  eventName: string;
  title: string;
  date: string;
  location: string;
  organizerPartner: string;
  role: string;
  audience: string;
  duration: string;
  description: string;
  keyTopics: string[];
  myContribution: string;
  impact: string[];
  images: string[];
}

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  return (
    <section id="events" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm mono text-indigo-500 uppercase mb-4 tracking-widest">// Community Impact</h2>
            <h3 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic">
              Events<br />& Talks.
            </h3>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <div className="text-6xl font-black text-indigo-500">{eventsData.length}</div>
            <div className="text-sm mono text-muted-foreground uppercase tracking-widest">
              Events<br />Attended
            </div>
          </motion.div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventsData.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              onClick={() => setSelectedEvent(event)}
              className="group impact-card p-8 rounded-3xl cursor-pointer flex flex-col justify-between min-h-[320px]"
            >
              <div>
                <div className="text-[10px] mono text-indigo-500 mb-4 font-bold uppercase tracking-widest">
                  {event.highlightLabel}
                </div>
                <h4 className="text-xl font-bold mb-3 group-hover:text-indigo-400 transition-colors line-clamp-2">
                  {event.eventName}
                </h4>
                <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                  {event.description}
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar size={14} />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <MapPin size={14} />
                  <span className="truncate">{event.location}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Users size={14} />
                  <span>{event.audience}</span>
                </div>
                
                <div className="flex items-center gap-2 text-indigo-500 text-xs font-bold uppercase tracking-widest pt-2 group-hover:gap-4 transition-all">
                  View Case Study <ChevronRight size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Event Modal */}
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-background/80 backdrop-blur-xl"
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card border border-border rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-8 md:p-12">
                <div className="flex justify-between items-start mb-8">
                  <div className="text-[10px] mono text-indigo-500 font-bold uppercase tracking-widest">
                    {selectedEvent.highlightLabel}
                  </div>
                  <button
                    onClick={() => setSelectedEvent(null)}
                    className="p-2 hover:bg-muted rounded-full transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                <h3 className="text-3xl md:text-4xl font-black mb-4">{selectedEvent.eventName}</h3>
                <p className="text-lg text-muted-foreground mb-8">{selectedEvent.title}</p>

                {/* Event Meta */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="p-4 bg-muted rounded-2xl">
                    <Calendar size={18} className="text-indigo-500 mb-2" />
                    <div className="text-[10px] mono text-muted-foreground uppercase mb-1">Date</div>
                    <div className="text-sm font-bold">{selectedEvent.date}</div>
                  </div>
                  <div className="p-4 bg-muted rounded-2xl">
                    <MapPin size={18} className="text-indigo-500 mb-2" />
                    <div className="text-[10px] mono text-muted-foreground uppercase mb-1">Location</div>
                    <div className="text-sm font-bold line-clamp-2">{selectedEvent.location}</div>
                  </div>
                  <div className="p-4 bg-muted rounded-2xl">
                    <Users size={18} className="text-indigo-500 mb-2" />
                    <div className="text-[10px] mono text-muted-foreground uppercase mb-1">Audience</div>
                    <div className="text-sm font-bold">{selectedEvent.audience}</div>
                  </div>
                  <div className="p-4 bg-muted rounded-2xl">
                    <Clock size={18} className="text-indigo-500 mb-2" />
                    <div className="text-[10px] mono text-muted-foreground uppercase mb-1">Duration</div>
                    <div className="text-sm font-bold">{selectedEvent.duration}</div>
                  </div>
                </div>

                {/* Role & Partner */}
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  <div className="p-6 border border-border rounded-2xl">
                    <div className="text-[10px] mono text-muted-foreground uppercase mb-2">My Role</div>
                    <div className="font-bold text-indigo-400">{selectedEvent.role}</div>
                  </div>
                  <div className="p-6 border border-border rounded-2xl">
                    <div className="text-[10px] mono text-muted-foreground uppercase mb-2">Organizer / Partner</div>
                    <div className="font-bold">{selectedEvent.organizerPartner}</div>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-8">
                  <h4 className="text-lg font-bold mb-4">About This Event</h4>
                  <p className="text-muted-foreground leading-relaxed">{selectedEvent.description}</p>
                </div>

                {/* Key Topics */}
                <div className="mb-8">
                  <h4 className="text-lg font-bold mb-4">Key Topics Covered</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedEvent.keyTopics.map((topic, i) => (
                      <span key={i} className="px-4 py-2 bg-indigo-500/10 text-indigo-400 rounded-full text-sm">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                {/* My Contribution */}
                <div className="mb-8">
                  <h4 className="text-lg font-bold mb-4">My Contribution</h4>
                  <p className="text-muted-foreground leading-relaxed">{selectedEvent.myContribution}</p>
                </div>

                {/* Impact */}
                <div className="mb-8">
                  <h4 className="text-lg font-bold mb-4">Impact & Outcomes</h4>
                  <ul className="space-y-3">
                    {selectedEvent.impact.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <ChevronRight size={16} className="text-indigo-500 mt-1 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Images */}
                {selectedEvent.images.length > 0 && (
                  <div>
                    <h4 className="text-lg font-bold mb-4">Event Gallery</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {selectedEvent.images.map((img, i) => (
                        <div key={i} className="aspect-video bg-muted rounded-2xl overflow-hidden flex items-center justify-center">
                          <div className="text-xs mono text-muted-foreground text-center p-4">
                            {img}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Events;
