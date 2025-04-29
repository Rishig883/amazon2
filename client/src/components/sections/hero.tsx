import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  const scrollToWaitlist = () => {
    const element = document.getElementById('waitlist');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-32 md:pt-44 text-center relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto space-y-8"
      >
        <h1 className="text-4xl md:text-7xl font-bold tracking-[-0.02em] bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
          Ship better products<br />
          with less friction
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          The modern platform for product teams to plan, track, and ship world-class software.
          Transform how your team collaborates.
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg" onClick={scrollToWaitlist}>Join Waitlist</Button>
          <Button size="lg" variant="outline" onClick={scrollToWaitlist}>Learn More</Button>
        </div>
      </motion.div>

      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-radial from-primary/20 to-transparent blur-2xl" />
      </div>
    </section>
  );
}