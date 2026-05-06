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
              De slimste factuur-app van Nederland. Factureer professioneel in 160+ talen, volledig BTW-conform.
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
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold mb-6 text-white">Privacybeleid</h2>
        <div className="text-sm text-white/30 space-y-4 leading-relaxed">
          <p>Bij numr nemen we uw privacy serieus. Dit privacybeleid beschrijft hoe wij uw persoonlijke gegevens verzamelen, gebruiken en beschermen.</p>
          <p><strong className="text-white/50">Gegevensverzameling:</strong> Wij verzamelen alleen de gegevens die nodig zijn om onze dienst te leveren, waaronder uw naam, e-mailadres en facturatiegegevens.</p>
          <p><strong className="text-white/50">Gebruik van gegevens:</strong> Uw gegevens worden uitsluitend gebruikt voor het leveren van onze diensten en het verbeteren van de gebruikerservaring.</p>
          <p><strong className="text-white/50">Beveiliging:</strong> Wij gebruiken industriestandaard beveiligingsmaatregelen om uw gegevens te beschermen. Alle data wordt veilig opgeslagen via iCloud.</p>
          <p><strong className="text-white/50">Contact:</strong> Voor vragen over ons privacybeleid kunt u contact opnemen via de app.</p>
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
