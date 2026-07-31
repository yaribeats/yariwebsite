import { bookingUrl } from "../site-data";
import { SvgIcon } from "./svg-icon";

export function BookingPanel({
  headline = "Your next record starts with a conversation.",
}: {
  headline?: string;
}) {
  return (
    <section className="booking-panel">
      <p>Production, direction, and a real point of view.</p>
      <h2>{headline}</h2>
      <a
        className="button button-orange"
        href={bookingUrl}
        target="_blank"
        rel="noreferrer"
      >
        Book the production call
        <SvgIcon name="arrow-up-right" />
      </a>
    </section>
  );
}
