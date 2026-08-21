/**
 * Body Scroll Locking Helper
 * Prevents page background scrolling when mobile navigation drawer or modal is open.
 * Prevents layout shift by compensating for scrollbar width.
 */

let lockCount = 0;
let originalStyle: { overflow: string; paddingRight: string } = {
  overflow: '',
  paddingRight: '',
};

export const lockBodyScroll = (): (() => void) => {
  if (typeof window === 'undefined') return () => {};

  if (lockCount === 0) {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    originalStyle = {
      overflow: document.body.style.overflow,
      paddingRight: document.body.style.paddingRight,
    };

    document.body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }
  }

  lockCount++;

  return () => {
    lockCount = Math.max(0, lockCount - 1);
    if (lockCount === 0) {
      document.body.style.overflow = originalStyle.overflow;
      document.body.style.paddingRight = originalStyle.paddingRight;
    }
  };
};
