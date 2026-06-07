// ============================================================
//  Tools Section — script.js additions
//  Append this block to the BOTTOM of your existing script.js
// ============================================================

// ── Register tool cards with the Intersection Observer ──────
// The existing observer already handles .section-title and
// .section-subtitle. We just need to add .tool-card to it.
// Because the observer is already defined above, we call
// observe() directly on each new card.

document.querySelectorAll('.tool-card').forEach((card, index) => {
    // Stagger each card's entrance by 120ms
    card.style.transitionDelay = `${index * 0.12}s`;
    observer.observe(card);
});

// ── Also register the tools section titles ───────────────────
document.querySelectorAll('.tools-section .section-title, .tools-section .section-subtitle').forEach(el => {
    observer.observe(el);
});

// ── Nav active state: include #tools section ─────────────────
// The existing scroll listener already handles sections with
// an [id] attribute, so #tools is picked up automatically.
// No additional code needed for nav highlighting.

// ── Console branding update ──────────────────────────────────
console.log('%cModvWorks Tools', 'color: #00ff88; font-size: 16px; font-weight: bold;');
console.log('%cEmbedded Control Systems Laboratory v4.0', 'color: #00d4ff; font-size: 12px;');
