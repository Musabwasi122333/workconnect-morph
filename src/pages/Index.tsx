import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ServiceShowcase from "@/components/ServiceShowcase";
import HowItWorks from "@/components/HowItWorks";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <ServiceShowcase />
      <HowItWorks />
    </div>
  );
};

export default Index;
