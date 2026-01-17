"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { SmokeBackground } from "@/components/SmokeBackground";
import { ChevronRight, Mail, Phone, MapPin, Scale, Shield, Gavel, Building2, Users, Globe, Award, BookOpen, Briefcase } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1];

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Hero />
      <Manifesto />
      <HorizontalScroll />
      <Partners />
      <Practice />
      <Timeline />
      <Values />
      <Testimonials />
      <Awards />
      <Contacts />
      <Footer />
    </main>
  );
}

function Hero() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  return (
    <section ref={container} className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      <SmokeBackground />
      
      <motion.div 
        style={{ y, opacity, scale }}
        className="relative z-10 text-center"
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "120px" }}
          transition={{ duration: 1.5, delay: 0.2, ease: EASE }}
          className="h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-12"
        />
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: EASE }}
          className="text-xs uppercase tracking-[0.5em] text-gold mb-8"
        >
          Адвокатское бюро
        </motion.p>
        
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.8, ease: EASE }}
            className="text-6xl md:text-9xl font-serif text-ivory tracking-[-0.02em]"
          >
            ШЕРИЕВ
          </motion.h1>
        </div>
        
        <div className="overflow-hidden">
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2, ease: EASE }}
            className="text-4xl md:text-6xl font-serif italic text-ivory/60 -mt-2"
          >
            и Партнеры
          </motion.p>
        </div>
        
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "120px" }}
          transition={{ duration: 1.5, delay: 1.5, ease: EASE }}
          className="h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-12"
        />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-ivory/30">Прокрутите</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-16 bg-gradient-to-b from-gold/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}

function Manifesto() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const text = "У истоков Коллегии стоят профессионалы, объединенные стремлением к безупречному качеству юридической помощи. Мы не просто решаем задачи — мы создаем прецеденты и защищаем будущее наших доверителей в мире, где право является высшей ценностью.";

  return (
    <section ref={container} className="min-h-screen py-48 px-6 md:px-24 bg-wine/20 relative overflow-hidden flex items-center">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.03 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-serif text-ivory pointer-events-none select-none"
      >
        §
      </motion.div>
      
      <div className="max-w-5xl mx-auto relative">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-xs uppercase tracking-[0.4em] text-gold mb-16"
        >
          Наша философия
        </motion.p>
        
        <p className="font-serif text-3xl md:text-5xl leading-[1.4]">
          {text.split(" ").map((word, i) => (
            <Word key={i} range={[i / text.split(" ").length, (i + 1) / text.split(" ").length]} progress={scrollYProgress}>
              {word}
            </Word>
          ))}
        </p>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
    </section>
  );
}

function Word({ children, range, progress }: { children: string; range: [number, number]; progress: any }) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const color = useTransform(progress, range, ["rgba(243, 239, 234, 0.15)", "rgba(243, 239, 234, 1)"]);
  const textShadow = useTransform(progress, range, ["0 0 0px rgba(194, 163, 94, 0)", "0 0 30px rgba(194, 163, 94, 0.3)"]);

  return (
    <motion.span
      style={{ opacity, color, textShadow }}
      className="inline-block mr-[0.3em]"
    >
      {children}
    </motion.span>
  );
}

function HorizontalScroll() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.666%"]);

  const slides = [
    {
      num: "01",
      title: "Безупречная репутация",
      desc: "Более двух десятилетий мы строим отношения, основанные на доверии и профессионализме",
      icon: Shield,
    },
    {
      num: "02", 
      title: "Индивидуальный подход",
      desc: "Каждое дело уникально. Мы разрабатываем стратегию, учитывая все нюансы вашей ситуации",
      icon: Users,
    },
    {
      num: "03",
      title: "Конфиденциальность",
      desc: "Адвокатская тайна — основа нашей работы. Ваша информация под абсолютной защитой",
      icon: BookOpen,
    },
  ];

  return (
    <section ref={container} className="h-[300vh] relative">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden bg-void">
        <motion.div style={{ x }} className="flex">
          {slides.map((slide, i) => (
            <div key={i} className="w-screen h-screen flex-shrink-0 flex items-center justify-center px-6 md:px-24">
              <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div>
                  <span className="text-8xl md:text-[12rem] font-serif gold-gradient opacity-20">{slide.num}</span>
                </div>
                <div>
                  <slide.icon className="w-12 h-12 text-gold/40 mb-8" strokeWidth={1} />
                  <h3 className="text-4xl md:text-5xl font-serif text-ivory mb-6">{slide.title}</h3>
                  <p className="text-lg text-ivory/50 leading-relaxed">{slide.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
        
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3">
          {slides.map((_, i) => (
            <motion.div
              key={i}
              className="w-12 h-px bg-gold/20"
              style={{
                scaleX: useTransform(scrollYProgress, [(i) / 3, (i + 1) / 3], [0, 1]),
                transformOrigin: "left",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Partners() {
  const partners = [
    {
      name: "Шериев",
      surname: "Ахмед Назирович",
      role: "Председатель Коллегии, адвокат",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
    },
    {
      name: "Юрьев",
      surname: "Михаил Владимирович",
      role: "Заместитель председателя, руководитель уголовной практики",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop",
    },
    {
      name: "Симонов",
      surname: "Дмитрий Александрович",
      role: "Адвокат по семейным и страховым спорам",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop",
    },
  ];

  return (
    <section className="py-32 px-6 overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(22,8,10,0.5)_0%,transparent_70%)]" />
      
      <div className="max-w-7xl mx-auto relative">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-24">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: EASE }}
            className="text-5xl md:text-7xl font-serif text-ivory"
          >
            Галерея<br /><span className="italic text-ivory/60">Экспертизы</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-ivory/40 max-w-xs mt-8 md:mt-0"
          >
            Команда профессионалов с многолетним опытом в различных отраслях права
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {partners.map((p, i) => (
            <PartnerCard key={i} partner={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PartnerCard({ partner, index }: { partner: any; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [5, -5]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-5, 5]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) / rect.width);
    y.set((e.clientY - centerY) / rect.height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: index * 0.15, ease: EASE }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group relative h-[550px] overflow-hidden bg-wine/10 cursor-none perspective-1000"
    >
      <div className="absolute inset-0">
        <motion.img
          animate={{ scale: isHovered ? 1.08 : 1 }}
          transition={{ duration: 0.8, ease: EASE }}
          src={partner.image}
          alt={partner.name}
          className="w-full h-full object-cover grayscale brightness-[0.6] contrast-[1.1]"
          style={{
            filter: isHovered ? "grayscale(0%) sepia(15%) brightness(0.75)" : "grayscale(100%) brightness(0.6) contrast(1.1)",
            transition: "filter 0.8s cubic-bezier(0.22, 1, 0.36, 1)"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-void/90 via-transparent to-transparent" />
      </div>

      <svg className="absolute inset-3 w-[calc(100%-24px)] h-[calc(100%-24px)] pointer-events-none">
        <motion.rect
          x="0" y="0"
          width="100%" height="100%"
          fill="none"
          stroke="url(#goldGradient)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: isHovered ? 1 : 0, opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 1.2, ease: EASE }}
        />
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C2A35E" />
            <stop offset="100%" stopColor="#AA8E4A" />
          </linearGradient>
        </defs>
      </svg>

      <div className="absolute bottom-8 left-8 right-8" style={{ transform: "translateZ(20px)" }}>
        <motion.div
          animate={{ y: isHovered ? 0 : 10, opacity: isHovered ? 1 : 0.7 }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <p className="text-gold text-xs uppercase tracking-[0.3em] mb-3">{partner.name}</p>
        </motion.div>
        <h3 className="text-3xl font-serif text-ivory leading-tight mb-4">{partner.surname}</h3>
        <motion.p
          animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-sm text-ivory/60 leading-relaxed"
        >
          {partner.role}
        </motion.p>
      </div>
    </motion.div>
  );
}

function Practice() {
  const services = [
    { title: "Арбитражные споры", num: "I", icon: Scale },
    { title: "Уголовные дела", num: "II", icon: Gavel },
    { title: "Банкротство", num: "III", icon: Building2 },
    { title: "Семейное право", num: "IV", icon: Users },
    { title: "Налоговое сопровождение", num: "V", icon: Briefcase },
    { title: "Международный арбитраж", num: "VI", icon: Globe },
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-32 px-6 bg-wine/10 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
      
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-xs uppercase tracking-[0.4em] text-gold mb-6"
            >
              Ключевые практики
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-serif text-ivory"
            >
              Области <span className="italic">права</span>
            </motion.h2>
          </div>
        </div>
        
        <div className="space-y-0">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08, duration: 0.6, ease: EASE }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative py-8 border-b border-gold/10 flex items-center justify-between cursor-pointer overflow-hidden"
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-wine/80 to-wine/40 -z-10"
                  initial={{ x: "-100%" }}
                  animate={{ x: hoveredIndex === i ? "0%" : "-100%" }}
                  transition={{ duration: 0.6, ease: EASE }}
                />
                
                <div className="flex items-center gap-6 md:gap-10 z-10">
                  <motion.span 
                    className="text-gold font-serif text-xl w-8"
                    animate={{ opacity: hoveredIndex === i ? 1 : 0.3 }}
                    transition={{ duration: 0.4 }}
                  >
                    {s.num}
                  </motion.span>
                  
                  <motion.div
                    animate={{ 
                      opacity: hoveredIndex === i ? 1 : 0,
                      scale: hoveredIndex === i ? 1 : 0.8,
                      x: hoveredIndex === i ? 0 : -10
                    }}
                    transition={{ duration: 0.4, ease: EASE }}
                  >
                    <Icon className="w-5 h-5 text-gold/60" strokeWidth={1.5} />
                  </motion.div>
                  
                  <motion.h3 
                    className="text-2xl md:text-3xl font-serif text-ivory/70"
                    animate={{ 
                      x: hoveredIndex === i ? 8 : 0,
                      color: hoveredIndex === i ? "rgba(243, 239, 234, 1)" : "rgba(243, 239, 234, 0.7)"
                    }}
                    transition={{ duration: 0.4, ease: EASE }}
                  >
                    {s.title}
                  </motion.h3>
                </div>
                
                <motion.div
                  animate={{ 
                    x: hoveredIndex === i ? 0 : -20,
                    opacity: hoveredIndex === i ? 1 : 0
                  }}
                  transition={{ duration: 0.4, ease: EASE }}
                  className="z-10"
                >
                  <ChevronRight className="text-gold w-6 h-6" />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Timeline() {
  const milestones = [
    { year: "2002", event: "Основание коллегии адвокатов" },
    { year: "2008", event: "Открытие практики международного арбитража" },
    { year: "2014", event: "Признание лидером рынка по версии Legal 500" },
    { year: "2019", event: "Запуск направления цифрового права" },
    { year: "2024", event: "20+ лет безупречной репутации" },
  ];

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  return (
    <section ref={container} className="py-32 px-6 bg-void relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-5xl md:text-6xl font-serif text-ivory text-center mb-24"
        >
          История <span className="italic">успеха</span>
        </motion.h2>

        <div className="relative">
          <motion.div 
            className="absolute left-1/2 top-0 bottom-0 w-px bg-gold/20"
            style={{ scaleY: scrollYProgress, transformOrigin: "top" }}
          />
          
          {milestones.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: EASE }}
              className={`relative flex items-center mb-16 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              <div className={`flex-1 ${i % 2 === 0 ? "md:text-right md:pr-16" : "md:text-left md:pl-16"}`}>
                <span className="text-6xl md:text-7xl font-serif gold-gradient">{m.year}</span>
                <p className="text-ivory/60 mt-4 text-lg">{m.event}</p>
              </div>
              
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-void border-2 border-gold z-10" />
              
              <div className="flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Values() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ["5%", "-15%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-5%", "15%"]);

  return (
    <section ref={container} className="relative py-48 overflow-hidden bg-wine/10">
      <div className="absolute inset-0 flex flex-col justify-center gap-8 pointer-events-none select-none overflow-hidden">
        <motion.div style={{ x: x1 }} className="whitespace-nowrap opacity-[0.025]">
          <span className="text-[18vw] font-serif text-ivory">ПРОФЕССИОНАЛИЗМ • ОПЫТ • ЧЕСТЬ •</span>
        </motion.div>
        <motion.div style={{ x: x2 }} className="whitespace-nowrap opacity-[0.025]">
          <span className="text-[18vw] font-serif text-ivory">РЕПУТАЦИЯ • ЗАЩИТА • ПРАВО •</span>
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-xs uppercase tracking-[0.4em] text-gold mb-8 text-center"
        >
          В цифрах
        </motion.p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            { label: "20+", sub: "лет практики" },
            { label: "500+", sub: "выигранных дел" },
            { label: "98%", sub: "успешных исходов" },
            { label: "ФЗ-63", sub: "статус адвоката" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: EASE }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative p-8 md:p-12 bg-void/80 backdrop-blur-xl border border-gold/10 text-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="text-4xl md:text-6xl font-serif gold-gradient relative z-10">{item.label}</span>
              <span className="block text-[10px] md:text-xs uppercase tracking-widest text-ivory/40 mt-4 relative z-10">{item.sub}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    {
      quote: "Профессионализм и внимание к деталям на высочайшем уровне. Рекомендую всем, кто ценит качество.",
      author: "Андрей К.",
      role: "Генеральный директор",
    },
    {
      quote: "Благодаря команде адвокатов удалось разрешить сложнейший корпоративный спор в нашу пользу.",
      author: "Елена М.",
      role: "Владелец бизнеса",
    },
    {
      quote: "Конфиденциальность и результат — именно то, что я искал. Превосходная работа.",
      author: "Сергей В.",
      role: "Частный клиент",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const goNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 8000);
  };

  const goPrev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 8000);
  };

  const goTo = (index: number) => {
    setCurrent(index);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 8000);
  };

  return (
    <section className="py-32 px-6 bg-void relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(194,163,94,0.03)_0%,transparent_50%)]" />
      
      <div className="max-w-4xl mx-auto text-center relative">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-xs uppercase tracking-[0.4em] text-gold mb-16"
        >
          Отзывы клиентов
        </motion.p>

        <div className="relative h-[300px] flex items-center justify-center">
          <button 
            onClick={goPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 border border-gold/20 flex items-center justify-center hover:border-gold/40 hover:bg-wine/20 transition-all duration-300 z-10"
          >
            <ChevronRight className="w-5 h-5 text-gold rotate-180" />
          </button>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, ease: EASE }}
              className="absolute px-16"
            >
              <p className="text-3xl md:text-4xl font-serif text-ivory/80 leading-relaxed mb-12 italic">
                "{testimonials[current].quote}"
              </p>
              <p className="text-gold">{testimonials[current].author}</p>
              <p className="text-ivory/40 text-sm">{testimonials[current].role}</p>
            </motion.div>
          </AnimatePresence>
          
          <button 
            onClick={goNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 border border-gold/20 flex items-center justify-center hover:border-gold/40 hover:bg-wine/20 transition-all duration-300 z-10"
          >
            <ChevronRight className="w-5 h-5 text-gold" />
          </button>
        </div>

        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`w-12 h-1 transition-all duration-500 hover:bg-gold/50 ${i === current ? "bg-gold" : "bg-gold/20"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Awards() {
  const awards = [
    { title: "Legal 500", year: "2024", desc: "Рекомендованная фирма" },
    { title: "Chambers", year: "2023", desc: "Band 1 в арбитраже" },
    { title: "Best Lawyers", year: "2024", desc: "Лучшие адвокаты России" },
    { title: "Право.ru", year: "2023", desc: "Топ-50 юрфирм" },
  ];

  return (
    <section className="py-32 px-6 bg-wine/5 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
      
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-serif text-ivory"
          >
            Признание <span className="italic">и награды</span>
          </motion.h2>
          <Award className="text-gold/20 w-24 h-24 mt-8 md:mt-0" strokeWidth={0.5} />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {awards.map((award, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -5, borderColor: "rgba(194, 163, 94, 0.3)" }}
              className="p-8 border border-gold/10 bg-void/50 backdrop-blur transition-all duration-500"
            >
              <span className="text-gold text-xs tracking-widest">{award.year}</span>
              <h3 className="text-2xl font-serif text-ivory mt-4 mb-2">{award.title}</h3>
              <p className="text-ivory/40 text-sm">{award.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contacts() {
  const [focusedField, setFocusedField] = useState<string | null>(null);

  return (
    <section className="py-32 px-6 md:px-24 bg-void relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute bottom-1/2 right-0 w-96 h-96 bg-gold/5 rounded-full blur-[150px]" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative">
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xs uppercase tracking-[0.4em] text-gold mb-6"
          >
            Свяжитесь с нами
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-serif text-ivory mb-16"
          >
            Начать <span className="italic">диалог</span>
          </motion.h2>
          
          <div className="space-y-10">
            {[
              { icon: MapPin, label: "Адрес", value: "Москва, Пресненская наб., 12\nБашня «Федерация»" },
              { icon: Phone, label: "Телефон", value: "+7 (495) 000-00-00" },
              { icon: Mail, label: "Email", value: "office@sheriev.pro" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="flex items-start gap-6 group"
              >
                <div className="w-12 h-12 border border-gold/20 flex items-center justify-center group-hover:border-gold/40 transition-colors duration-500">
                  <item.icon className="text-gold w-5 h-5" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gold mb-2">{item.label}</p>
                  <p className="text-ivory/80 font-serif text-xl whitespace-pre-line">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-px bg-gradient-to-br from-gold/20 via-gold/5 to-transparent" />
          <div className="relative bg-void p-8 md:p-12">
            <form className="space-y-10">
              {[
                { name: "name", placeholder: "Ваше имя", type: "text" },
                { name: "phone", placeholder: "Телефон", type: "tel" },
                { name: "message", placeholder: "Суть вопроса", type: "textarea" },
              ].map((field) => (
                <div key={field.name} className="relative">
                  <motion.div
                    className="absolute -left-px bottom-0 w-0.5 bg-gold"
                    animate={{ height: focusedField === field.name ? "100%" : "0%" }}
                    transition={{ duration: 0.4, ease: EASE }}
                  />
                  {field.type === "textarea" ? (
                    <textarea
                      placeholder={field.placeholder}
                      rows={1}
                      onFocus={() => setFocusedField(field.name)}
                      onBlur={() => setFocusedField(null)}
                      className="w-full bg-transparent border-b border-gold/20 py-4 pl-4 text-ivory focus:outline-none focus:border-gold/40 transition-colors duration-500 placeholder:text-ivory/20 resize-none"
                    />
                  ) : (
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      onFocus={() => setFocusedField(field.name)}
                      onBlur={() => setFocusedField(null)}
                      className="w-full bg-transparent border-b border-gold/20 py-4 pl-4 text-ivory focus:outline-none focus:border-gold/40 transition-colors duration-500 placeholder:text-ivory/20"
                    />
                  )}
                </div>
              ))}
              
              <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative w-full py-6 overflow-hidden mt-4 bg-gradient-to-r from-gold to-gold/80"
                >
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-wine to-wine/90"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.5, ease: EASE }}
                  />
                  <span className="relative z-10 text-xs uppercase tracking-[0.3em] text-void group-hover:text-ivory transition-colors duration-500 font-medium">
                    Отправить запрос
                  </span>
                </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-16 border-t border-gold/5 bg-void px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="font-serif text-2xl text-ivory tracking-widest"
          >
            ШЕРИЕВ <span className="text-gold italic">и</span> ПАРТНЕРЫ
          </motion.div>
          
          <div className="flex gap-8 text-ivory/30 text-xs uppercase tracking-widest">
            <span>Практики</span>
            <span>Команда</span>
            <span>Контакты</span>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gold/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] uppercase tracking-[0.3em] text-ivory/20">
            © {new Date().getFullYear()} Все права защищены
          </p>
          <p className="text-[10px] uppercase tracking-[0.3em] text-ivory/20">
            Адвокатская тайна охраняется законом
          </p>
        </div>
      </div>
    </footer>
  );
}
