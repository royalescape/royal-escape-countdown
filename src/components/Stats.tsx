import { Card } from "@/components/ui/card";

const Stats = () => {
  const stats = [
    { value: "500+", label: "Lucky Winners" },
    { value: "₹5 Cr+", label: "Prize Money Won" },
    { value: "50K+", label: "Active Users" },
    { value: "120+", label: "Luxury Pots Ran" },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-12 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-foreground">
        Our Offline <span className="text-gradient-sunset">Success Story</span>
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {stats.map((stat, index) => (
          <Card 
            key={stat.label}
            className="bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-sm border-primary/30 p-6 text-center hover:border-primary transition-all duration-300 hover:scale-105 glow-primary"
            style={{ animationDelay: `${0.9 + index * 0.1}s` }}
          >
            <div className="text-3xl md:text-4xl font-black text-primary mb-2">
              {stat.value}
            </div>
            <div className="text-sm md:text-base text-muted-foreground font-medium">
              {stat.label}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Stats;
