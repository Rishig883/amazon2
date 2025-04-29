import { Link } from "wouter";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  onRequestConsultation?: () => void;
}

export function Navbar({ onRequestConsultation }: NavbarProps) {
  return (
    <nav className="fixed top-0 w-full border-b border-primary bg-background z-50">
      <div className="container mx-auto px-4 flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <img
            src="/amazon360.it_last.png"
            alt="Amazon360.it"
            className="h-64 w-auto brightness-0 invert"
          />
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-6">
          <Link
            href="/blog"
            className="text-foreground/60 hover:text-foreground"
          >
            Blog
          </Link>
          <Link
            href="/successi-clienti"
            className="text-foreground/60 hover:text-foreground"
          >
            Storie di Successo
          </Link>
          <Link
            href="/consulenza-amazon"
            className="text-foreground/60 hover:text-foreground"
          >
            Consulenza Amazon
          </Link>
          <Link
            href="/servizi-ecommerce"
            className="text-foreground/60 hover:text-foreground"
          >
            Servizi E-commerce
          </Link>
          <Button
            variant="outline"
            className="text-foreground hover:text-primary"
            onClick={onRequestConsultation}
          >
            Richiedi Consulenza
          </Button>
        </div>
      </div>
    </nav>
  );
}
