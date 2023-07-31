export const headingLayerAnimationId = 'lp_contribute_heading_eluid' as const;
export const topParagraphLayerAnimationId = 'lp_contribute_lead_text_eluid' as const;
export const boldParagraphLayerAnimationId = 'lp_contribute_bold_text_eluid' as const;
export const lowerParagraphLayerAnimationId = 'lp_contribute_trail_text_eluid' as const;

export function headingOnEnter (
  entries: IntersectionObserverEntryInit[],
  observer: IntersectionObserver
): void {
  const isolatedEl = entries.length ? entries[0] : null;
  if (isolatedEl) {
    const { isIntersecting } = isolatedEl;
    if (isIntersecting) {
      /** add entry animations here */
      isolatedEl.target.classList.add('fade-in-left', 'delay-0');
    }
  }
}

export function topParagraphOnEnter (
  entries: IntersectionObserverEntryInit[],
  observer: IntersectionObserver
): void {
  const isolatedEl = entries.length ? entries[0] : null;
  if (isolatedEl) {
    const { isIntersecting } = isolatedEl;
    if (isIntersecting) {
      /** add entry animations here */
      isolatedEl.target.classList.add('fade-in-left', 'delay-1');
    }
  }
}

export function boldParagraphOnEnter (
  entries: IntersectionObserverEntryInit[],
  observer: IntersectionObserver
): void {
  const isolatedEl = entries.length ? entries[0] : null;
  if (isolatedEl) {
    const { isIntersecting } = isolatedEl;
    if (isIntersecting) {
      /** add entry animations here */
      isolatedEl.target.classList.add('fade-in-left', 'delay-2');
    }
  }
}

export function trailParagraphOnEnter (
  entries: IntersectionObserverEntryInit[],
  observer: IntersectionObserver
): void {
  const isolatedEl = entries.length ? entries[0] : null;
  if (isolatedEl) {
    const { isIntersecting } = isolatedEl;
    if (isIntersecting) {
      /** add entry animations here */
      isolatedEl.target.classList.add('fade-in-left', 'delay-3');
    }
  }
}
