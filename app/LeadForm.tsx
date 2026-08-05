"use client";

import { useEffect, useRef, useState } from "react";

const EMBED_URL =
  "https://tally.so/embed/9qYOkG?hideTitle=1&source=website&campaign=main-site";

type LeadFormTriggerProps = {
  className?: string;
  label?: string;
};

export default function LeadFormTrigger({
  className = "button button-light",
  label = "Start the conversation",
}: LeadFormTriggerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const trigger = triggerRef.current;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      trigger?.focus();
    };
  }, [isOpen]);

  return (
    <>
      <button
        className={className}
        onClick={() => setIsOpen(true)}
        ref={triggerRef}
        type="button"
      >
        {label} <span aria-hidden="true">↗</span>
      </button>

      {isOpen && (
        <div
          aria-label="Start the Engines lead form"
          aria-modal="true"
          className="lead-form-modal"
          role="dialog"
        >
          <button
            aria-label="Close form"
            className="lead-form-close"
            onClick={() => setIsOpen(false)}
            ref={closeRef}
            type="button"
          >
            <span aria-hidden="true">×</span>
          </button>
          <iframe
            allow="clipboard-write"
            className="lead-form-frame"
            src={EMBED_URL}
            title="Start the Engines — Agents of Business"
          />
        </div>
      )}
    </>
  );
}
