export type Lang = "en" | "fr";

export const strings = {
  en: {
    nav: {
      collaboration: "COLLABORATION",
      studio: "STUDIO",
      index: "INDEX",
      contact: "CONTACT US",
      about: "ABOUT",
    },
    siteName: "Ateliers Anouar",
    home: {
      tagline: ["Craft.", "Culture.", "Connection."],
      lede: "We build bridges between Moroccan artisans and international design.",
      collabCta: "COLLABORATION →",
      studioCta: "STUDIO →",
    },
    collaboration: {
      title: "Collaboration",
      intro: [
        "Anouar's collaboration service connects highly skilled Moroccan artisans with international clients across the fields of fashion and object design. Each project begins with a unique encounter between a contemporary vision and a living craft heritage.",
        "Starting from your idea or design, we build a tailored approach from the sourcing of techniques and artisans, to production monitoring and final delivery. Through our network, we identify the most suitable solutions to meet the precise requirements of your brief.",
      ],
      services: [
        { title: "Exceptional craftsmanship", body: "Your project is entrusted to master artisans selected for their expertise, attention to detail, and ability to bring the most demanding creative concepts to life." },
        { title: "Bespoke creation", body: "We design pieces that reflect your vision: one-of-a-kind objects, limited editions, or exclusive productions, all developed in close collaboration with you." },
        { title: "Rigorous follow-through", body: "With a team present on-site, we oversee every stage of the process to ensure quality, fidelity to your vision, and seamless communication. We place particular importance on confidentiality and the protection of your intellectual property." },
        { title: "A responsible commitment", body: "We champion an ethical approach grounded in fair compensation for artisans, sustainable collaborations both for people and the environment, and the preservation of traditional Moroccan craftsmanship." },
      ],
      crafts: [
        { name: "Embroidery", icon: "craft-embroidery" },
        { name: "Woodworking", icon: "craft-woodworking" },
        { name: "Leather goods", icon: "craft-leather" },
        { name: "Weaving", icon: "craft-weaving" },
        { name: "Ceramics", icon: "craft-ceramic" },
        { name: "Zellige", icon: "craft-zellige" },
        { name: "Calligraphy", icon: "craft-calligraphy" },
        { name: "Felting", icon: "craft-felting" },
        { name: "Metalwork", icon: "craft-metalwork" },
        { name: "Basketry", icon: "craft-basketry" },
      ],
      next: "Studio →",
    },
    studio: {
      title: "Studio",
      intro: "In dialogue with the ateliers, the studio conceives bespoke objects and fashion pieces, guided by the Anouar aesthetic.",
      pieces: [
        {
          slug: "lantern",
          name: "Lantern",
          image: "studio-lantern",
          body: "Inspired by the landscapes of the Taroudant region. Crafted from a recycled gas cylinder.",
        },
        {
          slug: "seat",
          name: "Seat",
          image: "studio-seat",
          body: "Echoing the relief and depth of the High Atlas. Crafted in solid oak and metal.",
        },
      ],
      next: "Collaboration →",
    },
    index: {
      title: "Index",
      items: [
        { slug: "honouring-heritage-1", name: "Honouring heritage", place: "Paris", date: "June 2026" },
        { slug: "honouring-heritage-2", name: "Honouring heritage", place: "Paris", date: "June 2026" },
        { slug: "honouring-heritage-3", name: "Honouring heritage", place: "Paris", date: "June 2026" },
        { slug: "honouring-heritage-4", name: "Honouring heritage", place: "Paris", date: "June 2026" },
        { slug: "honouring-heritage-5", name: "Honouring heritage", place: "Paris", date: "June 2026" },
        { slug: "honouring-heritage-6", name: "Honouring heritage", place: "Paris", date: "June 2026" },
      ],
    },
    project: {
      back: "← Back to Index",
      placeholderHeading: "Heading",
      placeholderBody: "Cras adolescenc faucibus dapibus rhoncus. Nam tristique aenean tristique blandit congue elementum mauris suspendisse mauris quis. Mauris faucibus elementum mi mauris elementum nisi vivamus elementum cursus aliquam. Sed enim aenean nec primis enim aliquam tellus aliquam aenean lectus.",
      caption: "Caption here",
    },
    about: {
      title: "About",
      intro: "Born in May 2026 with the ambition to create long-term value for the next generation of Moroccan traditional techniques.",
      values: {
        eyebrow: "Values",
        cols: [
          "Generating economic and creative opportunities, we intend to push artisans' creativity to a wider range of projects and aesthetics, with respect to their craft. Aware that this dynamic raises both social and environmental implications,",
          "Anouar is committed to fair value sharing and eco-design, working only with a clientele that shares our values: uniqueness and creativity, respect for craftsmanship, and exceptional quality.",
        ],
      },
      us: {
        eyebrow: "Us",
        cols: [
          "Ateliers Anouar all began when we met: Sofia Hilali, Franco-Moroccan designer based in Marrakech, and Romane Vivilleau, project manager in fashion based in Paris.",
          "Sharing common values around creation and the preservation of craftsmanship, it felt natural to unite our skills and build together a service and studio capable of bringing the Anouar vision to life.",
          "Drawing on Sofia's experience in luxury and her network of Moroccan artisans — Anouar was born from a desire to bridge Moroccan craft techniques with international creators, studios and brands. By embodying our collaborations within a demanding creative context, we aim to contribute to the economic development of this living heritage, rather than confining it to a purely museum-like vision.",
        ],
      },
    },
    contact: {
      title: "Contact",
      labels: { email: "EMAIL:", subject: "SUBJECT:", message: "MESSAGE:", send: "Send" },
      placeholders: { email: "Enter your email address here", subject: "Enter the title of your message here", message: "Write your message here" },
    },
    footer: {
      newsletterTitle: "Sign up to our newsletter",
      newsletterPlaceholder: "Enter your email",
      newsletterCta: "Sign up",
      links: ["INSTAGRAM", "TERMS & CONDITIONS", "PRIVACY POLICY"],
    },
  },
  fr: {
    nav: {
      collaboration: "COLLABORATION",
      studio: "STUDIO",
      index: "INDEX",
      contact: "CONTACT",
      about: "À PROPOS",
    },
    siteName: "Ateliers Anouar",
    home: {
      tagline: ["Artisanat.", "Culture.", "Connexion."],
      lede: "Nous créons des ponts entre les artisans marocains et le design international.",
      collabCta: "COLLABORATION →",
      studioCta: "STUDIO →",
    },
    collaboration: {
      title: "Collaboration",
      intro: [
        "Le service de collaboration d’Anouar met en relation des artisans marocains hautement qualifiés avec des clients internationaux dans les domaines de la mode et du design d’objet. Chaque projet naît d’une rencontre unique entre une vision contemporaine et un patrimoine artisanal vivant.",
        "À partir de votre idée ou de votre design, nous construisons une approche sur mesure, de la recherche des techniques et des artisans au suivi de production et à la livraison finale. Grâce à notre réseau, nous identifions les solutions les plus adaptées aux exigences précises de votre brief.",
      ],
      services: [
        { title: "Un savoir-faire d’exception", body: "Votre projet est confié à des maîtres artisans sélectionnés pour leur expertise, leur attention au détail et leur capacité à donner vie aux concepts créatifs les plus exigeants." },
        { title: "Une création sur mesure", body: "Nous concevons des pièces qui reflètent votre vision : objets uniques, éditions limitées ou productions exclusives, développés en étroite collaboration avec vous." },
        { title: "Un suivi rigoureux", body: "Présente sur place, notre équipe supervise chaque étape afin de garantir la qualité, la fidélité à votre vision et une communication fluide. Nous accordons une importance particulière à la confidentialité et à la protection de votre propriété intellectuelle." },
        { title: "Un engagement responsable", body: "Nous défendons une approche éthique fondée sur une rémunération juste des artisans, des collaborations durables et la préservation des savoir-faire traditionnels marocains." },
      ],
      crafts: [
        { name: "Broderie", icon: "craft-embroidery" },
        { name: "Travail du bois", icon: "craft-woodworking" },
        { name: "Maroquinerie", icon: "craft-leather" },
        { name: "Tissage", icon: "craft-weaving" },
        { name: "Céramique", icon: "craft-ceramic" },
        { name: "Zellige", icon: "craft-zellige" },
        { name: "Calligraphie", icon: "craft-calligraphy" },
        { name: "Feutrage", icon: "craft-felting" },
        { name: "Métallerie", icon: "craft-metalwork" },
        { name: "Vannerie", icon: "craft-basketry" },
      ],
      next: "Studio →",
    },
    studio: {
      title: "Studio",
      intro: "En dialogue avec les ateliers, le studio imagine des objets et des pièces de mode sur mesure, guidés par l’esthétique Anouar.",
      pieces: [
        { slug: "lantern", name: "Lanterne", image: "studio-lantern", body: "Inspirée des paysages de la région de Taroudant. Réalisée à partir d’une bouteille de gaz recyclée." },
        { slug: "seat", name: "Assise", image: "studio-seat", body: "Évoquant le relief et la profondeur du Haut Atlas. Réalisée en chêne massif et métal." },
      ],
      next: "Collaboration →",
    },
    index: {
      title: "Index",
      items: [
        { slug: "honouring-heritage-1", name: "Honorer le patrimoine", place: "Paris", date: "Juin 2026" },
        { slug: "honouring-heritage-2", name: "Honorer le patrimoine", place: "Paris", date: "Juin 2026" },
        { slug: "honouring-heritage-3", name: "Honorer le patrimoine", place: "Paris", date: "Juin 2026" },
        { slug: "honouring-heritage-4", name: "Honorer le patrimoine", place: "Paris", date: "Juin 2026" },
        { slug: "honouring-heritage-5", name: "Honorer le patrimoine", place: "Paris", date: "Juin 2026" },
        { slug: "honouring-heritage-6", name: "Honorer le patrimoine", place: "Paris", date: "Juin 2026" },
      ],
    },
    project: {
      back: "← Retour à l’index",
      placeholderHeading: "Titre",
      placeholderBody: "Ce texte présente le projet, son contexte, les savoir-faire mobilisés et le dialogue établi entre création contemporaine et artisanat marocain.",
      caption: "Légende",
    },
    about: {
      title: "À propos",
      intro: "Né en mai 2026 avec l’ambition de créer une valeur durable pour la prochaine génération de savoir-faire traditionnels marocains.",
      values: {
        eyebrow: "Valeurs",
        cols: [
          "En créant des opportunités économiques et créatives, nous souhaitons ouvrir la créativité des artisans à une plus grande diversité de projets et d’esthétiques, dans le respect de leur métier. Consciente des implications sociales et environnementales de cette dynamique,",
          "Anouar s’engage pour un partage équitable de la valeur et l’éco-conception, auprès d’une clientèle qui partage nos valeurs : singularité et créativité, respect du savoir-faire et qualité d’exception.",
        ],
      },
      us: {
        eyebrow: "Nous",
        cols: [
          "Ateliers Anouar est né de notre rencontre : Sofia Hilali, designer franco-marocaine basée à Marrakech, et Romane Vivilleau, cheffe de projet mode basée à Paris.",
          "Portées par des valeurs communes autour de la création et de la préservation des savoir-faire, nous avons naturellement réuni nos compétences pour construire un service et un studio capables de donner vie à la vision Anouar.",
          "Grâce à l’expérience de Sofia dans le luxe et à son réseau d’artisans marocains, Anouar crée des ponts entre les techniques artisanales marocaines et les créateurs, studios et marques internationaux.",
        ],
      },
    },
    contact: {
      title: "Contact",
      labels: { email: "E-MAIL :", subject: "OBJET :", message: "MESSAGE :", send: "Envoyer" },
      placeholders: { email: "Saisissez votre adresse e-mail", subject: "Saisissez l’objet de votre message", message: "Écrivez votre message" },
    },
    footer: {
      newsletterTitle: "Inscrivez-vous à notre newsletter",
      newsletterPlaceholder: "Votre e-mail",
      newsletterCta: "S’inscrire",
      links: ["INSTAGRAM", "CONDITIONS GÉNÉRALES", "POLITIQUE DE CONFIDENTIALITÉ"],
    },
  },
} as const;

export function t(lang: Lang) {
  return strings[lang];
}

export function getLang(pathname: string): Lang {
  return /\/fr(?:\/|\.html$|$)/.test(pathname) ? "fr" : "en";
}
