'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">B</span>
          </div>
          <span className="text-xl font-bold text-foreground">BetterTrails</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#solution" className="text-muted-foreground hover:text-primary transition-colors">
            Solution
          </a>
          <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">
            Features
          </a>
          <a href="#security" className="text-muted-foreground hover:text-primary transition-colors">
            Security
          </a>
          <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
            Contact
          </a>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" size="sm">
            Learn More
          </Button>
          <Button size="sm">Book a Demo</Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            <a href="#solution" className="block text-muted-foreground hover:text-primary transition-colors">
              Solution
            </a>
            <a href="#features" className="block text-muted-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#security" className="block text-muted-foreground hover:text-primary transition-colors">
              Security
            </a>
            <a href="#contact" className="block text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
            <div className="flex flex-col space-y-2 pt-4">
              <Button variant="outline" size="sm">
                Learn More
              </Button>
              <Button size="sm">Book a Demo</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
