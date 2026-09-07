import { Contact,SiteHeader } from "../components";
import { caseStudies } from "../case-data";
export const metadata={title:"Selected Work — Olusola Kalejaiye"};
export default function CasesPage(){return <main><SiteHeader/><section className="listing shell"><p className="kicker">Selected Work</p><h1>Fintech, eCommerce, Telco, Mixed Reality</h1><div className="projects">{caseStudies.filter(p=>p.slug!=="conversational-ai").map(p=><a className="project" href={"/cases/"+p.slug} key={p.slug}><div className={"projectImage "+(p.client==="Interswitch"||p.client==="Heroshe"?"wide":"phone")}><img src={p.hero} alt={p.client+" case study"}/></div><div className="meta"><span>{p.client}</span><span>{p.year}</span></div><h3>{p.title}</h3></a>)}</div></section><Contact/></main>}
