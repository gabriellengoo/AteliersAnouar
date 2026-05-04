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
          "Generating economic and creative opportunities, we intend to push artisans' creativity to a wider range of projects and aesthetics, with respect to their craft. Aware that this dynamic raises both social and environmental implications, Anouar is committed to fair value sharing and eco-design, working only with a clientele that shares our values: uniqueness and creativity, respect for craftsmanship, and exceptional quality.",
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
} as const;

export function t(lang: Lang) {
  return strings[lang === "fr" ? "en" : "en"];
}
