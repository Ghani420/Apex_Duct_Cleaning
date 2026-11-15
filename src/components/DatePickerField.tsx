import React, { useState, useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { Calendar, ChevronLeft, ChevronRight, AlertCircle, X } from 'lucide-react';

export const SATURDAY_CLOSED_MESSAGE = 'Weekend – We Are Closed';

export function isSaturdayDate(dateStr: string): boolean {
  if (!dateStr || !/^\d{4}-\d{2}-\d{2}$/.test(dateStr.trim())) return false;
  const [year, month, day] = dateStr.trim().split('-').map(Number);
  if (!year || !month || !day) return false;
  const dateObj = new Date(year, month - 1, day);
  return (
    dateObj.getFullYear() === year &&
    dateObj.getMonth() === month - 1 &&
    dateObj.getDate() === day &&
    dateObj.getDay() === 6
  );
}

function formatDisplayDate(dateStr: string): string {
  if (!dateStr || !/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) return '';
  const [year, month, day] = dateStr.split('-');
  return `${month}/${day}/${year}`;
}

function toIsoDate(year: number, monthIndex: number, day: number): string {
  const mm = String(monthIndex + 1).padStart(2, '0');
  const dd = String(day).padStart(2, '0');
  return `${year}-${mm}-${dd}`;
}

const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const WEEKDAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

interface DatePickerFieldProps {
  id: string;
  name: string;
  value: string;
  onChange: (newDate: string) => void;
  onSaturdayAttempt: () => void;
  error?: string;
  inputPadding: string;
  required?: boolean;
}

export const DatePickerField: React.FC<DatePickerFieldProps> = ({
  id,
  name,
  value,
  onChange,
  onSaturdayAttempt,
  error,
  inputPadding,
  required = true,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [saturdayNotice, setSaturdayNotice] = useState(false);
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.innerWidth < 640
  );
  const [coords, setCoords] = useState<{ top: number; left: number; width: number }>({
    top: 0,
    left: 0,
    width: 300,
  });

  const triggerRef = useRef<HTMLButtonElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  const getInitialMonth = () => {
    if (value && /^\d{4}-\d{2}-\d{2}$/.test(value)) {
      const [y, m] = value.split('-').map(Number);
      if (y && m) return { year: y, month: m - 1 };
    }
    const now = new Date();
    return { year: now.getFullYear(), month: now.getMonth() };
  };

  const [viewMonth, setViewMonth] = useState<{ year: number; month: number }>(getInitialMonth);

  const updatePosition = useCallback(() => {
    const mobile = window.innerWidth < 640;
    setIsMobile(mobile);
    if (mobile || !triggerRef.current) return;
    const rect = triggerRef.current.getBoundingClientRect();
    const popoverHeight = 360;
    const popoverWidth = Math.max(296, Math.min(320, window.innerWidth - 24));
    const spaceBelow = window.innerHeight - rect.bottom;
    const openAbove = spaceBelow < popoverHeight && rect.top > popoverHeight;

    const top = openAbove
      ? Math.max(12, rect.top - popoverHeight - 8)
      : Math.min(window.innerHeight - popoverHeight - 12, rect.bottom + 8);

    const left = Math.max(
      12,
      Math.min(rect.left, window.innerWidth - popoverWidth - 12)
    );

    setCoords({ top, left, width: popoverWidth });
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    updatePosition();

    const handleReposition = () => updatePosition();
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node;
      if (
        triggerRef.current &&
        !triggerRef.current.contains(target) &&
        popoverRef.current &&
        !popoverRef.current.contains(target)
      ) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleReposition);
    window.addEventListener('scroll', handleReposition, true);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      window.removeEventListener('resize', handleReposition);
      window.removeEventListener('scroll', handleReposition, true);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen, updatePosition]);

  useEffect(() => {
    if (value && isSaturdayDate(value)) {
      onChange('');
      onSaturdayAttempt();
      setSaturdayNotice(true);
    }
  }, [value, onChange, onSaturdayAttempt]);

  const handleToggleOpen = () => {
    if (!isOpen) {
      setViewMonth(getInitialMonth());
      setSaturdayNotice(error === SATURDAY_CLOSED_MESSAGE);
    }
    setIsOpen((prev) => !prev);
  };

  const handlePrevMonth = () => {
    setViewMonth((prev) => {
      if (prev.month === 0) return { year: prev.year - 1, month: 11 };
      return { year: prev.year, month: prev.month - 1 };
    });
  };

  const handleNextMonth = () => {
    setViewMonth((prev) => {
      if (prev.month === 11) return { year: prev.year + 1, month: 0 };
      return { year: prev.year, month: prev.month + 1 };
    });
  };

  const handleDayClick = (day: number) => {
    const iso = toIsoDate(viewMonth.year, viewMonth.month, day);
    if (isSaturdayDate(iso)) {
      setSaturdayNotice(true);
      onSaturdayAttempt();
      return;
    }
    setSaturdayNotice(false);
    onChange(iso);
    setIsOpen(false);
  };

  const firstDayOfMonth = new Date(viewMonth.year, viewMonth.month, 1).getDay();
  const daysInMonth = new Date(viewMonth.year, viewMonth.month + 1, 0).getDate();

  const today = new Date();
  const todayIso = toIsoDate(today.getFullYear(), today.getMonth(), today.getDate());

  const calendarCells: Array<number | null> = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarCells.push(null);
  }
  for (let d = 1; d <= daysInMonth; d++) {
    calendarCells.push(d);
  }

  const displayValue = formatDisplayDate(value);

  const calendarContent = (
    <div
      ref={popoverRef}
      role="dialog"
      aria-modal="true"
      aria-label="Choose preferred appointment date"
      style={
        isMobile
          ? undefined
          : { top: `${coords.top}px`, left: `${coords.left}px`, width: `${coords.width}px` }
      }
      className="fixed z-[1200] max-sm:left-1/2 max-sm:top-1/2 max-sm:-translate-x-1/2 max-sm:-translate-y-1/2 max-sm:w-[calc(100vw-2rem)] max-sm:max-w-[330px] rounded-2xl bg-[#0d0d10] border border-[#B38728]/60 shadow-[0_20px_50px_rgba(0,0,0,0.95)] p-4 text-white select-none"
    >
      {/* Header: Month / Year navigation */}
      <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-white/10">
        <button
          type="button"
          onClick={handlePrevMonth}
          className="p-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] text-neutral-300 hover:text-gold border border-white/10 transition-colors cursor-pointer"
          aria-label="Previous month"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <span className="font-serif font-bold text-sm tracking-wide text-white uppercase">
          {MONTH_NAMES[viewMonth.month]} {viewMonth.year}
        </span>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={handleNextMonth}
            className="p-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] text-neutral-300 hover:text-gold border border-white/10 transition-colors cursor-pointer"
            aria-label="Next month"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="sm:hidden p-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] text-neutral-400 hover:text-white border border-white/10 transition-colors cursor-pointer"
            aria-label="Close calendar"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Weekday headers */}
      <div className="grid grid-cols-7 gap-1 mb-1.5 text-center">
        {WEEKDAYS.map((dayLabel, idx) => (
          <div
            key={dayLabel}
            className={`text-[11px] font-bold uppercase tracking-wider py-1 ${
              idx === 6 ? 'text-neutral-500' : 'text-gold/90'
            }`}
          >
            {dayLabel}
          </div>
        ))}
      </div>

      {/* Day grid */}
      <div className="grid grid-cols-7 gap-1">
        {calendarCells.map((day, idx) => {
          if (day === null) {
            return <div key={`empty-${idx}`} className="h-9" />;
          }

          const iso = toIsoDate(viewMonth.year, viewMonth.month, day);
          const isSaturday = isSaturdayDate(iso);
          const isSelected = value === iso && !isSaturday;
          const isToday = iso === todayIso;

          return (
            <button
              key={iso}
              type="button"
              onClick={() => handleDayClick(day)}
              aria-disabled={isSaturday ? 'true' : undefined}
              aria-selected={isSelected}
              title={isSaturday ? SATURDAY_CLOSED_MESSAGE : formatDisplayDate(iso)}
              className={`h-9 w-full rounded-lg text-xs font-medium flex items-center justify-center transition-all relative ${
                isSaturday
                  ? 'text-neutral-600 bg-white/[0.02] border border-white/[0.04] line-through cursor-not-allowed hover:bg-red-950/35 hover:text-red-300 hover:border-red-500/40'
                  : isSelected
                  ? 'gold-gradient text-black font-bold shadow-sm cursor-pointer'
                  : isToday
                  ? 'text-gold bg-[#BF953F]/10 border border-[#B38728]/50 hover:bg-[#BF953F]/25 cursor-pointer'
                  : 'text-neutral-200 hover:bg-[#BF953F]/20 hover:text-[#FCF6BA] cursor-pointer'
              }`}
            >
              {day}
            </button>
          );
        })}
      </div>

      {/* Closure notice when Saturday is clicked or general Saturday indicator */}
      {saturdayNotice ? (
        <div
          role="alert"
          className="mt-3 p-2.5 rounded-xl bg-red-950/50 border border-red-500/50 text-red-300 text-xs font-semibold flex items-center gap-2"
        >
          <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
          <span>{SATURDAY_CLOSED_MESSAGE}</span>
        </div>
      ) : (
        <div className="mt-3 pt-2 border-t border-white/10 text-[11px] text-neutral-400 text-center">
          Closed on Saturdays • Open Sunday – Friday
        </div>
      )}
    </div>
  );

  return (
    <div className="relative">
      <input type="hidden" name={name} value={isSaturdayDate(value) ? '' : value} required={required} />

      <button
        ref={triggerRef}
        id={id}
        type="button"
        onClick={handleToggleOpen}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        className={`w-full max-w-full min-w-0 flex items-center justify-between text-left ${inputPadding} bg-black/60 border rounded-xl text-sm focus:outline-none transition-colors cursor-pointer ${
          error
            ? 'border-red-500'
            : isOpen
            ? 'border-[#BF953F]'
            : 'border-neutral-800 focus:border-[#BF953F]'
        }`}
      >
        <span className={displayValue ? 'text-white' : 'text-neutral-400'}>
          {displayValue || 'mm/dd/yyyy'}
        </span>
        <Calendar className="w-4 h-4 text-neutral-300 flex-shrink-0 ml-2" />
      </button>

      {isOpen &&
        typeof document !== 'undefined' &&
        createPortal(
          <>
            <div
              className="fixed inset-0 z-[1199] bg-black/50 sm:bg-transparent"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />
            {calendarContent}
          </>,
          document.body
        )}
    </div>
  );
};
