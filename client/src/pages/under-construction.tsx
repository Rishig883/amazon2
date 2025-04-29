import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function UnderConstruction() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full text-center space-y-8"
      >
        <div className="flex justify-center mb-8">
          <img
            src="/logo.png"
            alt="Amazon360.it"
            className="h-12 w-auto brightness-0 invert"
          />
        </div>
        <h1 className="text-4xl font-bold">Sezione in costruzione</h1>
        <p className="text-xl text-foreground/60">
          Stiamo lavorando per migliorare il nostro sito. Questa sezione sarà presto disponibile.
        </p>
        <Link href="/">
          <Button className="px-8 py-6 text-lg w-full">
            Torna alla Home
          </Button>
        </Link>
      </motion.div>
    </div>
  );
}