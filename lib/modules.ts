export type Module = {
  slug: string;
  name: string;
  tagline: string;
  audience: string;
  featured?: boolean;
  items: { title: string; text: string }[];
};

export const modules: Module[] = [
  {
    slug: "basic",
    name: "Basic",
    tagline: "Operativna robna administracija",
    audience:
      "Za ugostiteljske objekte koji žele skinuti sa sebe svakodnevni administrativni teret unosa računa dobavljača, osigurati ažurnu bazu podataka i na vrijeme slati čistu dokumentaciju vanjskom knjigovodstvu.",
    items: [
      {
        title: "Unos i ažuriranje primki dobavljača",
        text: "Kontrola i unos svih ulaznih računa za hranu, piće, ambalažu i potrošni materijal (veleprodaja, e-računi, maloprodajni računi).",
      },
      {
        title: "Automatska izrada kalkulacija nabavnih cijena",
        text: "Precizno formiranje kalkulacija cijena, evidentiranje povratne naknade ambalaže i poreznih stopa.",
      },
      {
        title: "Unos i ažuriranje normativa",
        text: "Inicijalni i tekući unos normativa u softver prema recepturama koje dostavlja naručitelj (pića, kokteli, jela).",
      },
      {
        title: "Otvaranje novih artikala i cjenika",
        text: "Pravilno šifriranje sirovina i prodajnih artikala, definiranje jedinica mjere i poreznih grupa u sustavu.",
      },
      {
        title: "Mjesečni robni izvještaji za knjigovodstvo",
        text: "Objedinjavanje i priprema rekapitulacija primki, međuskladišnica i robnog utroška, dostava servisu u dogovorenom formatu do zadanog datuma.",
      },
    ],
  },
  {
    slug: "medium",
    name: "Medium",
    tagline: "Kontrola skladišta i usklađivanje zaliha",
    audience:
      "Za objekte koji žele stvarnu kontrolu nad stanjem zaliha, sprječavanje manjkova, otkrivanje gubitaka na šanku ili u kuhinji te kontinuiran rad s osobljem na točnosti evidencije.",
    items: [
      {
        title: "Sve iz modula Basic",
        text: "Kompletna operativna administracija primki, kalkulacija, normativa i slanje izvještaja.",
      },
      {
        title: "Obrada i sravnjavanje periodičnih inventura",
        text: "Detaljna digitalna obrada popisanog stanja robe (mjesečne, polumjesečne ili kontrolne inventure).",
      },
      {
        title: "Analiza viškova i manjkova",
        text: "Usporedba stvarnog zatečenog stanja s teoretskim stanjem u softveru, identifikacija kritičnih artikala i odstupanja.",
      },
      {
        title: "Knjiženje kala, loma, prolijevanja i reprezentacije",
        text: "Usklađivanje stvarnog stanja u skladu sa zakonski dopuštenim stopama kala i internim odlukama poslodavca.",
      },
      {
        title: "Praćenje točnosti normativa u praksi",
        text: "Detektiranje pogrešaka gdje normativ ne odgovara stvarnom načinu točenja ili pripreme (gramatura kave, gubici rezanja, doze).",
      },
      {
        title: "Rad s osobljem i voditeljima",
        text: "Direktna komunikacija s voditeljima smjena radi utvrđivanja uzroka odstupanja, ispravljanja krive evidencije i edukacije o pravilnom kucanju.",
      },
    ],
  },
  {
    slug: "premium",
    name: "Premium",
    tagline: "Cjeloviti F&B kontroling, digitalizacija i zaštita marže",
    audience:
      "Za vlasnike koji žele sustav pod apsolutnom kontrolom i moderniziran najnovijim tehnološkim alatima. Spaja operativne robne podatke s cjelovitom digitalizacijom radnih procesa i očuvanjem marži.",
    items: [
      {
        title: "Sve iz modula Medium",
        text: "Kompletna administracija, inventure, analize odstupanja i sravnjavanje zaliha.",
      },
      {
        title: "Kompletna digitalizacija radnih procesa",
        text: "Digitalni HACCP (evidencije temperatura, čišćenja i sljedivosti), digitalna evidencija radnog vremena i planiranja smjena, online naručivanje te napredni POS sustavi s mobilnim naručivanjem i kuhinjskim displejima.",
      },
      {
        title: "Postavljanje i restrukturiranje robnog sustava",
        text: "Arhitektura skladišta (glavno skladište, međuskladišta, šankovi, kuhinjske stanice, hladnjače) i standardizacija kretanja robe.",
      },
      {
        title: "Složeni normativi i poluproizvodi",
        text: "Višerazinski normativi za pripremu i kuhinjsku proizvodnju (temeljci, obrada mesa, umaci, slastice) s uračunatim termičkim kalom.",
      },
      {
        title: "Praćenje Food i Beverage Cost postotaka",
        text: "Mjesečna analiza udjela troška sirovina u prodajnoj cijeni po grupama artikala te usporedba s ciljanim industrijskim standardima.",
      },
      {
        title: "Rano upozoravanje na skok ulaznih cijena",
        text: "Automatska detekcija rasta nabavnih cijena sirovina koja ugrožava maržu te prijedlozi za pravovremenu korekciju cjenika.",
      },
      {
        title: "Inženjering menija",
        text: "Klasifikacija artikala prema popularnosti i profitabilnosti (zvijezde, radni konji, zagonetke) uz preporuke za redizajn karte jela i pića.",
      },
      {
        title: "Savjetodavni sastanci s upravom",
        text: "Mjesečna prezentacija ključnih operativnih pokazatelja (KPI), identifikacija nepotrebnih gubitaka i plan mjera za uštedu.",
      },
    ],
  },
  {
    slug: "premium-plus",
    name: "Premium+",
    tagline: "Eksterni voditelj poslovanja, P&L i komercijalno vođenje",
    audience:
      "Usluga na razini eksternog operativnog direktora (COO) ili F&B direktora. Pomaže vlasniku i upravi donositi odluke na temelju stvarnog poslovnog rezultata, osigurava najbolje uvjete nabave i maksimizira profitabilnost.",
    featured: true,
    items: [
      {
        title: "Sve iz modula Premium",
        text: "Kompletan F&B kontroling, digitalizacija procesa, analitika i robno knjigovodstvo.",
      },
      {
        title: "Mjesečni operativni P&L",
        text: "Upravljački račun dobiti i gubitka prilagođen ugostiteljstvu: prihodi, stvarni COGS za hranu i piće, troškovi rada, režijski troškovi i operativna marža (EBITDA). Sve mjesec za mjesecom, bez čekanja godišnjih poreznih prijava.",
      },
      {
        title: "Pregovori s dobavljačima i ugovaranje rabata",
        text: "Aktivno pregovaranje godišnjih ugovora, retroaktivnih rabata, marketinških bonusa i gratis robe s ključnim distributerima (piće, kava, hrana).",
      },
      {
        title: "Benchmarking i optimizacija nabavnih kanala",
        text: "Kontinuirana usporedba cijena među alternativnim dobavljačima i preusmjeravanje narudžbi na najpovoljnije izvore.",
      },
      {
        title: "Slaganje i redizajn ponude",
        text: "Strateško formiranje asortimana karte jela i pića, selekcija artikala prema profilu gostiju lokala i sezonskim trendovima.",
      },
      {
        title: "Podrška u marketinškim i prodajnim akcijama",
        text: "Definiranje kampanja na društvenim mrežama, izrada vizuala, strateško planiranje i komunikacija s community managerom.",
      },
      {
        title: "Standardizacija radnih procesa (SOP)",
        text: "Pisane standardne operativne procedure za prijem robe, skladištenje i rukovanje otpisom.",
      },
    ],
  },
  {
    slug: "kljuc-u-ruke",
    name: "Ključ u ruke",
    tagline: "Projektni konzalting: kompletno postavljanje poslovanja",
    audience:
      "Za investitore koji ulaze u ugostiteljski sektor bez prethodnog operativnog iskustva (građevinski sektor, IT, privatni ulagači) ili za postojeće objekte u fazi potpunog restrukturiranja poslovanja.",
    items: [
      {
        title: "Projektiranje operativnog sustava od nule",
        text: "Definiranje cjelokupnog koncepta rada šanka, skladišta i kuhinje prije početka rada lokala.",
      },
      {
        title: "Implementacija softvera i hardvera",
        text: "Izbor i postavljanje POS rješenja, mobilnih naručivanja, kuhinjskih printera i ekrana te fiskalizacije.",
      },
      {
        title: "Kompletna digitalna infrastruktura",
        text: "Digitalni HACCP, digitalna evidencija radnog vremena i online narudžbe od prvog dana rada.",
      },
      {
        title: "Clean Start baza podataka",
        text: "Čisti katalog artikala, točni normativi, definicije poluproizvoda, poreza i cjenika, bez naslijeđenog nereda.",
      },
      {
        title: "Spajanje s provjerenom mrežom dobavljača",
        text: "Inicijalni ugovori, uvodni uvjeti plaćanja, oprema za točenje, vitrine i početna popuna zaliha.",
      },
      {
        title: "Edukacija i treninzi osoblja",
        text: "Praktična obuka konobara, šankera i kuhinjskog osoblja za rad s blagajnom, točno kucanje i prijem robe.",
      },
      {
        title: "Operativna podrška na otvaranju",
        text: "Direktni nadzor tijekom soft openinga i prvih dana rada kako bi se uklonila sva uska grla u protoku robe.",
      },
      {
        title: "Prijelaz na stalni mjesečni nadzor",
        text: "Nastavak suradnje kroz ulogu vanjskog kontrolora i savjetnika koji investitoru garantira dugoročnu sigurnost kapitala.",
      },
    ],
  },
];

export const packages = ["Basic", "Medium", "Premium", "Premium+", "Ključ u ruke"];

// 0 = nije uključeno, 1 = uključeno; redoslijed prati `packages`
export const comparison: { feature: string; included: number[] }[] = [
  { feature: "Unos i kontrola primki / e-računa", included: [1, 1, 1, 1, 1] },
  { feature: "Izrada kalkulacija i praćenje poreza", included: [1, 1, 1, 1, 1] },
  { feature: "Unos normativa prema recepturama", included: [1, 1, 1, 1, 1] },
  { feature: "Mjesečni izvještaji za financijsko knjigovodstvo", included: [1, 1, 1, 1, 1] },
  { feature: "Obrada i sravnjavanje inventura", included: [0, 1, 1, 1, 1] },
  { feature: "Analiza viškova, manjkova i knjiženje kala", included: [0, 1, 1, 1, 1] },
  { feature: "Operativni rad s osobljem na ispravcima", included: [0, 1, 1, 1, 1] },
  { feature: "Food & Beverage Cost analiza i marže", included: [0, 0, 1, 1, 1] },
  { feature: "Složeni normativi kuhinje (poluproizvodi)", included: [0, 0, 1, 1, 1] },
  { feature: "Inženjering jelovnika i karte pića", included: [0, 0, 1, 1, 1] },
  { feature: "Digitalizacija (HACCP, evidencija rada, narudžbe)", included: [0, 0, 1, 1, 1] },
  { feature: "Mjesečni operativni P&L (račun dobiti i gubitka)", included: [0, 0, 0, 1, 1] },
  { feature: "Pregovori s dobavljačima i ugovaranje rabata", included: [0, 0, 0, 1, 1] },
  { feature: "Komercijalna i marketinška podrška ponudi", included: [0, 0, 0, 1, 1] },
  { feature: "Standardne operativne procedure (SOP)", included: [0, 0, 0, 1, 1] },
  { feature: "Postavljanje posla od nule (arhitektura)", included: [0, 0, 0, 0, 1] },
  { feature: "Obuka kompletnog tima i podrška na otvaranju", included: [0, 0, 0, 0, 1] },
];
