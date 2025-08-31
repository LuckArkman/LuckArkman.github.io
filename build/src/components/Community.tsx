import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { 
  MessageSquare, 
  Heart, 
  Share2, 
  Users, 
  TrendingUp, 
  Star,
  Activity
} from "lucide-react";

const posts = [
  {
    author: "Marina Santos",
    role: "Desenvolvedora Frontend",
    content: "Acabei de completar o módulo de React Avançado! As práticas foram incríveis e já estou aplicando no trabalho. 🚀",
    likes: 42,
    comments: 8,
    badge: "Expert",
    badgeColor: "bg-accent"
  },
  {
    author: "Carlos Lima",
    role: "Designer UX/UI",
    content: "A mentoria ao vivo desta semana sobre Design Systems foi transformadora. Obrigado pela oportunidade!",
    likes: 67,
    comments: 15,
    badge: "Mentor",
    badgeColor: "bg-primary"
  },
  {
    author: "Ana Rodrigues",
    role: "Estudante",
    content: "Primeira semana na plataforma e já estou viciada! A gamificação realmente funciona para manter a motivação.",
    likes: 38,
    comments: 12,
    badge: "Iniciante",
    badgeColor: "bg-secondary"
  }
];

const stats = [
  { icon: Users, label: "Membros Ativos", value: "50.2K", trend: "+12%" },
  { icon: MessageSquare, label: "Discussões", value: "15.8K", trend: "+8%" },
  { icon: TrendingUp, label: "Projetos", value: "3.2K", trend: "+24%" },
  { icon: Star, label: "Avaliação", value: "4.9", trend: "Excelente" }
];

export const Community = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium">
                <Activity className="h-4 w-4" />
                Comunidade Ativa
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Conecte-se com
                <span className="text-gradient block">Pessoas Incríveis</span>
              </h2>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Faça parte de uma comunidade global onde estudantes, profissionais 
                e mentores compartilham conhecimento, projetos e oportunidades.
              </p>
            </div>

            {/* Community Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="p-4 bg-gradient-card rounded-xl border border-border/50 hover-scale">
                  <div className="flex items-center gap-3 mb-2">
                    <stat.icon className="h-5 w-5 text-primary" />
                    <span className="text-sm text-muted-foreground">{stat.label}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-foreground">{stat.value}</span>
                    <span className="text-sm text-secondary font-medium">{stat.trend}</span>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="gradient" size="lg" className="hover-scale">
              Junte-se à Comunidade
            </Button>
          </div>

          {/* Right side - Community Feed */}
          <div className="space-y-6 animate-slide-up">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">Últimas Atividades</h3>
              
              {posts.map((post, index) => (
                <Card key={index} className="p-6 hover-scale cursor-pointer border-0 shadow-card hover:shadow-elegant transition-smooth bg-gradient-card">
                  <div className="space-y-4">
                    {/* User info */}
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback className="bg-primary text-primary-foreground">
                          {post.author.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold text-foreground">{post.author}</h4>
                          <Badge variant="secondary" className={`${post.badgeColor} text-white`}>
                            {post.badge}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{post.role}</p>
                      </div>
                    </div>

                    {/* Post content */}
                    <p className="text-foreground leading-relaxed">{post.content}</p>

                    {/* Interactions */}
                    <div className="flex items-center gap-6 text-muted-foreground">
                      <button className="flex items-center gap-2 hover:text-accent transition-colors">
                        <Heart className="h-4 w-4" />
                        <span className="text-sm">{post.likes}</span>
                      </button>
                      
                      <button className="flex items-center gap-2 hover:text-primary transition-colors">
                        <MessageSquare className="h-4 w-4" />
                        <span className="text-sm">{post.comments}</span>
                      </button>
                      
                      <button className="flex items-center gap-2 hover:text-secondary transition-colors ml-auto">
                        <Share2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};