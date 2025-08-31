import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Community } from "@/components/Community";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Community />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
