import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { DemoBookingModal } from '@/components/DemoBookingModal';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';
import { useState, useEffect } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  Clock, 
  Monitor, 
  CreditCard, 
  MessageCircle, 
  HelpCircle,
  BookOpen,
  Laptop,
  GraduationCap,
  Shield,
  Star,
  CheckCircle
} from 'lucide-react';

const FAQ = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  // Sayfa yüklendiğinde en üste scroll yap
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBookDemo = () => {
    setIsBookingModalOpen(true);
  };

  const faqCategories = [
    {
      id: "genel",
      title: "Genel Bilgiler",
      icon: BookOpen,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      questions: [
        {
          question: "Hangi yaş grubundaki çocuklar kursa katılabilir?",
          answer: "Kurslarımız 10-17 yaş arası çocuklar için tasarlanmıştır. Kurslarımız özelinde yaş aralığı daralabilmektedir."
        },
        {
          question: "Hiç programlama bilmeyen çocuklar katılabilir mi?",
          answer: "Elbette! Kurslarımız sıfırdan başlayacak şekilde tasarlanmıştır. İlk derslerimizde temel kavramları eğlenceli aktivitelerle öğretiyoruz. Hiçbir ön bilgi gerekmez."
        },
        {
          question: "Kurs ne kadar sürer?",
          answer: "Python ile Kodlama kursu 32 hafta (6 ay) sürmektedir. Haftada 1 kez 90 dakikalık dersler yapılır. Detaylı bilgiyi kurs detay sayfasında edinebilirsiniz."
        },
        {
          question: "Dersler hangi günlerde ve saatlerde?",
          answer: "Derslerimiz talebe uygun olacak şekilde gün sonlarında planlanır. Kayıt sırasında size uygun zaman dilimini seçebilirsiniz. Her grup için sabit gün ve saat belirlenir."
        },
        {
          question: "Sınıf mevcudu kaç kişi?",
          answer: "Standart ve Premium olmak üzere 2 farklı sınıfımız bulunmaktadır. Standart gruplarımız 10, premium gruplarımız 5 kişi olarak planlanır."
        }
      ]
    },
    {
      id: "teknik",
      title: "Teknik Gereksinimler",
      icon: Laptop,
      color: "text-green-600",
      bgColor: "bg-green-50", 
      borderColor: "border-green-200",
      questions: [
        {
          question: "Hangi bilgisayar ve işletim sistemi gerekli?",
          answer: "Windows 10/11, macOS 10.14+ veya Ubuntu 18.04+ işletim sistemli herhangi bir bilgisayar yeterlidir. Minimum 4GB RAM ve 2GB boş disk alanı önerilir. En iyi deneyim için bilgisiyar kullanımı tavsiye edilir."
        },
        {
          question: "İnternet hızı ne kadar olmalı?",
          answer: "Minimum 10 Mbps download hızı önerilir. Video konferans kalitesi için stable bir bağlantı önemlidir. Mobil internet kullanılabilir ancak sabit internet tercih edilir."
        },
        {
          question: "Özel bir program yüklemek gerekiyor mu?",
          answer: "Evet, kurlarımız için gerekli programları (Python, Visual Studio Code, Zoom) yükleme konusunda yardımcı olunacaktır."
        },
        {
          question: "Web kamerası ve mikrofon zorunlu mu?",
          answer: "Evet, etkileşimli eğitim için web kamerası ve mikrofon zorunludur. Çocuğun kendini rahat ifade edebilmesi ve grup çalışmalarına katılabilmesi için gereklidir."
        },
        {
          question: "Teknik sorun yaşarsak ne yapmalıyız?",
          answer: "Herhangi bir sorunda teknik destek WhatsApp hattımız bulunmaktadır. İstediğiniz zaman bize ulaşabilirsiniz."
        }
      ]
    },
    {
      id: "egitim",
      title: "Eğitim Süreci",
      icon: GraduationCap,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200", 
      questions: [
        {
          question: "Müfredat nasıl ilerliyor?",
          answer: "24 haftalık müfredat proje tabanlı olarak ilerler. Her hafta yeni konular öğrenip, o konuyla ilgili küçük bir proje yaparız. Son 4 haftada büyük bir final projesi geliştirilir."
        },
        {
          question: "Ödev veriliyor mu?",
          answer: "Evet, her dersin sonunda küçük pratik ödevler verilir. Ödevler çocuğun seviyesine uygun ve eğlenceli şekilde tasarlanır. Zorluk seviyesi kademeli olarak artar."
        },
        {
          question: "Veliler ders takibi yapabilir mi?",
          answer: "Kesinlikle! Platformumuz üzerinden ders kayıtlarına erişebilir, ödevleri takip edebilir ve çocuğun ilerlemesini görebilirsiniz. Ayrıca detaylı geri bildirim için öğretmenlerimiz ile iletişime geçebilirsiniz."
        },
        {
          question: "Derse katılamazsa telafi var mı?",
          answer: "Derslerimiz kayıt alınmaktadır. Çocuğunuz derse katılamazsa, ders kaydını izleyebilir. Ayrıca telafi dersi talep edebilirsiniz."
        },
        {
          question: "Sertifika veriliyor mu?",
          answer: "Kurs sonunda katılım sertifikası verilir."
        }
      ]
    },
    {
      id: "odeme",
      title: "Ödeme ve Fiyatlandırma",
      icon: CreditCard,
      color: "text-orange-600", 
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      questions: [
        {
          question: "Kurs ücretleri nedir?",
          answer: "Kurs detay sayfamızda kursların ücretlerini bulabilirsiniz. İlk ders ücretsizdir."
        },
        {
          question: "Hangi ödeme yöntemleri kabul ediliyor?",
          answer: "Kredi kartı, banka kartı, havale/EFT ve taksitli ödeme seçenekleri mevcuttur."
        },
        {
          question: "İade politikanız nasıl?",
          answer: "İlk 2 hafta içinde %100, 2-4. hafta arası %75 iade yapılır. Detaylı iade koşulları için İade Politikası sayfamızı inceleyebilirsiniz."
        },
        {
          question: "Ekstra materyal ücreti var mı?",
          answer: "Hayır! Tüm eğitim materyalleri, yazılımlar ve kaynaklara erişim kurs ücretine dahildir. Hiçbir ekstra ücret alınmaz."
        }
      ]
    },
    {
      id: "iletisim",
      title: "İletişim ve Destek",
      icon: MessageCircle,
      color: "text-red-600",
      bgColor: "bg-red-50", 
      borderColor: "border-red-200",
      questions: [
        {
          question: "Eğitmenlerle nasıl iletişim kurabiliriz?",
          answer: "Her grup için WhatsApp grubu oluşturulur. Eğitmenler 24 saat içinde sorularınızı yanıtlar."
        },
        {
          question: "Ders saatlerini değiştirebilir miyiz?",
          answer: "Gruplar belli talebe göre açılır. Kayıt sonrası grup değişikliği mümkündür ancak yer durumuna bağlıdır. En az 1 hafta önceden bildirim yapılmalıdır. Grup doluluk durumuna göre alternatif saatler sunulur."
        },
        {
          question: "Çocuğum derste sıkılırsa ne yaparız?",
          answer: "Dersleri eğlenceli tutmak için oyunlar, yarışmalar ve grup aktiviteleri düzenleriz. Her çocuğun ilgi alanına uygun projeler geliştiririz."
        },
        {
          question: "Şikayet ve önerilerimizi nasıl iletebiliriz?",
          answer: "E-posta gönderebilir veya WhatsApp üzerinden mesaj atabilirsiniz. Tüm geri bildirimler 24 saat içinde yanıtlanır."
        }
      ]
    }
  ];

  // const quickStats = [
  //   { icon: Users, value: "1000+", label: "Mutlu Öğrenci", color: "text-blue-500" },
  //   { icon: Star, value: "4.9", label: "Ortalama Puan", color: "text-yellow-500" },
  //   { icon: CheckCircle, value: "%98", label: "Memnuniyet", color: "text-green-500" },
  //   { icon: Shield, value: "7/24", label: "Destek", color: "text-purple-500" }
  // ];

  return (
    <div className="min-h-screen bg-background">
      <Header onBookDemo={handleBookDemo} />
      
      {/* Hero Section */}
      <section className="pt-20 py-24 relative overflow-hidden" style={{
        background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 50%, #c084fc 100%)'
      }}>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-purple-600/10 to-purple-400/20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-3 mb-6"
            >
              <div className="w-16 h-16 bg-yellow-400 rounded-3xl flex items-center justify-center">
                <HelpCircle className="w-8 h-8 text-yellow-900" />
              </div>
              <Badge className="bg-yellow-400 text-yellow-900 px-4 py-2 text-lg">
                Sık Sorulan Sorular
              </Badge>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6"
              style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.3)' }}
            >
              Merak ettiklerinizi <br />
              <span className="text-yellow-300">yanıtladık!</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-white/90 mb-8 leading-relaxed"
              style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.3)' }}
            >
              Çocuğunuzun kodlama yolculuğu hakkında en çok sorulan soruların <br />
              detaylı cevaplarını burada bulabilirsiniz
            </motion.p>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto"
            >
            {/*
              {quickStats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                  <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-2`} />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-white/80 text-sm">{stat.label}</div>
                </div>
              ))}
                */}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Kategoriler <span className="text-primary">halinde</span> yanıtlar
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Sorularınızı kategorilere ayırarak daha kolay bulmanızı sağladık
            </p>
          </motion.div>

          <div className="space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
                className="max-w-4xl mx-auto"
              >
                <Card className={`border-2 ${category.borderColor} ${category.bgColor} mb-6`}>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-4">
                      <div className={`w-12 h-12 ${category.bgColor} rounded-2xl flex items-center justify-center border ${category.borderColor}`}>
                        <category.icon className={`w-6 h-6 ${category.color}`} />
                      </div>
                      <span className={`text-2xl ${category.color} font-bold`}>
                        {category.title}
                      </span>
                      <Badge variant="secondary" className="ml-auto">
                        {category.questions.length} soru
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                </Card>

                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem 
                      key={faqIndex} 
                      value={`${category.id}-${faqIndex}`}
                      className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-brand transition-all duration-300"
                    >
                      <AccordionTrigger className="px-8 py-6 hover:no-underline group text-left">
                        <div className="flex items-center space-x-4 w-full">
                          <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                            <span className="font-bold text-sm">
                              {faqIndex + 1}
                            </span>
                          </div>
                          <span className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                            {faq.question}
                          </span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-8 pb-6">
                        <div className="pt-4 pl-12">
                          <p className="text-muted-foreground leading-relaxed text-lg">
                            {faq.answer}
                          </p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hala Sorunuz Var mı? */}
      <section className="py-24 bg-background-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="bg-gradient-primary rounded-3xl p-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mb-8"
              >
                <div className="w-20 h-20 bg-yellow-400 rounded-3xl flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="w-10 h-10 text-yellow-900" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                  Hâlâ sorunuz mu var?
                </h2>
                <p className="text-primary-foreground/90 text-xl leading-relaxed mb-8">
                  Yukarıdaki sorular arasında aradığınızı bulamadınız mı? <br />
                  Bizimle iletişime geçin, size yardımcı olmaktan memnuniyet duyarız!
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="grid md:grid-cols-3 gap-6 mb-8"
              >
                {[
                  { icon: MessageCircle, title: "WhatsApp", desc: "0535 123 45 67", action: "Hemen Yaz" },
                  { icon: Clock, title: "Telefon", desc: "0850 123 45 67", action: "Şimdi Ara" },
                  { icon: Monitor, title: "Ücretsiz Danışmanlık", desc: "Online görüşme", action: "Randevu Al" }
                ].map((contact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-colors group cursor-pointer"
                  >
                    <contact.icon className="w-8 h-8 text-yellow-300 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                    <div className="font-semibold text-primary-foreground mb-1">{contact.title}</div>
                    <div className="text-primary-foreground/80 text-sm mb-3">{contact.desc}</div>
                    <div className="text-yellow-300 text-sm font-medium group-hover:text-yellow-200 transition-colors">
                      {contact.action} →
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="space-y-4"
              >
                <Button 
                  size="lg"
                  onClick={handleBookDemo}
                  className="bg-accent text-accent-foreground hover:bg-accent-hover font-semibold text-lg px-12 py-4 mr-4"
                >
                  Ücretsiz Deneme Dersi Al 🎯
                </Button>
                <p className="text-primary-foreground/70 text-sm">
                  İlk ders tamamen ücretsiz! Hiçbir taahhüt gerektirmez.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer onBookDemo={handleBookDemo} />
      
      <DemoBookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
      
      {/* WhatsApp Float Button */}
      <WhatsAppFloat />
    </div>
  );
};

export default FAQ; 