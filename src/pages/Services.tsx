import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Zap, Hammer, Lock, PaintBucket, Lightbulb } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyBar from "@/components/StickyBar";
import FloatingCallButton from "@/components/FloatingCallButton";
import plumbingImg from "@/assets/service-plumbing.jpg";
import electricImg from "@/assets/service-electric.jpg";
import furnitureImg from "@/assets/service-furniture.jpg";

const Services = () => {
  const services = [
    {
      icon: Wrench,
      title: "Сантехнические работы",
      image: plumbingImg,
      description: "Все виды сантехнических работ",
      items: [
        "Ремонт и замена смесителей",
        "Устранение протечек",
        "Установка раковин, ванн, унитазов",
        "Прочистка канализации",
        "Замена труб",
      ],
    },
    {
      icon: Zap,
      title: "Электромонтажные работы",
      image: electricImg,
      description: "Профессиональная электрика",
      items: [
        "Установка и замена розеток",
        "Монтаж выключателей",
        "Подключение люстр и светильников",
        "Прокладка проводки",
        "Замена автоматов в щитке",
      ],
    },
    {
      icon: Hammer,
      title: "Сборка мебели",
      image: furnitureImg,
      description: "Быстрая и качественная сборка",
      items: [
        "Сборка кухонной мебели",
        "Установка шкафов-купе",
        "Сборка офисной мебели",
        "Монтаж полок и стеллажей",
        "Сборка детской мебели",
      ],
    },
    {
      icon: Lock,
      title: "Замки и двери",
      description: "Работа с замками и дверьми",
      items: [
        "Установка и замена замков",
        "Врезка дверной фурнитуры",
        "Регулировка дверей",
        "Установка доводчиков",
        "Аварийное вскрытие",
      ],
    },
    {
      icon: PaintBucket,
      title: "Отделочные работы",
      description: "Косметический ремонт",
      items: [
        "Поклейка обоев",
        "Покраска стен и потолков",
        "Укладка ламината",
        "Монтаж плинтусов",
        "Шпаклевка и штукатурка",
      ],
    },
    {
      icon: Lightbulb,
      title: "Мелкий ремонт",
      description: "Решение бытовых проблем",
      items: [
        "Крепление полок и картин",
        "Замена уплотнителей на окнах",
        "Регулировка окон и дверей",
        "Установка карнизов",
        "Любые мелкие работы по дому",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Наши услуги
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Профессиональные мастера решат любую бытовую проблему
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                  {service.image && (
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-48 object-cover rounded-lg my-4"
                    />
                  )}
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <span className="text-primary mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <StickyBar />
      <FloatingCallButton />
    </div>
  );
};

export default Services;
