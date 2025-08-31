import { useState } from "react";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Search, 
  Filter, 
  PlayCircle, 
  Clock, 
  CheckCircle, 
  Circle,
  ArrowLeft,
  BookOpen
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { mockData } from "@/data/mockData";

export const Aulas = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("todas");
  const navigate = useNavigate();

  const filteredAulas = mockData.todasAulas.filter((aula) => {
    const matchesSearch = aula.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         aula.turma.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         aula.professor.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === "todas" || aula.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

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

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'concluida':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'em-andamento':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

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
          <span className="text-foreground">Aulas</span>
        </div>

        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold flex items-center">
              <BookOpen className="mr-3 h-8 w-8 text-primary" />
              Plataforma de Vídeo-Aulas
            </h1>
            <p className="text-muted-foreground mt-2">
              Acesse todas as suas aulas em um só lugar
            </p>
          </div>
        </div>

        {/* Filtros */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Buscar aulas por título, turma ou professor..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              
              <div className="flex gap-2">
                {['todas', 'nao-iniciada', 'em-andamento', 'concluida'].map((status) => (
                  <Button
                    key={status}
                    variant={statusFilter === status ? "default" : "outline"}
                    size="sm"
                    onClick={() => setStatusFilter(status)}
                    className="capitalize"
                  >
                    {status === 'todas' ? 'Todas' : getStatusText(status)}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Estatísticas */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">
                  {mockData.todasAulas.length}
                </div>
                <div className="text-sm text-muted-foreground">Total de Aulas</div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">
                  {mockData.todasAulas.filter(a => a.status === 'concluida').length}
                </div>
                <div className="text-sm text-muted-foreground">Concluídas</div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">
                  {mockData.todasAulas.filter(a => a.status === 'em-andamento').length}
                </div>
                <div className="text-sm text-muted-foreground">Em Andamento</div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-600">
                  {mockData.todasAulas.filter(a => a.status === 'nao-iniciada').length}
                </div>
                <div className="text-sm text-muted-foreground">Não Iniciadas</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Lista de Aulas */}
        <div className="space-y-4">
          {filteredAulas.length > 0 ? (
            filteredAulas.map((aula) => (
              <Card key={aula.id} className="hover:shadow-md transition-smooth">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                        <PlayCircle className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    
                    <div className="flex-1 space-y-2">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold text-lg">{aula.titulo}</h3>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <span>{aula.turma}</span>
                            <span>Prof. {aula.professor}</span>
                            <div className="flex items-center">
                              <Clock className="w-3 h-3 mr-1" />
                              {aula.duracao} min
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Badge className={getStatusColor(aula.status)}>
                            {getStatusIcon(aula.status)}
                            <span className="ml-1">{getStatusText(aula.status)}</span>
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {aula.tags.map((tag: string) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      {aula.status === 'em-andamento' && (
                        <div className="w-full max-w-xs">
                          <Progress value={45} className="h-2" />
                          <p className="text-xs text-muted-foreground mt-1">45% concluído</p>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex-shrink-0">
                      <Button asChild>
                        <Link to={`/perfil/aulas/${aula.id}`}>
                          {aula.status === 'concluida' ? 'Revisar' : 
                           aula.status === 'em-andamento' ? 'Continuar' : 'Assistir'}
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <Card>
              <CardContent className="py-12 text-center">
                <BookOpen className="mx-auto h-16 w-16 text-muted-foreground/50 mb-4" />
                <h3 className="text-lg font-medium mb-2">Nenhuma aula encontrada</h3>
                <p className="text-muted-foreground mb-4">
                  Tente ajustar seus filtros ou termos de busca
                </p>
                <Button variant="outline" onClick={() => {
                  setSearchTerm("");
                  setStatusFilter("todas");
                }}>
                  Limpar Filtros
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};