import { motion } from "framer-motion";
import { ArrowUpRight, Activity, BarChart3, Zap } from "lucide-react";

const features = [
  {
    icon: Activity,
    title: "Seamless Workflow",
    description: "Streamline your development process with intuitive project and task management tools."
  },
  {
    icon: BarChart3,
    title: "Data-Driven Insights",
    description: "Make informed decisions with powerful analytics and progress tracking features."
  },
  {
    icon: Zap,
    title: "Modern Experience",
    description: "Enjoy a fast, responsive interface designed for today's product teams."
  }
];

export default function Features() {
  return (
    <section id="features" className="relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="grid md:grid-cols-3 gap-8"
      >
        {features.map((feature, index) => (
          <div
            key={index}
            className="group p-8 bg-card/50 rounded-lg border border-border/50 hover:border-primary/50 transition-colors"
          >
            <feature.icon className="h-8 w-8 mb-4" />
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              {feature.title}
              <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}