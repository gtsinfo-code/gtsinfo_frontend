'use client';

import React, { useState, useEffect } from 'react';
import { X, ZoomIn, MapPin, Building } from 'lucide-react';
import { COMPANY_AUTHENTIC_IMAGES } from '../../../../data/companyGalleryData';
import ScrollReveal from '../../../../components/motion/ScrollReveal';
import { GalleryItem } from '../../../../types';

export default function WorkplaceGallery() {
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);
  const galleryItems = COMPANY_AUTHENTIC_IMAGES.aboutGallery;

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeImage) return;
      if (e.key === 'Escape') setActiveImage(null);
      if (e.key === 'ArrowRight') {
        const curIdx = galleryItems.findIndex(i => i.id === activeImage.id);
        const nextIdx = (curIdx + 1) % galleryItems.length;
        setActiveImage(galleryItems[nextIdx]);
      }
      if (e.key === 'ArrowLeft') {
        const curIdx = galleryItems.findIndex(i => i.id === activeImage.id);
        const prevIdx = (curIdx - 1 + galleryItems.length) % galleryItems.length;
        setActiveImage(galleryItems[prevIdx]);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImage, galleryItems]);

  return (
    <div className="space-y-8">
      {/* Editorial Responsive Gallery Grid with Proportional Portrait Framing */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
        {galleryItems.map((item, idx) => {
          const itemSrc = item.src?.src || item.src;
          return (
            <ScrollReveal
              key={item.id}
              variant="fade-up"
              delay={idx * 120}
            >
              <div
                className="group relative rounded-3xl overflow-hidden border border-brandBorder shadow-card bg-white cursor-pointer transition-all duration-300 hover:border-primary/60 hover:shadow-card-hover hover:-translate-y-1"
                onClick={() => setActiveImage(item)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setActiveImage(item)}
                aria-label={`View photo of ${item.title}`}
              >
                {/* Natural Portrait Aspect Ratio (3:4) to display full height without cutoffs */}
                <div className="relative overflow-hidden aspect-[3/4] bg-slate-900/5">
                  <img
                    src={itemSrc}
                    alt={item.alt}
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    loading="lazy"
                  />

                  {/* Subtle Hover Inspection Badge */}
                  <div className="absolute inset-0 bg-navy-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 text-white text-center backdrop-blur-[2px]">
                    <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300 space-y-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold text-white border border-white/20 shadow-sm">
                        <ZoomIn className="w-3.5 h-3.5 text-cyan-accent" />
                        <span>View Full Photograph</span>
                      </span>
                      <p className="text-xs font-semibold text-slate-200 line-clamp-1">{item.title}</p>
                    </div>
                  </div>
                </div>

                {/* Caption Strip */}
                <div className="p-4 sm:p-5 bg-white border-t border-brandBorder">
                  <div className="flex items-center justify-between mb-1.5">
                    <h4 className="text-sm font-bold text-brandText-primary line-clamp-1 group-hover:text-primary transition-colors">
                      {item.title}
                    </h4>
                    <span className="text-[10px] font-mono font-semibold uppercase px-2 py-0.5 rounded bg-softblue-100 text-primary">
                      Authentic
                    </span>
                  </div>
                  <p className="text-xs text-brandText-secondary line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>

      {/* Lightbox Modal with Full-Resolution Uncropped View */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-navy-950/95 backdrop-blur-lg flex items-center justify-center p-4 sm:p-6 animate-fade-in"
          onClick={() => setActiveImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Workplace Image Modal"
        >
          <div
            className="relative max-w-4xl w-full bg-navy-900 rounded-3xl overflow-hidden shadow-2xl border border-white/20 animate-slide-up flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-6 py-4 bg-navy-950 text-white flex items-center justify-between border-b border-navy-800 flex-shrink-0">
              <div className="flex items-center gap-2.5">
                <Building className="w-4 h-4 text-cyan-accent" />
                <span className="text-sm font-bold text-white">{activeImage.title}</span>
                <span className="text-xs text-slate-400 hidden sm:inline">• GTS Bengaluru Facility</span>
              </div>
              <button
                onClick={() => setActiveImage(null)}
                className="p-1.5 rounded-lg hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                aria-label="Close image modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image View: 100% Complete Image, Zero Cropping */}
            <div className="relative flex-grow bg-navy-950 flex items-center justify-center p-3 overflow-hidden min-h-[50vh]">
              <img
                src={activeImage.src?.src || activeImage.src}
                alt={activeImage.alt}
                className="max-h-[72vh] w-auto max-w-full object-contain rounded-xl shadow-2xl"
              />
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 bg-navy-900 border-t border-navy-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 flex-shrink-0">
              <p className="text-xs text-slate-300 leading-relaxed">
                {activeImage.description}
              </p>
              <div className="flex items-center gap-2 text-xs font-bold text-cyan-accent flex-shrink-0">
                <MapPin className="w-3.5 h-3.5" />
                <span>Verified Facility Space • Bengaluru</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
