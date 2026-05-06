export const COLORS = {
  primary: '#CDFF00',
  primaryDim: '#a8d600',
  navy: '#1a2235',
  navyDeep: '#0f1520',
  navyLight: '#243044',
  white: '#ffffff',
} as const

export const APP_CONFIG = {
  name: 'numr',
  tagline: '160 taal. 1 app. Factureren was nog nooit zo makkelijk.',
  description: 'De slimste factuur-app van Nederland. Verstuur offertes en facturen in 160 talen.',
  bundleId: 'com.numr.invoices',
  appStoreUrl: 'https://apps.apple.com/app/numr/id6761337551',
} as const

export const FEATURES = [
  {
    title: '160+ Talen',
    description: 'Werk in jouw eigen taal — numr ondersteunt meer dan 160 talen, zodat je de app gebruikt in een taal die bij jou past.',
    icon: 'globe',
  },
  {
    title: 'Offertes & Facturen',
    description: 'Professionele documenten in seconden. Van offerte tot betaling.',
    icon: 'document',
  },
  {
    title: 'WhatsApp & E-mail',
    description: 'Verstuur je factuur direct via WhatsApp of e-mail. Je klant ontvangt het meteen.',
    icon: 'whatsapp',
  },
  {
    title: 'BTW 21% · 9% · Verlegd · Nultarief',
    description: 'Alle Nederlandse BTW-tarieven. Automatisch berekend conform de wet.',
    icon: 'shield',
  },
  {
    title: 'BTW Hulp Assistent',
    description: 'Slimme assistent die je helpt met BTW-keuzes. Nooit meer twijfelen.',
    icon: 'brain',
  },
  {
    title: 'iCloud Sync',
    description: 'Altijd en overal toegang. Veilig opgeslagen in iCloud.',
    icon: 'cloud',
  },
] as const

export const PRICING = {
  yearly: {
    price: '€79,99',
    period: '/jaar',
    monthly: '€6,67',
    discount: '-17%',
    label: 'Jaarlijks',
    sublabel: '1 jaar (12 maanden)',
  },
  monthly: {
    price: '€7,99',
    period: '/maand',
    label: 'Maandelijks',
    sublabel: 'Flexibel opzegbaar',
  },
  features: [
    'Onbeperkt offertes & facturen',
    'BTW 21% · 9% · Verlegd · Nultarief',
    'Verstuur via WhatsApp & e-mail',
    'BTW Hulp slimme assistent',
    '160+ talen ondersteund',
    'iCloud sync · veilig opgeslagen',
  ],
} as const
