import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-02-02T00:00:00").getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ];

  return (
    <section className="w-full max-w-4xl mx-auto px-6 py-8 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {timeUnits.map((unit, index) => (
          <Card 
            key={unit.label}
            className="bg-card/80 backdrop-blur-sm border-border/50 p-6 text-center hover:border-accent/50 transition-all duration-300 hover:scale-105"
            style={{ animationDelay: `${0.7 + index * 0.1}s` }}
          >
            <div className="text-4xl md:text-5xl lg:text-6xl font-black text-gradient-gold mb-2">
              {String(unit.value).padStart(2, "0")}
            </div>
            <div className="text-sm md:text-base text-muted-foreground uppercase tracking-wider font-semibold">
              {unit.label}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Countdown;
