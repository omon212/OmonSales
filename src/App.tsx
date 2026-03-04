/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemsSolutions } from './components/ProblemsSolutions';
import { Fleet } from './components/Fleet';
import { TargetAudience } from './components/TargetAudience';
import { RegistrationForm } from './components/RegistrationForm';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-main-bg text-primary-text font-sans selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <ProblemsSolutions />
        <Fleet />
        <TargetAudience />
        <RegistrationForm />
      </main>
      <Footer />
    </div>
  );
}
