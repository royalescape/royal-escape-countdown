import logo from "@/assets/logo.png";

const Hero = () => {
  return (
    <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-12 animate-fade-in">
      <div className="mb-8 animate-pulse-glow">
        <img 
          src={logo} 
          alt="Royal Escape Logo" 
          className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 rounded-full border-4 border-accent glow-gold"
        />
      </div>
      
      <div className="max-w-4xl space-y-6">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-wider uppercase text-gradient-gold animate-fade-in-up">
          Launching Soon
        </h1>
        
        <div className="space-y-2 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <p className="text-3xl md:text-4xl lg:text-5xl font-bold">
            <span className="text-gradient-sunset">Offline Success,</span>
          </p>
          <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Online Launching Soon
          </p>
        </div>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          After immense success offline, Royal Escape is launching online soon! 
          Get ready for exclusive rewards and experiences to turn your aspirations into reality.
        </p>
      </div>
    </section>
  );
};

export default Hero;
