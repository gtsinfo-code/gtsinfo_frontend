import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollProgress from '../motion/ScrollProgress';
import ScrollToTopAndHash from '../common/ScrollToTopAndHash';

export interface PublicSiteLayoutProps {
  children: ReactNode;
}

export default function PublicSiteLayout({ children }: PublicSiteLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-brandText-primary font-sans antialiased selection:bg-primary selection:text-white">
      {/* Route & Hash Scroll Position Manager */}
      <ScrollToTopAndHash />

      {/* Viewport Top Reading Progress Indicator */}
      <ScrollProgress />
      
      {/* Global Navigation Bar */}
      <Navbar />

      {/* Main Content View */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Global Corporate Footer */}
      <Footer />
    </div>
  );
}
