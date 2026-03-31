"use client";

/**
 * Small “i” icon that shows a tooltip on hover/focus (for quick tips next to controls).
 */
export default function InfoTip({ text }: { text: string }) {
  return (
    <span className="group relative inline-flex shrink-0 align-middle">
      <button
        type="button"
        className="inline-flex h-7 w-7 cursor-help items-center justify-center rounded-full border border-zinc-300 bg-white text-xs font-semibold text-zinc-600 shadow-sm transition hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
        aria-label={text}
      >
        i
      </button>
      <span
        role="tooltip"
        className="pointer-events-none absolute right-0 top-full z-[60] mt-2 hidden w-64 max-w-[min(16rem,calc(100vw-2rem))] rounded-lg border border-zinc-200 bg-white px-3 py-2 text-left text-xs leading-snug text-zinc-700 shadow-lg group-hover:block group-focus-within:block dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200"
      >
        {text}
      </span>
    </span>
  );
}
