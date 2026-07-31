import { bookingUrl } from "../site-data";

export function CalendarWidget() {
  return (
    <div className="calendar-shell">
      <a className="button button-orange" href={bookingUrl} target="_blank" rel="noreferrer">
        Schedule
      </a>
    </div>
  );
}
