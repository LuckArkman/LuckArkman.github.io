import { Button } from "@/components/ui/button";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  Mail,
  Phone,
  MapPin
} from "lucide-react";

const footerLinks = {
  platform: [
    { name: "Cursos", href: "#" },
    { name: "Mentoria", href: "#" },
    { name: "Comunidade", href: "#" },
    { name: "Certificações", href: "#" },
    { name: "Preços", href: "#" }
  ],
  support: [
    { name: "Central de Ajuda", href: "#" },
    { name: "Documentação", href: "#" },
    { name: "Status da Plataforma", href: "#" },
    { name: "Contato", href: "#" },
    { name: "Feedback", href: "#" }
  ],
  company: [
    { name: "Sobre Nós", href: "#" },
    { name: "Carreiras", href: "#" },
    { name: "Imprensa", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Parceiros", href: "#" }
  ],
  legal: [
    { name: "Termos de Uso", href: "#" },
    { name: "Política de Privacidade", href: "#" },
    { name: "Cookies", href: "#" },
    { name: "LGPD", href: "#" }
  ]
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" }
];

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container px-6">
        {/* Main footer content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Brand section */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gradient mb-4">EduPlatform</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Transformamos vidas através da educação. Nossa missão é democratizar 
                  o acesso ao conhecimento de qualidade e conectar pessoas ao redor do mundo.
                </p>
              </div>

              {/* Contact info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>contato@eduplatform.com</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span>+55 (11) 9999-0000</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>São Paulo, SP - Brasil</span>
                </div>
              </div>

              {/* Social links */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="icon"
                    className="hover:bg-primary/10 hover:text-primary transition-colors"
                    asChild
                  >
                    <a href={social.href} aria-label={social.label}>
                      <social.icon className="h-4 w-4" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            {/* Links sections */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-3 gap-8 lg:col-span-3">
              <div>
                <h4 className="font-semibold text-foreground mb-4">Plataforma</h4>
                <ul className="space-y-3">
                  {footerLinks.platform.map((link, index) => (
                    <li key={index}>
                      <a 
                        href={link.href} 
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-4">Suporte</h4>
                <ul className="space-y-3">
                  {footerLinks.support.map((link, index) => (
                    <li key={index}>
                      <a 
                        href={link.href} 
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-4">Empresa</h4>
                <ul className="space-y-3">
                  {footerLinks.company.map((link, index) => (
                    <li key={index}>
                      <a 
                        href={link.href} 
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="py-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Mantenha-se Atualizado</h4>
              <p className="text-muted-foreground">Receba novidades sobre cursos e novidades da plataforma.</p>
            </div>
            
            <div className="flex gap-3 w-full md:w-auto">
              <input 
                type="email" 
                placeholder="Seu melhor e-mail" 
                className="flex-1 md:w-80 px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button variant="gradient" className="hover-scale">
                Inscrever
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 EduPlatform. Todos os direitos reservados.
          </p>
          
          <div className="flex gap-6">
            {footerLinks.legal.map((link, index) => (
              <a 
                key={index}
                href={link.href} 
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};