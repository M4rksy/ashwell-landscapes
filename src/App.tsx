/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBadges } from './components/TrustBadges';
import { BeforeAfter } from './components/BeforeAfter';
import { Reviews } from './components/Reviews';
import { Footer } from './components/Footer';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { ContactCTA } from './components/ContactCTA';

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-[#2D5A27] selection:text-white antialiased">
      <Header />
      <main>
        <Hero />
        <TrustBadges />
        <Services />
        <BeforeAfter />
        <Process />
        <Reviews />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
