import { useState, useEffect } from "react";
import { Linkedin, Github, Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [time, setTime] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-GB", { hour12: false }));
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const NavLinks = () => (
    <>
      <a href={isHome ? "#experience" : "/#experience"} className="hover:text-foreground transition-colors">Experience</a>
      <a href={isHome ? "#stack" : "/#stack"} className="hover:text-foreground transition-colors">Stack</a>
      <a href={isHome ? "#work" : "/#work"} className="hover:text-foreground transition-colors">Work</a>
      <a href={isHome ? "#founders-preview" : "/founders"} className="hover:text-foreground transition-colors">Founders</a>
      <a href={isHome ? "#events" : "/#events"} className="hover:text-foreground transition-colors">Events</a>
    </>
  );

  return (
    <nav className="fixed top-0 w-full z-[100] p-4 md:p-6">
      <div className="max-w-7xl mx-auto nav-glass rounded-2xl px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-6">
          <div className="font-black text-xl tracking-tighter uppercase">Pavan Mukkera</div>
          <div className="hidden md:flex items-center gap-2 text-[10px] mono text-muted-foreground border-l border-border pl-6 uppercase tracking-widest">
            <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span>
            UK // <span>{time}</span>
          </div>
        </Link>

        <div className="flex gap-4 md:gap-8 items-center">
          <div className="hidden lg:flex gap-6 text-[11px] mono uppercase tracking-widest font-bold text-muted-foreground">
            <NavLinks />
          </div>

          <ThemeToggle />

          <a
            href="#contact-form"
            className="hidden sm:block bg-foreground text-background px-5 py-2 rounded-full text-xs font-bold uppercase hover:bg-indigo-500 hover:text-foreground transition-all"
          >
            Inquire
          </a>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 hover:text-indigo-500 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden mt-2 nav-glass rounded-2xl p-6 flex flex-col gap-4 text-sm mono uppercase tracking-widest">
          <NavLinks />
          <a href="#contact-form" className="text-indigo-500" onClick={() => setIsMenuOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
