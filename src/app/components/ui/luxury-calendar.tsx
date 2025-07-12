// components/ui/luxury-calendar.tsx
import { useState } from 'react';
import { Calendar as CalendarBase } from "@/app/components/ui/calendar";
import { motion, AnimatePresence } from "framer-motion";
import { format } from "date-fns";

interface LuxuryCalendarProps {
  selected: Date | undefined;
  onSelect: (date: Date | undefined) => void;
}

export function LuxuryCalendar({ selected, onSelect }: LuxuryCalendarProps) {
  const [hoveredDate, setHoveredDate] = useState<Date | null>(null);

  return (
    <div className="relative">
      <style jsx global>{`
        .luxury-calendar {
          font-family: "Optima", "Didot", serif;
          background: transparent !important;
          border: none !important;
        }

        .luxury-calendar .rdp-month {
          background: transparent;
        }

        .luxury-calendar .rdp-head_cell {
          color: #888;
          font-weight: 300;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-size: 0.8rem;
        }

        .luxury-calendar .rdp-button {
          color: white;
          font-weight: 300;
          transition: all 0.3s ease;
          width: 40px;
          height: 40px;
          font-size: 0.9rem;
          letter-spacing: 0.05em;
        }

        .luxury-calendar .rdp-button:hover:not([disabled]) {
          background: rgba(255, 255, 255, 0.1) !important;
          color: white !important;
        }

        .luxury-calendar .rdp-button[disabled] {
          opacity: 0.3;
        }

        .luxury-calendar .rdp-button_selected {
          background: white !important;
          color: black !important;
          font-weight: 400;
        }

        .luxury-calendar .rdp-day_selected:not([disabled]) {
          background: white;
          color: black;
          font-weight: 400;
        }

        .luxury-calendar .rdp-nav_button {
          color: white;
          opacity: 0.7;
          transition: opacity 0.3s ease;
        }

        .luxury-calendar .rdp-nav_button:hover {
          opacity: 1;
          background: transparent;
        }
      `}</style>

      <CalendarBase
        mode="single"
        selected={selected}
        onSelect={onSelect}
        className="luxury-calendar border-0"
        classNames={{
          months: "space-y-4",
          month: "space-y-4",
          caption: "flex justify-center pt-1 relative items-center text-white",
          caption_label: "text-sm font-light tracking-widest uppercase",
          nav: "space-x-1 flex items-center",
          nav_button: "h-7 w-7 bg-transparent hover:opacity-100 opacity-75",
          nav_button_previous: "absolute left-1",
          nav_button_next: "absolute right-1",
          table: "w-full border-collapse space-y-1",
          head_row: "flex justify-between",
          head_cell: "text-white/50 rounded-md w-10 font-normal text-xs",
          row: "flex w-full mt-2 justify-between",
          cell: "text-center text-sm relative p-0 hover:bg-white/5 rounded-full transition-colors",
          day: "h-10 w-10 font-light hover:bg-white/10 rounded-full transition-all duration-300",
          day_selected: "bg-white text-black hover:bg-white hover:text-black",
          day_today: "border border-white/20",
          day_outside: "opacity-50",
          day_disabled: "opacity-20",
          day_hidden: "invisible",
        }}
        components={{
          Day: ({ date, ...props }) => {
            const isHovered = hoveredDate && date.getTime() === hoveredDate.getTime();
            
            return (
              <motion.button
                {...props}
                onMouseEnter={() => setHoveredDate(date)}
                onMouseLeave={() => setHoveredDate(null)}
                whileHover={{ scale: 1.1 }}
                animate={{ scale: isHovered ? 1.1 : 1 }}
              >
                {format(date, "d")}
              </motion.button>
            );
          }
        }}
      />

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-0 left-0 right-0 text-center py-4 text-sm text-white/80"
          >
            Selected: {format(selected, "MMMM dd, yyyy")}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}