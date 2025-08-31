import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  PlayCircle, 
  BookOpen, 
  Trophy, 
  Bell, 
  Clock, 
  Users,
  ChevronRight,
  Star,
  Calendar
} from "lucide-react";
import { Link } from "react-router-dom";
import { mockData } from "@/data/mockData";

export const Perfil = () => {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Header do Perfil */}
        <div className="flex items-center space-x-4 bg-card rounded-2xl p-6 shadow-elegant">
          <Avatar className="w-20 h-20">
            <AvatarImage src="" alt={user.name} />
            <AvatarFallback className="text-2xl bg-primary text-primary-foreground">
              {user.name.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-foreground">
              Olá, {user.name}! 👋
            </h1>
            <p className="text-muted-foreground">
              Bem-vindo de volta à sua jornada de aprendizado
            </p>
          </div>
          <Button asChild className="hover-scale">
            <Link to="/perfil/aulas">
              <PlayCircle className="mr-2 h-4 w-4" />
              Plataforma de Vídeo-Aulas
            </Link>
          </Button>
        </div>

        {/* Grid Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Continuar Assistindo */}
          <Card className="lg:col-span-2 hover-glow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <PlayCircle className="mr-2 h-5 w-5 text-primary" />
                Continuar Assistindo
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {mockData.continuarAssistindo.map((aula) => (
                <div key={aula.id} className="flex items-center space-x-4 p-4 bg-muted/50 rounded-lg hover:bg-muted/70 transition-smooth cursor-pointer">
                  <div className="w-16 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                    <PlayCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">{aula.titulo}</h4>
                    <p className="text-sm text-muted-foreground">{aula.turma}</p>
                    <Progress value={aula.progresso} className="mt-2 h-2" />
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">{aula.duracaoRestante}</p>
                    <Button size="sm" variant="ghost">
                      Retomar
                      <ChevronRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Métricas Rápidas */}
          <div className="space-y-6">
            <Card className="hover-glow">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Progresso Geral</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {mockData.progressoTurmas.map((turma) => (
                  <div key={turma.nome} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{turma.nome}</span>
                      <span className="text-muted-foreground">{turma.progresso}%</span>
                    </div>
                    <Progress value={turma.progresso} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="hover-glow">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center">
                  <Bell className="mr-2 h-4 w-4" />
                  Notificações
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {mockData.notificacoes.map((notif, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-muted/30 rounded-lg">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{notif.titulo}</p>
                      <p className="text-xs text-muted-foreground mt-1">{notif.tempo}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Minhas Turmas */}
        <Card className="hover-glow">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center">
                <Users className="mr-2 h-5 w-5 text-primary" />
                Minhas Turmas
              </CardTitle>
              <Button variant="outline" size="sm" asChild>
                <Link to="/perfil/turmas">
                  Ver Todas
                  <ChevronRight className="ml-1 h-3 w-3" />
                </Link>
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {mockData.turmas.map((turma) => (
                <div key={turma.id} className="p-4 border rounded-lg hover:shadow-md transition-smooth cursor-pointer group">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="font-medium group-hover:text-primary transition-smooth">
                        {turma.nome}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Prof. {turma.professor}
                      </p>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {turma.aulas.length} aulas
                    </Badge>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="mr-1 h-3 w-3" />
                      {turma.proximaAula}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="mr-1 h-3 w-3" />
                      {turma.duracao}
                    </div>
                  </div>
                  
                  <Progress value={turma.progresso} className="mb-3 h-2" />
                  
                  <Button size="sm" variant="outline" className="w-full">
                    Acessar Turma
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Certificados */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="hover-glow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Trophy className="mr-2 h-5 w-5 text-primary" />
                Certificados
              </CardTitle>
              <CardDescription>
                Seus certificados de conclusão
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <Trophy className="mx-auto h-16 w-16 text-muted-foreground/50 mb-4" />
                <p className="text-muted-foreground mb-4">
                  Você ainda não possui certificados
                </p>
                <Button variant="outline" size="sm">
                  Explorar Cursos
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-glow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Star className="mr-2 h-5 w-5 text-primary" />
                Conquistas
              </CardTitle>
              <CardDescription>
                Seus marcos de aprendizado
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <PlayCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm">Primeira Aula</p>
                    <p className="text-xs text-muted-foreground">Assistiu sua primeira aula</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
                  <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-accent" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm">Estudante Dedicado</p>
                    <p className="text-xs text-muted-foreground">3 dias consecutivos estudando</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};