export type CaseStudy = {
  slug:string; client:string; year:string; title:string; subtitle:string; tags:string;
  timeline:string; role:string; hero:string; metrics?:{value:string;label:string}[];
  sections:{title:string;body:string;image?:string}[]; source?:string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug:"heritage-bank", client:"Heritage Bank", year:"2023",
    title:"Modernizing Heritage Bank's Mobile Experience For The Next Generation of Users",
    subtitle:"A clearer, faster mobile-banking experience for more than 2.3 million depositors.",
    tags:"Mobile · Banking · Fintech", timeline:"May ’23 – Jan ’24", role:"Lead Product Designer",
    hero:"https://framerusercontent.com/images/lgoQ7o57ZB1VU4RaW3dG6fbqOKk.gif?width=400&height=720",
    metrics:[{value:"10k",label:"Downloads in first month"},{value:"97%",label:"Unassisted onboarding"},{value:"60%",label:"Reduction in time to value"}],
    sections:[
      {title:"A bit of context",body:"Heritage Bank is one of Nigeria’s commercial banks with over 2.3M depositors. Its mobile banking app had grown outdated, with clunky navigation, poor onboarding and an inconsistent design. These issues left users frustrated and stakeholders dissatisfied."},
      {title:"My role",body:"As lead product designer, I owned both UX and UI. I began with a UX audit, analysed more than 200 App Store reviews and benchmarked leading fintech apps. Onboarding and transfers emerged as the biggest sources of friction."},
      {title:"Onboarding",body:"I redesigned the experience for new users, returning customers and Padie users. New customers can set up a profile with an account number and OTP, while returning users can quickly sign in and use biometrics for later sessions.",image:"https://framerusercontent.com/images/KmtJB5MUmS6JSN7VviibqAacOw.gif?width=750&height=1624"},
      {title:"A new home and navigation",body:"The home screen surfaces transfers, bills and account history. A new bottom navigation brings Home, Transactions, Self-Service and Profile within one or two taps.",image:"https://framerusercontent.com/images/YhrKqjqwiqeSxG8gchCKP2RplM.gif?width=375&height=812"},
      {title:"A scalable design system",body:"I created a component-based system using tokens for colour, spacing and typography, making it easier for engineers to switch themes, introduce new modules and maintain consistency.",image:"https://framerusercontent.com/images/Db2azuiGf6jiXSXhuv6vK1JGs.gif?width=960&height=720"}
    ]
  },
  {
    slug:"mvno", client:"VerveMobile", year:"2024",
    title:"Blending Connectivity and Payments for the Modern Nigerian",
    subtitle:"An experience for young Nigerians to stay connected, transact securely and be rewarded.",
    tags:"Mobile · Telco · Fintech", timeline:"Jan ’24 – Feb ’25", role:"Lead Product Designer",
    hero:"https://framerusercontent.com/images/K3ubM3PgPfjMu98PzZruZM2vXHg.gif?width=502&height=862",
    sections:[
      {title:"Background",body:"Interswitch, the parent company of Verve with over 70M cardholders, wanted a direct-to-consumer channel beyond its traditional relationships with banks and fintechs. An MVNO under the Verve brand offered a way to serve a younger growth audience."},
      {title:"My role",body:"I led design for this strategy-focused initiative. I researched the mental models young people formed through fintech and social apps, worked with legal and compliance teams, collaborated with product and engineering, and validated decisions through flow-by-flow usability tests."},
      {title:"Friction-free SIM purchase",body:"The purchase journey was designed to drive adoption while providing clear confirmation and delivery tracking.",image:"https://framerusercontent.com/images/MoZKz8n4OVpNBJqK2xROMTw3j9Y.gif?width=748&height=1624"},
      {title:"Activation and everyday use",body:"Regulatory-compliant SIM activation keeps the speed and simplicity young users expect. Home, Profile and Analytics reveal SIM status, top-up balances, quick actions and usage insights."}
    ]
  },
  {
    slug:"conversational-ai", client:"Independent Study", year:"2025",
    title:"Can Human-Centric AI Improve Mobile Banking?",
    subtitle:"Exploring how conversational interfaces can make complex banking tasks feel clearer and more natural.",
    tags:"Research · Conversational AI · Fintech", timeline:"2025", role:"Product Designer & Researcher",
    hero:"https://framerusercontent.com/images/xdxOrp8dBGvRcDxjB9ctWElBcU.gif?width=400&height=720",
    source:"https://www.figma.com/deck/wMuryAcqkAtYRmw8vSc5t7/Presentation-Sildes?node-id=6-65&t=SBY3NPzNEH6bO6bR-1",
    sections:[
      {title:"The question",body:"Traditional mobile banking asks people to navigate rigid menus and translate their intent into a bank’s information architecture. This study examines whether a human-centred conversational layer can reduce that cognitive burden."},
      {title:"The exploration",body:"The concept uses natural language to help people discover actions, understand account activity and complete common tasks while preserving trust, confirmation and user control."},
      {title:"Design principles",body:"The experience prioritises clarity over novelty: visible system status, explicit confirmation before consequential actions, plain-language explanations and easy access to familiar manual controls."}
    ]
  },
  {
    slug:"opscentral-case-study", client:"Interswitch", year:"2023",
    title:"Bringing Visibility to 1 Billion Monthly Transactions",
    subtitle:"A single source of truth that helps financial partners find, understand and act on transaction data.",
    tags:"B2B · Fintech · Operations", timeline:"Aug ’23 – Jan ’24", role:"Lead Product Designer",
    hero:"https://framerusercontent.com/images/Qeg5qimjBWi2QQwhXtQh4YZrbLM.png?scale-down-to=2048&width=2880&height=1800",
    metrics:[{value:"49",label:"Institutions onboarded"},{value:"286k+",label:"Monthly searches"},{value:"70%",label:"Reduction in support tickets"}],
    sections:[
      {title:"Managing a billion monthly transactions",body:"Banks, fintechs and financial institutions relied on several back-office tools to track settlements, disputes and reports. Fragmented systems, inconsistent search parameters and missing context slowed decisions and increased support tickets."},
      {title:"The challenge",body:"How might we consolidate fragmented processes into one experience that gives partners timely transaction visibility? Research with support staff, account managers and partner institutions revealed three themes: fragmented search, delayed insights and over-reliance on support."},
      {title:"Designed for visibility",body:"OpsCentral introduced single and multi-parameter search, bulk file-upload search and next-day transaction details. The phased approach delivered core visibility quickly while leaving room for actionability.",image:"https://framerusercontent.com/images/2OQK068IGdistPiiiuUYQolLxbo.png?scale-down-to=2048&width=2880&height=1800"},
      {title:"Impact and reflections",body:"Within months, 49 institutions were onboarded, partners ran more than 286,000 searches monthly and support tickets fell by 70%. The work reinforced that intuitive UX matters just as much in B2B tools—and that close collaboration is the shortest path to real operational value.",image:"https://framerusercontent.com/images/i2qeaM6stzze3OjB0KNbxywTx8.png?scale-down-to=2048&width=2880&height=1800"}
    ]
  },
  {
    slug:"heroshe-case-study", client:"Heroshe", year:"2021",
    title:"How Building Trust and Transparency Led to 2x Growth",
    subtitle:"Turning package uncertainty into confidence by keeping shoppers informed at every step.",
    tags:"Logistics · E-commerce · Service Design", timeline:"Sept ’20 – May ’21", role:"Product Designer",
    hero:"https://framerusercontent.com/images/XUgbrPAAQGZAZTmqS2XmkSQkg.png?scale-down-to=2048&width=2560&height=1568",
    metrics:[{value:"2x",label:"Faster processing"},{value:"70%",label:"Fewer irate calls"},{value:"20k",label:"New signups in six months"}],
    sections:[
      {title:"The challenge",body:"Heroshe helps African shoppers buy from global stores, but customers often experienced radio silence after packages reached the warehouse. Items were not missing—the updates were. We asked how timely communication could build confidence in every shipment."},
      {title:"Listening to real voices",body:"Interviews with frequent shoppers, more than 200 survey responses and conversations with support, warehouse and logistics teams revealed a simple need: customers wanted reassurance as soon as a package arrived, not only after processing was complete."},
      {title:"Reimagining the process",body:"We separated inbound receipt from full processing so multiple staff members could work in parallel. Status updates began at warehouse arrival and continued through each stage, while public tracking reduced the need to log in or call support.",image:"https://framerusercontent.com/images/z3myjTjgaeus7bcMBDMbZhuks.png?scale-down-to=2048&width=2880&height=1616"},
      {title:"What we learned",body:"Transparency builds trust. Good service design cannot happen in a silo: involving warehouse, logistics and support teams was essential to creating a system that worked for shoppers and operators alike.",image:"https://framerusercontent.com/images/tj2cmZs6mqMxRFLDbtwrRoTFgks.png?scale-down-to=2048&width=2880&height=1682"}
    ]
  }
];

export const getCase = (slug:string) => caseStudies.find(item => item.slug === slug);
