import type {
  Service,
  Stat,
  Industry,
  ProcessStep,
  Testimonial,
  NavLink,
  FooterColumn,
  SustainabilityPoint,
} from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "Teenused", href: "#services" },
  { label: "Meist", href: "#why-us" },
  { label: "Valdkonnad", href: "#industries" },
  { label: "Protsess", href: "#process" },
  { label: "Tagasiside", href: "#testimonials" },
  { label: "Kontakt", href: "#contact" },
];

export const HERO = {
  headline: "Säravad ruumid",
  highlightedWord: "erilistele",
  headlineSuffix: "ettevõtetele",
  subheadline:
    "Oleme puhastuspartneriks Harjumaa suurematele ettevõtetele. Meid usaldavad üle 160 ettevõtte, kelle keskkonnad on alati plekitu.",
  ctaPrimary: "Küsi pakkumist",
  ctaSecondary: "Meie teenused",
};

export const LOGO_COMPANIES = [
  "Ericsson",
  "Bolt",
  "Wise",
  "Nortal",
  "Telia",
  "Swedbank",
  "Luminor",
  "Tallink",
];

export const SERVICES: Service[] = [
  {
    icon: "Building2",
    title: "Kontorite koristus",
    description: "",
  },
  {
    icon: "Factory",
    title: "Tööstushoonete koristus",
    description: "",
  },
  {
    icon: "Store",
    title: "Kaubanduskeskuste puhastus",
    description: "",
  },
  {
    icon: "HardHat",
    title: "Ehitusjärgne koristus",
    description: "",
  },
  {
    icon: "PanelsTopLeft",
    title: "Akende pesu",
    description: "",
  },
  {
    icon: "ShieldCheck",
    title: "Fassaadipesu",
    description: "",
  },
];

export const STATS: Stat[] = [
  {
    value: "15",
    suffix: "+",
    label: "Aastat kogemust",
    description:
      "Üle 15 aasta erakordset ärikinnisvara koristusteenust üle kogu Harjumaa.",
  },
  {
    value: "160",
    suffix: "+",
    label: "Äriklienti",
    description:
      "Meid usaldavad sajad ettevõtted, alates iduettevõtetest kuni suurkorporatsioonideni.",
  },
  {
    value: "99.7",
    suffix: "%",
    label: "Rahulolu määr",
    description:
      "Meie pühendumust kvaliteedile peegeldab valdkonna kõrgeim klientide rahulolu.",
  },
];

export const INDUSTRIES: Industry[] = [
  {
    name: "Kontorihooned",
    description: "Igapäevane hooldus ja sügavpuhastus kaasaegsetele tööruumidele",
    clientCount: "200+",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  },
  {
    name: "Ärikeskused",
    description: "Põhjalik puhastus mitme üürnikuga ärikinnisvarale",
    clientCount: "85+",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
  },
  {
    name: "Kaubandusketid",
    description: "Laitmatu ostukeskkonnad, mis tõstavad kliendi kogemust",
    clientCount: "120+",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
  },
  {
    name: "Logistika ja laod",
    description: "Tööstuslik puhastus jaotus- ja ladustamisettevõtetele",
    clientCount: "60+",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
  },
  {
    name: "Tervishoiuasutused",
    description: "Meditsiinilise tasemega desinfitseerimine rangete nõuete täitmiseks",
    clientCount: "45+",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
  },
  {
    name: "Hotellid ja majutus",
    description: "Premium puhastusteenus külaliste keskkondade jaoks",
    clientCount: "70+",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
  },
  {
    name: "Haridusasutused",
    description: "Turvaline ja hügieeniline õpikeskkond õpilastele ja töötajatele",
    clientCount: "55+",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
  },
  {
    name: "Riigihooned",
    description: "Usaldusväärne puhastus avaliku sektori nõuete kohaselt",
    clientCount: "30+",
    image:
      "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?w=800&q=80",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: 1,
    icon: "ClipboardList",
    title: "Konsultatsioon",
    description:
      "Hindame teie ruume ja mõistame teie unikaalseid vajadusi põhjaliku kohapealse hindamise käigus.",
  },
  {
    number: 2,
    icon: "FileText",
    title: "Kohandatud plaan",
    description:
      "Teie ruumile, ajakavale ja valdkonna erinõuetele kohandatud koristusprotokoll.",
  },
  {
    number: 3,
    icon: "Sparkles",
    title: "Teostus",
    description:
      "Meie koolitatud spetsialistid töötavad täpselt ja diskreetselt, kasutades öko-sertifitseeritud tooteid.",
  },
  {
    number: 4,
    icon: "CheckCircle",
    title: "Kvaliteedikontroll",
    description:
      "Regulaarsed inspektsioonid, üksikasjalik aruandlus ja pidev täiustamine teie ootuste ületamiseks.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "SPS muutis meie kontori keskkonna täielikult. Nende tähelepanu detailidele on üllatav — iga pind läigib ning meie meeskond on märganud tõelist paranemist töökoha meeleolus.",
    name: "Maria Kask",
    title: "Kinnisvarajuht",
    company: "Nordic Tech Solutions",
    stars: 5,
  },
  {
    quote:
      "Oleme teinud koostööd mitme koristusfirmaga, kuid ükski neist ei suuda konkureerida SPS-i järjepidevuse ja professionaalsusega. Nad kohtlevad meie kaupluseid nagu enda omi.",
    name: "Andrei Volkov",
    title: "Operatsioonijuht",
    company: "Baltic Retail Group",
    stars: 5,
  },
  {
    quote:
      "Nende teostatud ehitusjärgne koristus meie uues peakorteris oli laitmatu. Sissekolimisvalmis enne tähtaega. Soovitan nende spetsialiseeritud teenuseid kõigile.",
    name: "Laura Tamm",
    title: "Projektijuht",
    company: "EstBuild Properties",
    stars: 5,
  },
  {
    quote:
      "Nende tervishoiu-tasemega desinfitseerimisprotokollid andsid meile keerulistes olukordades täieliku kindlustunde. Professionaalne, põhjalik ja alati usaldusväärne.",
    name: "Dr. Henrik Pärn",
    title: "Peaarst",
    company: "Tallinna Tervisekeskus",
    stars: 5,
  },
];

export const SUSTAINABILITY_POINTS: SustainabilityPoint[] = [
  { text: "Öko-sertifitseeritud puhastustooted kõikides teenustes" },
  { text: "Jäätmete vähendamise ja ringlussevõtu protokollid igal tööobjektil" },
  { text: "Süsiniku jalajälje jälgimine ja aastaaruandlus" },
];

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Kiirlingid",
    links: [
      { label: "Teenused", href: "#services" },
      { label: "Meist", href: "#why-us" },
      { label: "Valdkonnad", href: "#industries" },
      { label: "Kontakt", href: "#contact" },
    ],
  },
  {
    title: "Teenused",
    links: [
      { label: "Kontorite koristus", href: "#" },
      { label: "Tööstushoonete koristus", href: "#" },
      { label: "Kaubanduskeskuste puhastus", href: "#" },
      { label: "Ehitusjärgne koristus", href: "#" },
      { label: "Akende pesu", href: "#" },
      { label: "Fassaadipesu", href: "#" },
    ],
  },
];

export const FOOTER_CONTACT = {
  address: "Tornimäe 5, 10145 Tallinn, Estonia",
  phone: "+372 600 1234",
  email: "info@sps-cleaning.ee",
  hours: "Mon – Fri: 07:00 – 20:00",
  weekendHours: "Sat: 09:00 – 16:00",
};

export const COMPANY = {
  name: "SPS",
  fullName: "SPS Grupp",
  description:
    "Harjumaa juhtiv ärikinnisvara koristusfirma, pakkudes korporatiivsetele klientidele tipptasemel hoolduslahendusi alates 2006. aastast.",
  copyright: `© ${new Date().getFullYear()} SPS Grupp. Kõik õigused kaitstud.`,
};
