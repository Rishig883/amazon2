import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Nav() {
  const scrollToWaitlist = () => {
    const element = document.getElementById('waitlist');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b border-border/40"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="font-bold text-xl">ProductFlow</div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
          <a href="#methods" className="text-muted-foreground hover:text-foreground transition-colors">Method</a>
          <a href="#waitlist" className="text-muted-foreground hover:text-foreground transition-colors">Join Waitlist</a>
        </div>
        <Button variant="default" size="sm" onClick={scrollToWaitlist}>Join Waitlist</Button>
      </div>
    </motion.nav>
  );
}