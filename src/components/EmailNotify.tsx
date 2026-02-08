import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";

const EmailNotify = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    console.log(`Saving to firebase: ${email}`);
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);
    
    // Save to Firebase
    try {
      const { saveEmailToFirebase } = await import("@/lib/firebase");
      const result = await saveEmailToFirebase(email);

      if (result.success) {
        toast.success("You're on the list! We'll notify you when we launch.", {
          description: "Get ready for exclusive rewards and experiences!"
        });
        setEmail("");
      } else {
        toast.error("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Firebase error:", error);
      toast.error("Failed to save email. Please try again.");
    }
    setIsSubmitting(false);
  };

  return (
    <section className="w-full max-w-2xl mx-auto px-6 py-12 animate-fade-in-up" style={{ animationDelay: "1s" }}>
      <Card className="bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-md border-primary/40 p-8 md:p-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-3 text-foreground">
          Get Notified at Launch
        </h2>
        <p className="text-center text-muted-foreground mb-6">
          Be the first to know when we go live and get exclusive early access benefits!
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-background/50 border-border/50 focus:border-accent text-foreground placeholder:text-muted-foreground"
            disabled={isSubmitting}
          />
          <Button 
            type="submit"
            disabled={isSubmitting}
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 glow-gold transition-all duration-300 hover:scale-105"
          >
            {isSubmitting ? "Submitting..." : "Notify Me"}
          </Button>
        </form>
      </Card>
    </section>
  );
};

export default EmailNotify;
