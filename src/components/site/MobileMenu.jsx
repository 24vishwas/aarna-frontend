import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, Mail, MessageCircle } from "lucide-react";
import { company, nav } from "@/content/site";
import { handleHashLink } from "@/lib/navigation";

export default function MobileMenu({ open, onClose }) {
  const navigate = useNavigate();

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[70] flex flex-col bg-charcoal text-ivory lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center justify-between px-6 py-6">
            <span className="display text-[22px] tracking-[0.34em]">{company.wordmark}</span>
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="p-2 text-ivory/80 transition-colors hover:text-bronze"
            >
              <X className="h-6 w-6" strokeWidth={1.25} />
            </button>
          </div>

          <nav className="flex flex-1 flex-col justify-center gap-1 px-6">
            {nav.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 + i * 0.05, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  to={item.href}
                  onClick={(e) => {
                    onClose();
                    handleHashLink(e, item.href, navigate);
                  }}
                  className="display block py-2 text-[34px] leading-tight text-ivory transition-colors hover:text-bronze"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="hairline-inverse space-y-3 px-6 py-8 text-sm text-ivory/60">
            <a href={company.phoneHref} className="flex items-center gap-3 hover:text-bronze">
              <Phone className="h-4 w-4" strokeWidth={1.25} /> {company.phone}
            </a>
            <a href={`mailto:${company.email}`} className="flex items-center gap-3 hover:text-bronze">
              <Mail className="h-4 w-4" strokeWidth={1.25} /> {company.email}
            </a>
            <a href={company.whatsapp} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-bronze">
              <MessageCircle className="h-4 w-4" strokeWidth={1.25} /> WhatsApp
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}