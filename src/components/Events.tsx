import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { MapPin, Calendar, Users, Clock, ChevronRight, X, ExternalLink, Globe, Award, Sparkles } from "lucide-react";
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
  audience?: string;
  duration?: string;
  description: string;
  keyTopics?: string[];
  keyThemes?: string[];
  myContribution: string;
  impact: string[];
  images: string[];
  speakers?: string[];
}

const CATEGORIES = ["All", "Public Speaking", "Webinars", "Workshops", "Community Events", "Training"];

// Helper function to parse dates from various formats
const parseEventDate = (dateStr: string): Date => {
  // Handle various date formats in the events data
  // Examples: "6th–7th October 2023", "November 2023", "2024", "13th March 2024", "04/04/2025", "21st February 2025"

  // Try to extract year first
  const yearMatch = dateStr.match(/(\d{4})/);
  if (!yearMatch) return new Date(0); // Invalid date, put at the end

  const year = parseInt(yearMatch[1]);

  // Try to extract month
  const monthNames = ['january', 'february', 'march', 'april', 'may', 'june',
    'july', 'august', 'september', 'october', 'november', 'december'];
  const lowerDate = dateStr.toLowerCase();
  let month = 0;

  for (let i = 0; i < monthNames.length; i++) {
    if (lowerDate.includes(monthNames[i])) {
      month = i;
      break;
    }
  }

  // Try to extract day (look for numbers followed by st, nd, rd, th)
  const dayMatch = dateStr.match(/(\d{1,2})(st|nd|rd|th)/);
  const day = dayMatch ? parseInt(dayMatch[1]) : 1;

  // Handle date format like "04/04/2025"
  if (dateStr.includes('/')) {
    const parts = dateStr.split('/');
    if (parts.length === 3) {
      return new Date(parseInt(parts[2]), parseInt(parts[1]) - 1, parseInt(parts[0]));
    }
  }

  return new Date(year, month, day);
};

const normalizePath = (path: string) => {
  if (!path) return "";
  // If it already starts with a slash, assume it's correct
  if (path.startsWith("/")) return path;
  // Handle paths starting with portfolio_assets
  if (path.startsWith("portfolio_assets")) return "/" + path;
  // Fallback: remove leading ./ or public/
  let normalized = path.replace(/^(\.\/|public\/)/, "/");
  if (!normalized.startsWith("/")) normalized = "/" + normalized;
  return normalized;
};

const ImageCycler = ({ images }: { images: string[] }) => {
  const [index, setIndex] = useState(0);

  // Reset index when images change to avoid out-of-bounds
  useEffect(() => {
    setIndex(0);
  }, [images]);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images]);

  if (!images || images.length === 0) return null;

  return (
    <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-zinc-900/10">
      <AnimatePresence>
        <motion.img
          key={images[index]} // Use image path as key for better transitions
          src={normalizePath(images[index])}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 w-full h-full object-contain pointer-events-none"
          onError={(e) => {
            (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop`;
          }}
        />
      </AnimatePresence>

      {/* Progress Indicators */}
      {images.length > 1 && (
        <div className="absolute top-6 right-6 flex gap-1.5 z-30">
          {images.map((_, i) => (
            <div
              key={i}
              className={`h-1 rounded-full transition-all duration-500 ${i === index ? "w-8 bg-indigo-500" : "w-2 bg-white/20"
                }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredEvents = (eventsData as Event[])
    .filter((event) => {
      if (activeFilter === "All") return true;

      const searchString = [
        event.eventName,
        event.highlightLabel,
        event.description,
        event.role,
        ...(event.keyThemes || []),
        ...(event.keyTopics || []),
        event.organizerPartner
      ].join(" ").toLowerCase();

      switch (activeFilter) {
        case "Public Speaking":
          return searchString.includes("speaker") || searchString.includes("keynote") || searchString.includes("presentation");
        case "Webinars":
          return searchString.includes("webinar") || searchString.includes("online") || searchString.includes("virtual");
        case "Workshops":
          return searchString.includes("workshop") || searchString.includes("training") || searchString.includes("camp") || searchString.includes("roadshow") || searchString.includes("fest") || searchString.includes("tour");
        case "Community Events":
          return searchString.includes("community") || searchString.includes("mixer") || searchString.includes("day") || searchString.includes("event");
        case "Training":
          return searchString.includes("training") || searchString.includes("skills") || searchString.includes("dev camp") || searchString.includes("workshop");
        default:
          return true;
      }
    })
    .sort((a, b) => {
      // Sort by date - most recent first
      const dateA = parseEventDate(a.date);
      const dateB = parseEventDate(b.date);
      return dateB.getTime() - dateA.getTime();
    });

  return (
    <section id="events" className="py-32 px-6 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2 -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm mono text-indigo-500 uppercase mb-4 tracking-[0.3em] flex items-center gap-2">
              <Sparkles size={14} /> Events & Impact
            </h2>
            <h3 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic leading-[0.85]">
              Public<br />Appearances.
            </h3>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center gap-6 relative"
          >
            <div className="text-8xl font-black text-indigo-500/10 absolute -right-4 -top-8 select-none">
              {filteredEvents.length}
            </div>
            <div className="relative">
              <div className="text-7xl font-black text-indigo-500 leading-none transition-all duration-300">
                {filteredEvents.length}
              </div>
              <div className="text-xs mono text-muted-foreground uppercase tracking-widest leading-tight mt-1">
                Global Impact<br />Milestones
              </div>
            </div>
          </motion.div>
        </div>

        {/* Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 mb-16 bg-muted/20 p-1.5 rounded-2xl w-fit border border-border/40 backdrop-blur-md"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-2.5 rounded-xl text-[10px] mono uppercase tracking-widest transition-all duration-300 ${activeFilter === cat
                ? "bg-indigo-500 text-white shadow-xl shadow-indigo-500/25 scale-105"
                : "hover:bg-indigo-500/10 text-muted-foreground hover:text-indigo-400"
                }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Events Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredEvents.map((event, index) => (
              <motion.div
                layout
                key={event.id}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.03 }}
                onClick={() => setSelectedEvent(event)}
                className="group relative impact-card p-0 rounded-[40px] cursor-pointer overflow-hidden flex flex-col min-h-[480px] border border-border/40 bg-card hover:border-indigo-500/50 transition-all duration-500"
              >
                {/* Image Background Layer */}
                <div className="absolute inset-0 z-0">
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-background/40 z-10" />
                  {event.images && event.images[0] ? (
                    <img
                      src={normalizePath(event.images[0])}
                      alt=""
                      className="w-full h-full object-cover grayscale opacity-20 sm:opacity-30 group-hover:grayscale-0 group-hover:opacity-50 group-hover:scale-110 transition-all duration-700"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop`;
                      }}
                    />
                  ) : (
                    <div className="w-full h-full bg-indigo-500/5" />
                  )}
                </div>

                <div className="relative z-20 p-10 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-8">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <span className="text-6xl md:text-7xl font-black bg-gradient-to-br from-indigo-500 via-indigo-400 to-indigo-600 bg-clip-text text-transparent leading-none opacity-90 group-hover:opacity-100 transition-opacity">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-transparent rounded-full opacity-60" />
                        </div>
                        <span className="text-[10px] mono text-indigo-400 font-bold uppercase tracking-[0.2em] bg-indigo-500/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-indigo-500/20">
                          Event Highlight
                        </span>
                      </div>
                    </div>
                    <h4 className="text-2xl md:text-3xl font-black mb-4 md:6 leading-[1.1] tracking-tight group-hover:text-indigo-400 transition-colors">
                      {event.eventName}
                    </h4>
                    <p className="text-xs md:text-sm text-muted-foreground line-clamp-3 md:line-clamp-4 leading-relaxed font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                      {event.description}
                    </p>
                  </div>

                  <div className="mt-10 pt-10 border-t border-indigo-500/10">
                    <div className="flex flex-col gap-3 mb-8">
                      <div className="flex items-center gap-3 text-xs font-bold text-muted-foreground/70">
                        <Calendar size={14} className="text-indigo-500" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-3 text-xs font-bold text-muted-foreground/70">
                        <MapPin size={14} className="text-indigo-500" />
                        <span className="truncate">{event.location}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-indigo-500 text-[10px] font-black uppercase tracking-[0.3em] group-hover:gap-4 transition-all duration-300">
                        Read More <ChevronRight size={14} />
                      </div>
                      <div className="w-10 h-10 rounded-2xl bg-indigo-500/10 flex items-center justify-center group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
                        <ExternalLink size={18} />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Event Modal */}
        <AnimatePresence>
          {selectedEvent && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8 bg-background/40 backdrop-blur-2xl"
              onClick={() => setSelectedEvent(null)}
            >
              <motion.div
                initial={{ y: 100, opacity: 0, scale: 0.9 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: 100, opacity: 0, scale: 0.9 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-card/80 border border-white/10 rounded-[48px] max-w-6xl w-full max-h-[90vh] overflow-y-auto md:overflow-hidden shadow-2xl flex flex-col md:flex-row relative"
              >
                {/* Decorative Elements inside Modal */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[100px] -z-10" />

                {/* Left Side: Images & Quick Meta */}
                <div className="w-full md:w-5/12 p-6 md:p-12 bg-zinc-900/50 flex flex-col h-auto md:h-[min(800px,85vh)] border-b md:border-b-0 md:border-r border-white/10 relative overflow-hidden">
                  {/* Glassy Background Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent pointer-events-none" />

                  <div className="mb-8 shrink-0 relative z-10">
                    <div className="text-[10px] mono text-indigo-400 font-black uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
                      <span className="w-8 h-[1px] bg-indigo-500/30" />
                      {selectedEvent.highlightLabel}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black leading-tight mb-3 text-white">{selectedEvent.eventName}</h3>
                    <p className="text-muted-foreground font-medium text-sm md:text-base leading-relaxed">{selectedEvent.title}</p>
                  </div>

                  <div className="flex-1 relative flex flex-col min-h-[350px] md:min-h-0 mb-8 z-10">
                    <div className="text-[10px] mono text-muted-foreground/60 uppercase mb-4 flex justify-between items-center shrink-0 tracking-widest">
                      <span className="flex items-center gap-2">
                        <Clock size={10} className="text-indigo-500" />
                        Gallery
                      </span>
                      <span className="text-indigo-400/80 animate-pulse flex items-center gap-1">
                        <div className="w-1 h-1 rounded-full bg-indigo-400" />
                        Live Multi-Angle Feed
                      </span>
                    </div>

                    <div className="flex-1 relative rounded-3xl overflow-hidden bg-black/40 border border-white/10 shadow-2xl group/gallery">
                      <ImageCycler images={selectedEvent.images} />

                      {/* Image Meta Overlay */}
                      <div className="absolute bottom-4 left-4 right-4 z-20 flex justify-between items-end pointer-events-none">
                        <div className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/5">
                          <span className="text-[9px] mono text-white/50 uppercase tracking-tighter">Source: Event Archive</span>
                        </div>
                        <div className="w-10 h-10 rounded-xl bg-white/5 backdrop-blur-md flex items-center justify-center border border-white/10">
                          <ExternalLink className="text-white/40" size={16} />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto pt-6 border-t border-white/5 flex flex-col gap-4 shrink-0 relative z-10">
                    <div className="bg-white/5 p-3 md:p-4 rounded-2xl border border-white/5">
                      <div className="text-[8px] md:text-[9px] mono text-muted-foreground mb-1 tracking-wider">Designation</div>
                      <div className="text-[10px] md:text-xs font-black text-indigo-400 leading-tight tracking-tighter">{selectedEvent.role}</div>
                    </div>
                    <div className="bg-white/5 p-3 md:p-4 rounded-2xl border border-white/5">
                      <div className="text-[8px] md:text-[9px] mono text-muted-foreground mb-2 tracking-wider">Event Partners</div>
                      <div className="text-[10px] md:text-xs font-black text-white/90 leading-relaxed tracking-tight">{selectedEvent.organizerPartner}</div>
                    </div>
                  </div>
                </div>

                {/* Right Side: Details */}
                <div className="w-full md:w-7/12 p-8 md:p-12 md:max-h-[min(800px,85vh)] md:overflow-y-auto custom-scrollbar bg-zinc-950/20">
                  <div className="flex justify-between items-center mb-12">
                    <div className="flex gap-4">
                      <div className="flex flex-col items-center justify-center w-14 h-14 bg-card rounded-2xl border border-border/50">
                        <Calendar size={18} className="text-indigo-500 mb-1" />
                        <span className="text-[10px] mono font-bold text-muted-foreground">DATE</span>
                      </div>
                      <div className="flex flex-col justify-center">
                        <span className="font-black text-sm">{selectedEvent.date}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedEvent(null)}
                      className="w-12 h-12 flex items-center justify-center bg-card hover:bg-indigo-500 hover:text-white border border-border/50 rounded-2xl transition-all"
                    >
                      <X size={20} />
                    </button>
                  </div>

                  <div className="space-y-12">
                    {/* Description */}
                    <section>
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-8 rounded-xl bg-indigo-500/10 flex items-center justify-center">
                          <Globe size={16} className="text-indigo-500" />
                        </div>
                        <h4 className="text-xl font-black uppercase tracking-widest italic">About the Event</h4>
                      </div>
                      <p className="text-muted-foreground leading-relaxed font-medium">
                        {selectedEvent.description}
                      </p>
                    </section>

                    {/* Impact */}
                    <section>
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-8 rounded-xl bg-indigo-500/10 flex items-center justify-center">
                          <Award size={16} className="text-indigo-500" />
                        </div>
                        <h4 className="text-xl font-black uppercase tracking-widest italic">Key Results</h4>
                      </div>
                      <div className="grid grid-cols-1 gap-4">
                        {selectedEvent.impact.map((item, i) => (
                          <div key={i} className="group p-6 rounded-3xl bg-muted/30 border border-border/50 flex gap-4 items-start hover:border-indigo-500/30 transition-all">
                            <div className="mt-1 w-2 h-2 rounded-full bg-indigo-500 shrink-0 group-hover:scale-150 transition-transform" />
                            <p className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">{item}</p>
                          </div>
                        ))}
                      </div>
                    </section>

                    {/* Speakers & Topics */}
                    <div className="grid md:grid-cols-2 gap-8">
                      {selectedEvent.speakers && selectedEvent.speakers.length > 0 && (
                        <section>
                          <h4 className="text-sm font-black uppercase tracking-widest italic mb-4">Speakers & Partners</h4>
                          <div className="flex flex-wrap gap-2">
                            {selectedEvent.speakers.map((s, i) => (
                              <span key={i} className="px-4 py-2 bg-card border border-border/50 rounded-xl text-xs font-bold">{s}</span>
                            ))}
                          </div>
                        </section>
                      )}
                      {(selectedEvent.keyTopics || selectedEvent.keyThemes) && (
                        <section>
                          <h4 className="text-sm font-black uppercase tracking-widest italic mb-4">Core Topics</h4>
                          <div className="flex flex-wrap gap-2">
                            {Array.from(new Set([
                              ...(selectedEvent.keyTopics || []),
                              ...(selectedEvent.keyThemes || [])
                            ])).map((t, i) => (
                              <span key={i} className="px-4 py-2 bg-indigo-500/10 text-indigo-400 rounded-xl text-[10px] mono font-bold uppercase">{t}</span>
                            ))}
                          </div>
                        </section>
                      )}
                    </div>

                    {/* My Contribution */}
                    <section className="p-8 rounded-[32px] bg-indigo-500/5 border border-indigo-500/10">
                      <h4 className="text-sm font-black uppercase tracking-widest italic mb-4 text-indigo-400">My Contribution</h4>
                      <p className="text-sm text-foreground/80 leading-relaxed font-medium italic">
                        "{selectedEvent.myContribution}"
                      </p>
                    </section>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Events;
