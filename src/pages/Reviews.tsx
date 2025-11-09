import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyBar from "@/components/StickyBar";
import FloatingCallButton from "@/components/FloatingCallButton";

const Reviews = () => {
  const reviews = [
    {
      name: "Анна Петрова",
      service: "Сантехника",
      rating: 5,
      date: "15 января 2024",
      text: "Отличный сервис! Мастер приехал очень быстро, буквально за 25 минут. Быстро нашел проблему с протечкой крана и устранил ее. Работа выполнена аккуратно, цены адекватные. Рекомендую!",
    },
    {
      name: "Дмитрий Соколов",
      service: "Электрика",
      rating: 5,
      date: "12 января 2024",
      text: "Вызывал мастера для установки розеток и выключателей. Все сделано профессионально, мастер приехал вовремя с необходимым инструментом. Цена соответствует заявленной. Буду обращаться еще!",
    },
    {
      name: "Елена Васильева",
      service: "Сборка мебели",
      rating: 5,
      date: "10 января 2024",
      text: "Заказывала сборку кухонного гарнитура. Мастер собрал все быстро и качественно, дал рекомендации по эксплуатации. Очень довольна результатом. Спасибо за отличную работу!",
    },
    {
      name: "Сергей Иванов",
      service: "Замки",
      rating: 5,
      date: "8 января 2024",
      text: "Нужно было срочно заменить замок во входной двери. Мастер приехал очень быстро, привез качественный замок, установил за час. Все работает отлично, цена устроила. Рекомендую этот сервис!",
    },
    {
      name: "Мария Кузнецова",
      service: "Сантехника",
      rating: 5,
      date: "5 января 2024",
      text: "Установка нового смесителя прошла отлично. Мастер очень вежливый, все объяснил, показал как пользоваться. Работу выполнил быстро и аккуратно. Цены честные, буду рекомендовать знакомым!",
    },
    {
      name: "Александр Морозов",
      service: "Электрика",
      rating: 5,
      date: "3 января 2024",
      text: "Отличная работа! Подключали люстру и несколько светильников. Мастер очень опытный, все сделал быстро и качественно. Дал советы по дальнейшей эксплуатации. Очень доволен, обязательно обращусь еще!",
    },
    {
      name: "Ольга Смирнова",
      service: "Сборка мебели",
      rating: 5,
      date: "1 января 2024",
      text: "Заказывала сборку шкафа-купе. Мастер собрал все идеально, ничего не скрипит, все двери открываются плавно. Работа заняла меньше времени, чем ожидалось. Спасибо большое за профессионализм!",
    },
    {
      name: "Игорь Павлов",
      service: "Сантехника",
      rating: 5,
      date: "28 декабря 2023",
      text: "Вызывал мастера для устранения засора в ванной. Приехал быстро, все прочистил, проверил всю систему. Работа выполнена отлично, цена справедливая. Буду обращаться при необходимости!",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Отзывы клиентов
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Более 1000 довольных клиентов доверяют нам свои дома
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold">{review.name}</h3>
                    <div className="flex gap-0.5">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{review.service}</span>
                    <span>{review.date}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Средняя оценка наших услуг</h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 fill-secondary text-secondary" />
            ))}
          </div>
          <p className="text-2xl font-bold">5.0 из 5.0</p>
          <p className="text-muted-foreground">На основе 1000+ отзывов</p>
        </div>
      </section>

      <Footer />
      <StickyBar />
      <FloatingCallButton />
    </div>
  );
};

export default Reviews;
