const projects = [
  { title: "Project One", description: "A short description of a project you are proud of." },
  { title: "Project Two", description: "Add the problem you solved and the tools you used." },
  { title: "Project Three", description: "Share the outcome and what you learned along the way." },
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <p className="eyebrow">HELLO, I&apos;M</p>
        <h1>Your Name.</h1>
        <p className="intro">I design and build thoughtful digital experiences.</p>
        <a className="button" href="#work">See my work</a>
      </section>
      <section id="work" className="work">
        <p className="eyebrow">SELECTED WORK</p>
        <div className="grid">
          {projects.map((project, index) => (
            <article key={project.title}>
              <span>0{index + 1}</span>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </article>
          ))}
        </div>
      </section>
      <footer>Built with Next.js · Make it yours.</footer>
    </main>
  );
}
