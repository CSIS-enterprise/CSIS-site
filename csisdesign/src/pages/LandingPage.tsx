import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { B2BSolutions } from '../components/B2BSolutions';
import { B2CTalents } from '../components/B2CTalents';
import { SocialProof } from '../components/SocialProof';
import { ESGSection } from '../components/ESGSection';
import { ContactSection } from '../components/ContactSection';

export function LandingPage() {
  return (
    <main>
      <HeroSection />
      <B2BSolutions />
      <B2CTalents />
      <SocialProof />
      <ESGSection />
      <ContactSection />
    </main>
  );
}
