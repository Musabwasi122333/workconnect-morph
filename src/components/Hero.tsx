import React from 'react';
import { ArrowRight, Play, Star, Users, Briefcase, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const stats = [
    { label: 'Active Freelancers', value: '50K+', icon: Users },
    { label: 'Projects Completed', value: '120K+', icon: Briefcase },
    { label: 'Success Rate', value: '98%', icon: Star },
  ];

  const floatingElements = [
    { icon: Zap, delay: '0s', position: 'top-20 right-20' },
    { icon: Star, delay: '2s', position: 'top-40 right-40' },
    { icon: Briefcase, delay: '4s', position: 'bottom-20 right-20' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingElements.map((element, index) => (
          <div
            key={index}
            className={`absolute ${element.position} neuro-surface-soft w-16 h-16 rounded-2xl flex items-center justify-center floating-element opacity-20`}
            style={{ animationDelay: element.delay }}
          >
            <element.icon className="w-8 h-8 text-primary" />
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="neuro-surface-soft inline-flex items-center px-4 py-2 rounded-full">
                <Zap className="w-4 h-4 text-primary mr-2" />
                <span className="text-sm font-medium text-primary">
                  #1 Freelance Platform
                </span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Find the Perfect
                <span className="block gradient-text">
                  Freelancer
                </span>
                for Your Project
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Connect with top-tier professionals who bring your ideas to life. 
                From design to development, find experts in every field.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="neuro-button bg-gradient-primary text-white text-lg px-8 py-4 rounded-2xl group">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="ghost" className="neuro-button text-lg px-8 py-4 rounded-2xl group">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="neuro-surface-soft p-4 rounded-2xl text-center hover-lift">
                  <div className="neuro-surface-soft w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Visual Element */}
          <div className="relative">
            <div className="neuro-surface p-8 rounded-3xl">
              
              {/* Main Illustration Placeholder */}
              <div className="aspect-square bg-gradient-primary rounded-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20">
                  {/* Floating Cards */}
                  <div className="absolute top-6 left-6 neuro-surface-soft w-32 h-20 rounded-xl p-3 floating-element">
                    <div className="w-full h-2 bg-primary/30 rounded mb-2"></div>
                    <div className="w-3/4 h-2 bg-accent/30 rounded mb-1"></div>
                    <div className="w-1/2 h-2 bg-muted/30 rounded"></div>
                  </div>
                  
                  <div className="absolute bottom-6 right-6 neuro-surface-soft w-28 h-28 rounded-2xl p-4 floating-element" style={{ animationDelay: '2s' }}>
                    <div className="w-full h-full bg-accent/20 rounded-xl flex items-center justify-center">
                      <Star className="w-8 h-8 text-accent" />
                    </div>
                  </div>
                  
                  <div className="absolute top-1/2 right-8 neuro-surface-soft w-16 h-16 rounded-full floating-element" style={{ animationDelay: '4s' }}>
                    <div className="w-full h-full bg-primary/20 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Cards */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="neuro-surface-soft p-4 rounded-xl">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-8 h-8 bg-success/20 rounded-lg"></div>
                    <span className="text-sm font-medium">UI/UX Design</span>
                  </div>
                  <div className="text-xs text-muted-foreground">250+ experts</div>
                </div>
                
                <div className="neuro-surface-soft p-4 rounded-xl">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-8 h-8 bg-warning/20 rounded-lg"></div>
                    <span className="text-sm font-medium">Development</span>
                  </div>
                  <div className="text-xs text-muted-foreground">180+ experts</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;