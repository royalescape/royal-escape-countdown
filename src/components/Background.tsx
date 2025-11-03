import logo from "@/assets/logo.png";

const Background = () => {
  return (
    <>
      {/* Gradient Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-background via-[hsl(210,80%,8%)] to-[hsl(215,70%,10%)] -z-20" />
      
      {/* Animated gradient orbs */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float -z-10" />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float -z-10" style={{ animationDelay: "2s" }} />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl animate-pulse -z-10" />
      
      {/* Watermark Logo */}
      <div 
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[80vh] max-h-[80vw] opacity-[0.03] pointer-events-none -z-15"
        style={{
          backgroundImage: `url(${logo})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      
      {/* Noise texture overlay */}
      <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-40 -z-19" />
    </>
  );
};

export default Background;
