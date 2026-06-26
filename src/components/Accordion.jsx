import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Accordion({ items, defaultOpen = -1, showPreview = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="divide-y divide-black/5 overflow-hidden rounded-2xl bg-white ring-1 ring-black/5">
      {items.map((item, i) => {
        const isOpen = open === i;
        const previewText = item.preview || item.a;
        const hasBody = !showPreview || Boolean(item.a);
        return (
          <div key={i}>
            <button
              type="button"
              onClick={() => hasBody && setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="flex min-w-0 flex-1 items-center gap-2">
                <span className="shrink-0 font-semibold text-ink">{item.q}</span>
                {showPreview && (
                  <span className="min-w-0 flex-1 truncate text-sm text-ink/65">
                    {previewText}
                  </span>
                )}
              </span>
              {hasBody && (
                <ChevronDown
                  size={20}
                  className={`shrink-0 text-brand transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                />
              )}
            </button>

            <AnimatePresence initial={false}>
              {isOpen && hasBody && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 text-ink/70">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
