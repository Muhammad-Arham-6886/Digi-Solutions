'use client';

import React from 'react';
import { MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhatsAppButton() {
  const whatsappNumber = '18005550199'; // Placeholder enterprise number
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    'Hello Vertical Forge team, I would like to inquire about specialized digital solutions for my business.'
  )}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-30 p-2.5 sm:p-3 bg-emerald-500 text-white rounded-full shadow-lg hover:bg-emerald-600 transition-colors border border-emerald-400/40 flex items-center justify-center group"
      title="Chat with VOX Digital on WhatsApp"
    >
      <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 whitespace-nowrap text-xs font-semibold">
        WhatsApp Live Chat
      </span>
    </motion.a>
  );
}
