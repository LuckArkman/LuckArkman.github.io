import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { 
  ArrowLeft,
  PlayCircle,
  PauseCircle,
  Volume2,
  Settings,
  Download,
  FileText,
  CheckCircle,
  Clock,
  BookOpen,
  MessageSquare
} from "lucide-react";
import { mockData } from "@/data/mockData";

export const AulaDetalhes = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [notes, setNotes] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);

  // Encontrar a aula
  const aula = mockData.todasAulas.find(a => a.id === id);
  
  if (!aula) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-muted/30">
        <Header />
        <div className="container mx-auto px-4 py-8 pt-24">
          <Card>
            <CardContent className="py-12 text-center">
              <h2 className="text-2xl font-bold mb-4">Aula não encontrada</h2>
              <Button onClick={() => navigate("/perfil/aulas")}>
                Voltar para Aulas
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  const duration = aula.duracao * 60; // em segundos
  const progress = (currentTime / duration) * 100;

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const markAsCompleted = () => {
    setIsCompleted(true);
    // Aqui você salvaria no backend
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
          <Button variant="ghost" size="sm" onClick={() => navigate("/perfil/aulas")} className="p-0 h-auto">
            Aulas
          </Button>
          <span>/</span>
          <span className="text-foreground">{aula.titulo}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Player Principal */}
          <div className="lg:col-span-3 space-y-4">
            {/* Video Player Mock */}
            <Card>
              <CardContent className="p-0">
                <div className="relative aspect-video bg-black rounded-t-lg flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                      {isPlaying ? (
                        <PauseCircle className="w-8 h-8" />
                      ) : (
                        <PlayCircle className="w-8 h-8" />
                      )}
                    </div>
                    <p className="text-sm text-white/70">Player de Vídeo Mock</p>
                  </div>
                  
                  {/* Overlay de controles */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <div className="space-y-2">
                      <Progress value={progress} className="h-1" />
                      <div className="flex items-center justify-between text-white text-sm">
                        <div className="flex items-center space-x-4">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={togglePlay}
                            className="text-white hover:bg-white/20"
                          >
                            {isPlaying ? (
                              <PauseCircle className="w-5 h-5" />
                            ) : (
                              <PlayCircle className="w-5 h-5" />
                            )}
                          </Button>
                          <span>{Math.floor(currentTime / 60)}:{(currentTime % 60).toString().padStart(2, '0')}</span>
                          <span>/</span>
                          <span>{aula.duracao}:00</span>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                            <Volume2 className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                            <Settings className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Informações da Aula */}
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl">{aula.titulo}</CardTitle>
                    <CardDescription className="mt-2 text-base">
                      {aula.turma} • Prof. {aula.professor}
                    </CardDescription>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary">
                      <Clock className="w-3 h-3 mr-1" />
                      {aula.duracao} min
                    </Badge>
                    {!isCompleted && (
                      <Button onClick={markAsCompleted} size="sm">
                        <CheckCircle className="w-4 h-4 mr-1" />
                        Marcar como Concluída
                      </Button>
                    )}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Descrição</h4>
                  <p className="text-muted-foreground">{aula.descricao}</p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    {aula.tags.map((tag: string) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Timeline de Capítulos */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Capítulos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {aula.capitulos.map((capitulo: any, index: number) => (
                    <div 
                      key={index} 
                      className="flex items-center justify-between p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-smooth cursor-pointer"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-sm">
                          {index + 1}
                        </div>
                        <span className="font-medium">{capitulo.titulo}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{capitulo.tempo}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Minhas Anotações */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Minhas Anotações
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Faça suas anotações sobre esta aula..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="min-h-[120px]"
                />
                <Button size="sm" className="mt-3">
                  Salvar Anotações
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Materiais de Apoio */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Download className="w-5 h-5 mr-2" />
                  Materiais
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {aula.materiais.map((material: any, index: number) => (
                  <div key={index} className="flex items-center justify-between p-2 bg-muted/30 rounded">
                    <div className="flex items-center space-x-2">
                      <FileText className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">{material.nome}</span>
                    </div>
                    <Button size="sm" variant="ghost">
                      <Download className="w-3 h-3" />
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Aulas Relacionadas */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Aulas Relacionadas
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {mockData.todasAulas
                  .filter(a => a.turma === aula.turma && a.id !== aula.id)
                  .slice(0, 3)
                  .map((aulaRelacionada) => (
                    <div 
                      key={aulaRelacionada.id}
                      className="p-3 bg-muted/30 rounded-lg cursor-pointer hover:bg-muted/50 transition-smooth"
                      onClick={() => navigate(`/perfil/aulas/${aulaRelacionada.id}`)}
                    >
                      <h4 className="font-medium text-sm mb-1 line-clamp-2">
                        {aulaRelacionada.titulo}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {aulaRelacionada.duracao} min
                      </p>
                    </div>
                  ))
                }
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};