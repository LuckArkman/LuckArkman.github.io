import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Zap, 
  Users, 
  Trophy, 
  VideoIcon, 
  MessageCircle, 
  BarChart3,
  Sparkles,
  Clock
} from "lucide-react";

const features = [
  {
    icon: VideoIcon,
    title: "Conteúdo Interativo",
    description: "Vídeos em alta qualidade, quizzes dinâmicos e simulações práticas para uma experiência de aprendizado imersiva.",
    color: "text-primary"
  },
  {
    icon: Users,
    title: "Comunidade Vibrante",
    description: "Conecte-se com estudantes do mundo todo, participe de discussões e colabore em projetos reais.",
    color: "text-secondary"
  },
  {
    icon: Trophy,
    title: "Gamificação Avançada",
    description: "Sistema de conquistas, rankings e recompensas que torna o aprendizado divertido e motivador.",
    color: "text-accent"
  },
  {
    icon: Zap,
    title: "IA Personalizada",
    description: "Algoritmos inteligentes que adaptam o conteúdo ao seu ritmo e estilo de aprendizado único.",
    color: "text-primary"
  },
  {
    icon: MessageCircle,
    title: "Mentoria Ao Vivo",
    description: "Sessões exclusivas com especialistas da indústria e feedback personalizado em tempo real.",
    color: "text-secondary"
  },
  {
    icon: BarChart3,
    title: "Analytics Detalhados",
    description: "Acompanhe seu progresso com métricas avançadas e insights sobre seu desenvolvimento.",
    color: "text-accent"
  }
];

export const Features = () => {
  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background"></div>
      
      <div className="container relative z-10 px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4" />
            Recursos Inovadores
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Tudo Que Você Precisa Para
            <span className="text-gradient block">Acelerar Seu Aprendizado</span>
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            Criamos uma experiência completa que combina tecnologia de ponta 
            com metodologias comprovadas de ensino.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-8 hover-scale group cursor-pointer border-0 shadow-card hover:shadow-elegant transition-smooth bg-gradient-card"
            >
              <div className="space-y-4">
                <div className={`inline-flex p-3 rounded-xl bg-muted/50 ${feature.color} group-hover:scale-110 transition-smooth`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4 bg-card p-8 rounded-2xl shadow-elegant border border-border/50">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="h-5 w-5" />
              <span>Comece em menos de 2 minutos</span>
            </div>
            
            <Button variant="gradient" size="lg" className="hover-scale">
              Explorar Recursos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};