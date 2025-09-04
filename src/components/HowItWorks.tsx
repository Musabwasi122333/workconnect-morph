import React from 'react';
import { Search, MessageSquare, CreditCard, CheckCircle, ArrowRight, Zap } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      icon: Search,
      title: 'Browse & Discover',
      description: 'Explore thousands of services from talented freelancers worldwide. Use our smart filters to find exactly what you need.',
      features: ['Advanced search filters', 'Category browsing', 'Talent recommendations']
    },
    {
      number: '02',
      icon: MessageSquare,
      title: 'Connect & Discuss',
      description: 'Chat directly with freelancers, discuss your project requirements, and get custom quotes tailored to your needs.',
      features: ['Real-time messaging', 'Project briefs', 'Custom proposals']
    },
    {
      number: '03',
      icon: CreditCard,
      title: 'Secure Payment',
      description: 'Make safe payments through our escrow system. Your money is protected until you\'re completely satisfied.',
      features: ['Escrow protection', 'Milestone payments', 'Money-back guarantee']
    },
    {
      number: '04',
      icon: CheckCircle,
      title: 'Get Results',
      description: 'Receive high-quality work on time. Review, request revisions, and approve the final deliverables.',
      features: ['Quality guarantee', 'Revision rounds', 'On-time delivery']
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background-elevated">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="neuro-surface-soft inline-flex items-center px-4 py-2 rounded-full mb-6">
            <Zap className="w-4 h-4 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">How It Works</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Simple Steps to
            <span className="block gradient-text">Success</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get your project done in four easy steps. Our streamlined process 
            ensures you find the right talent and get amazing results every time.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-8 top-24 w-0.5 h-32 bg-gradient-primary opacity-30 hidden lg:block"></div>
              )}
              
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                
                {/* Step Number & Icon */}
                <div className="lg:col-span-2 flex lg:flex-col items-center lg:items-start space-x-4 lg:space-x-0 lg:space-y-4">
                  <div className="neuro-surface w-16 h-16 rounded-2xl flex items-center justify-center relative">
                    <step.icon className="w-8 h-8 text-primary" />
                    <div className="absolute -top-2 -right-2 neuro-surface-soft w-8 h-8 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-primary">{step.number}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-6 space-y-4">
                  <h3 className="text-2xl font-bold">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-2">
                    {step.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="neuro-surface-soft w-5 h-5 rounded-lg flex items-center justify-center">
                          <CheckCircle className="w-3 h-3 text-success" />
                        </div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual Element */}
                <div className="lg:col-span-4">
                  <div className="neuro-surface p-6 rounded-2xl">
                    <div className="aspect-video bg-gradient-accent/10 rounded-xl relative overflow-hidden">
                      
                      {/* Dynamic content based on step */}
                      {index === 0 && (
                        <div className="absolute inset-4 space-y-3">
                          <div className="neuro-surface-soft h-4 rounded bg-primary/20"></div>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="neuro-surface-soft h-16 rounded-lg"></div>
                            <div className="neuro-surface-soft h-16 rounded-lg"></div>
                          </div>
                          <div className="neuro-surface-soft h-3 rounded bg-accent/20 w-3/4"></div>
                        </div>
                      )}
                      
                      {index === 1 && (
                        <div className="absolute inset-4 space-y-2">
                          <div className="flex justify-end">
                            <div className="neuro-surface-soft px-3 py-2 rounded-lg bg-primary/20 text-xs">
                              Hello! I'm interested in your service
                            </div>
                          </div>
                          <div className="flex justify-start">
                            <div className="neuro-surface-soft px-3 py-2 rounded-lg bg-accent/20 text-xs">
                              Thanks! Let's discuss your project
                            </div>
                          </div>
                          <div className="flex justify-end">
                            <div className="neuro-surface-soft px-3 py-2 rounded-lg bg-primary/20 text-xs">
                              Here are my requirements...
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {index === 2 && (
                        <div className="absolute inset-4 flex items-center justify-center">
                          <div className="neuro-surface p-4 rounded-xl text-center">
                            <div className="w-12 h-12 bg-success/20 rounded-full mx-auto mb-2 flex items-center justify-center">
                              <CreditCard className="w-6 h-6 text-success" />
                            </div>
                            <div className="text-xs font-medium">Secure Payment</div>
                            <div className="text-xs text-muted-foreground">Protected by escrow</div>
                          </div>
                        </div>
                      )}
                      
                      {index === 3 && (
                        <div className="absolute inset-4 flex items-center justify-center">
                          <div className="neuro-surface p-4 rounded-xl text-center">
                            <div className="w-12 h-12 bg-success/20 rounded-full mx-auto mb-2 flex items-center justify-center">
                              <CheckCircle className="w-6 h-6 text-success" />
                            </div>
                            <div className="text-xs font-medium">Project Complete</div>
                            <div className="text-xs text-muted-foreground">100% Satisfaction</div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="neuro-surface inline-flex items-center px-8 py-4 rounded-2xl">
            <span className="text-lg font-medium mr-4">Ready to get started?</span>
            <button className="neuro-button bg-gradient-primary text-white px-6 py-3 rounded-xl group">
              Browse Services
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;