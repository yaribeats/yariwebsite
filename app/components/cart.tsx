"use client";

import { useEffect, useRef, useState } from "react";

type CartItem = {
  id: string;
  title: string;
  buyUrl?: string;
};

export function Cart() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [open, setOpen] = useState(false);
  const [jingle, setJingle] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    queueMicrotask(() => {
      try {
        const raw = localStorage.getItem("yari:cart");
        if (raw) setItems(JSON.parse(raw));
      } catch {
        setItems([]);
      }
    });
  }, []);

  useEffect(() => {
    const handler = (event: Event) => {
      const detail = (event as CustomEvent<CartItem>).detail;
      setItems((current) => {
        if (current.some((item) => item.id === detail.id)) return current;
        const next = [...current, detail];
        try {
          localStorage.setItem("yari:cart", JSON.stringify(next));
        } catch {}
        return next;
      });
      setOpen(true);
      setJingle(true);
      window.setTimeout(() => setJingle(false), 620);
    };

    window.addEventListener("yari:add-to-cart", handler as EventListener);
    return () => {
      window.removeEventListener("yari:add-to-cart", handler as EventListener);
    };
  }, []);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  useEffect(() => {
    if (!open) return;
    const closeOnOutsideClick = (event: MouseEvent) => {
      if (!panelRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", closeOnOutsideClick);
    return () => document.removeEventListener("mousedown", closeOnOutsideClick);
  }, [open]);

  const removeItem = (id: string) => {
    setItems((current) => {
      const next = current.filter((item) => item.id !== id);
      try {
        localStorage.setItem("yari:cart", JSON.stringify(next));
      } catch {}
      return next;
    });
  };

  const clearItems = () => {
    setItems([]);
    try {
      localStorage.removeItem("yari:cart");
    } catch {}
  };

  return (
    <div className={`cart-shell ${open ? "is-open" : ""}`} ref={panelRef}>
      {open ? (
        <section id="beat-cart" className="cart-panel" role="dialog" aria-label="Beat cart">
          <div className="cart-header">
            <div>
              <strong>Your cart</strong>
              <span>{items.length ? `${items.length} beat${items.length === 1 ? "" : "s"}` : "Nothing saved yet"}</span>
            </div>
            <button className="cart-close" type="button" onClick={() => setOpen(false)} aria-label="Close cart">
              ×
            </button>
          </div>
          {items.length ? (
            <>
              <div className="cart-list">
                {items.map((item) => (
                  <div className="cart-item" key={item.id}>
                    <span>{item.title}</span>
                    <div className="cart-item-actions">
                      <a className="cart-checkout-link" href={item.buyUrl ?? "#"} target="_blank" rel="noreferrer">
                        Open
                      </a>
                      <button type="button" onClick={() => removeItem(item.id)} aria-label={`Remove ${item.title}`}>
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <button className="cart-clear" type="button" onClick={clearItems}>Clear saved beats</button>
            </>
          ) : (
            <p className="cart-empty-copy">Save beats here while you listen. When you’re ready, open one to continue to the license page.</p>
          )}
        </section>
      ) : null}
      <button
        className={`cart-toggle ${jingle ? "is-jingling" : ""}`}
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="beat-cart"
        aria-label={`${items.length ? `${items.length} saved beats` : "Open beat cart"}`}
      >
        <span className="cart-icon" aria-hidden="true">♬</span>
        {items.length ? <span className="cart-count">{items.length}</span> : null}
      </button>
    </div>
  );
}
