const projects = [
  { client: "Heritage Bank", year: "2023", title: "Modernizing Heritage Bank's Mobile Banking Experience", href: "https://olusxla.framer.website/cases/heritage-bank", image: "https://framerusercontent.com/images/lgoQ7o57ZB1VU4RaW3dG6fbqOKk.gif?width=400&height=720" },
  { client: "MVNO", year: "2024", title: "Blending Connectivity and Payments for the Modern Nigerian", href: "https://olusxla.framer.website/cases/mvno", image: "https://framerusercontent.com/images/K3ubM3PgPfjMu98PzZruZM2vXHg.gif?width=502&height=862" },
  { client: "Study", year: "2025", title: "Can Human-Centric (Conversational) AI Improve the Way We Experience Mobile Banking?", href: "https://www.figma.com/deck/wMuryAcqkAtYRmw8vSc5t7/Presentation-Sildes?node-id=6-65&t=SBY3NPzNEH6bO6bR-1", image: "https://framerusercontent.com/images/xdxOrp8dBGvRcDxjB9ctWElBcU.gif?width=400&height=720" },
  { client: "Interswitch", year: "2023", title: "Bringing Visibility to a Billion Transactions for Interswitch’s Partners", href: "https://olusxla.framer.website/cases/opscentral-case-study", image: "https://framerusercontent.com/images/Qeg5qimjBWi2QQwhXtQh4YZrbLM.png?scale-down-to=2048&width=2880&height=1800", wide: true },
  { client: "Heroshe", year: "2021", title: "How Building Trust and Transparency Led to 2x Growth for Heroshe", href: "https://olusxla.framer.website/cases/heroshe-case-study", image: "https://framerusercontent.com/images/XUgbrPAAQGZAZTmqS2XmkSQkg.png?scale-down-to=2048&width=2560&height=1568", wide: true },
];

const portrait = "https://framerusercontent.com/images/AJALIhgDyNnUPG2k5lrhhwd9Jdk.png?width=160&height=160";

export default function Home() {
  return <main>
    <header className="nav shell">
      <a className="identity" href="#top"><img src={portrait} alt="Olusola Kalejaiye" /><span><strong>Olusola K.</strong><small>Product Designer</small></span></a>
      <nav><a href="#work">Cases</a><a href="#about">About</a></nav>
      <a className="contactButton" href="#get-in-touch">Get in touch</a>
    </header>
    <section className="intro shell" id="top">
      <h1>Hi there, I&apos;m Olusola!<br />You can call me &apos;Sola&apos; <span>[shaw–la]</span></h1>
      <p className="lede">I’m a product designer based in the United Kingdom 🇬🇧, designing high trust fintech and operational products used by millions, simplifying complex financial systems into clear experiences.</p>
      <div className="heroVisual"><img src="https://framerusercontent.com/images/5QIQUL0FjKO5Az0BMqVwaQ6Mps.gif?scale-down-to=2048" alt="Mobile product design preview" /></div>
      <p className="experience" id="about">I&apos;m currently designing for trust and clarity at <a href="https://www.interswitchgroup.com/">Interswitch Group</a>.<br />Previously worked with teams at <a href="https://terrace.fi/">Terrace (YC S22)</a>, <a href="https://omnibiz.com/">Omnibiz Africa</a> and <a href="https://www.heroshe.com/">Heroshe</a>.</p>
    </section>
    <section className="work shell" id="work">
      <h2>Selected Work</h2>
      <div className="projects">{projects.map(p => <a className="project" href={p.href} key={p.title}>
        <div className={"projectImage " + (p.wide ? "wide" : "phone")}><img src={p.image} alt={p.client + " project preview"} /></div>
        <div className="meta"><span>{p.client}</span><span>{p.year}</span></div><h3>{p.title}</h3>
      </a>)}</div>
    </section>
    <section className="closing shell" id="get-in-touch">
      <img src={portrait} alt="" /><h2>Let’s work together!</h2>
      <p>Would you like to discuss an opportunity or learn more about me or my work, hit me up!</p>
      <a className="email" href="mailto:olusolakalejaiye@icloud.com?subject=Let%27s%20Work%20Together">olusolakalejaiye@icloud.com</a>
      <div className="socials"><a href="https://docs.google.com/document/d/1s5Fe5TWJ74mjMShbYTQU90qzOyh37KghZ-yggPoHJU8/edit?usp=sharing">My Resume</a><a href="https://www.linkedin.com/in/solakalejaiye/">LinkedIn</a></div>
    </section>
    <footer>© 2025 Olusola Kalejaiye</footer>
  </main>;
}
