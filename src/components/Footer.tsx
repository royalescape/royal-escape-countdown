import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com/royalescape", label: "Instagram" },
    { icon: Facebook, href: "https://facebook.com/royalescape", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com/royalescape", label: "Twitter" },
  ];

  return (
    <footer className="w-full py-8 px-6 border-t border-border/30 animate-fade-in" style={{ animationDelay: "1.2s" }}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <p className="text-sm text-muted-foreground">
            © 2025 Royal Escape. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Dream it. Achieve it.
          </p>
        </div>
        
        <div className="flex gap-4">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-card/80 border border-border/50 flex items-center justify-center hover:border-accent hover:bg-accent/20 transition-all duration-300 hover:scale-110 glow-gold"
              >
                <Icon className="w-5 h-5 text-foreground" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
