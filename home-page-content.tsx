"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function HomePageContent() {
  const [open, setOpen] = useState(false)
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)
  
  const services = [
    {
      title: "Klemířství a pokrývačství",
      description: "Kompletní řešení střech, \nkrytin a oplechování",
      icon: "🏠"
    },
    {
      title: "Dřevostavby",
      description: "Moderní dřevěné stavby s využitím kvalitních materiálů a technologií",
      icon: "🏘️"
    },
    {
      title: "Střechy",
      description: "Kvalitní střechy pro vaše klidné bydlení",
      icon: "🪵"
    },
    {
      title: "Zahradní domky",
      description: "Praktické a estetické řešení \npro vaši zahradu",
      icon: "🌳"
    },
    {
      title: "Altány a drobné stavby",
      description: "Krásné venkovní prostory pro relaxaci a odpočinek",
      icon: "⛱️"
    },
    {
      title: "Přístřešky a stání",
      description: "Ochrana vašeho majetku \npřed nepřízní počasí",
      icon: "🚗"
    }
  ]

  const gallery = [
    {
      url: "https://assets.macaly-user-data.dev/cdn-cgi/image/format=webp,width=2000,height=2000,fit=scale-down,quality=90,anim=true/wknl7dpe8vlenp9bfokggt3z/w2bxyvyi928d9zt458qif4yd/_I89IWwi7_DBFb75ou90U.jpg",
      alt: "Detail dřevěné konstrukce - vazníky"
    },
    {
      url: "https://assets.macaly-user-data.dev/cdn-cgi/image/format=webp,width=2000,height=2000,fit=scale-down,quality=90,anim=true/wknl7dpe8vlenp9bfokggt3z/w2bxyvyi928d9zt458qif4yd/DVvC6Zy_sL-AkI6-n8w_i.jpg",
      alt: "Rozestavěná střešní konstrukce"
    },
    {
      url: "https://assets.macaly-user-data.dev/cdn-cgi/image/format=webp,width=2000,height=2000,fit=scale-down,quality=90,anim=true/wknl7dpe8vlenp9bfokggt3z/w2bxyvyi928d9zt458qif4yd/XHu-CHx95PtUKmVeMw36i.jpg",
      alt: "Dřevěná střešní konstrukce - montáž vazníků"
    },
    {
      url: "https://assets.macaly-user-data.dev/cdn-cgi/image/format=webp,width=2000,height=2000,fit=scale-down,quality=90,anim=true/wknl7dpe8vlenp9bfokggt3z/w2bxyvyi928d9zt458qif4yd/ZM8BULpgYOcHHQocnSYOG.jpg",
      alt: "Pokládání střešního pláště a latění"
    },
    {
      url: "https://assets.macaly-user-data.dev/cdn-cgi/image/format=webp,width=2000,height=2000,fit=scale-down,quality=90,anim=true/wknl7dpe8vlenp9bfokggt3z/w2bxyvyi928d9zt458qif4yd/tFnSdsLq40uO4Dx9q41nr.jpg",
      alt: "Dokončený dům s plechovou střechou"
    },
    {
      url: "https://assets.macaly-user-data.dev/cdn-cgi/image/format=webp,width=2000,height=2000,fit=scale-down,quality=90,anim=true/wknl7dpe8vlenp9bfokggt3z/w2bxyvyi928d9zt458qif4yd/WvJw5bSv61ghF33bP0t9d.jpg",
      alt: "Stavba č. 6"
    },
    {
      url: "https://assets.macaly-user-data.dev/cdn-cgi/image/format=webp,width=2000,height=2000,fit=scale-down,quality=90,anim=true/wknl7dpe8vlenp9bfokggt3z/w2bxyvyi928d9zt458qif4yd/SJv8DZ8EcX_Mk89Ruf1WG.jpg",
      alt: "Stavba č. 15"
    },
    {
      url: "https://assets.macaly-user-data.dev/cdn-cgi/image/format=webp,width=2000,height=2000,fit=scale-down,quality=90,anim=true/wknl7dpe8vlenp9bfokggt3z/w2bxyvyi928d9zt458qif4yd/xH3kW4wpd_hq9jQ3wRD6d.jpg",
      alt: "Stavba č. 8"
    },
    {
      url: "https://assets.macaly-user-data.dev/cdn-cgi/image/format=webp,width=2000,height=2000,fit=scale-down,quality=90,anim=true/wknl7dpe8vlenp9bfokggt3z/w2bxyvyi928d9zt458qif4yd/z4-Vh6F4fxEi2QtDhGX7F.jpg",
      alt: "Stavba č. 16"
    },
    {
      url: "https://assets.macaly-user-data.dev/cdn-cgi/image/format=webp,width=2000,height=2000,fit=scale-down,quality=90,anim=true/wknl7dpe8vlenp9bfokggt3z/w2bxyvyi928d9zt458qif4yd/EbZHAaMOTMyP_vsSFuGoT.jpg",
      alt: "Stavba č. 7"
    },
    {
      url: "https://assets.macaly-user-data.dev/cdn-cgi/image/format=webp,width=2000,height=2000,fit=scale-down,quality=90,anim=true/wknl7dpe8vlenp9bfokggt3z/w2bxyvyi928d9zt458qif4yd/EKAtZwasKGDY2ALkIA0z3.jpg",
      alt: "Stavba č. 9"
    },
    {
      url: "https://assets.macaly-user-data.dev/cdn-cgi/image/format=webp,width=2000,height=2000,fit=scale-down,quality=90,anim=true/wknl7dpe8vlenp9bfokggt3z/w2bxyvyi928d9zt458qif4yd/jpTRbvMxLI5QWcTp476WQ.jpg",
      alt: "Stavba č. 10"
    },
    {
      url: "https://assets.macaly-user-data.dev/cdn-cgi/image/format=webp,width=2000,height=2000,fit=scale-down,quality=90,anim=true/wknl7dpe8vlenp9bfokggt3z/w2bxyvyi928d9zt458qif4yd/x73pfM51VeHwD76a4yLeT.jpg",
      alt: "Stavba č. 13"
    },
    {
      url: "https://assets.macaly-user-data.dev/cdn-cgi/image/format=webp,width=2000,height=2000,fit=scale-down,quality=90,anim=true/wknl7dpe8vlenp9bfokggt3z/w2bxyvyi928d9zt458qif4yd/kvQqqWcd3-sRkd_yADwRN.jpg",
      alt: "Stavba č. 12"
    },
    {
      url: "https://assets.macaly-user-data.dev/cdn-cgi/image/format=webp,width=2000,height=2000,fit=scale-down,quality=90,anim=true/wknl7dpe8vlenp9bfokggt3z/w2bxyvyi928d9zt458qif4yd/A0ldhH1YbSsGk5oBQlw_V.jpg",
      alt: "Stavba č. 11"
    },
    {
      url: "https://assets.macaly-user-data.dev/cdn-cgi/image/format=webp,width=2000,height=2000,fit=scale-down,quality=90,anim=true/wknl7dpe8vlenp9bfokggt3z/w2bxyvyi928d9zt458qif4yd/I6T64S5c8L40bLPqrnMmB.jpg",
      alt: "Stavba č. 14"
    },
    {
      url: "https://assets.macaly-user-data.dev/cdn-cgi/image/format=webp,width=2000,height=2000,fit=scale-down,quality=90,anim=true/wknl7dpe8vlenp9bfokggt3z/w2bxyvyi928d9zt458qif4yd/0MP6Cgof3osYlDBOrmvsJ.jpg",
      alt: "Stavba č. 17"
    },
    {
      url: "https://assets.macaly-user-data.dev/cdn-cgi/image/format=webp,width=2000,height=2000,fit=scale-down,quality=90,anim=true/wknl7dpe8vlenp9bfokggt3z/w2bxyvyi928d9zt458qif4yd/cIHn_DAKss2vieJqZXZQh.jpg",
      alt: "Stavba č. 18"
    },
    {
      url: "https://assets.macaly-user-data.dev/cdn-cgi/image/format=webp,width=2000,height=2000,fit=scale-down,quality=90,anim=true/wknl7dpe8vlenp9bfokggt3z/w2bxyvyi928d9zt458qif4yd/7w4UEBpe6XWknnX7gobJe.jpg",
      alt: "Stavba č. 19"
    },
    {
      url: "https://assets.macaly-user-data.dev/cdn-cgi/image/format=webp,width=2000,height=2000,fit=scale-down,quality=90,anim=true/wknl7dpe8vlenp9bfokggt3z/w2bxyvyi928d9zt458qif4yd/aZSYUsushL1GhDPkeBkll.jpg",
      alt: "Stavba č. 20"
    }
  ]
  
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#eadfd1] shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold text-primary font-serif">
            Tesařství Jašek</h1>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a 
              href="#o-firme" 
              className="hover:text-primary transition-colors text-base font-medium text-foreground"
            >
              O nás</a>
            <a 
              href="#sluzby" 
              className="hover:text-primary transition-colors text-base font-medium text-foreground"
            >
              Služby</a>
            <a 
              href="#galerie" 
              className="hover:text-primary transition-colors text-base font-medium text-foreground"
            >
              Realizace</a>
            <a 
              href="#kontakt" 
              className="hover:text-primary transition-colors text-base font-medium text-foreground"
            >
              Kontakt
            </a>
          </nav>
          
          {/* Mobile Navigation */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-[#EADFD1]">
              <nav className="flex flex-col gap-4 mt-8">
                <a 
                  href="#o-firme" 
                  className="text-lg text-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setOpen(false)}
                >
                  O nás</a>
                <a 
                  href="#sluzby" 
                  className="text-lg text-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setOpen(false)}
                >
                  Služby</a>
                <a 
                  href="#galerie" 
                  className="text-lg text-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setOpen(false)}
                >
                  Realizace</a>
                <a 
                  href="#kontakt" 
                  className="text-lg text-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setOpen(false)}
                >
                  Kontakt
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://assets.macaly-user-data.dev/cdn-cgi/image/format=webp,width=2000,height=2000,fit=scale-down,quality=90,anim=true/wknl7dpe8vlenp9bfokggt3z/w2bxyvyi928d9zt458qif4yd/fQmUHE--NYoBCb0HL4uZp.jpg')`,
            }}
        />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 font-serif">
            Tesařství, pokrývačství, klempířství</h2>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            Výroba a&nbsp;montáž dřevěných konstrukcí a&nbsp;staveb s&nbsp;důrazem na&nbsp;kvalitu a&nbsp;preciznost
            <br className="md:hidden" />
            <br />
            Tradiční řemeslo, moderní přístup
            
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="o-firme" className="bg-[#eadfd1] py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="md:text-4xl text-3xl font-bold font-serif text-primary bg-ring mb-6">
            O nás</h2>
          <p className="text-foreground/80 leading-relaxed text-lg font-medium text-[#5f4c37] bg-radius text-justify md:text-center">Vítejte&nbsp;na stránkách naší tesařské firmy. Jsme dva společníci a&nbsp;podle potřeby s&nbsp;námi spolupracují další členové týmu.&nbsp;Zaměřujeme se&nbsp;na výrobu a&nbsp;montáž všech typů dřevěných konstrukcí a&nbsp;staveb. Nabízíme kompletní dodávku materiálu podle vašich požadavků, včetně možnosti použití impregnovaného řeziva. Součástí našich služeb je také realizace střech&nbsp;na klíč, včetně kompletního pokrytí, které zajišťujeme vlastními silami.</p>
        </div>
      </section>

      {/* Services Section */}
      <section id="sluzby" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary font-serif">
            Služby</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="border-border hover:shadow-lg transition-shadow duration-300 cursor-pointer hover:border-primary/50"
              >
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-3 text-primary font-serif">
                    {service.title}
                  </h3>
                  <p className="text-foreground/70 whitespace-pre-line">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galerie" className="bg-[#eadfd1] py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary font-serif">
             Realizace</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-7xl mx-auto">
            {gallery.map((image, index) => (
              <div 
                key={index}
                className="relative h-48 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onClick={() => setSelectedImageIndex(index)}
              >
                <img 
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary font-serif">
            Kontakt
          </h2>
          <Card className="border-border">
            <CardContent className="p-8">
              <div className="space-y-6 text-center">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-primary">Tesařství Jašek</h3>
                  <p className="text-foreground/70">
                    Profesionální tesařské práce <br />a dřevěné konstrukce
                  </p>
                </div>
                
                <div className="border-t border-border pt-6">
                  <div className="grid md:grid-cols-2 gap-6 text-left">
                    <div>
                      <h4 className="font-bold text-primary mb-2">📞 Telefon</h4>
                      <p className="text-foreground/70">+420 732 542 828</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-2">✉️ Email</h4>
                      <p className="text-foreground/70">jan.jasek@tesarstvijasek.cz</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-2">📍 Adresa</h4>
                      <p className="text-foreground/70">Jan Jašek<br />Závišice 204 <br />742 21</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-2">🏢 IČO</h4>
                      <p className="text-foreground/70">74387324</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-white bg-ring border-popover py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-serif text-[#5f4c37] mb-2">Tesařství Jašek</p>
          <p className="text-sm text-[#5f4c37]">
            © {new Date().getFullYear()} Všechna práva vyhrazena
          </p>
        </div>
      </footer>

      {/* Image Lightbox Modal */}
      <Dialog open={selectedImageIndex !== null} onOpenChange={(isOpen) => {
        if (!isOpen) setSelectedImageIndex(null)
      }}>
        <DialogContent className="max-w-4xl p-0 border-0 bg-black/90">
          {selectedImageIndex !== null && (
            <div className="relative flex items-center justify-center p-4">
              {/* Previous Button */}
              <button
                onClick={() => setSelectedImageIndex(selectedImageIndex > 0 ? selectedImageIndex - 1 : gallery.length - 1)}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-3 hover:bg-black/70"
                aria-label="Předchozí"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>

              <img 
                src={gallery[selectedImageIndex].url}
                alt={gallery[selectedImageIndex].alt}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />

              {/* Next Button */}
              <button
                onClick={() => setSelectedImageIndex(selectedImageIndex < gallery.length - 1 ? selectedImageIndex + 1 : 0)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-3 hover:bg-black/70"
                aria-label="Další"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>

              {/* Close Button */}
              <button
                onClick={() => setSelectedImageIndex(null)}
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
                aria-label="Zavřít"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}


