// ALPINEA — Journal data (CAT only for prototype)
window.ALPINEA_JOURNAL = {
  meta: {
    eyebrow: "Diari",
    title: "Notes des de la vall.",
    lead:
      "Idees, manifestos, converses i notes editorials des de la nostra taula de treball a Puigcerdà. Publiquem quan tenim alguna cosa per dir.",
    categories: [
      { slug: "all", name: "Tot" },
      { slug: "manifest", name: "Manifest" },
      { slug: "tendencies", name: "Tendències" },
      { slug: "territori", name: "Territori" },
      { slug: "conversa", name: "Conversa" },
      { slug: "notes", name: "Notes" },
    ],
    backToJournal: "Tornar al Diari",
    by: "Per",
    minRead: "min de lectura",
    publishedOn: "Publicat el",
    share: "Compartir",
    related: "Continua llegint",
  },

  articles: [
    {
      slug: "manifest",
      category: "manifest",
      categoryName: "Manifest",
      title: "Per què neix Alpinea i què volem canviar al sector MICE de la Cerdanya.",
      dek:
        "Una vall amb 38 espais singulars, una xarxa de proveïdors d'altíssima qualitat i, fins ara, cap agència que treballés des d'aquí amb estàndards editorials. Volem omplir aquell buit.",
      author: "L'equip d'Alpinea",
      date: "12 de maig de 2026",
      readTime: "6",
      tone: "summit",
      featured: true,
      body: [
        { type: "lede", text:
          "Tots els que firmem aquest text vivim a la Cerdanya. Hem treballat anys produint esdeveniments per a empreses i marques que ens venien a buscar a la vall, però sempre des de fora: amb agències de Barcelona, Madrid o París que aterraven aquí amb mapes, contactes prestats i pressupostos inflats. Alpinea neix per fer-ho a l'inrevés." },
        { type: "p", text:
          "La Cerdanya és un dels destins corporatius amb més recorregut del sud d'Europa. Té paisatge, té gastronomia, té patrimoni i, sobretot, té una densitat de prestadors petits i excel·lents difícil de trobar a cap altra comarca: pastors, vinyaters, formatgers, guies, escenògrafs, fotògrafs editorials. El problema mai ha estat el territori. Ha estat la manera com s'hi accedeix." },
        { type: "h2", text: "Tres coses que volem canviar." },
        { type: "p", text:
          "Hem identificat tres punts en què el sector, des de fora, encara opera amb hàbits que ja no s'aguanten. Volem treballar-los des d'una agència nascuda aquí dins, amb temps i amb cura." },
        { type: "list", items: [
          "Pressupostos opacs. La feina d'una agència no és inflar costos amb intermediaris. És fer transparent qui cobra què i guanyar la confiança del client mostrant-li els marges.",
          "Producció parashutter. Aterrar dos dies abans, muntar, desmuntar i marxar deixa el territori intacte i, sovint, una mica pitjor. Treballar des d'aquí significa que els nostres proveïdors ens reconeixen pel carrer.",
          "Comunicació separada de la producció. Un esdeveniment que no es comunica abans, durant i després perd un 80% del seu potencial. Tractem el relat com part del producte, no com un afegit final.",
        ]},
        { type: "pull", text:
          "El problema mai ha estat el territori. Ha estat la manera com s'hi accedeix." },
        { type: "image", tone: "forest", caption:
          "Pati de Cal Marrufès, un dels 38 espais de la nostra xarxa, a 1.090 metres." },
        { type: "h2", text: "Un equip petit, una agenda curta." },
        { type: "p", text:
          "Som vuit persones, tots quatre socis fundadors residents a la vall, més un equip operatiu de quatre persones. Hem decidit treballar amb un nombre limitat de projectes l'any —entre 24 i 30— per assegurar que cada client tingui una direcció dedicada de la primera trucada a la darrera factura." },
        { type: "p", text:
          "Ho hem fet així perquè estem cansats d'agències que es presenten amb tres directors al pitch i envien becaris a l'execució. Aquí, qui et vendrà el projecte serà qui se l'empassarà fins al final." },
        { type: "h2", text: "Què volem fer durant el primer any." },
        { type: "list", items: [
          "Tancar quatre packs corporatius (els que veieu a la home) com a punt de partida estable de l'oferta.",
          "Construir una xarxa de 50 espais auditats personalment, amb fitxa tècnica pública i preu transparent.",
          "Llançar un programa d'incentius hivern–primavera amb tres hotels boutique de la vall.",
          "Publicar 12 entrades a aquest Diari el 2026: 6 manifestos, 4 reportatges de territori, 2 converses.",
        ]},
        { type: "p", text:
          "Si aneu fins al final del web hi trobareu un formulari amb tres caselles que demanen poca cosa: nom, dates i tipus de projecte. Si ens escriviu, contestarem en menys de 24 hores laborables. I si voleu venir a prendre un cafè a la plaça dels Herois, encara millor: és gratuït i la conversa, també." },
        { type: "p", text:
          "Som a Puigcerdà, número 4 de la plaça dels Herois. Estem oberts." },
      ],
    },

    {
      slug: "mice-2026-marxen-capitals",
      category: "tendencies",
      categoryName: "Tendències",
      title: "MICE 2026: per què les marques marxen de les capitals.",
      dek:
        "Cinc raons —tres bones i dues mediocres— per les quals les empreses europees estan portant els seus esdeveniments corporatius a destinacions secundàries de muntanya o costa. I què hauries de mirar abans de seguir la tendència.",
      author: "L'equip d'Alpinea",
      date: "28 d'abril de 2026",
      readTime: "5",
      tone: "ice",
      body: [
        { type: "lede", text:
          "Durant deu anys, els kick-offs anuals s'han fet en hotels-fortalesa de Barcelona, Lisboa o Berlín. El 2024 alguna cosa va començar a canviar. El 2026 ja és una tendència consolidada: la quota de mercat dels destins MICE secundaris ha crescut un 34% a Europa, segons les dades de l'European Cities Marketing Report." },
        { type: "h2", text: "Les tres bones raons." },
        { type: "p", text:
          "La primera, evident: cost. Un hotel boutique a Puigcerdà costa entre un 35% i un 50% menys per habitació que un quatre estrelles equivalent al centre d'una capital. Per a una convenció de 200 persones × 2 nits, l'estalvi pot superar els 40.000 euros sense renunciar a res." },
        { type: "p", text:
          "La segona: distinció. Quan tots els teus competidors fan el kick-off al mateix hotel del passeig de Gràcia, fer-lo en una masia del segle XVII envoltada de pastures és, simplement, més memorable. La taxa de retenció d'assistents (els que demanen tornar l'any següent) s'enfila." },
        { type: "p", text:
          "La tercera, i la més seriosa: sostenibilitat declarable. Cada cop més empreses tenen objectius ESG vinculats als bons del CEO. Un esdeveniment a un destí amb proveïdors km0, transport en autocar des d'un únic punt d'origen i opcions vegetarianes per defecte és un esdeveniment amb una petjada de carboni un 40% inferior a la mitjana del sector." },
        { type: "pull", text:
          "Distinció no és sinònim d'aventura. La majoria de comitès executius vol confort i wifi, no expedicions polars." },
        { type: "h2", text: "Les dues raons mediocres." },
        { type: "p", text:
          "La primera mediocre és la moda. Algunes empreses marxen de les capitals només perquè els seus competidors ho fan, i acaben en destins que no encaixen amb el seu públic. Un equip comercial de 50 persones amb edat mitjana de 28 anys potser no vol passar tres dies a 1.800 metres d'altitud sense bars oberts després de les onze." },
        { type: "p", text:
          "La segona mediocre és la fugida endavant. \"Si fem el kick-off en un lloc espectacular, ningú es queixarà de l'estratègia.\" Sí que es queixaran. Si el contingut és dolent, el paisatge no el salva. Només el fa més fotogràficament dolorós." },
        { type: "image", tone: "crowd", caption:
          "Sala plenària preparada per a 600 pax a l'Estadi de Gel de Puigcerdà." },
        { type: "h2", text: "Què hauries de mirar abans de marxar." },
        { type: "list", items: [
          "Connectivitat real: si els teus assistents venen de 12 ciutats, com hi arriben? Un destí a 90 minuts d'un aeroport és viable; a tres hores, no.",
          "Capacitat operativa local: si la teva agència no és d'allà, qui pot resoldre un problema a les 22.30 d'un divendres? Treballa amb un DMC local.",
          "Encaix amb la cultura interna: si la teva empresa té una cultura formal i corbatera, una activitat de mushing a -5°C pot ser un fracàs ben fotografiat.",
          "Estacionalitat: el mateix destí a febrer i a juliol és un destí diferent. Pregunta't quan tindreu el wifi més estable, els carrers més silenciosos i els proveïdors menys saturats.",
        ]},
        { type: "p", text:
          "El nostre consell és senzill: si marxes d'una capital, no és per fugir-ne, sinó per anar a algun lloc concret amb una intenció concreta. La Cerdanya, per exemple, funciona perfectament per a convencions petites i mitjanes amb un focus en estratègia, gastronomia o outdoor. Funciona molt malament per a llançaments de producte que necessiten un photocall a peu de carrer a les vuit del matí." },
      ],
    },

    {
      slug: "12-productors-cerdanya",
      category: "territori",
      categoryName: "Territori",
      title: "12 productors de la Cerdanya que cada esdeveniment hauria de conèixer.",
      dek:
        "Formatgers, vinyaters, pastors, forners, mestres ganiveters, cervesers i un únic productor de saüc del Pirineu. La nostra llista —no exhaustiva i opinable— dels noms que portem a cada esdeveniment.",
      author: "Aina Vidal i Jordi Tomàs",
      date: "14 d'abril de 2026",
      readTime: "6",
      tone: "wine",
      body: [
        { type: "lede", text:
          "Cada cop que tanquem un esdeveniment a la Cerdanya, hi ha dues converses paral·leles. La primera, amb el client, sobre què vol mostrar als seus convidats. La segona, amb nosaltres mateixos, sobre quins productors de la vall portem aquesta vegada. Aquesta llista és la nostra agenda particular. La compartim perquè creiem que ho hauria de saber tothom." },
        { type: "h2", text: "Formatges i làctics" },
        { type: "list", items: [
          "Mas la Llosa de Viliella (Lles de Cerdanya) — Tupí madurat amb herbes de muntanya. 28 €/kg, només disponible de juny a octubre.",
          "Formatgeria de Saneja (Bolvir) — Tomes de vaca pirenaica. Esmorzars de treball insuperables amb una llesca i un raig d'oli d'oliva del Berguedà.",
          "Lacteries Cadí (La Seu d'Urgell, tècnicament a tocar) — Mantega DOP. La de cada cofee break que s'ho prengui seriosament.",
        ]},
        { type: "h2", text: "Vins, cerveses i destil·lats" },
        { type: "list", items: [
          "Domus Pirene (Talló) — Celler en pedra seca a 1.100 metres. Tres referències, totes de varietats recuperades. Visites privatitzables fins a 90 pax.",
          "Cervesa Ártica (Bellver de Cerdanya) — Sis estils, dos col·laboratius. La IPA de pi negre és inevitable.",
          "Destil·leries Pirinencs (Bellver de Cerdanya) — Gin de gerds del Cadí. Maridatge perfecte amb el sopar de gala de qualsevol incentiu.",
        ]},
        { type: "image", tone: "wine", caption:
          "Tast vertical a Domus Pirene. Tres referències, cinc generacions de vinyaters." },
        { type: "h2", text: "Forn, carn i taula" },
        { type: "list", items: [
          "Cal Marcet (Puigcerdà) — Pa de pagès amb llevat mare cerdà. Encàrrec mínim 24 h. Indispensable per a esmorzars de press trips.",
          "Carnisseria Vilella (Llívia) — Carn de vedella i xai d'alta muntanya. Treballem amb ells per a sopars de gala fins a 200 pax.",
          "Mel del Cadí (Martinet) — Mel de bruc i mel de farigola. Detall de regal molt elegant per a juntes executives.",
        ]},
        { type: "pull", text:
          "Treballar amb productors locals no és un gest decoratiu. És una decisió logística que canvia la qualitat del servei." },
        { type: "h2", text: "Artesans i la sorpresa final" },
        { type: "list", items: [
          "Ganiveters de Talló — Quatre germans, sis models de ganivet, tots de pinacle d'alzina. Bon obsequi de comiat.",
          "Tallers Pirena (Puigcerdà) — Ceràmica feta a mà, peces seriades amb el logo del client. Tres mesos d'antelació.",
          "Fusta de Cerdanya (Alp) — Senyalètica artesana en pi negre local. La que veieu en gairebé tots els nostres esdeveniments.",
          "Saüquera del Pirineu (Bolvir) — L'únic productor de saüc del Pirineu Oriental. Sirop, vinagre i un licor sec que mai veureu a una carta de hotel.",
        ]},
        { type: "p", text:
          "Tots aquests productors comparteixen tres coses: són petits, treballen a menys de 25 quilòmetres de Puigcerdà i tenen agendes que cal respectar. La majoria no respon trucades els dilluns. Cap d'ells signa contractes amb agències que els paguin a 90 dies. Per això recomanem treballar amb un DMC local: per no avergonyir-se davant del formatger." },
        { type: "p", text:
          "Si voleu construir un esdeveniment al voltant d'aquests noms, escriviu-nos. Tenim un mapa imprès amb tots ells. No el penjarem a internet." },
      ],
    },
  ],
};
