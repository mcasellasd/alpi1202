// ALPINEA — Pack detail data (CAT only for prototype)
// Slug → detailed itinerary, activities, locations, gallery, pricing, FAQ.
window.ALPINEA_PACKS = {
  meta: {
    eyebrow: "Pack",
    backToPacks: "Tots els packs",
    backToHome: "Tornar a la home",
    sections: {
      glance: "Cop d'ull",
      itinerary: "Itinerari, dia a dia",
      activities: "Activitats incloses",
      locations: "Espais que utilitzem",
      includes: "Què inclou i què no",
      pricing: "Preu i condicions",
      faq: "Preguntes freqüents",
      gallery: "Galeria",
      contact: "Reserva o personalitza'l",
    },
    labels: {
      day: "Dia",
      duration: "Durada",
      group: "Grup",
      season: "Temporada",
      from: "Des de",
      perPax: "/ pax",
      includes: "Inclou",
      excludes: "No inclou",
      idealFor: "Ideal per a",
      capacity: "Capacitat",
      role: "Rol en el pack",
      base: "Tarifa base",
      level: "Nivell",
      durationTitle: "Durada",
    },
    cta: {
      book: "Reservar aquest pack",
      custom: "Personalitzar-lo amb nosaltres",
    },
    legal:
      "Preus per persona, IVA no inclòs. Mínim el nombre indicat de pax. Tots els nostres packs es poden adaptar a la mida del grup, al sector i a objectius específics; la versió base és un punt de partida.",
  },

  packs: {
    "cims-estrategia": {
      code: "P01",
      slug: "cims-estrategia",
      name: "Cims & Estratègia",
      tag: "Off-site executiu",
      tagline: "Dos dies per pensar lluny i decidir a prop.",
      tone: "alpine",
      duration: "2 dies / 1 nit",
      group: "8–20 pax",
      season: "Tot l'any",
      priceFrom: "1.180 €",
      currency: "€",
      hero:
        "Un programa pensat per a consells d'administració, comitès de direcció i equips d'inversió que necessiten una jornada llarga, ben pensada i lluny dels mòbils. Es desenvolupa entre una habitació boutique a Llívia i un mirador a la Tossa Plana, amb un facilitador que us acompanya tota la sessió i us lliura una acta visual al final.",
      idealFor:
        "Equips de 8–20 persones amb una decisió estratègica important al davant i una agenda intensa que necessita silenci i altitud.",
      glance: [
        ["Allotjament", "1 nit a Mas de la Coma · habitació boutique"],
        ["Sessió de treball", "8 h de treball estratègic amb facilitador"],
        ["Activitat outdoor", "Trekking guiat a la Tossa Plana (4 h)"],
        ["Gastronomia", "5 àpats km0, sopar de tast signat"],
        ["Lliurable", "Acta visual + memòria de decisions en 7 dies"],
      ],
      itinerary: [
        {
          day: 1,
          title: "Arribada, primera sessió i sopar al voltant del foc.",
          blocks: [
            ["12.30", "Arribada i benvinguda", "Check-in al Mas de la Coma, presentació del facilitador i lliurament del quadern de treball.", "Mas de la Coma"],
            ["13.30", "Dinar de treball", "Menú de 3 temps al jardí, amb productes de Cal Marrufès. Brífing inicial de la sessió.", "Mas de la Coma"],
            ["15.30", "Sessió estratègica I", "Definició d'objectius, mapeig del problema i divergent thinking. 3 h amb facilitador.", "Sala de juntes"],
            ["19.00", "Wellness opcional", "Sauna o massatge esportiu de 30 minuts. Cal reserva prèvia.", "Spa Mas de la Coma"],
            ["20.30", "Sopar de tast", "Menú de 5 temps signat pel xef convidat, maridat amb vins de Domus Pirene.", "Restaurant privatitzat"],
            ["22.30", "Fireside chat", "Conversa informal al voltant de la xemeneia. Sense agenda.", "Saló del Mas"],
          ],
        },
        {
          day: 2,
          title: "Trekking, segona sessió i tancament.",
          blocks: [
            ["07.30", "Esmorzar muntanya", "Cafè, fruita local, formatges i pa de pagès de Cal Marcet.", "Mas de la Coma"],
            ["09.00", "Trekking a la Tossa Plana", "4 h amb un guia UIMLA. Desnivell 350 m, dificultat baixa. Material no necessari.", "Tossa Plana de Lles"],
            ["13.30", "Dinar de muntanya", "Pícnic gourmet a 2.300 m amb productes de la vall.", "Refugi de l'Ingla"],
            ["15.30", "Sessió estratègica II", "Convergent thinking i pla d'acció a 90 dies. 2 h amb facilitador.", "Mas de la Coma"],
            ["17.30", "Acta visual i comiat", "Lliurament del primer esquema de la memòria. Cafè i comiat.", "Pati"],
          ],
        },
      ],
      activities: [
        {
          name: "Sessió estratègica facilitada",
          duration: "5 h",
          level: "Mental",
          tone: "stone",
          desc:
            "Dos blocs de treball amb un facilitador sènior expert en estratègia corporativa. Mètode pràctic, sense PowerPoint, basat en quaderns de treball i mapes visuals.",
        },
        {
          name: "Trekking guiat a la Tossa Plana",
          duration: "4 h",
          level: "Baix",
          tone: "alpine",
          desc:
            "Un dels miradors més oberts del Pirineu Oriental: 360° sobre Cerdanya, Andorra i Berguedà. Itinerari planificat per a tots els nivells.",
        },
        {
          name: "Sopar de tast d'autor",
          duration: "2 h",
          level: "—",
          tone: "wine",
          desc:
            "Menú de 5 temps amb productes km0. Vins de Domus Pirene, formatges de la formatgeria de Saneja, carn de la carnisseria Vilella.",
        },
        {
          name: "Wellness · sauna i massatge",
          duration: "30–45 min",
          level: "—",
          tone: "stone",
          desc:
            "Sessió de spa opcional la nit del primer dia. Sauna finlandesa, dutxa freda i massatge esportiu de descàrrega. Suplement de 45 € / pax.",
        },
      ],
      locations: [
        {
          name: "Hotel Torre del Remei",
          place: "Bolvir",
          role: "Allotjament i sala de juntes principal",
          capacity: "55 pax",
          tone: "wine",
        },
        {
          name: "Tossa Plana de Lles (2.916 m)",
          place: "Lles de Cerdanya",
          role: "Trekking i mirador 360°",
          capacity: "—",
          tone: "alpine",
        },
        {
          name: "Refugi Malniu",
          place: "Meranges",
          role: "Dinar de muntanya privatitzat",
          capacity: "40 pax",
          tone: "summit",
        },
        {
          name: "Domus Pirene",
          place: "Talló",
          role: "Maridatge del sopar de tast",
          capacity: "—",
          tone: "wine",
        },
      ],
      includes: [
        "1 nit en habitació boutique al Mas de la Coma",
        "5 àpats km0 (esmorzar, 2 dinars, sopar i pícnic)",
        "Facilitador estratègic sènior durant 5 hores",
        "Guia UIMLA per al trekking",
        "Acta visual de la jornada en format A3 + memòria PDF en 7 dies",
        "Aigua, cafè i fruita durant tota la jornada",
        "Transfers interns dins de la Cerdanya",
      ],
      excludes: [
        "Transport fins a Puigcerdà o Llívia (us oferim opcions amb supplement)",
        "Begudes premium (carta de cellers fora del maridatge)",
        "Sessió de spa (suplement opcional)",
        "Despeses personals i propines",
      ],
      gallery: [
        ["stone", "Sala de juntes amb llar de foc"],
        ["alpine", "Tossa Plana, mirador 360°"],
        ["table", "Sopar de tast, 5 temps"],
        ["forest", "Pati del Mas, breakouts a l'aire lliure"],
      ],
      faqs: [
        ["Si plou, què passa amb el trekking?", "Tenim un protocol B amb un itinerari més curt i protegit, o una ruta cultural pel nucli medieval de Llívia amb el mateix guia."],
        ["Quin perfil de facilitador hi ha?", "Treballem amb tres facilitadors fixos: un especialista en estratègia corporativa, un en operacions i un en cultura organitzativa. Triem segons el repte que ens descriviu al brífing."],
        ["Es pot allargar a 3 dies?", "Sí. Afegim un dia de \"deep work\" amb sessions individuals d'1 h amb el facilitador. Suplement de 420 € / pax."],
        ["Hi ha opcions vegetarianes / veganes / sense gluten?", "Sí, totes les versions estan validades amb el xef. Cal indicar-ho al brífing amb 7 dies d'antelació."],
      ],
    },

    "kick-off-cerdanya": {
      code: "P02",
      slug: "kick-off-cerdanya",
      name: "Kick-off Cerdanya",
      tag: "Convenció anual",
      tagline: "Tot l'equip, un cap de setmana, una vall.",
      tone: "crowd",
      duration: "3 dies / 2 nits",
      group: "80–300 pax",
      season: "Set–Jun",
      priceFrom: "780 €",
      currency: "€",
      hero:
        "El nostre pack de gran format. Una convenció completa de cap de setmana per a empreses de 80 a 300 persones, amb pensió completa a l'Hotel del Llac, sala plenària a l'Estadi de Gel i una gala signada al pavelló. Inclou producció audiovisual i un aftermovie de 90 segons.",
      idealFor:
        "Equips comercials, llançaments d'estratègia anual i convencions de filials europees que volen tornar a casa amb una història.",
      glance: [
        ["Allotjament", "2 nits a Hotel del Llac ★★★★ · pensió completa"],
        ["Espai plenari", "Estadi de Gel · capacitat fins a 1.200 pax"],
        ["Activitat", "Team building \"Travessa de la Cerdanya\" (4 h)"],
        ["Gastronomia", "Coffee artesà, dinar buffet, sopar de gala signat"],
        ["Lliurable", "Aftermovie 90'' + fotografies editorials en 14 dies"],
      ],
      itinerary: [
        {
          day: 1,
          title: "Arribada, registre, sopar de benvinguda.",
          blocks: [
            ["15.00", "Check-in i welcome desk", "Acreditació, kit de benvinguda (ganivet artesà de Talló + quadern) i transfer a l'hotel.", "Hotel del Llac"],
            ["18.30", "Còctel de benvinguda", "Vermut amb productes locals i sessió ràpida del CEO (15 min).", "Terrassa amb vistes al llac"],
            ["20.30", "Sopar de benvinguda", "Menú de 3 temps al saló principal de l'hotel.", "Hotel del Llac"],
            ["22.30", "After hours", "DJ resident i bar obert fins a la 1.30.", "Lounge"],
          ],
        },
        {
          day: 2,
          title: "Plenària, breakouts, team building i gala.",
          blocks: [
            ["08.00", "Esmorzar buffet", "Tres cantons: esmorzar continental, mediterrani i muntanya.", "Hotel del Llac"],
            ["09.30", "Plenària", "Tres ponències + roda de premsa interna amb el comitè de direcció. 3 h.", "Estadi de Gel · sala plenària"],
            ["13.00", "Dinar buffet", "Cinc estacions temàtiques amb el xef del territori.", "Carpa exterior"],
            ["15.00", "Quatre breakouts", "Sessions paral·leles de 90 min per departament.", "4 sales del pavelló"],
            ["17.30", "Team building \"Travessa\"", "Recorregut amb 6 estacions pel nucli antic de Puigcerdà. Equips mixtos.", "Centre de Puigcerdà"],
            ["20.30", "Còctel pre-gala", "DJ, mojitos d'autor i fotomatón editorial.", "Plaça privatitzada"],
            ["21.30", "Sopar de gala", "Menú signat, 4 temps. Discurs de tancament del CEO i lliurament d'awards interns.", "Pavelló"],
            ["00.00", "After party", "Banda local + DJ. Barra lliure fins a les 3.", "Pavelló"],
          ],
        },
        {
          day: 3,
          title: "Brunch, foto de família, comiat.",
          blocks: [
            ["10.00", "Brunch", "Brunch lent amb croissants de Cal Marcet, fruita i ous a la carta.", "Hotel del Llac"],
            ["12.00", "Foto de família", "Foto oficial amb dron a la plaça dels Herois.", "Plaça dels Herois"],
            ["13.00", "Check-out i transfers", "Transfers a Barcelona / Tolosa / Andorra segons reserva.", "Hotel del Llac"],
          ],
        },
      ],
      activities: [
        {
          name: "Plenària amb regidoria escènica",
          duration: "3 h",
          level: "—",
          tone: "crowd",
          desc:
            "Producció audiovisual completa: 4 càmeres, regidor, escenografia modular i streaming en directe per a filials que no hi puguin assistir.",
        },
        {
          name: "Team building Travessa de la Cerdanya",
          duration: "4 h",
          level: "Mitjà-baix",
          tone: "stone",
          desc:
            "Recorregut amb 6 estacions pel centre històric de Puigcerdà i el llac. Equips mixtos de 8–12 persones, repte cooperatiu amb element competitiu lleuger.",
        },
        {
          name: "Gala signada",
          duration: "5 h",
          level: "—",
          tone: "wine",
          desc:
            "Menú signat per un xef convidat (rotem cada any), escenografia exclusiva, banda local i barra lliure.",
        },
        {
          name: "Producció audiovisual",
          duration: "Tot l'esdeveniment",
          level: "—",
          tone: "summit",
          desc:
            "Director de fotografia, fotògraf editorial i dron. Lliurem aftermovie de 90'' + 80 fotografies seleccionades en 14 dies.",
        },
      ],
      locations: [
        { name: "Hotel del Llac", place: "Puigcerdà", role: "Allotjament principal + sopar de benvinguda", capacity: "220 hab.", tone: "lake" },
        { name: "Estadi de Gel", place: "Puigcerdà", role: "Plenària + 4 breakouts + sopar de gala", capacity: "1.200 pax", tone: "ice" },
        { name: "Plaça dels Herois", place: "Puigcerdà", role: "Foto de família + còctel exterior", capacity: "—", tone: "crowd" },
        { name: "Centre històric", place: "Puigcerdà", role: "Team building Travessa", capacity: "—", tone: "stone" },
      ],
      includes: [
        "2 nits a Hotel del Llac ★★★★ en habitació doble compartida o individual",
        "Pensió completa (5 àpats + 2 brunchs + cafè)",
        "Lloguer de l'Estadi de Gel amb sala plenària + 4 breakouts",
        "Producció audiovisual completa amb regidor i 4 càmeres",
        "Streaming en directe per a filials remotes",
        "Team building Travessa amb monitors i material",
        "Aftermovie de 90'' + 80 fotografies en 14 dies",
        "Senyalètica i kit de benvinguda personalitzats",
        "Transfers Barcelona / Tolosa / Andorra (opció reserva)",
      ],
      excludes: [
        "Vols i transport fins als punts de partida del transfer",
        "Begudes a la carta fora dels àpats inclosos",
        "Activitats opcionals (esquí, mushing, spa)",
        "Despeses personals i propines",
      ],
      gallery: [
        ["lake", "Hotel del Llac al capvespre"],
        ["crowd", "Sala plenària preparada per a 600 pax"],
        ["wine", "Sopar de gala al pavelló"],
        ["stone", "Travessa pel centre històric"],
      ],
      faqs: [
        ["Hi ha una grandària mínima?", "Sí, 80 pax. Per sota d'aquest nombre la quota fixa del pavelló no és eficient i et recomanem el pack P04 o un programa a mida."],
        ["Què passa si el grup creix més tard?", "El pavelló admet fins a 1.200 pax. Cal confirmar 60 dies abans per a la logística d'F&B."],
        ["Es pot fer a l'estiu?", "L'oferta base és Set–Jun perquè la temporada turística d'estiu satura els proveïdors. Tenim una versió d'estiu a tres venues alternatius; consulteu."],
        ["Quin idioma fa servir el regidor escènic?", "Català, castellà i anglès. Català tècnic disponible per a empreses amb seu a Catalunya."],
      ],
    },

    "snow-incentive": {
      code: "P03",
      slug: "snow-incentive",
      name: "Snow Incentive",
      tag: "Incentiu hivern",
      tagline: "Esquí al matí, gala a la nit.",
      tone: "ice",
      duration: "3 dies / 2 nits",
      group: "30–120 pax",
      season: "Des–Mar",
      priceFrom: "1.450 €",
      currency: "€",
      hero:
        "Tres dies a peu de pistes. Inclou forfait, material, monitor, esmorzars de muntanya, dinars a pistes i un sopar maridat de gala. Per als no-esquiadors, un programa paral·lel amb raquetes, mushing i spa.",
      idealFor:
        "Programes d'incentius per a equips comercials, top performers i jornades de fidelització de clients VIP que combinen esquí amb una experiència gastronòmica seriosa.",
      glance: [
        ["Allotjament", "2 nits a hotel boutique a peu de pistes"],
        ["Pistes", "Forfait i material per a 2 dies"],
        ["Activitat alternativa", "Raquetes, mushing o spa per a no-esquiadors"],
        ["Gastronomia", "Sopar maridat de gala al restaurant d'altura"],
        ["Lliurable", "Reportatge fotogràfic + vídeo curt"],
      ],
      itinerary: [
        {
          day: 1,
          title: "Arribada, mig dia d'esquí, sopar de benvinguda.",
          blocks: [
            ["10.00", "Arribada i material", "Recollida de forfaits, esquís, botes i casc al hotel.", "Hotel boutique"],
            ["12.00", "Mig dia d'esquí amb monitor", "Tres grups per nivell, 1 monitor cada 8 persones.", "La Molina / Masella"],
            ["14.30", "Dinar a pistes", "Menú a la brasa al restaurant d'altura, privatitzat.", "Restaurant 2.150 m"],
            ["18.00", "Aprés-ski", "Vi calent, formatges i música acústica al lobby.", "Hotel"],
            ["20.30", "Sopar de benvinguda", "Menú de 3 temps a l'hotel.", "Hotel"],
          ],
        },
        {
          day: 2,
          title: "Dia complet i sopar de gala a 2.300 m.",
          blocks: [
            ["08.30", "Esmorzar muntanya", "Continental ampliat amb productes locals.", "Hotel"],
            ["09.30", "Esquí matí amb monitor", "Sessió tècnica de 3 h.", "Pistes"],
            ["13.30", "Dinar a pistes (lliure)", "Tres restaurants entre els quals triar amb el teu monitor.", "Pistes"],
            ["15.00", "Esquí tarda lliure", "Activitats opcionals: raquetes, mushing o spa per a no-esquiadors.", "Pistes / refugis"],
            ["19.00", "Còctel pre-gala", "Còctel al lounge amb DJ ambient.", "Hotel"],
            ["20.30", "Sopar maridat de gala", "5 temps al restaurant d'altura, accés en telecadira nocturna.", "Restaurant 2.300 m"],
            ["23.00", "After al refugi", "Bar obert amb foc, gintònics i música.", "Refugi 2.150 m"],
          ],
        },
        {
          day: 3,
          title: "Activitat alternativa, brunch, comiat.",
          blocks: [
            ["09.30", "Activitat alternativa", "Tria: raquetes guiades, mushing amb gossos siberians o sessió de spa.", "Cerdanya"],
            ["12.30", "Brunch lent", "Brunch de comiat al pati del hotel.", "Hotel"],
            ["14.30", "Check-out i transfers", "Transfers a Barcelona / Tolosa / Andorra.", "Hotel"],
          ],
        },
      ],
      activities: [
        {
          name: "Esquí amb monitor (1 cada 8 pax)",
          duration: "2 dies",
          level: "Tots",
          tone: "ice",
          desc:
            "Tres nivells (iniciació, intermedi, perfeccionament) amb monitors titulats. Material complet inclòs i forfait per a La Molina-Masella connectada.",
        },
        {
          name: "Mushing amb gossos siberians",
          duration: "2 h",
          level: "Baix",
          tone: "alpine",
          desc:
            "Sessió guiada amb un musher cerdà. Trineu de 4 persones, recorregut de 6 km per la vall.",
        },
        {
          name: "Raquetes guiades",
          duration: "3 h",
          level: "Baix-mitjà",
          tone: "summit",
          desc:
            "Recorregut amb guia UIMLA per la zona de Coma de Vaca. Material complet inclòs.",
        },
        {
          name: "Sopar a 2.300 m",
          duration: "3 h",
          level: "—",
          tone: "wine",
          desc:
            "Sopar maridat al restaurant d'altura. Pujada en telecadira nocturna, llums i mantes. Menú de 5 temps amb productes del Pirineu.",
        },
      ],
      locations: [
        { name: "Alp Hotel Masella", place: "Alp (Masella)", role: "Allotjament i sopar dia 1", capacity: "600 pax", tone: "ice" },
        { name: "Estació La Molina-Masella", place: "Alp / Alp", role: "Domini esquiable connectat (147 km)", capacity: "—", tone: "ice" },
        { name: "Restaurant d'altura 2.300 m", place: "Cim Tosa d'Alp", role: "Sopar de gala maridat", capacity: "120 pax", tone: "alpine" },
        { name: "Refugi Malniu", place: "Meranges", role: "After party", capacity: "40 pax", tone: "summit" },
      ],
      includes: [
        "2 nits a hotel boutique a peu de pistes",
        "Pensió completa (esmorzars, dinars a pistes, sopars)",
        "Forfait 2 dies La Molina-Masella connectada",
        "Material d'esquí complet (esquís, botes, bastons, casc)",
        "Monitor 1 cada 8 pax durant 2 dies",
        "Activitat alternativa el dia 3 (mushing, raquetes o spa)",
        "Sopar de gala a 2.300 m amb maridatge",
        "Reportatge fotogràfic + vídeo curt en 21 dies",
        "Transfers interns dins la Cerdanya",
      ],
      excludes: [
        "Vols i transport fins a Puigcerdà / Alp",
        "Begudes premium fora del maridatge",
        "Material tècnic per a freeride o snowboard (suplement)",
        "Assegurança d'esquí (recomanada, podem contractar-la)",
      ],
      gallery: [
        ["ice", "Pistes de la Tosa d'Alp"],
        ["alpine", "Mushing pels boscos de Lles"],
        ["wine", "Sopar maridat a 2.300 m"],
        ["stone", "Lobby de l'hotel amb llar de foc"],
      ],
      faqs: [
        ["I si no esquia ningú del comitè?", "Tenim una versió \"Winter Soft\" sense esquí: raquetes, mushing, spa i wellness. Preu i logística diferent; demaneu-nos-la."],
        ["Què passa si no neva?", "L'estació té innivació artificial al 90% del domini. Si tot i així el dia és impracticable, activem el programa alternatiu sense cost addicional."],
        ["Es pot afegir esquí nocturn?", "Sí, La Molina obre nocturns a determinades dates. Suplement de 38 € / pax."],
        ["Quina assegurança recomaneu?", "Una pòlissa específica d'esquí, normalment 12–18 € / pax. La gestionem amb una corredoria local."],
      ],
    },

    "estiu-editorial": {
      code: "P04",
      slug: "estiu-editorial",
      name: "Estiu Editorial",
      tag: "Press trip & activació",
      tagline: "Tres dies per a periodistes, creators i clients top.",
      tone: "forest",
      duration: "3 dies / 2 nits",
      group: "12–40 pax",
      season: "Jun–Set",
      priceFrom: "1.290 €",
      currency: "€",
      hero:
        "Una immersió de tres dies a una masia del segle XVII, pensada per a press trips, activacions de marca i clients de premsa. Inclou habitació singular, taula de xef convidat, ruta gastronòmica per la vall, taller artesà i un fotògraf editorial que documenta cada moment.",
      idealFor:
        "Caps de premsa, marques que llancen productes editorials, programes d'embaixadors i clients que necessiten una narrativa fotogràfica forta.",
      glance: [
        ["Allotjament", "2 nits a Cal Marrufès · masia s. XVII"],
        ["Restauració", "3 àpats km0 amb xef convidat rotatiu"],
        ["Activitats", "Ruta gastronòmica + taller artesà + bany al riu"],
        ["Producció", "Fotògraf editorial + kit de premsa personalitzat"],
        ["Lliurable", "120 fotos editorials + 1 reel de 60'' en 10 dies"],
      ],
      itinerary: [
        {
          day: 1,
          title: "Arribada, benvinguda i sopar al pati.",
          blocks: [
            ["16.00", "Arribada a la masia", "Check-in i welcome amb té de plantes de muntanya.", "Cal Marrufès"],
            ["17.30", "Visita guiada de la masia", "Recorregut amb el masover. Història, era, celler i hort.", "Cal Marrufès"],
            ["19.00", "Còctel del territori", "Vermuts artesans amb formatges, embotits i pa de Cal Marcet.", "Pati"],
            ["20.30", "Sopar de benvinguda", "Menú de 4 temps amb el xef convidat (rotatiu cada estació).", "Era de la masia"],
            ["23.00", "Foguera al pati", "Conversa informal i tasts de licors locals.", "Pati"],
          ],
        },
        {
          day: 2,
          title: "Ruta gastronòmica i taller artesà.",
          blocks: [
            ["08.00", "Esmorzar lent", "Esmorzar al pati amb fruita, formatges, ous a la planxa i pa.", "Pati"],
            ["09.30", "Ruta gastronòmica", "Visites a 3 productors locals (formatger, vinyater, mel) amb tasts.", "Vall de la Cerdanya"],
            ["13.30", "Dinar a la bodega", "Menú maridat al celler Domus Pirene amb 3 referències de la casa.", "Domus Pirene"],
            ["16.00", "Taller artesà", "Tria: ceràmica, ganivets de pinacle, conserves. 2 h amb mestre artesà.", "Tallers Pirena"],
            ["19.00", "Bany al riu", "Banyada al riu Segre amb tovalloles i begudes calentes.", "Riu Segre, Llívia"],
            ["21.00", "Sopar a l'hort", "Sopar amb el xef convidat, productes recollits a la tarda.", "Hort de la masia"],
          ],
        },
        {
          day: 3,
          title: "Sessió fotogràfica, brunch, comiat.",
          blocks: [
            ["08.30", "Sessió fotogràfica matinera", "Foto de família i retrats individuals amb llum natural.", "Camps del voltant"],
            ["10.30", "Brunch lent", "Brunch al pati amb pastissets i fruita.", "Cal Marrufès"],
            ["12.30", "Lliurament de kit", "Lliurament del kit de premsa personalitzat amb mostres del territori.", "Pati"],
            ["13.30", "Check-out i transfers", "Transfers a Barcelona / Tolosa.", "Cal Marrufès"],
          ],
        },
      ],
      activities: [
        {
          name: "Ruta gastronòmica km0",
          duration: "4 h",
          level: "Baix",
          tone: "wine",
          desc:
            "Visites a 3 productors triats segons temporada. Inclou tasts i conversa amb els artesans. Dinar maridat al celler.",
        },
        {
          name: "Taller artesà",
          duration: "2 h",
          level: "Baix",
          tone: "stone",
          desc:
            "Triable: ceràmica amb torn, manufactura d'un ganivet de butxaca o conserves de muntanya. Cada participant s'emporta la peça.",
        },
        {
          name: "Sessió fotogràfica editorial",
          duration: "1.5 h",
          level: "—",
          tone: "summit",
          desc:
            "Sessió amb un fotògraf editorial professional. Foto de família + retrats individuals + escenes en moviment. Lliurem 120 fotos seleccionades.",
        },
        {
          name: "Bany al riu Segre",
          duration: "1 h",
          level: "Baix",
          tone: "lake",
          desc:
            "Banyada en una poça privada del Segre, amb tovalloles, batins i begudes calentes. Opcional sauna mòbil amb suplement.",
        },
      ],
      locations: [
        { name: "Hotel-Restaurant Ca l'Eudald", place: "Alp", role: "Allotjament i base operativa", capacity: "62 pax", tone: "forest" },
        { name: "Domus Pirene", place: "Talló", role: "Dinar maridat dia 2", capacity: "90 pax", tone: "wine" },
        { name: "Tallers Pirena", place: "Puigcerdà", role: "Taller artesà", capacity: "40 pax", tone: "stone" },
        { name: "Riu Segre · Llívia", place: "Llívia", role: "Bany de riu", capacity: "—", tone: "lake" },
      ],
      includes: [
        "2 nits a Cal Marrufès · habitació singular",
        "Pensió completa amb xef convidat",
        "Ruta gastronòmica amb 3 productors locals",
        "Taller artesà a tria",
        "Sessió fotogràfica editorial (120 fotos + 1 reel 60'')",
        "Kit de premsa personalitzat amb mostres del territori",
        "Bany al riu amb tovalloles i begudes calentes",
        "Transfers interns dins la vall",
      ],
      excludes: [
        "Transport fins a Puigcerdà / Bellver",
        "Begudes fora dels maridatges inclosos",
        "Sauna mòbil al riu (suplement opcional)",
        "Despeses personals",
      ],
      gallery: [
        ["forest", "Pati de Cal Marrufès al capvespre"],
        ["wine", "Tast vertical a Domus Pirene"],
        ["stone", "Taller de ceràmica a Pirena"],
        ["lake", "Riu Segre, poça privada"],
      ],
      faqs: [
        ["Quin perfil de xef convidat ve?", "Rotem cada temporada amb 4 xefs de la zona. La temporada en curs la podeu consultar quan us enviem la proposta."],
        ["Els assistents poden publicar contingut a xarxes?", "Sí, fomentem que sí. Lliurem instruccions de hashtags i menció amb el kit de premsa."],
        ["Es pot fer més curt, 2 dies?", "Sí. Versió \"Editorial Express\" de 2 dies, des de 890 € / pax. Sense ruta gastronòmica."],
        ["Hi ha opcions vegetarianes a la ruta gastronòmica?", "Algunes parades són ovo-lacto i hi ha sempre versions veganes als àpats principals. Cal indicar-ho al brífing."],
      ],
    },
  },
};
