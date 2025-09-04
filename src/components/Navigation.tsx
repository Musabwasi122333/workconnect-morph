import React, { useState, useEffect } from 'react';
import { Menu, X, Search, ChevronDown, Zap, Users, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isExploreOpen, setIsExploreOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = [
    { name: 'Design & Creative', icon: Zap, count: '15k+' },
    { name: 'Development & IT', icon: Briefcase, count: '12k+' },
    { name: 'Marketing & Sales', icon: Users, count: '8k+' },
    { name: 'Writing & Translation', icon: Zap, count: '6k+' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'py-2' : 'py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`neuro-surface glass-surface rounded-2xl px-6 py-3 transition-all duration-500 ${
          isScrolled ? 'shadow-neuro-soft' : 'shadow-neuro'
        }`}>
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="neuro-surface-soft w-10 h-10 rounded-xl flex items-center justify-center">
                <div className="w-6 h-6 bg-gradient-primary rounded-lg"></div>
              </div>
              <div className="hidden sm:block">
                <span className="text-xl font-bold gradient-text">WorkConnect</span>
              </div>
              <div className="block sm:hidden">
                <span className="text-xl font-bold gradient-text">WC</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <div className="relative">
                <button
                  onClick={() => setIsExploreOpen(!isExploreOpen)}
                  className="flex items-center space-x-2 px-4 py-2 rounded-xl hover:bg-surface-elevated transition-colors"
                >
                  <span className="font-medium">Explore</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isExploreOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Explore Dropdown */}
                {isExploreOpen && (
                  <div className="absolute top-full left-0 mt-2 w-96 neuro-surface rounded-2xl p-6 z-50">
                    <div className="grid grid-cols-2 gap-4">
                      {categories.map((category, index) => (
                        <div
                          key={index}
                          className="neuro-surface-soft p-4 rounded-xl hover-lift cursor-pointer group"
                        >
                          <div className="flex items-start space-x-3">
                            <div className="neuro-surface-soft p-2 rounded-lg group-hover:shadow-neuro-pressed transition-all">
                              <category.icon className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                              <h3 className="font-medium text-sm">{category.name}</h3>
                              <p className="text-xs text-muted-foreground">{category.count} services</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-border">
                      <button className="w-full neuro-button text-primary font-medium rounded-xl">
                        View All Categories
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex items-center space-x-2 neuro-surface-soft rounded-xl px-4 py-2">
                <Search className="w-4 h-4 text-muted-foreground" />
                <input 
                  type="text" 
                  placeholder="Search services..." 
                  className="bg-transparent border-none outline-none placeholder-muted-foreground"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button variant="ghost" className="neuro-button">
                Join
              </Button>
              <Button variant="ghost" className="neuro-button">
                Sign In
              </Button>
              <Button className="neuro-button bg-gradient-primary text-white hover:shadow-neuro-pressed">
                Become a Seller
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden neuro-button p-2 rounded-xl"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 neuro-surface rounded-2xl p-6">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-2 neuro-surface-soft rounded-xl px-4 py-3">
                <Search className="w-4 h-4 text-muted-foreground" />
                <input 
                  type="text" 
                  placeholder="Search services..." 
                  className="flex-1 bg-transparent border-none outline-none placeholder-muted-foreground"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {categories.map((category, index) => (
                  <div key={index} className="neuro-surface-soft p-3 rounded-xl text-center">
                    <category.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                    <p className="text-xs font-medium">{category.name}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col space-y-3 pt-4 border-t border-border">
                <Button className="neuro-button w-full">Join</Button>
                <Button className="neuro-button w-full">Sign In</Button>
                <Button className="neuro-button w-full bg-gradient-primary text-white">
                  Become a Seller
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;