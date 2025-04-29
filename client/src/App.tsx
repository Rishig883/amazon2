import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { MainLayout } from "@/components/layout/main-layout";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import UnderConstruction from "@/pages/under-construction";
import { HelmetProvider } from 'react-helmet-async';

function Router() {
  return (
    <MainLayout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/blog" component={UnderConstruction} />
        <Route path="/successi-clienti" component={UnderConstruction} />
        <Route path="/consulenza-amazon" component={UnderConstruction} />
        <Route path="/servizi-ecommerce" component={UnderConstruction} />
        <Route component={NotFound} />
      </Switch>
    </MainLayout>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <Router />
        <Toaster />
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;