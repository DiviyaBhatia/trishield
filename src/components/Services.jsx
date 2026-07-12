"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

const Services = () => {
  const headingRef = useRef(null);
  const stackRef = useRef(null);
  const precedingRef = useRef(null);
  const lastCardRef = useRef(null);
  const cardRefs = useRef([]);
  const [headingHeight, setHeadingHeight] = useState(220);
  const [lastCardHeight, setLastCardHeight] = useState(416);
  // Natural (un-stuck) distance from the top of the card stack to where the last
  // card's own row begins — i.e. the combined height of cards 1-5 plus their gaps.
  const [precedingHeight, setPrecedingHeight] = useState(null);
  const [revealed, setRevealed] = useState(() => new Set());

  useLayoutEffect(() => {
    const update = () => {
      if (headingRef.current) setHeadingHeight(headingRef.current.offsetHeight);
      if (lastCardRef.current) setLastCardHeight(lastCardRef.current.offsetHeight);
      if (stackRef.current && precedingRef.current) {
        const containerTop = stackRef.current.getBoundingClientRect().top;
        const rowTop = precedingRef.current.getBoundingClientRect().top;
        setPrecedingHeight(rowTop - containerTop);
      }
    };
    update();
    const observer = new ResizeObserver(update);
    if (headingRef.current) observer.observe(headingRef.current);
    if (lastCardRef.current) observer.observe(lastCardRef.current);
    window.addEventListener("resize", update);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  // All cards share the same pinned position (see cardStyle.top below), so a later
  // card fully covers the one before it the moment it locks in place — no extra JS
  // needed to cap how many are visible. What position:sticky can't give us on its own
  // is an eased arrival: sticky clamps instantly once a card reaches its offset, which
  // reads as a snap. This fades + rises the first card into place the first time it
  // enters the viewport, so its settle feels eased instead of abrupt — only card 1 gets
  // this treatment; the rest render fully visible immediately.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = Number(entry.target.dataset.cardIndex);
          setRevealed((prev) => (prev.has(index) ? prev : new Set(prev).add(index)));
          observer.unobserve(entry.target);
        });
      },
      // Shrinks the effective viewport to its top ~75%, so a card only counts as
      // "arrived" once it's nearing its pinned position (well within view) — not the
      // instant its bottom edge peeks in from below, which would finish the fade long
      // before it locks in. Cards clamp well below the very top, so this can't be
      // shrunk too aggressively or the zone excludes the clamp point entirely.
      { rootMargin: "0px 0px -25% 0px" }
    );
    if (cardRefs.current[0]) observer.observe(cardRefs.current[0]);
    return () => observer.disconnect();
  }, []);

  const HEADING_TOP = 100;
  const CARD_GAP = 24;
  const LAST_CARD_ROW_HEIGHT = 500;
  // Extra scroll distance after the heading settles at the top before card 1 starts
  // arriving — without this, the card stack's natural position lines up exactly with
  // the heading's, so card 1 engages at the same moment (or earlier) instead of after.
  const CARD_START_DELAY = 150;
  const firstCardTop = HEADING_TOP + headingHeight + CARD_GAP;
  // Natural distance from the heading's own baseline to where the card stack begins.
  const cardsBaselineOffset = headingHeight + CARD_GAP + CARD_START_DELAY;

  const servicesData = [
    {
      title: "Managed Services",
      desc: "Our Managed Services practice takes on the day-to-day operational burden of your IT environment. We combine skilled engineers with purpose-built tooling to deliver consistent, measurable outcomes - reducing downtime, lowering costs, and improving service quality.",
      highlights: ["Unified Endpoint Management (UEM)", "Managed NOC", "Network Security Management", "Virtual Infrastructure", "System Administration", "Multi-Cloud Management"],
      colorClass: {
        bg: "bg-[#F3F3F1]"
      },
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2 2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      title: "Professional Services",
      desc: "Our Professional Services team delivers hands-on expertise for your infrastructure projects - whether on-site or remote. From new technology deployments to ongoing support, we bring the skills and experience to get the job done right, on time, and to specification.",
      highlights: ["Data Centre Support", "Wifi Installations", "Hardware Refresh", "Remote Support"],
      colorClass: {
        bg: "bg-[#EAEAEA]"
      },
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Value Added Reseller Services",
      desc: "As a trusted technology reseller, we go beyond simply supplying equipment. We combine deep vendor relationships, procurement expertise, and lifecycle knowledge to ensure you get the right technology at the right price - with professional support at every stage.",
      highlights: ["Data Centre Hardware", "Enterprise Infrastructure", "EOL / EOS Hardware"],
      colorClass: {
        bg: "bg-[#F3F3F1]"
      },
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Staff Augmentation",
      desc: "When you need specialised skills quickly - without the overhead of permanent hiring - our Staff Augmentation service delivers vetted, experienced professionals who integrate seamlessly into your team. We provide flexible engagements that scale with your project demands.",
      highlights: ["Network & Systems Specialists", "Cybersecurity Specialists", "DevOps Engineers"],
      colorClass: {
        bg: "bg-[#EAEAEA]"
      },
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
        </svg>
      )
    },
    {
      title: "Managed Security Services",
      desc: "Cyber threats are growing in scale and sophistication. Our Security Services provide the people, processes, and technology to protect your organisation - from real-time threat detection and response through to privileged access governance and vulnerability management.",
      highlights: ["Managed SOC", "Vulnerability Management", "PIM / PAM"],
      colorClass: {
        bg: "bg-[#F3F3F1]"
      },
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "DevOps Services",
      desc: "Our DevOps Services practice helps organisations modernise their operations through automation, AI-powered tooling, and cloud-native design. We build solutions that reduce manual effort, accelerate delivery cycles, and give you the insight to make smarter technology decisions.",
      highlights: ["AI-Driven IT Operations", "AIOps & Automation", "Predictive Analytics", "Intelligent Monitoring"],
      colorClass: {
        bg: "bg-[#EAEAEA]"
      },
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    }
  ];

  // Every card shares this same pinned top — see cardStyle below. Kept for the
  // release-height formula, which still needs a concrete last-card offset.
  const lastCardTop = firstCardTop;
  // Solve for the placeholder height that makes the heading's own sticky dwell
  // (releaseHeight - headingHeight) end at the same scroll position where the last
  // card's own dwell (LAST_CARD_ROW_HEIGHT - lastCardTop - lastCardHeight) ends,
  // given the card stack's baseline now starts `cardsBaselineOffset` (not zero) below
  // the heading's own baseline — see the placeholder/stack markup below for the
  // containing-block mechanics this is compensating for.
  const releaseHeight =
    precedingHeight != null
      ? cardsBaselineOffset + precedingHeight + LAST_CARD_ROW_HEIGHT - lastCardTop - lastCardHeight + HEADING_TOP + headingHeight
      : null;

  return (
    <div className="bg-white text-black w-full py-20 px-8">
      <div className="max-w-7xl mx-auto">
        {/*
          The heading placeholder is sized to `releaseHeight` (computed above) instead
          of its natural content height, and the card stack right after it is pulled up
          by the same amount via negative margin. Net effect: the heading's own sticky
          containing block ends right where the last card settles, instead of inheriting
          the cards' much taller shared containing block — so it releases promptly
          instead of staying pinned through the last card's entire trailing dwell. The
          negative margin means the placeholder adds no extra page height, so nothing
          below shifts.
        */}
        <div style={{ height: releaseHeight ?? undefined }}>
          <div
            ref={headingRef}
            className="sticky z-20 bg-white w-full text-center pb-8"
            style={{ top: `${HEADING_TOP}px` }}
          >
            <div className="mb-6">
              <p className="inline-block px-4 py-2 border border-[#1d77ba]/30 rounded-full text-sm font-bold text-[#1d77ba] uppercase tracking-wide bg-transparent font-poppins">
                WHAT WE DO
              </p>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mt-4 font-poppins tracking-tight max-w-4xl mx-auto text-center text-gray-900">
              Explore Our Comprehensive Range of{' '}
              <span className="text-[#1d77ba] font-normal">Innovative Services</span>{' '}
              Tailored for You
            </h2>
          </div>
        </div>

        {/* Sticky Card Relay: each card pins at the same spot as the last, so the
            newest one simply replaces the previous rather than the stack marching
            down the page. */}
        <div
          ref={stackRef}
          className="relative w-full flex flex-col gap-12"
          style={{
            marginTop: releaseHeight != null ? `-${releaseHeight - cardsBaselineOffset}px` : undefined,
          }}
        >
          {servicesData.map((service, index) => {
            const isLast = index === servicesData.length - 1;
            const isFirst = index === 0;
            const isRevealed = revealed.has(index);
            // Only the first card gets the fade + rise entrance; the rest render fully
            // visible immediately (they're covered by later cards long before a repeat
            // entrance would ever be noticed anyway).
            const revealClassName = isFirst
              ? `transition-all duration-700 ease-out ${isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`
              : "opacity-100 translate-y-0";
            const cardClassName = `sticky w-full rounded-3xl p-6 md:p-8 shadow-[0_-12px_30px_-5px_rgba(0,0,0,0.06),0_15px_15px_-5px_rgba(0,0,0,0.02)] border border-gray-200/50 flex flex-col md:flex-row gap-6 items-start md:items-center overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden ${revealClassName} ${service.colorClass.bg}`;
            const cardStyle = {
              // Every card pins at the same spot — the newest one fully covers the
              // previous the moment it locks in, instead of each settling lower down.
              top: `${firstCardTop}px`,
              // Explicit ascending stack order so each later card always paints over
              // the one before it, rather than relying on implicit DOM-order fallback
              // for z-index: auto.
              zIndex: index + 1,
              // Caps the card to whatever space is actually left below the pinned
              // heading, so its bottom edge can never run past the viewport — a fixed
              // 400px (the old min-height) was taller than that leftover space on
              // plenty of real screens. Floors at 220px so it never collapses to
              // nothing on very short viewports. Content spacing above is trimmed to
              // actually fit that range in the common case; overflow-y-auto (scrollbar
              // hidden cosmetically, still scrollable) is only the fallback for
              // genuinely tight viewports where it still doesn't.
              height: `clamp(220px, calc(100vh - ${firstCardTop}px - 24px), 400px)`,
            };
            const setCardRef = (el) => {
              cardRefs.current[index] = el;
              if (isLast) lastCardRef.current = el;
            };
            const cardContent = (
              <>
                {/* Left Column: Huge Number */}
                <div className="md:col-span-4 text-left md:w-1/3 flex-shrink-0">
                  <span className="text-[120px] md:text-[160px] font-extrabold text-gray-900/10 leading-none font-poppins select-none">
                    {index + 1}
                  </span>
                </div>

                {/* Right Column: Content */}
                <div className="flex-1 text-left flex flex-col justify-center">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 bg-white shadow-sm text-[#1d77ba]">
                    {service.icon}
                  </div>
                  <h3 className="text-xl md:text-3xl font-bold text-gray-900 mb-2 font-poppins leading-tight tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
                    {service.desc}
                  </p>

                  {/* Sub-services highlights */}
                  <div className="border-t border-gray-300/30 pt-3 mt-1">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 font-poppins">Key Solutions</p>
                    <div className="flex flex-wrap gap-2">
                      {service.highlights.map((h, i) => (
                        <span key={i} className="text-xs bg-white border border-gray-200 text-gray-700 px-3 py-1.5 rounded-lg shadow-sm font-medium">
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            );

            // Only the last card gets wrapped in a taller row, giving its sticky child
            // just enough room to hold its offset for a moment before detaching — kept
            // short so the pinned heading above releases right as the last card
            // arrives, not after a long trailing hold. Non-last cards stay direct flex
            // children (unwrapped) — wrapping them here would collapse to the card's
            // own height with zero slack and silently disable their sticky behavior.
            if (isLast) {
              return (
                <div key={index} className="relative" style={{ minHeight: LAST_CARD_ROW_HEIGHT }}>
                  {/* Marks where the last card's row begins — measured to size the
                      heading's independent release point (see releaseHeight above). */}
                  <div ref={precedingRef} />
                  <div ref={setCardRef} data-card-index={index} className={cardClassName} style={cardStyle}>
                    {cardContent}
                  </div>
                </div>
              );
            }

            return (
              <div key={index} ref={setCardRef} data-card-index={index} className={cardClassName} style={cardStyle}>
                {cardContent}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
