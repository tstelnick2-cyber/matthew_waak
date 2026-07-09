import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className="relative min-h-screen bg-background text-foreground overflow-hidden">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-40 px-8 py-6 flex justify-between items-center mix-blend-difference">
        <div className="font-serif font-bold text-xl tracking-tighter uppercase text-white">MW.</div>
        <div className="hidden md:flex gap-8 text-xs font-semibold tracking-widest uppercase text-white/70">
          <a href="#services" className="hover:text-primary transition-colors">Services</a>
          <a href="#philosophy" className="hover:text-primary transition-colors">Philosophy</a>
          <a href="#engagements" className="hover:text-primary transition-colors">Engagements</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>
      </nav>

      {/* Intro Section - Non-standard Hero */}
      <section className="relative h-screen w-full flex flex-col md:flex-row items-center justify-center architectural-grid pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/abstract-architecture.png" 
            alt="Abstract architectural lines" 
            className="w-full h-full object-cover opacity-20 object-right"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-8 flex flex-col md:flex-row h-full">
          {/* Left / Typographic Block */}
          <div className="flex-1 flex flex-col justify-center h-full pt-10 md:pt-0">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-primary text-xs tracking-[0.3em] font-bold uppercase mb-8 flex items-center gap-4">
                <span className="w-12 h-px bg-primary block"></span>
                Executive Advisory
              </h2>
              
              <h1 className="text-5xl md:text-8xl lg:text-9xl font-serif font-bold leading-[0.85] tracking-tighter uppercase mb-6 text-foreground">
                Precision<br />
                <span className="text-muted-foreground/40">Over</span><br />
                Polish.
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-md font-light leading-relaxed mb-12">
                The advisor Fortune 500 executives call when conventional strategy firms fail. Focused, assured, and quietly transformative.
              </p>

              <Button 
                className="rounded-none bg-primary text-primary-foreground hover:bg-white transition-colors h-14 px-8 font-bold uppercase tracking-widest text-xs"
              >
                Initiate Contact <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
          </div>
          
          {/* Right / Asymmetric Element */}
          <div className="hidden md:flex w-1/4 h-full flex-col justify-end pb-24 items-end relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full aspect-[3/4] overflow-hidden"
            >
              <img 
                src="/images/precision-texture.png" 
                alt="Precision steel and glass" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 border border-white/10 m-4" />
            </motion.div>
            
            <div className="absolute bottom-12 right-0 flex items-center gap-4 rotate-90 origin-bottom-right translate-x-full text-xs tracking-widest uppercase text-muted-foreground">
              Scroll to explore <ChevronDown className="w-3 h-3 -rotate-90" />
            </div>
          </div>
        </div>
      </section>

      {/* Services / Capabilities */}
      <section id="services" className="py-32 relative border-t border-border">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
            <div className="md:col-span-4 flex flex-col justify-between">
              <div>
                <h2 className="text-xs tracking-[0.3em] font-bold text-primary uppercase mb-4">Capabilities</h2>
                <h3 className="font-serif text-4xl md:text-5xl font-bold leading-tight tracking-tight">Surgical Intervention for Complex Enterprises.</h3>
              </div>
              <p className="text-muted-foreground mt-8 md:mt-0 font-light leading-relaxed">
                I do not deliver 200-page slide decks. I deliver decisive action plans and operational restructuring that shifts trajectories within 90 days.
              </p>
            </div>
            
            <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-px bg-border">
              {[
                { title: "Operational Turnarounds", desc: "Arresting decline and restructuring operations to stabilize cash flow and restore enterprise value." },
                { title: "Strategic Planning", desc: "Defining clear, actionable vectors for growth when market conditions render historical models obsolete." },
                { title: "Organizational Design", desc: "Rebuilding executive layers and reporting structures to eliminate friction and accelerate execution." },
                { title: "Executive Advisory", desc: "Private, unfiltered counsel for CEOs navigating high-stakes transitions, acquisitions, or crises." }
              ].map((service, i) => (
                <div key={i} className="bg-background p-10 hover:bg-card/50 transition-colors group">
                  <div className="text-primary/50 text-sm font-bold mb-6 font-serif">0{i + 1}</div>
                  <h4 className="text-2xl font-serif font-bold mb-4 group-hover:text-primary transition-colors">{service.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy / How He Works */}
      <section id="philosophy" className="py-32 bg-card relative overflow-hidden">
        <div className="absolute -left-1/4 top-0 w-1/2 h-full opacity-5 pointer-events-none">
          <img src="/images/abstract-architecture.png" className="w-full h-full object-cover" alt="" />
        </div>
        
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="mb-20">
            <h2 className="text-xs tracking-[0.3em] font-bold text-primary uppercase mb-4">Methodology</h2>
            <h3 className="font-serif text-4xl md:text-6xl font-bold leading-tight tracking-tight max-w-3xl">The anatomy of<br />effective execution.</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                step: "I.",
                title: "Diagnosis without delusion.",
                content: "Before we prescribe, we face reality. We bypass corporate theater to locate the actual friction points destroying value."
              },
              {
                step: "II.",
                title: "Asymmetric leverage.",
                content: "We ignore the 80% of operations that are 'fine' and ruthlessly optimize the 20% that dictate market dominance."
              },
              {
                step: "III.",
                title: "Relentless velocity.",
                content: "Speed is a defensive moat. We compress 18-month transformation timelines into 90-day execution sprints."
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                className="relative"
              >
                <div className="text-6xl font-serif font-bold text-border absolute -top-8 -left-4 -z-10">{item.step}</div>
                <div className="pt-8 border-t border-border/50">
                  <h4 className="text-xl font-bold font-serif mb-4">{item.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.content}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Engagements */}
      <section id="engagements" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <h2 className="text-xs tracking-[0.3em] font-bold text-primary uppercase mb-4">Social Proof</h2>
              <h3 className="font-serif text-4xl md:text-5xl font-bold leading-tight tracking-tight">Outcomes, not<br />observations.</h3>
            </div>
            <p className="text-muted-foreground max-w-sm text-sm">
              Due to the nature of this advisory, client identities are strictly confidential. Metrics are absolute.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {[
              { sector: "Global Logistics", metric: "+$420M", label: "Enterprise Value Created", desc: "Post-merger integration rescue. Realigned executive leadership and consolidated redundant operational nodes within 120 days." },
              { sector: "SaaS Enterprise", metric: "38%", label: "Margin Expansion", desc: "Transitioned from growth-at-all-costs to sustainable profitability ahead of a successful Series D raise." },
              { sector: "Manufacturing", metric: "-60%", label: "Cycle Time Reduction", desc: "Complete architectural overhaul of supply chain protocols and vendor management systems." }
            ].map((caseStudy, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="group border border-border p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 hover:border-primary/50 transition-colors bg-card/20"
              >
                <div className="flex-1">
                  <div className="text-xs tracking-widest text-muted-foreground uppercase mb-2">{caseStudy.sector}</div>
                  <p className="text-sm text-foreground/80 max-w-lg leading-relaxed">{caseStudy.desc}</p>
                </div>
                <div className="md:text-right flex-shrink-0">
                  <div className="text-4xl md:text-5xl font-serif font-bold text-primary tracking-tighter">{caseStudy.metric}</div>
                  <div className="text-xs tracking-widest text-muted-foreground uppercase mt-1">{caseStudy.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About & Contact */}
      <section id="contact" className="relative border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-12 md:p-24 lg:p-32 flex flex-col justify-center">
            <h2 className="font-serif text-3xl font-bold mb-8">About Matthew.</h2>
            <p className="text-muted-foreground mb-6 font-light leading-relaxed">
              For over two decades, I have operated in the shadows of the world's most demanding boardrooms. I do not run an agency. I do not delegate to junior partners. When you hire me, you get my undivided attention and absolute discretion.
            </p>
            <p className="text-muted-foreground mb-16 font-light leading-relaxed">
              My approach is not for everyone. It requires a willingness to hear uncomfortable truths and the courage to act on them immediately.
            </p>
            
            <div className="border-t border-border pt-12">
              <h3 className="text-xs tracking-[0.3em] font-bold text-primary uppercase mb-6">Engagement Inquiry</h3>
              <p className="text-sm text-muted-foreground mb-8">
                Currently accepting new engagements for Q3. Please provide executive summary of the situation.
              </p>
              <Button className="w-full sm:w-auto rounded-none bg-primary text-primary-foreground hover:bg-white transition-colors h-14 px-10 font-bold uppercase tracking-widest text-xs">
                Request Consultation
              </Button>
            </div>
          </div>
          
          <div className="relative min-h-[50vh] md:min-h-full">
            <img 
              src="/images/moody-city.png" 
              alt="Night city from highrise" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-background/80 md:from-transparent to-background" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-xs tracking-widest text-muted-foreground uppercase border-t border-border">
        &copy; {new Date().getFullYear()} Matthew Waak. All Rights Reserved.
      </footer>
    </div>
  );
}
