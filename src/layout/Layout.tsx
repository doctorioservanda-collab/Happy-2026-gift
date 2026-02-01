import React from 'react';
import { Header } from '../component/Header';
import { Footer } from '../component/Footer';
import { Fireworks } from '@/component/Fireworks';
import { Snowfall } from '@/component/Snowfall';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Fireworks />
      <Snowfall />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};