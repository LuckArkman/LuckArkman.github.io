import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Users, BookOpen, Trophy } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import { Header } from "./Header";

export const Hero = () => {
  return (
    <>
      <Header />
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero pt-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-glow/20 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-glow delay-1000"></div>
      </div>

      <div className="container relative z-10 px-6 text-center text-white">
        <div className="mx-auto max-w-4xl space-y-8 animate-fade-in">
          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            O Futuro do
            <span className="block text-gradient">Aprendizado</span>
            É Aqui
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Uma plataforma revolucionária que transforma a forma como você aprende, 
            conecta e cresce. Junte-se a uma comunidade vibrante de milhares de estudantes.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4 hover-scale">
              Começar Agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button variant="glass" size="lg" className="text-lg px-8 py-4 text-white hover:text-foreground">
              <Play className="mr-2 h-5 w-5" />
              Ver Demonstração
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 max-w-3xl mx-auto">
            <div className="flex flex-col items-center space-y-2 animate-slide-up">
              <div className="p-3 bg-white/10 rounded-full glass">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold">50K+</div>
              <div className="text-white/80">Estudantes Ativos</div>
            </div>
            
            <div className="flex flex-col items-center space-y-2 animate-slide-up delay-200">
              <div className="p-3 bg-white/10 rounded-full glass">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold">1000+</div>
              <div className="text-white/80">Cursos Disponíveis</div>
            </div>
            
            <div className="flex flex-col items-center space-y-2 animate-slide-up delay-400">
              <div className="p-3 bg-white/10 rounded-full glass">
                <Trophy className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold">95%</div>
              <div className="text-white/80">Taxa de Conclusão</div>
            </div>
          </div>
        </div>

        {/* Hero Image - Floating */}
        <div className="mt-16 relative animate-float">
          <div className="relative mx-auto max-w-4xl">
            <img 
              src={heroImage} 
              alt="Plataforma de aprendizado moderna" 
              className="rounded-2xl shadow-glow glass border border-white/20"
            />
          </div>
        </div>
      </div>
    </section>
    </>
  );
};