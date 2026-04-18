"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ToastProps {
  visible: boolean;
  message: string;
  onDismiss: () => void;
}

export default function Toast({ visible, message, onDismiss }: ToastProps) {
  useEffect(() => {
    if (!visible) return;
    const id = setTimeout(onDismiss, 4000);
    return () => clearTimeout(id);
  }, [visible, onDismiss]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          role="alert"
          aria-live="assertive"
          className="fixed bottom-36 left-4 right-4 z-[60] bg-error text-cream-50 rounded-lg px-4 py-3 font-sans text-sm leading-[1.5]"
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
