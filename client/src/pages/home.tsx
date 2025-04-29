import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { DownloadFormDialog } from "@/components/download-form-dialog";
import { useToast } from "@/hooks/use-toast";

export default function Home() {
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);
  const { toast } = useToast();

  const handleFormSubmit = async (data: any) => {
    console.log("Form data:", data);
    toast({
      title: "Download iniziato",
      description: "Grazie per aver scaricato la nostra guida!",
    });
    setSelectedPdf(null);
  };

  return (
    <div className="min-h-screen">
      <div className="relative">
        {/* Hero Section */}
        <section className="py-12 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto text-center space-y-8"
            >
              <div className="flex justify-center mb-0">
                <img
                  src="/amazon360.it_last.png"
                  alt="Amazon360.it"
                  className="h-96 w-auto brightness-0 invert"
                />
              </div>
              <h1 className="text-5xl font-bold leading-tight">
                Raggiungi Milioni di clienti
              </h1>
              <p className="text-3xl text-primary">
                310 milioni di clienti attivi in tutto il mondo. Sfrutta la
                potenza commerciale del più grande marketplace di sempre
              </p>
              <p className="text-xl text-foreground/60">
                Non siamo semplici consulenti, ma imprenditori che vendono in
                Amazon ogni giorno. Data la nostra attività quotidiana nella
                piattaforma ci permettiamo di selezionare e supportare solo
                progetti con vero potenziale.
              </p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="pt-4"
              >
                <Button
                  size="lg"
                  className="px-8 py-6 text-lg"
                  onClick={() => setSelectedPdf("Consulenza Gratuita")}
                >
                  Richiedi il nostro parere gratuitamente
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-5xl font-bold">
                Resta Aggiornato sul Mondo Amazon
              </h2>
              <p className="text-3xl text-primary font-semibold">
                Iscriviti alla nostra Newsletter Gratuita
              </p>
              <p className="text-xl text-foreground/60">
                Una volta al mese ti invieremo contenuti esclusivi:
              </p>
              <ul className="text-left space-y-2 text-foreground/60 text-lg">
                <li>• Novità dal mondo Amazon</li>
                <li>• Consigli pratici per venditori</li>
                <li>• Case study di successo</li>
                <li>• Trend e opportunità nel mondo e-commerce</li>
              </ul>
              <p className="text-foreground/60 text-lg">
                Come regalo di benvenuto, riceverai subito la nostra guida
                gratuita:
                <br />
                <span className="text-primary font-semibold">
                  "5 errori da non fare prima di aprire l'account Amazon"
                </span>
              </p>
              <Button
                className="w-full md:w-auto px-8 py-6 text-lg"
                onClick={() => setSelectedPdf("Newsletter")}
              >
                Iscriviti Ora
              </Button>
            </div>
          </div>
        </section>

        {/* Risorse Gratuite Section */}
        <section className="py-20 bg-foreground/5">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">
              Risorse Gratuite per Vendere su Amazon
            </h2>
            <p className="text-center text-foreground/60 max-w-2xl mx-auto mb-12">
              Scarica le nostre guide gratuite basate sulla nostra esperienza
              diretta come venditori Amazon
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 rounded-lg bg-background shadow-lg">
                <h3 className="text-xl font-semibold mb-4">
                  10 Consigli per Vendere su Amazon
                </h3>
                <p className="text-foreground/60 mb-4">
                  Strategie testate sul campo per aumentare le tue vendite
                </p>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() =>
                    setSelectedPdf("10 Consigli per Vendere su Amazon")
                  }
                >
                  Scarica PDF
                </Button>
              </div>
              <div className="p-6 rounded-lg bg-background shadow-lg">
                <h3 className="text-xl font-semibold mb-4">
                  FBA vs FBM: Guida Completa
                </h3>
                <p className="text-foreground/60 mb-4">
                  Quale modello logistico è migliore per il tuo business?
                </p>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => setSelectedPdf("FBA vs FBM: Guida Completa")}
                >
                  Scarica PDF
                </Button>
              </div>
              <div className="p-6 rounded-lg bg-background shadow-lg">
                <h3 className="text-xl font-semibold mb-4">
                  La Nostra Esperienza Amazon
                </h3>
                <p className="text-foreground/60 mb-4">
                  Case study dei nostri brand di successo
                </p>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => setSelectedPdf("La Nostra Esperienza Amazon")}
                >
                  Scarica PDF
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Servizi Section */}
        <section className="py-20 bg-foreground/5">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              I Nostri Servizi
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div
                className="p-6 rounded-lg bg-background/50 backdrop-blur cursor-pointer hover:shadow-lg hover:border hover:border-primary/20 transition-all"
                onClick={() => setSelectedPdf("Consulenza Gratuita")}
              >
                <h3 className="text-xl font-semibold mb-4">
                  Consulenza Amazon
                </h3>
                <p className="text-foreground/60">
                  Strategia personalizzata basata sulla nostra esperienza
                  diretta come venditori in prima linea
                </p>
              </div>
              <div
                className="p-6 rounded-lg bg-background/50 backdrop-blur cursor-pointer hover:shadow-lg hover:border hover:border-primary/20 transition-all"
                onClick={() => setSelectedPdf("Consulenza Gratuita")}
              >
                <h3 className="text-xl font-semibold mb-4">Gestione Account</h3>
                <p className="text-foreground/60">
                  Supporto completo nella gestione del tuo account venditore
                  Amazon
                </p>
              </div>
              <div
                className="p-6 rounded-lg bg-background/50 backdrop-blur cursor-pointer hover:shadow-lg hover:border hover:border-primary/20 transition-all"
                onClick={() => setSelectedPdf("Consulenza Gratuita")}
              >
                <h3 className="text-xl font-semibold mb-4">
                  Ottimizzazione Listing
                </h3>
                <p className="text-foreground/60">
                  Miglioramento delle inserzioni per massimizzare la visibilità
                  e le conversioni
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <DownloadFormDialog
        open={!!selectedPdf}
        onOpenChange={(open) => !open && setSelectedPdf(null)}
        pdfTitle={selectedPdf || ""}
        onSubmit={handleFormSubmit}
      />
    </div>
  );
}
