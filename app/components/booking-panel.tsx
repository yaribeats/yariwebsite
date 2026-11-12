import Link from "next/link";
import { leasePriceFrom } from "../site-data";
import { BuyLink } from "./buy-link";
import { SvgIcon } from "./svg-icon";

export function BookingPanel({
  headline = "Your next record starts here.",
}: {
  headline?: string;
}) {
  return (
    <section className="booking-panel" aria-label="Buy a beat or work with Yari">
      <p>Leases from ${leasePriceFrom}. Instant download. Custom work by call.</p>
      <h2>{headline}</h2>
      <div className="booking-actions">
        <BuyLink placement="closing_panel" className="button button-buy button-xl">
          Buy beats now <SvgIcon name="arrow-up-right" />
        </BuyLink>
        <Link className="button button-ink" href="/start">
          Book a production call <SvgIcon name="arrow-right" />
        </Link>
      </div>
    </section>
  );
}
