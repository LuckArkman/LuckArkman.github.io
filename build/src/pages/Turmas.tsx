import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  ArrowLeft,
  Users,
  Calendar,
  Clock,
  BookOpen,
  Star,
  ChevronRight
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { mockData } from "@/data/mockData";

export const Turmas = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30">
      <Header />
      
      <div className="container mx-auto px-4 py-8 pt-24 space-y-6">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Button variant="ghost" size="sm" onClick={() => navigate("/perfil")} className="p-0 h-auto">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Perfil
          </Button>
          <span>/</span>
          <span className="text-foreground">Turmas</span>
        </div>

        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold flex items-center">
              <Users className="mr-3 h-8 w-8 text-primary" />
              Minhas Turmas
            </h1>
            <p className="text-muted-foreground mt-2">
              Gerencie suas turmas e acompanhe seu progresso
            </p>
          </div>
        </div>

        {/* Estatísticas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">
                  {mockData.turmas.length}
                </div>
                <div className="text-sm text-muted-foreground">Turmas Ativas</div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">
                  {Math.round(mockData.progressoTurmas.reduce((acc, t) => acc + t.progresso, 0) / mockData.progressoTurmas.length)}%
                </div>
                <div className="text-sm text-muted-foreground">Progresso Médio</div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">
                  {mockData.turmas.reduce((acc, t) => acc + t.aulas.length, 0)}
                </div>
                <div className="text-sm text-muted-foreground">Total de Aulas</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Lista de Turmas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {mockData.turmas.map((turma) => (
            <Card key={turma.id} className="hover:shadow-md transition-smooth">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl">{turma.nome}</CardTitle>
                    <CardDescription className="mt-1">
                      Prof. {turma.professor}
                    </CardDescription>
                  </div>
                  <Badge variant="secondary">
                    {turma.aulas.length} aulas
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Informações da turma */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span>{turma.duracao}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span>{turma.proximaAula}</span>
                  </div>
                </div>

                {/* Progresso */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">Progresso</span>
                    <span className="text-muted-foreground">{turma.progresso}%</span>
                  </div>
                  <Progress value={turma.progresso} className="h-2" />
                </div>

                {/* Aulas recentes */}
                <div className="space-y-2">
                  <h4 className="font-medium text-sm">Próximas Aulas</h4>
                  <div className="space-y-2">
                    {turma.aulas.slice(0, 3).map((aula) => (
                      <div key={aula.id} className="flex items-center justify-between p-2 bg-muted/30 rounded text-sm">
                        <div className="flex items-center space-x-2">
                          <BookOpen className="w-3 h-3 text-muted-foreground" />
                          <span className="truncate">{aula.titulo}</span>
                        </div>
                        <span className="text-muted-foreground">{aula.duracao}min</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Ações */}
                <div className="flex space-x-2 pt-2">
                  <Button asChild className="flex-1">
                    <Link to={`/perfil/turmas/${turma.id}`}>
                      Acessar Turma
                      <ChevronRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm">
                    <Star className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Estado vazio */}
        {mockData.turmas.length === 0 && (
          <Card>
            <CardContent className="py-12 text-center">
              <Users className="mx-auto h-16 w-16 text-muted-foreground/50 mb-4" />
              <h3 className="text-lg font-medium mb-2">Nenhuma turma encontrada</h3>
              <p className="text-muted-foreground mb-4">
                Você ainda não está inscrito em nenhuma turma
              </p>
              <Button>
                Explorar Cursos
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};