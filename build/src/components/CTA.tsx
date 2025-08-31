import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Sparkles, CheckCircle } from "lucide-react";

const benefits = [
  "Acesso a mais de 1000 cursos especializados",
  "Mentoria personalizada com especialistas",
  "Certificações reconhecidas pela indústria",
  "Comunidade global de +50K estudantes",
  "Suporte 24/7 em português",
  "Garantia de 30 dias ou seu dinheiro de volta"
];

export const CTA = () => {
  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse-glow delay-1000"></div>
      </div>

      <div className="container relative z-10 px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm font-medium glass">
              <Sparkles className="h-4 w-4" />
              Oferta Especial por Tempo Limitado
            </div>

            {/* Main headline */}
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Transforme Sua Carreira
              <span className="block text-gradient">Hoje Mesmo</span>
            </h2>

            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Junte-se a milhares de profissionais que já revolucionaram suas carreiras 
              com nossa plataforma de aprendizado premium.
            </p>

            {/* Benefits */}
            <Card className="p-8 bg-white/10 border-white/20 backdrop-blur-md max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span className="text-white/90 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Pricing */}
            <div className="flex flex-col items-center gap-4">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-white/60 line-through text-xl">R$ 297/mês</span>
                  <span className="bg-accent px-3 py-1 rounded-full text-sm font-semibold">70% OFF</span>
                </div>
                <div className="text-5xl font-bold text-white">R$ 89<span className="text-xl text-white/70">/mês</span></div>
                <p className="text-white/80 mt-2">Cancele quando quiser • Sem taxas ocultas</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button variant="hero" size="lg" className="text-lg px-12 py-4 bg-white text-primary hover:bg-white/90 hover:scale-105 shadow-glow">
                Começar Minha Jornada
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button variant="glass" size="lg" className="text-lg px-8 py-4 text-white border-white/30 hover:bg-white/10">
                Falar com Consultor
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8 text-white/70 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                Teste grátis de 7 dias
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                Garantia de satisfação
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                +50K estudantes satisfeitos
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};