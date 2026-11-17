import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Home, ArrowLeft } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center py-28 px-4 text-center bg-white">
      <div className="max-w-md space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-softblue-100 text-primary flex items-center justify-center mx-auto shadow-subtle border border-softblue-200">
          <Compass className="w-8 h-8" />
        </div>
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-primary">Error 404</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-brandText-primary mt-2">
            Page Not Found
          </h1>
          <p className="text-xs sm:text-sm text-brandText-secondary leading-relaxed mt-2">
            The requested corporate page could not be located. Please verify the URL or return to the GTSInfo homepage.
          </p>
        </div>
        <div className="pt-2">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary hover:bg-primary-hover text-white text-xs font-bold uppercase tracking-wider transition-all shadow-sm hover:shadow-glow"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
