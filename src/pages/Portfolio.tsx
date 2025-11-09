import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, DollarSign } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyBar from "@/components/StickyBar";
import FloatingCallButton from "@/components/FloatingCallButton";
import work1 from "@/assets/work1.jpg";
import work2 from "@/assets/work2.jpg";
import work3 from "@/assets/work3.jpg";
import work4 from "@/assets/work4.jpg";

const Portfolio = () => {
  const works = [
    {
      title: "Замена смесителя в ванной",
      description: "Устранена течь, установлен новый хромированный смеситель с термостатом",
      category: "Сантехника",
      time: "1 час",
      cost: "1200 ₽",
      image: work1,
    },
    {
      title: "Установка розеток с USB",
      description: "Замена старых розеток на современные с USB-портами для зарядки гаджетов",
      category: "Электрика",
      time: "2 часа",
      cost: "2400 ₽",
      image: work2,
    },
    {
      title: "Сборка книжного стеллажа",
      description: "Быстрая сборка деревянного стеллажа IKEA с 5 полками",
      category: "Сборка мебели",
      time: "1.5 часа",
      cost: "1800 ₽",
      image: work3,
    },
    {
      title: "Замена дверного замка",
      description: "Установлен новый врезной замок повышенной надежности",
      category: "Замки",
      time: "1 час",
      cost: "1500 ₽",
      image: work4,
    },
    {
      title: "Монтаж кухонного гарнитура",
      description: "Установка навесных и напольных шкафов, подключение мойки и варочной панели",
      category: "Сборка мебели",
      time: "5 часов",
      cost: "5000 ₽",
      image: work3,
    },
    {
      title: "Ремонт протечки трубы",
      description: "Устранена аварийная течь в системе отопления, замена участка трубы",
      category: "Сантехника",
      time: "2 часа",
      cost: "2500 ₽",
      image: work1,
    },
    {
      title: "Подключение люстры и бра",
      description: "Установка и подключение 3-рожковой люстры и двух настенных бра",
      category: "Электрика",
      time: "1.5 часа",
      cost: "1800 ₽",
      image: work2,
    },
    {
      title: "Установка межкомнатного замка",
      description: "Врезка нового замка в межкомнатную дверь, установка ручек",
      category: "Замки",
      time: "1 час",
      cost: "1200 ₽",
      image: work4,
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Наши работы
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Примеры выполненных работ с описанием времени и стоимости
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {works.map((work, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={work.image} 
                  alt={work.title}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{work.category}</Badge>
                  </div>
                  <CardTitle className="text-xl">{work.title}</CardTitle>
                  <CardDescription>{work.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{work.time}</span>
                    </div>
                    <div className="flex items-center gap-1 font-semibold text-primary">
                      <DollarSign className="w-4 h-4" />
                      <span>{work.cost}</span>
                    </div>
                  </div>
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

export default Portfolio;
