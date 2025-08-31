import { useParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { 
  ArrowLeft,
  PlayCircle,
  CheckCircle,
  Circle,
  Clock,
  Calendar,
  Users,
  Star,
  BookOpen,
  FileText,
  MessageSquare
} from "lucide-react";
import { mockData } from "@/data/mockData";

export const TurmaDetalhes = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Encontrar a turma
  const turma = mockData.turmas.find(t => t.id === id);
  
  if (!turma) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-muted/30">
        <Header />
        <div className="container mx-auto px-4 py-8 pt-24">
          <Card>
            <CardContent className="py-12 text-center">
              <h2 className="text-2xl font-bold mb-4">Turma não encontrada</h2>
              <Button onClick={() => navigate("/perfil/turmas")}>
                Voltar para Turmas
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'concluida':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'em-andamento':
        return <PlayCircle className="w-4 h-4 text-primary" />;
      default:
        return <Circle className="w-4 h-4 text-muted-foreground" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'concluida':
        return 'Concluída';
      case 'em-andamento':
        return 'Em andamento';
      default:
        return 'Não iniciada';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30">
      <Header />
      
      <div className="container mx-auto px-4 py-8 pt-24 space-y-6">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Button variant="ghost" size="sm" onClick={() => navigate("/perfil")} className="p-0 h-auto">
            Perfil
          </Button>
          <span>/</span>
          <Button variant="ghost" size="sm" onClick={() => navigate("/perfil/turmas")} className="p-0 h-auto">
            Turmas
          </Button>
          <span>/</span>
          <span className="text-foreground">{turma.nome}</span>
        </div>

        {/* Header da Turma */}
        <Card className="bg-gradient-accent text-white">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-3xl text-white">{turma.nome}</CardTitle>
                <CardDescription className="text-white/80 text-lg mt-2">
                  Prof. {turma.professor}
                </CardDescription>
              </div>
              <Button variant="outline" className="bg-white/20 border-white/30 text-white hover:bg-white/30">
                <Star className="w-4 h-4 mr-1" />
                Favoritar
              </Button>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white">
              <div className="flex items-center space-x-2">
                <BookOpen className="w-4 h-4" />
                <span>{turma.aulas.length} aulas</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>{turma.duracao}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>{turma.proximaAula}</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Progresso da turma</span>
                <span>{turma.progresso}%</span>
              </div>
              <Progress value={turma.progresso} className="bg-white/20" />
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Lista de Aulas */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <PlayCircle className="w-5 h-5 mr-2 text-primary" />
                  Aulas da Turma
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {turma.aulas.map((aula, index) => (
                    <div key={aula.id}>
                      <div className="flex items-center space-x-4 p-4 rounded-lg hover:bg-muted/50 transition-smooth cursor-pointer group">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center text-white font-bold">
                            {index + 1}
                          </div>
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="font-medium group-hover:text-primary transition-smooth">
                                {aula.titulo}
                              </h4>
                              <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
                                <div className="flex items-center">
                                  <Clock className="w-3 h-3 mr-1" />
                                  {aula.duracao} min
                                </div>
                                <div className="flex items-center">
                                  {getStatusIcon(aula.status)}
                                  <span className="ml-1">{getStatusText(aula.status)}</span>
                                </div>
                              </div>
                            </div>
                            
                            <Button 
                              size="sm" 
                              onClick={() => navigate(`/perfil/aulas/${aula.id}`)}
                              className="opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              {aula.status === 'concluida' ? 'Revisar' : 
                               aula.status === 'em-andamento' ? 'Continuar' : 'Assistir'}
                            </Button>
                          </div>
                          
                          {aula.status === 'em-andamento' && (
                            <div className="mt-2 max-w-xs">
                              <Progress value={45} className="h-2" />
                              <p className="text-xs text-muted-foreground mt-1">45% concluído</p>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      {index < turma.aulas.length - 1 && (
                        <Separator className="my-2" />
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Cronograma */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  Cronograma
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Início:</span>
                    <span className="text-muted-foreground">15/01/2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Término:</span>
                    <span className="text-muted-foreground">15/03/2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Próxima aula:</span>
                    <span className="text-primary font-medium">Hoje 19h</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Mural de Avisos */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Mural de Avisos
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-muted/30 rounded-lg">
                  <p className="text-sm font-medium">Aula ao vivo hoje!</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Não esqueçam da aula ao vivo às 19h
                  </p>
                  <span className="text-xs text-muted-foreground">2h atrás</span>
                </div>
                
                <div className="p-3 bg-muted/30 rounded-lg">
                  <p className="text-sm font-medium">Material extra disponível</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Adicionei exercícios extras na seção de materiais
                  </p>
                  <span className="text-xs text-muted-foreground">1 dia atrás</span>
                </div>
              </CardContent>
            </Card>

            {/* Materiais da Turma */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <FileText className="w-5 h-5 mr-2" />
                  Materiais
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center justify-between p-2 bg-muted/30 rounded">
                  <div className="flex items-center space-x-2">
                    <FileText className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">Apostila Completa.pdf</span>
                  </div>
                  <Button size="sm" variant="ghost">
                    <FileText className="w-3 h-3" />
                  </Button>
                </div>
                
                <div className="flex items-center justify-between p-2 bg-muted/30 rounded">
                  <div className="flex items-center space-x-2">
                    <FileText className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">Exercícios.zip</span>
                  </div>
                  <Button size="sm" variant="ghost">
                    <FileText className="w-3 h-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};