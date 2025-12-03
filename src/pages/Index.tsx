import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

export default function Index() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const advantages = [
    { icon: 'Droplet', title: 'Вакуумная сушка', desc: 'Эффективная сушка инструментов за 3-5 минут' },
    { icon: 'Printer', title: 'Встроенный принтер', desc: 'Автоматическая печать протоколов дезинфекции' },
    { icon: 'Gauge', title: 'Датчики контроля', desc: 'Мониторинг всех параметров в реальном времени' },
    { icon: 'Shield', title: 'Гарантия качества', desc: 'Сертификация CE и гарантия 2 года' }
  ];

  const specs = [
    { param: 'Объем камеры', value: '5-15 литров' },
    { param: 'Температура обработки', value: '50-95°C' },
    { param: 'Время цикла', value: '15-45 минут' },
    { param: 'Потребляемая мощность', value: '2.2 кВт' },
    { param: 'Давление', value: '0.5-2 бар' },
    { param: 'Совместимость', value: 'Все типы инструментов' }
  ];

  const certificates = [
    { name: 'Сертификат CE', desc: 'Европейский стандарт качества' },
    { name: 'ISO 13485', desc: 'Медицинские изделия' },
    { name: 'Гарантия 2 года', desc: 'Полная техническая поддержка' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-primary/95 backdrop-blur-sm z-50 shadow-md">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-white font-heading font-bold text-xl">MedEquip Pro</div>
          <div className="hidden md:flex gap-6 text-white font-medium">
            <a href="#advantages" className="hover:text-accent transition-colors">Преимущества</a>
            <a href="#specs" className="hover:text-accent transition-colors">Характеристики</a>
            <a href="#certificates" className="hover:text-accent transition-colors">Сертификаты</a>
            <a href="#contacts" className="hover:text-accent transition-colors">Контакты</a>
          </div>
          <Button variant="default" className="bg-accent hover:bg-accent/90">
            Получить консультацию
          </Button>
        </nav>
      </header>

      <section className="pt-32 pb-20 bg-gradient-to-b from-primary to-primary/90">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white animate-fade-in">
              <Badge className="mb-4 bg-accent text-white">Профессиональное оборудование</Badge>
              <h1 className="font-heading font-bold text-5xl mb-6 leading-tight">
                Моечно-дезинфекционные аппараты премиум класса
              </h1>
              <p className="text-lg mb-8 text-white/90">
                Немецкое качество и надежность для стоматологических, хирургических и ветеринарных клиник
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold">
                  Запросить демо
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  Скачать каталог
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/7d183c73-bcd0-4253-9fcb-f5d14e34e4fb/files/b76c4531-56f9-4713-afae-cc434bafa092.jpg" 
                alt="Медицинское оборудование" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-4xl text-center mb-12 text-primary">
            Преимущества наших аппаратов
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((item, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                    <Icon name={item.icon as any} size={32} className="text-accent" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="specs" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-4xl text-center mb-12 text-primary">
            Технические характеристики
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <Accordion type="single" collapsible className="w-full">
                  {specs.map((spec, idx) => (
                    <AccordionItem key={idx} value={`item-${idx}`}>
                      <AccordionTrigger className="text-lg font-semibold">
                        {spec.param}
                      </AccordionTrigger>
                      <AccordionContent className="text-base text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Icon name="CheckCircle" size={20} className="text-accent" />
                          <span className="font-medium">{spec.value}</span>
                        </div>
                        <p className="mt-2 text-sm">
                          Соответствует всем международным стандартам качества и безопасности
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="certificates" className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-4xl text-center mb-12">
            Сертификаты и гарантии
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {certificates.map((cert, idx) => (
              <Card key={idx} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all animate-fade-in" style={{ animationDelay: `${idx * 0.15}s` }}>
                <CardContent className="p-6 text-center">
                  <Icon name="Award" size={48} className="mx-auto mb-4 text-accent" />
                  <h3 className="font-heading font-semibold text-xl mb-2">{cert.name}</h3>
                  <p className="text-white/80">{cert.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <img 
              src="https://cdn.poehali.dev/projects/7d183c73-bcd0-4253-9fcb-f5d14e34e4fb/files/64c8e6b0-1f84-4de3-b6e3-6bf7172ee3f9.jpg" 
              alt="Сертификаты" 
              className="max-w-2xl mx-auto rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-heading font-bold text-4xl text-center mb-4 text-primary">
              Свяжитесь с нами
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Получите консультацию специалиста и индивидуальное предложение
            </p>
            <Card className="shadow-xl">
              <CardContent className="p-8">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block mb-2 font-semibold">Ваше имя</label>
                    <Input 
                      placeholder="Иван Иванов" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="text-base"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-semibold">Email</label>
                    <Input 
                      type="email" 
                      placeholder="ivan@clinic.ru" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="text-base"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-semibold">Телефон</label>
                    <Input 
                      type="tel" 
                      placeholder="+7 (999) 123-45-67" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="text-base"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-semibold">Сообщение</label>
                    <Textarea 
                      placeholder="Расскажите о ваших потребностях..." 
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="text-base"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 font-semibold">
                    Отправить заявку
                  </Button>
                </form>
                <div className="mt-8 pt-8 border-t">
                  <div className="flex flex-col gap-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <Icon name="Phone" size={20} className="text-accent" />
                      <span className="font-semibold">+7 (495) 123-45-67</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Icon name="Mail" size={20} className="text-accent" />
                      <span className="font-semibold">info@medequip.ru</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Icon name="MapPin" size={20} className="text-accent" />
                      <span className="font-semibold">Москва, ул. Примерная, 123</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="font-semibold">© 2024 MedEquip Pro. Профессиональное медицинское оборудование</p>
          <p className="text-white/70 mt-2">Качество, надежность, безопасность</p>
        </div>
      </footer>
    </div>
  );
}
