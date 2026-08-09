'use client';

import { useEffect } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';

type Photo = {
  id: string;
  src: string;
  width: number;
  height: number;
  alt?: string;
};

type LightboxProps = {
  photo: Photo;
  onClose: () => void;
};

export function Lightbox({ photo, onClose }: LightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-neutral-950/90 backdrop-blur-md"
    >
      {/* Click backdrop to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-20 text-white/80 hover:text-white text-3xl font-light p-2 transition-colors cursor-pointer"
        aria-label="Close preview"
      >
        ✕
      </button>

      {/* Expanded Image Container (REMOVED layoutId) */}
      <div className="relative z-10 max-w-5xl max-h-[85vh] w-full h-full flex items-center justify-center overflow-hidden pointer-events-none">
        <Image
          src={photo.src}
          alt={photo.alt || 'Expanded view'}
          width={photo.width}
          height={photo.height}
          priority
          sizes="100vw"
          className="object-contain max-h-[85vh] w-auto h-auto pointer-events-auto"
        />
      </div>
    </motion.div>
  );
}
