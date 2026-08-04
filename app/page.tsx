const sections = [
  {
    eyebrow: "The New Internet Economy",
    title: "Rise of AI Agents",
    copy: "The world has not seen this level of change across so many dimensions at this pace. With the rise of artificial intelligence in general and AI Agents in particular, the business world will not be the same. Are you ready to jump on the opportunity of a lifetime and transform your business and market ecosystem?",
    image: "/images/image05.jpg",
    alt: "Illustrated Agents of Business team",
    cta: "Beyond Automation",
    tone: "coral",
  },
  {
    eyebrow: "The Network is the Market",
    title: "Ecosystems of Growth",
    copy: "Agents of Business are part of a global ecosystem of growth professionals across business development, marketing and sales, partnerships, strategic alliances, financing and M&A, and all forms of corporate development. Engage today to discuss how our proprietary AI-powered growth engine can drive your platform strategy and growth to new heights in the coming AI-powered Internet economy. Unlock nonlinearity.",
    image: "/images/image07.jpg",
    alt: "Three futuristic agents in a connected network",
    cta: "Beyond Growth",
    tone: "aqua",
  },
];

const growthCards = [
  {
    eyebrow: "Scaling Organically",
    title: "Sales and Marketing",
    copy: "Agents of Business start with a unique first step: we measure your marketing and sales budget, dollar-for-dollar, against income. With our patented Open Marketing Ledger, we drive a fully closed-loop economy for your market. Get started with optimizing your customer acquisition cost (CAC) and driving more organic sales every month. Calculate your marketing ROI and team effectiveness with our Net Promoter SaleRank engine. Empower your ecosystem with AI-powered platform business models, and unleash the network-of-networks effect.",
    image: "/images/image04.jpg",
    alt: "A digital superhero accelerating through a network",
  },
  {
    eyebrow: "Scaling Inorganically",
    title: "Corp Dev and M&A",
    copy: "Growth comes in two flavors: organic and inorganic. Our unique AI-powered approach turbocharges organic growth, and we also deliver inorganic growth through M&A across your market ecosystem. Engage Agents of Business to help you articulate your Network Acquisition strategy and get help operationalizing it from start to finish. Talk to us about reverse engineering your desired exit or liquidity event, and accelerating your business like a rocketship.",
    image: "/images/image02.jpg",
    alt: "A digital superhero in motion",
  },
  {
    eyebrow: "Scaling Innovation",
    title: "Corporate Ventures",
    copy: "The AI-powered Internet economy is moving too fast for anyone or any business to keep up. Bold entrepreneurs launch new startups every day, aiming to disrupt your business. You cannot protect against this type of decentralized and unknowable risk unless you lean into the process of disruption instead of trying to beat it. Engage Agents of Business to drive Innovation as a Service, and launch your own venture program to harness the energy of the entrepreneurial ecosystem.",
    image: "/images/image06.jpg",
    alt: "A digital superhero representing innovation",
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <header className="site-nav">
        <a className="brand" href="#home" aria-label="Agents of Business home">
          <img src="/images/image03.jpg" alt="" />
          <span>Agents of Business</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#network">Network</a>
          <a href="#growth">Growth</a>
          <a className="nav-cta" href="#contact">Engage <Arrow /></a>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <div className="hero-copy">
          <div className="kicker"><span className="status-dot" /> Human + AI</div>
          <h1>Agents <em>of</em><br />Business</h1>
          <p>The Future is Now. Is your business going to survive the technology boom? Agents of Business is a global network of human and AI Agents working together to help scale businesses globally.</p>
          <a className="button button-primary" href="#economy">Beyond AI <Arrow /></a>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="image-frame hero-image">
            <img src="/images/image05.jpg" alt="" />
          </div>
          <span className="sticker sticker-one">HUMAN<br />+ AI</span>
          <span className="sticker sticker-two">THE FUTURE<br />IS NOW</span>
        </div>
        <div className="ticker" aria-hidden="true">
          <span>HUMAN × AI × BUSINESS × GROWTH × NETWORKS × </span>
          <span>HUMAN × AI × BUSINESS × GROWTH × NETWORKS × </span>
        </div>
      </section>

      <section className="intro" id="economy">
        <span className="section-number">01 / THE SHIFT</span>
        <p className="intro-statement">The New Internet Economy</p>
        <div className="intro-grid">
          <h2>Rise of<br /><span>AI Agents</span></h2>
          <p>{sections[0].copy}</p>
        </div>
        <div className="wide-image">
          <img src={sections[0].image} alt={sections[0].alt} />
          <a className="floating-button" href="#network">Beyond Automation <Arrow /></a>
        </div>
      </section>

      <section className="network" id="network">
        <div className="network-image image-frame">
          <img src={sections[1].image} alt={sections[1].alt} />
          <span className="image-label">NETWORK<br />EFFECT</span>
        </div>
        <div className="network-copy">
          <span className="section-number">02 / THE NETWORK</span>
          <p className="eyebrow">{sections[1].eyebrow}</p>
          <h2>Ecosystems<br /><span>of Growth</span></h2>
          <p>{sections[1].copy}</p>
          <a className="button button-dark" href="#growth">Beyond Growth <Arrow /></a>
        </div>
      </section>

      <section className="growth" id="growth">
        <div className="growth-heading">
          <span className="section-number">03 / GROWTH</span>
          <h2>Agents of<br /><span>Business</span></h2>
        </div>
        <div className="growth-list">
          {growthCards.map((card, index) => (
            <article className="growth-card" key={card.title}>
              <div className="card-index">0{index + 1}</div>
              <div className="card-image"><img src={card.image} alt={card.alt} /></div>
              <div className="card-copy">
                <p className="eyebrow">{card.eyebrow}</p>
                <h3>{card.title}</h3>
                <p>{card.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-mark">
          <img src="/images/image01.jpg" alt="Agents of Business emblem" />
        </div>
        <div className="contact-copy">
          <p className="eyebrow">Start the Engines</p>
          <h2>Leapfrog<br /><span>Everyone</span></h2>
          <p>AI and FinTech are changing how business operates, and it is happening at the speed of the Internet, faster and faster every year. Engage with Agents of Business and deploy an army of strategic professionals to help drive your market expansion. Reach out below, and an Agent of Business will connect with you:</p>
          <a className="button button-light" href="mailto:user@domain.ext">Email <Arrow /></a>
        </div>
        <div className="socials" aria-label="Social platforms">
          <span>X</span><span>Instagram</span><span>TikTok</span><span>Facebook</span><a href="mailto:user@domain.ext">Email</a>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#home">
          <img src="/images/image03.jpg" alt="" />
          <span>Agents of Business</span>
        </a>
        <p>Human + AI</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </main>
  );
}
