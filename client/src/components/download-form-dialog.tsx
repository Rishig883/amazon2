import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";

const formSchema = z.object({
  email: z.string().email("Inserisci un'email valida"),
  nome: z.string().min(2, "Il nome deve contenere almeno 2 caratteri"),
  cognome: z.string().min(2, "Il cognome deve contenere almeno 2 caratteri"),
  tipoAttivita: z.enum([
    "azienda",
    "libero_professionista",
    "privato",
    "consulente",
  ]),
  vendeAmazon: z.enum(["si", "no"]),
  telefono: z.string().optional(),
  nomeAzienda: z.string().optional(),
  messaggio: z.string().optional(),
  newsletter: z.boolean(),
  privacy: z.boolean().refine((val) => val === true, {
    message: "Devi accettare il trattamento dei dati personali",
  }),
});

interface DownloadFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  pdfTitle: string;
  onSubmit: (data: z.infer<typeof formSchema>) => void;
}

export function DownloadFormDialog({
  open,
  onOpenChange,
  pdfTitle,
  onSubmit,
}: DownloadFormDialogProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      telefono: "",
      nomeAzienda: "",
      messaggio: "",
      newsletter: false,
      privacy: false,
    },
  });

  // const handleSubmit = async (data: z.infer<typeof formSchema>) => {
  //   setIsSubmitting(true);
  //   console.log("Starting form submission...");

  //   try {
  //     // Base URL for the form
  //     // const baseUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSc804qpyQ9TJxw5TlWJuWfGAbdcf_AupK84d9ZtfEnptONgUw/formResponse';
  //     const baseUrl =
  //       "https://docs.google.com/forms/d/e/1FAIpQLSdTrG1D06OiMgzNkLpFAA-L89F30K97az8R3vfxO8wdOG88BQ/formResponse";
  //     // Create URLSearchParams with encoded values
  //     const params = new URLSearchParams();
  //     // params.append("entry.1885760751", encodeURIComponent(data.email));
  //     params.append("entry.1624591584", encodeURIComponent(data.email));
  //     params.append("entry.1951763844", encodeURIComponent(data.nome));
  //     params.append("entry.1139173968", encodeURIComponent(data.cognome));
  //     params.append("entry.1355567222", encodeURIComponent(data.tipoAttivita));
  //     params.append("entry.1491046741", encodeURIComponent(data.vendeAmazon));
  //     params.append(
  //       "entry.1208347725",
  //       encodeURIComponent(data.newsletter ? "Sì" : "No")
  //     );
  //     params.append("entry.1452649740", encodeURIComponent(pdfTitle));

  //     // Nuovi campi
  //     if (data.telefono)
  //       params.append("entry.telefono", encodeURIComponent(data.telefono));
  //     if (data.nomeAzienda)
  //       params.append(
  //         "entry.nomeAzienda",
  //         encodeURIComponent(data.nomeAzienda)
  //       );
  //     if (data.messaggio)
  //       params.append("entry.messaggio", encodeURIComponent(data.messaggio));

  //     // Construct final URL
  //     const finalUrl = `${baseUrl}?${params.toString()}`;

  //     // Log the constructed URL for debugging
  //     console.log("Submitting to URL:", finalUrl);
  //     console.log("Form data:", data);

  //     // Open the form in a new tab
  //     window.open(finalUrl, "_blank");

  //     // Call the original onSubmit handler
  //     onSubmit(data);
  //   } catch (error) {
  //     console.error("Error submitting form:", error);
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

  const handleSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    console.log("Starting form submission...");

    try {
      // Replace this with your actual Google Apps Script URL
      const scriptUrl =
        "https://script.google.com/macros/s/AKfycby56dNUb0CBptOjtfo3Tw1Ad1WN4eY1A8pABxfjHj2UQGHz_BwVvHsbTJV_zXeZylzi/exec";

      // Only send the fields you want
      const body = {
        email: data.email,
        nome: data.nome,
        cognome: data.cognome,
        tipoAttivita: data.tipoAttivita,
        vendeAmazon: data.vendeAmazon,
        newsletter: data.newsletter ? "Sì" : "No",
        pdfTitle: pdfTitle,
        telefono: data.telefono || "",
        nomeAzienda: data.nomeAzienda || "",
        messaggio: data.messaggio || "",
      };

      const response = await fetch(scriptUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      console.log("Form submitted to Google Sheets");
      onSubmit(data); // Call your original onSubmit handler
      console.log(data);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {pdfTitle === "Consulenza Gratuita"
              ? "Richiedi una consulenza gratuita"
              : pdfTitle === "Newsletter"
              ? "Iscriviti alla newsletter"
              : "Conosciamoci meglio"}
          </DialogTitle>
          <p className="text-sm text-muted-foreground">
            {pdfTitle === "Consulenza Gratuita"
              ? "Compila il modulo per richiedere una consulenza gratuita"
              : pdfTitle === "Newsletter"
              ? "Ricevi aggiornamenti e novità sul mondo Amazon"
              : "Aiutaci a darti le informazioni più utili per te"}
          </p>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-4"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="La tua email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="telefono"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Numero di telefono (opzionale)</FormLabel>
                  <FormControl>
                    <Input placeholder="Il tuo numero di telefono" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="nome"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input placeholder="Il tuo nome" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="cognome"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cognome</FormLabel>
                  <FormControl>
                    <Input placeholder="Il tuo cognome" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="nomeAzienda"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome azienda (opzionale)</FormLabel>
                  <FormControl>
                    <Input placeholder="Nome della tua azienda" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="tipoAttivita"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tipo di attività</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Seleziona il tipo di attività" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="azienda">Azienda</SelectItem>
                      <SelectItem value="libero_professionista">
                        Libero Professionista
                      </SelectItem>
                      <SelectItem value="privato">Privato</SelectItem>
                      <SelectItem value="consulente">Consulente</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="vendeAmazon"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Vendi già su Amazon?</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Seleziona" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="si">Sì</SelectItem>
                      <SelectItem value="no">No</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="messaggio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Messaggio (opzionale)</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Il tuo messaggio"
                      {...field}
                      className="min-h-[100px]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="newsletter"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Desidero iscrivermi alla newsletter</FormLabel>
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="privacy"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      Acconsento al trattamento dei dati personali
                    </FormLabel>
                  </div>
                </FormItem>
              )}
            />
            {pdfTitle !== "Consulenza Gratuita" && (
              <p className="text-sm text-muted-foreground text-center mt-2">
                Riceverai il PDF via email.
              </p>
            )}
            <Button
              type="submit"
              className="w-full mt-2"
              disabled={isSubmitting}
            >
              {isSubmitting
                ? "Invio in corso..."
                : pdfTitle === "Consulenza Gratuita"
                ? "Invia la richiesta"
                : pdfTitle === "Newsletter"
                ? "Iscriviti alla Newsletter"
                : `Scarica ${pdfTitle}`}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
