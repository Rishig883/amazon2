import { Navbar } from "./navbar";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { DownloadFormDialog } from "@/components/download-form-dialog";
import { useToast } from "@/hooks/use-toast";
import EmailPopup from "@/components/ui/PdfPopup";

interface MainLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export function MainLayout({
  children,
  title = "Amazon360.it - Consulenza per Vendere su Amazon",
  description = "Servizi di consulenza professionale per venditori Amazon. Massimizza il tuo potenziale di vendita con strategie testate e supporto esperto.",
}: MainLayoutProps) {
  const [showConsultationForm, setShowConsultationForm] = useState(false);
  const { toast } = useToast();

  const handleFormSubmit = (data: any) => {
    console.log("Form data:", data);
    toast({
      title: "Richiesta inviata",
      description:
        "Grazie per averci contattato. Ti risponderemo al più presto!",
    });
    setShowConsultationForm(false);
  };

  const handleRequestConsultation = () => {
    setShowConsultationForm(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://amazon360.it" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <link rel="canonical" href="https://amazon360.it" />
      </Helmet>
      <Navbar onRequestConsultation={handleRequestConsultation} />

      {/* <EmailPopup /> */}

      <main className="container mx-auto px-4 pt-20">{children}</main>

      {/* Form popup per richiesta consulenza */}
      <DownloadFormDialog
        open={showConsultationForm}
        onOpenChange={setShowConsultationForm}
        pdfTitle="Consulenza Gratuita"
        onSubmit={handleFormSubmit}
      />
    </div>
  );
}
