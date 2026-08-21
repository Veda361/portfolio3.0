'use client';

import React, { useState, useEffect, useRef } from 'react';
import { NAV_ITEMS } from '@/lib/constants';
import { profileData } from '@/data/profile';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { lockBodyScroll } from '@/lib/scroll-lock';
import { MagneticButton } from '@/components/ui/MagneticButton';
import gsap from 'gsap';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  
  const lastScrollY = useRef(0);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  // 1. Scroll-Aware Hide/Show & Scrolled Background
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (currentScrollY > lastScrollY.current && currentScrollY > 120) {
        setVisible(false); // Hide nav when scrolling down
      } else {
        setVisible(true);  // Show nav when scrolling up
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. Active Section IntersectionObserver (Scroll Spy)
  useEffect(() => {
    const sectionIds = ['hero', 'about', 'systems', 'projects', 'skills', 'experience', 'contact'];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-20% 0px -50% 0px' }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // 3. Mobile Menu Scroll Locking & Keyboard Accessibility
  useEffect(() => {
    if (mobileMenuOpen) {
      const unlock = lockBodyScroll();

      // Animate mobile drawer entrance
      if (drawerRef.current) {
        gsap.fromTo(
          '.mobile-nav-item',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.4, stagger: 0.08, ease: 'power3.out' }
        );
      }

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setMobileMenuOpen(false);
          menuButtonRef.current?.focus();
        }
      };

      window.addEventListener('keydown', handleKeyDown);

      return () => {
        unlock();
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[40] transition-all duration-500 transform ${
          visible ? 'translate-y-0' : '-translate-y-full'
        } ${
          scrolled
            ? 'bg-[#080808]/90 backdrop-blur-md border-b border-white/10 py-4 shadow-xl'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          
          {/* Brand Name */}
          <MagneticButton strength={8}>
            <a href="#hero" className="flex items-center space-x-2.5 group">
              <span className="w-2 h-2 rounded-full bg-accent group-hover:scale-125 transition-transform duration-300" />
              <span className="font-display font-bold text-sm sm:text-base tracking-widest text-foreground group-hover:text-white transition-colors">
                {profileData.name.toUpperCase()}
              </span>
            </a>
          </MagneticButton>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-7">
            {NAV_ITEMS.map((item) => {
              const targetId = item.href.replace('#', '');
              const isActive = activeSection === targetId;

              return (
                <MagneticButton key={item.label} strength={6}>
                  <a
                    href={item.href}
                    className={`text-xs font-mono tracking-widest transition-all duration-300 flex items-center space-x-1.5 py-1 ${
                      item.label === 'RESUME'
                        ? 'text-foreground border border-white/15 hover:border-accent/50 px-3.5 py-1.5 rounded-full hover:text-accent'
                        : isActive
                        ? 'text-accent font-semibold'
                        : 'text-muted hover:text-foreground'
                    }`}
                  >
                    {isActive && item.label !== 'RESUME' && (
                      <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                    )}
                    <span>{item.label}</span>
                    {item.label === 'RESUME' && <ArrowUpRight className="w-3 h-3 text-accent" />}
                  </a>
                </MagneticButton>
              );
            })}
          </nav>

          {/* Mobile Hamburger Toggle Button */}
          <button
            ref={menuButtonRef}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
            className="md:hidden text-muted hover:text-foreground p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-foreground" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </header>

      {/* Mobile Navigation Full-Screen Overlay Drawer */}
      {mobileMenuOpen && (
        <div
          ref={drawerRef}
          className="fixed inset-0 z-[50] bg-[#080808]/98 backdrop-blur-2xl flex flex-col justify-between p-8 sm:p-12 md:hidden"
        >
          {/* Top Mobile Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-6">
            <span className="font-display font-bold text-base text-foreground tracking-widest">
              {profileData.name.toUpperCase()}
            </span>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                menuButtonRef.current?.focus();
              }}
              aria-label="Close Navigation Menu"
              className="p-2 text-muted hover:text-white rounded-lg focus:outline-none"
            >
              <X className="w-6 h-6 text-foreground" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="space-y-6 my-auto">
            {NAV_ITEMS.map((item, idx) => {
              const targetId = item.href.replace('#', '');
              const isActive = activeSection === targetId;

              return (
                <div key={item.label} className="mobile-nav-item">
                  <a
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block font-display text-2xl sm:text-3xl tracking-wider transition-colors flex items-center justify-between py-2 border-b border-white/5 ${
                      isActive ? 'text-accent font-bold' : 'text-muted hover:text-white'
                    }`}
                  >
                    <span className="flex items-center space-x-3">
                      <span className="font-mono text-xs text-muted/60">0{idx + 1}</span>
                      <span>{item.label}</span>
                    </span>
                    <ArrowUpRight className="w-5 h-5 text-accent/60" />
                  </a>
                </div>
              );
            })}
          </div>

          {/* Drawer Footer */}
          <div className="pt-6 border-t border-white/10 text-xs font-mono text-muted flex items-center justify-between">
            <span>DEV SAHU // CREATIVE DEVELOPER</span>
            <span className="text-accent">ONLINE</span>
          </div>
        </div>
      )}
    </>
  );
};
