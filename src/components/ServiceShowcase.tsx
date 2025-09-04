import React from 'react';
import { Star, Heart, Clock, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServiceShowcase = () => {
  const services = [
    {
      id: 1,
      title: "Modern Website Design & Development",
      freelancer: "Sarah Chen",
      avatar: "/api/placeholder/40/40",
      rating: 4.9,
      reviews: 127,
      price: "Starting at $899",
      tags: ["UI/UX", "React", "Responsive"],
      category: "Web Development",
      deliveryTime: "5 days",
      image: "/api/placeholder/300/200"
    },
    {
      id: 2,
      title: "Professional Logo & Brand Identity",
      freelancer: "Marcus Johnson",
      avatar: "/api/placeholder/40/40",
      rating: 5.0,
      reviews: 89,
      price: "Starting at $299",
      tags: ["Logo", "Branding", "Identity"],
      category: "Graphic Design",
      deliveryTime: "3 days",
      image: "/api/placeholder/300/200"
    },
    {
      id: 3,
      title: "Mobile App Development (iOS & Android)",
      freelancer: "Elena Rodriguez",
      avatar: "/api/placeholder/40/40",
      rating: 4.8,
      reviews: 156,
      price: "Starting at $1,299",
      tags: ["React Native", "Flutter", "Mobile"],
      category: "App Development",
      deliveryTime: "7 days",
      image: "/api/placeholder/300/200"
    },
    {
      id: 4,
      title: "Content Writing & SEO Optimization",
      freelancer: "David Park",
      avatar: "/api/placeholder/40/40",
      rating: 4.9,
      reviews: 203,
      price: "Starting at $199",
      tags: ["SEO", "Content", "Marketing"],
      category: "Digital Marketing",
      deliveryTime: "2 days",
      image: "/api/placeholder/300/200"
    },
    {
      id: 5,
      title: "E-commerce Store Setup & Design",
      freelancer: "Amanda Liu",
      avatar: "/api/placeholder/40/40",
      rating: 4.7,
      reviews: 94,
      price: "Starting at $699",
      tags: ["Shopify", "E-commerce", "Design"],
      category: "E-commerce",
      deliveryTime: "4 days",
      image: "/api/placeholder/300/200"
    },
    {
      id: 6,
      title: "Video Editing & Motion Graphics",
      freelancer: "James Wilson",
      avatar: "/api/placeholder/40/40",
      rating: 4.9,
      reviews: 78,
      price: "Starting at $399",
      tags: ["Video", "Animation", "Graphics"],
      category: "Video & Animation",
      deliveryTime: "3 days",
      image: "/api/placeholder/300/200"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="neuro-surface-soft inline-flex items-center px-4 py-2 rounded-full mb-6">
            <Star className="w-4 h-4 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">Featured Services</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Discover Amazing
            <span className="block gradient-text">Services</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Browse through our curated collection of top-rated services from 
            world-class freelancers ready to bring your vision to life.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="neuro-surface p-6 rounded-3xl hover-lift group cursor-pointer"
            >
              
              {/* Service Image */}
              <div className="relative mb-6 overflow-hidden rounded-2xl">
                <div className="aspect-video bg-gradient-accent rounded-2xl relative">
                  {/* Placeholder for service image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <div className="text-4xl font-bold text-white/50">{service.category.charAt(0)}</div>
                  </div>
                </div>
                
                {/* Heart Icon */}
                <button className="absolute top-3 right-3 neuro-surface-soft w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Heart className="w-4 h-4 text-muted-foreground hover:text-destructive transition-colors" />
                </button>

                {/* Category Badge */}
                <div className="absolute bottom-3 left-3 neuro-surface-soft px-3 py-1 rounded-lg">
                  <span className="text-xs font-medium text-primary">{service.category}</span>
                </div>
              </div>

              {/* Service Info */}
              <div className="space-y-4">
                
                {/* Title */}
                <h3 className="font-semibold text-lg line-clamp-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="neuro-surface-soft px-3 py-1 rounded-lg text-xs font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Freelancer Info */}
                <div className="flex items-center space-x-3">
                  <div className="neuro-surface-soft w-10 h-10 rounded-full overflow-hidden">
                    <div className="w-full h-full bg-gradient-primary flex items-center justify-center">
                      <span className="text-white font-medium text-sm">
                        {service.freelancer.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-sm">{service.freelancer}</p>
                    <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                      <div className="flex items-center">
                        <Star className="w-3 h-3 text-warning fill-current mr-1" />
                        <span>{service.rating}</span>
                      </div>
                      <span>({service.reviews})</span>
                    </div>
                  </div>
                </div>

                {/* Delivery & Price */}
                <div className="flex items-center justify-between pt-2 border-t border-border">
                  <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{service.deliveryTime}</span>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-primary">{service.price}</p>
                  </div>
                </div>

                {/* Action Button */}
                <Button className="w-full neuro-button group bg-surface hover:bg-gradient-primary hover:text-white transition-all">
                  View Details
                  <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button className="neuro-button bg-gradient-primary text-white px-8 py-4 rounded-2xl">
            Explore More Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceShowcase;