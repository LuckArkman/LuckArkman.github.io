import { useState } from "react";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft,
  Settings,
  User,
  Bell,
  Globe,
  Shield,
  LogOut
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "@/hooks/use-toast";

export const Configuracoes = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  
  // Estados para as configurações
  const [notificationsEmail, setNotificationsEmail] = useState(true);
  const [notificationsPush, setNotificationsPush] = useState(true);
  const [notificationsNewLessons, setNotificationsNewLessons] = useState(true);
  const [notificationsReminders, setNotificationsReminders] = useState(false);
  
  // Estados para o perfil
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");

  const handleSaveProfile = () => {
    // Aqui você salvaria as alterações no backend
    toast({
      title: "Perfil atualizado",
      description: "Suas informações foram salvas com sucesso.",
    });
  };

  const handleLogout = () => {
    logout();
    navigate("/");
    toast({
      title: "Logout realizado",
      description: "Você foi desconectado com sucesso.",
    });
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
          <span className="text-foreground">Configurações</span>
        </div>

        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold flex items-center">
            <Settings className="mr-3 h-8 w-8 text-primary" />
            Configurações
          </h1>
          <p className="text-muted-foreground mt-2">
            Gerencie suas preferências e informações da conta
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Perfil do Usuário */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center">
                <User className="w-5 h-5 mr-2" />
                Informações do Perfil
              </CardTitle>
              <CardDescription>
                Atualize suas informações pessoais
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome completo</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Seu nome completo"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="seu@email.com"
                    disabled
                  />
                  <p className="text-xs text-muted-foreground">
                    O e-mail não pode ser alterado
                  </p>
                </div>
              </div>
              
              <Button onClick={handleSaveProfile}>
                Salvar Alterações
              </Button>
            </CardContent>
          </Card>

          {/* Preferências de Notificação */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bell className="w-5 h-5 mr-2" />
                Notificações
              </CardTitle>
              <CardDescription>
                Configure suas preferências de notificação
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="email-notifications">E-mail</Label>
                  <p className="text-sm text-muted-foreground">
                    Receber notificações por e-mail
                  </p>
                </div>
                <Switch
                  id="email-notifications"
                  checked={notificationsEmail}
                  onCheckedChange={setNotificationsEmail}
                />
              </div>
              
              <Separator />
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="push-notifications">Push</Label>
                  <p className="text-sm text-muted-foreground">
                    Notificações no navegador
                  </p>
                </div>
                <Switch
                  id="push-notifications"
                  checked={notificationsPush}
                  onCheckedChange={setNotificationsPush}
                />
              </div>
              
              <Separator />
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="new-lessons">Novas Aulas</Label>
                  <p className="text-sm text-muted-foreground">
                    Quando novas aulas estiverem disponíveis
                  </p>
                </div>
                <Switch
                  id="new-lessons"
                  checked={notificationsNewLessons}
                  onCheckedChange={setNotificationsNewLessons}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="reminders">Lembretes</Label>
                  <p className="text-sm text-muted-foreground">
                    Lembretes para continuar estudando
                  </p>
                </div>
                <Switch
                  id="reminders"
                  checked={notificationsReminders}
                  onCheckedChange={setNotificationsReminders}
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Outras Configurações */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Preferências de Idioma */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Globe className="w-5 h-5 mr-2" />
                Idioma e Região
              </CardTitle>
              <CardDescription>
                Configure o idioma da plataforma
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="language">Idioma</Label>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <span>Português (Brasil)</span>
                  <Badge variant="secondary">Padrão</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Segurança */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                Segurança
              </CardTitle>
              <CardDescription>
                Gerencie a segurança da sua conta
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="outline" className="w-full justify-start" disabled>
                Alterar Senha
              </Button>
              <Button variant="outline" className="w-full justify-start" disabled>
                Autenticação em Dois Fatores
              </Button>
              <p className="text-xs text-muted-foreground">
                Funcionalidades de segurança estarão disponíveis em breve
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Zona de Perigo */}
        <Card className="border-destructive/50">
          <CardHeader>
            <CardTitle className="text-destructive flex items-center">
              <LogOut className="w-5 h-5 mr-2" />
              Zona de Perigo
            </CardTitle>
            <CardDescription>
              Ações irreversíveis relacionadas à sua conta
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="destructive" onClick={handleLogout}>
              Sair da Conta
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};