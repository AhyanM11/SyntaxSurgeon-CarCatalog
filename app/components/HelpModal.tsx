"use client";

export default function HelpModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/50 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="help-title"
      onClick={onClose}
    >
      <div
        className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-zinc-200 bg-white shadow-2xl dark:border-zinc-800 dark:bg-zinc-900"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 flex items-center justify-between border-b border-zinc-200 bg-white px-5 py-4 dark:border-zinc-800 dark:bg-zinc-900">
          <h2 id="help-title" className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">
            How to use this app
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-zinc-200 px-3 py-1.5 text-sm font-medium text-zinc-800 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800"
          >
            Close
          </button>
        </div>

        <div className="space-y-5 px-5 py-4 text-sm text-zinc-700 dark:text-zinc-300">
          <section>
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">Browse &amp; search</h3>
            <p className="mt-1">
              Use the search box to filter by make, model, year, body type, or deal rating. Use the sidebar filters to narrow
              by make, year, body, transmission, condition, color, and more.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">Sort</h3>
            <p className="mt-1">
              Choose <strong>Sort</strong> (price, mileage, year, newest) and use the arrow button to flip ascending or
              descending.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">Listing details</h3>
            <p className="mt-1">
              Click any car card to open the details window. There you can see full specs, price, and odometer. Use{" "}
              <strong>Save Listing</strong> to bookmark it for later (stored in this browser).
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">Saved listings</h3>
            <p className="mt-1">
              Open <strong>Saved Listings</strong> in the top bar to see cars you saved. Use <strong>Remove</strong> on a card
              to unsave. Saved data stays on this device until you clear site data.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">Add a listing</h3>
            <p className="mt-1">
              Click <strong>Add New Listing</strong>, fill in the form (VIN is required), add a photo if you like, and submit.
              Your new listing appears in the catalog. You must be logged in to create listings on the server.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">Profile</h3>
            <p className="mt-1">
              Click your initials to open profile options and sign out.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">Tips</h3>
            <ul className="mt-1 list-disc space-y-1 pl-5">
              <li>Hover the small <strong>i</strong> icons next to buttons for a one-line hint.</li>
              <li>Click outside a modal or use <strong>Close</strong> to dismiss it.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
