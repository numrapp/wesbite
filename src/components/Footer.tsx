export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src="/images/app-icon.png" alt="numr" className="w-8 h-8 rounded-lg" />
              <span className="font-[family-name:var(--font-display)] text-xl font-bold text-white">numr</span>
            </div>
            <p className="text-white/30 text-sm max-w-sm leading-relaxed">
              De slimste factuur-app van Nederland. Factureer professioneel in 40+ talen, volledig BTW-conform.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white/60 text-sm uppercase tracking-wider mb-4">Product</h4>
            <ul className="flex flex-col gap-2">
              <li><a href="#features" className="text-sm text-white/30 hover:text-primary transition-colors">Features</a></li>
              <li><a href="#pricing" className="text-sm text-white/30 hover:text-primary transition-colors">Prijzen</a></li>
              <li><a href="#download" className="text-sm text-white/30 hover:text-primary transition-colors">Download</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white/60 text-sm uppercase tracking-wider mb-4">Juridisch</h4>
            <ul className="flex flex-col gap-2">
              <li><a href="#privacy" className="text-sm text-white/30 hover:text-primary transition-colors">Privacybeleid</a></li>
              <li><a href="#terms" className="text-sm text-white/30 hover:text-primary transition-colors">Algemene Voorwaarden</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/20">&copy; {new Date().getFullYear()} numr. Alle rechten voorbehouden.</p>
          <p className="text-xs text-white/20">Gemaakt in Nederland</p>
        </div>
      </div>

      <section id="privacy" className="mt-20 max-w-3xl mx-auto">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold mb-6 text-white">Privacybeleid Numr</h2>
        <div className="text-sm text-white/30 space-y-4 leading-relaxed">
          <p>Numr hecht veel waarde aan de bescherming van jouw persoonsgegevens. In dit privacybeleid leggen we uit welke persoonsgegevens wij verwerken, waarom wij dit doen, hoe wij hiermee omgaan en welke rechten je hebt.</p>

          <h3 className="text-white/50 font-semibold pt-2">1. Wie zijn wij?</h3>
          <p>Numr is verantwoordelijk voor de verwerking van persoonsgegevens binnen de Numr-app en de bijbehorende diensten.</p>
          <p>Voor vragen over privacy of de verwerking van jouw persoonsgegevens kun je contact met ons opnemen via de contactgegevens die in de app en op onze website staan vermeld.</p>

          <h3 className="text-white/50 font-semibold pt-2">2. Welke persoonsgegevens verwerken wij?</h3>
          <p>Afhankelijk van jouw gebruik van Numr kunnen wij onder andere de volgende gegevens verwerken:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>naam en e-mailadres;</li>
            <li>account- en inloggegevens;</li>
            <li>bedrijfsgegevens, zoals bedrijfsnaam, KvK-nummer, btw-nummer en IBAN;</li>
            <li>gegevens van klanten en relaties die je zelf in Numr invoert;</li>
            <li>gegevens in offertes, facturen en creditnota&rsquo;s;</li>
            <li>gegevens die je verstrekt bij het gebruik van onze functies;</li>
            <li>technische gegevens die nodig zijn voor het functioneren, beveiligen en verbeteren van de dienst.</li>
          </ul>
          <p>Wij verwerken in principe alleen gegevens die noodzakelijk zijn voor het aanbieden en beveiligen van Numr.</p>

          <h3 className="text-white/50 font-semibold pt-2">3. Waarvoor gebruiken wij persoonsgegevens?</h3>
          <p>Wij gebruiken persoonsgegevens onder andere om:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>jouw Numr-account aan te maken en te beheren;</li>
            <li>de functionaliteiten van Numr aan te bieden;</li>
            <li>offertes, facturen en andere documenten mogelijk te maken;</li>
            <li>onze dienstverlening te beveiligen;</li>
            <li>contact met je op te nemen wanneer dit nodig is voor onze dienstverlening;</li>
            <li>technische problemen te onderzoeken en op te lossen;</li>
            <li>onze dienstverlening te verbeteren;</li>
            <li>te voldoen aan wettelijke verplichtingen.</li>
          </ul>

          <h3 className="text-white/50 font-semibold pt-2">4. Op welke grondslag verwerken wij gegevens?</h3>
          <p>Wij verwerken persoonsgegevens alleen wanneer daarvoor een geldige wettelijke grondslag bestaat. Afhankelijk van de situatie kan dit bijvoorbeeld zijn:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>de uitvoering van een overeenkomst;</li>
            <li>het voldoen aan een wettelijke verplichting;</li>
            <li>een gerechtvaardigd belang;</li>
            <li>toestemming, wanneer deze wettelijk vereist is.</li>
          </ul>

          <h3 className="text-white/50 font-semibold pt-2">5. Bewaartermijn</h3>
          <p>Wij bewaren persoonsgegevens niet langer dan noodzakelijk is voor het doel waarvoor ze zijn verzameld, tenzij een langere bewaartermijn wettelijk verplicht is.</p>
          <p>Wanneer je jouw account verwijdert, worden jouw gegevens verwijderd of geanonimiseerd, tenzij wij bepaalde gegevens op grond van een wettelijke verplichting moeten bewaren.</p>

          <h3 className="text-white/50 font-semibold pt-2">6. Delen van persoonsgegevens</h3>
          <p>Wij verkopen jouw persoonsgegevens niet.</p>
          <p>Wanneer dit noodzakelijk is om Numr aan te bieden, kunnen wij gebruikmaken van zorgvuldig geselecteerde dienstverleners, bijvoorbeeld voor hosting, technische infrastructuur, communicatie, beveiliging of betalingen.</p>
          <p>Deze partijen krijgen uitsluitend toegang tot persoonsgegevens voor zover dat noodzakelijk is voor hun dienstverlening en zijn, waar van toepassing, contractueel verplicht om zorgvuldig met deze gegevens om te gaan.</p>

          <h3 className="text-white/50 font-semibold pt-2">7. Beveiliging</h3>
          <p>Wij nemen passende technische en organisatorische maatregelen om persoonsgegevens te beschermen tegen verlies, onbevoegde toegang, misbruik en ongeoorloofde verwerking.</p>
          <p>Wij maken onder andere gebruik van beveiligde verbindingen en passende toegangs- en beveiligingsmaatregelen.</p>

          <h3 className="text-white/50 font-semibold pt-2">8. Jouw rechten onder de AVG</h3>
          <p>Je hebt, afhankelijk van de omstandigheden, het recht om:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>inzage in jouw persoonsgegevens te vragen;</li>
            <li>onjuiste gegevens te laten corrigeren;</li>
            <li>jouw gegevens te laten verwijderen;</li>
            <li>verwerking van jouw gegevens te laten beperken;</li>
            <li>bezwaar te maken tegen bepaalde vormen van verwerking;</li>
            <li>jouw gegevens te ontvangen in een overdraagbaar formaat;</li>
            <li>toestemming voor verwerking in te trekken wanneer de verwerking op toestemming is gebaseerd.</li>
          </ul>
          <p>Je kunt daarnaast een klacht indienen bij de Autoriteit Persoonsgegevens wanneer je van mening bent dat wij jouw persoonsgegevens niet op de juiste manier verwerken.</p>

          <h3 className="text-white/50 font-semibold pt-2">9. Account verwijderen</h3>
          <p>Je kunt jouw Numr-account vanuit de app verwijderen via Profiel &rarr; Account verwijderen.</p>
          <p>Bij het verwijderen van je account worden persoonsgegevens verwijderd of geanonimiseerd, tenzij wij deze op grond van een wettelijke verplichting moeten bewaren.</p>

          <h3 className="text-white/50 font-semibold pt-2">10. Cookies en vergelijkbare technologie&euml;n</h3>
          <p>Wanneer Numr of onze website gebruikmaakt van cookies, analytics of vergelijkbare technologie&euml;n, informeren wij je hierover en gebruiken wij deze middelen overeenkomstig de toepasselijke wetgeving.</p>
          <p>Wanneer toestemming vereist is, vragen wij deze vooraf.</p>

          <h3 className="text-white/50 font-semibold pt-2">11. Wijzigingen van dit privacybeleid</h3>
          <p>Wij kunnen dit privacybeleid aanpassen wanneer onze dienstverlening, werkwijze of wettelijke verplichtingen veranderen.</p>
          <p>De meest recente versie is altijd beschikbaar via de Numr-app en onze website.</p>

          <h3 className="text-white/50 font-semibold pt-2">12. Contact</h3>
          <p>Heb je vragen over dit privacybeleid, jouw persoonsgegevens of jouw privacyrechten? Neem dan contact met ons op via de contactgegevens die beschikbaar zijn in de Numr-app of op onze website.</p>
        </div>
      </section>

      <section id="terms" className="mt-16 max-w-3xl mx-auto">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold mb-6 text-white">Algemene Voorwaarden</h2>
        <div className="text-sm text-white/30 space-y-4 leading-relaxed">
          <p>Door gebruik te maken van numr gaat u akkoord met deze algemene voorwaarden.</p>
          <p><strong className="text-white/50">Dienstverlening:</strong> numr biedt een platform voor het aanmaken en versturen van facturen en offertes.</p>
          <p><strong className="text-white/50">Abonnementen:</strong> numr Pro is beschikbaar voor €7,99 per maand of €79,99 per jaar. Betaling wordt afgeschreven via je Apple ID na bevestiging. Het abonnement wordt automatisch verlengd, tenzij ten minste 24 uur voor het einde van de huidige periode geannuleerd.</p>
          <p><strong className="text-white/50">Verantwoordelijkheid:</strong> De gebruiker is zelf verantwoordelijk voor de juistheid van de ingevoerde gegevens en het voldoen aan belastingverplichtingen.</p>
        </div>
      </section>
    </footer>
  )
}
