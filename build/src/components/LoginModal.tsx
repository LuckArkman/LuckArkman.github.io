import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Credenciais de teste conforme solicitado
    if (email === "aluno@aluno.com" && password === "aluno123") {
      try {
        await login(email, password, rememberMe);
        toast({
          title: "Login realizado com sucesso!",
          description: "Bem-vindo de volta!",
        });
        onClose();
        navigate("/perfil");
      } catch (err) {
        setError("Erro interno. Tente novamente.");
      }
    } else {
      setError("E-mail ou senha incorretos. Use: aluno@aluno.com / aluno123");
    }
    
    setIsLoading(false);
  };

  const isFormValid = email.length > 0 && password.length > 0;

  const handleClose = () => {
    setEmail("");
    setPassword("");
    setError("");
    setShowPassword(false);
    setRememberMe(false);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md" onEscapeKeyDown={handleClose}>
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Entrar na Plataforma
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Field */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium">
              E-mail
            </Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10"
                autoFocus
                aria-describedby={error ? "error-message" : undefined}
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <Label htmlFor="password" className="text-sm font-medium">
              Senha
            </Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10 pr-10"
                aria-describedby={error ? "error-message" : undefined}
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4 text-muted-foreground" />
                ) : (
                  <Eye className="h-4 w-4 text-muted-foreground" />
                )}
              </Button>
            </div>
          </div>

          {/* Remember Me */}
          <div className="flex items-center space-x-2">
            <Checkbox
              id="remember"
              checked={rememberMe}
              onCheckedChange={(checked) => setRememberMe(checked as boolean)}
            />
            <Label htmlFor="remember" className="text-sm text-muted-foreground cursor-pointer">
              Lembrar de mim
            </Label>
          </div>

          {/* Error Message */}
          {error && (
            <div 
              id="error-message" 
              className="text-sm text-destructive bg-destructive/10 p-3 rounded-md"
              role="alert"
            >
              {error}
            </div>
          )}

          {/* Credentials Helper */}
          <div className="text-xs text-muted-foreground bg-muted p-3 rounded-md">
            <strong>Credenciais de teste:</strong><br />
            E-mail: aluno@aluno.com<br />
            Senha: aluno123
          </div>

          {/* Actions */}
          <div className="space-y-4">
            <Button
              type="submit"
              className="w-full hover-scale"
              disabled={!isFormValid || isLoading}
            >
              {isLoading ? "Entrando..." : "Entrar"}
            </Button>
            
            <div className="text-center">
              <button
                type="button"
                className="text-sm text-primary hover:underline"
                disabled
              >
                Esqueci minha senha
              </button>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};