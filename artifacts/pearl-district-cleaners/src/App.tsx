import { useState, type FormEvent, type ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import {
  Route,
  Switch,
  useLocation,
  Router as WouterRouter,
} from 'wouter';
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  CalendarDays,
  Check,
  ChevronDown,
  Clock3,
  HeartHandshake,
  MapPin,
  Menu,
  Navigation,
  Phone,
  Scissors,
  Send,
  Shirt,
  Sparkles,
  Star,
  Waves,
  Wind,
  X,
} from 'lucide-react';

const queryClient = new QueryClient();

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [quoteStatus, setQuoteStatus] = useState<'idle' | 'sent'>('idle');

  const services = [
    {
      title: 'Dry cleaning',
      kicker: 'Everyday polish',
      icon: Shirt,
      copy: 'Thoughtful solvent care for wool, silk, suiting, and the pieces that make up your week. Returned crisp, unhurried, and ready.',
      detail: 'Same-day pickup available on select items',
    },
    {
      title: 'Wash & fold',
      kicker: 'The good kind of easy',
      icon: Waves,
      copy: 'Soft, fresh, neatly folded laundry for busy households and small businesses. We handle the ordinary so you have more room for life.',
      detail: 'Ask about recurring neighborhood service',
    },
    {
      title: 'Wedding garments',
      kicker: 'For the once-in-a-lifetime',
      icon: HeartHandshake,
      copy: 'Delicate finishing and preservation-minded care for dresses, tuxedos, veils, and heirlooms that deserve a little ceremony.',
      detail: 'Consultation recommended for heirloom pieces',
    },
    {
      title: 'Home textiles',
      kicker: 'A cleaner room',
      icon: Wind,
      copy: 'Duvets, curtains, coverlets, and the large layers of home life, cleaned with the space and technique they need.',
      detail: 'Duvet and curtain cleaning by appointment',
    },
    {
      title: 'Stain rescue',
      kicker: 'No panic necessary',
      icon: Sparkles,
      copy: 'Bring us the coffee, wine, rain, or mystery mark. Our team assesses the fabric first, then chooses the gentlest effective approach.',
      detail: 'Tell us what happened for best results',
    },
    {
      title: 'Rush service',
      kicker: 'When tomorrow is soon',
      icon: Clock3,
      copy: 'A faster path for the moments that cannot wait. Call ahead and we will tell you what is possible before you make the trip.',
      detail: 'Call 503-224-7733 to confirm timing',
    },
  ];

  const handleQuote = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setQuoteStatus('sent');
  };

  return (
    <div className="site-shell">
      <div className="topline">
        <div className="page-width topline-inner">
          <span><span className="status-dot" /> Serving the Pearl District since 1998</span>
          <a href="tel:+15032247733" data-testid="link-top-phone">Call the counter <Phone size={13} /> 503.224.7733</a>
        </div>
      </div>

      <header className="site-header">
        <div className="page-width header-inner">
          <a href="#top" className="brand" data-testid="link-brand">
            <span className="brand-mark">P</span>
            <span><strong>Pearl District</strong><em>Cleaners</em></span>
          </a>
          <button className="menu-trigger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" data-testid="button-menu">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
            <a href="#services" onClick={() => setMenuOpen(false)} data-testid="link-services">Services</a>
            <a href="#our-way" onClick={() => setMenuOpen(false)} data-testid="link-our-way">Our way</a>
            <a href="#visit" onClick={() => setMenuOpen(false)} data-testid="link-visit">Visit us</a>
            <a href="#quote" className="nav-cta" onClick={() => setMenuOpen(false)} data-testid="link-quote">Get a quote <ArrowUpRight size={15} /></a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero page-width">
          <div className="hero-copy reveal">
            <div className="eyebrow"><span className="eyebrow-line" /> The neighborhood's garment care</div>
            <h1>Good clothes.<br /><span>Good hands.</span></h1>
            <p className="hero-lede">The trusted cleaner on Flanders for the pieces you wear on repeat and the ones you only get one chance to wear.</p>
            <div className="hero-actions">
              <a href="#quote" className="button button-dark" data-testid="link-hero-quote">Tell us what needs care <ArrowRight size={17} /></a>
              <a href="tel:+15032247733" className="button button-quiet" data-testid="link-hero-phone"><Phone size={16} /> Call 503.224.7733</a>
            </div>
            <div className="hero-proof">
              <div className="avatar-stack"><span>JM</span><span>AR</span><span>LS</span></div>
              <div><div className="stars" aria-label="4.6 out of 5 stars"><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /></div><strong>4.6 from 151 neighbors</strong></div>
            </div>
          </div>
          <div className="hero-art reveal reveal-delay">
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="garment-card">
              <div className="garment-card-top"><span>PEARL / 01</span><span>CARE TICKET</span></div>
              <div className="garment-illustration">
                <div className="hanger"><span /><span /></div>
                <div className="jacket"><i /><b /><strong /></div>
                <div className="pocket-square" />
              </div>
              <div className="garment-card-bottom"><span>FLANDERS ST.</span><span>EST. 1998</span></div>
            </div>
            <div className="floating-note note-top"><Scissors size={15} /><span>Handled<br /><b>with care</b></span></div>
            <div className="floating-note note-bottom"><span className="mini-check"><Check size={12} /></span><span>Ready when<br /><b>you are</b></span></div>
          </div>
        </section>

        <section className="trust-strip">
          <div className="page-width trust-grid">
            <div className="trust-intro"><BadgeCheck size={18} /><span>Small shop.<br /><strong>Serious standards.</strong></span></div>
            <div className="trust-stat"><strong>26</strong><span>years in the<br />Pearl District</span></div>
            <div className="trust-stat"><strong>4.6<span className="stat-star">★</span></strong><span>from 151<br />local reviews</span></div>
            <div className="trust-stat"><strong>6×</strong><span>ways to make<br />life feel lighter</span></div>
            <div className="trust-note">“They know my clothes<br />better than I do.” <span>— A Pearl neighbor</span></div>
          </div>
        </section>

        <section id="services" className="section page-width services-section">
          <div className="section-heading">
            <div><div className="eyebrow"><span className="eyebrow-line" /> What we do</div><h2>Care for every<br /><i>chapter.</i></h2></div>
            <p>From a Monday shirt to a wedding dress, we bring the same patient attention to every item that crosses our counter.</p>
          </div>
          <div className="service-browser">
            <div className="service-list" role="tablist" aria-label="Services">
              {services.map((service, index) => {
                const Icon = service.icon;
                return <button key={service.title} role="tab" aria-selected={activeService === index} className={`service-tab ${activeService === index ? 'is-active' : ''}`} onClick={() => setActiveService(index)} data-testid={`button-service-${index}`}>
                  <span className="service-index">0{index + 1}</span><Icon size={19} /><span>{service.title}</span><ChevronDown size={16} className="service-chevron" />
                </button>;
              })}
            </div>
            <div className="service-detail" role="tabpanel" data-testid="panel-service-detail">
              {(() => { const service = services[activeService]; const Icon = service.icon; return <><div className="detail-icon"><Icon size={25} /></div><div className="detail-kicker">{service.kicker}</div><h3>{service.title}</h3><p>{service.copy}</p><div className="detail-foot"><span><Check size={14} /> {service.detail}</span><a href="#quote" data-testid="link-service-quote">Ask about this <ArrowUpRight size={15} /></a></div></>; })()}
            </div>
          </div>
        </section>

        <section id="our-way" className="way-section">
          <div className="page-width way-grid">
            <div className="way-visual">
              <div className="way-circle circle-back" /><div className="way-circle circle-front" />
              <div className="folded-linen"><span /><span /><span /></div>
              <div className="way-label"><span>THE PEARL</span><strong>Neighborhood<br />care, done right.</strong></div>
            </div>
            <div className="way-copy">
              <div className="eyebrow light"><span className="eyebrow-line" /> The Pearl way</div>
              <h2>We notice<br /><i>the little things.</i></h2>
              <p>There is a difference between processing clothes and caring for them. We look at the fabric, the finish, the story, and the person waiting to wear it again.</p>
              <div className="way-list">
                <div><span>01</span><p><strong>We ask first.</strong> Every item gets a fabric-first assessment before it meets a machine.</p></div>
                <div><span>02</span><p><strong>We remember.</strong> A familiar face and a familiar preference are part of the service.</p></div>
                <div><span>03</span><p><strong>We call it straight.</strong> If we cannot improve something safely, we will tell you.</p></div>
              </div>
              <a href="#visit" className="text-link light-link" data-testid="link-way-visit">Meet us on Flanders <ArrowRight size={16} /></a>
            </div>
          </div>
        </section>

        <section className="section page-width process-section">
          <div className="section-heading compact"><div><div className="eyebrow"><span className="eyebrow-line" /> How it works</div><h2>Drop in.<br /><i>Exhale.</i></h2></div><p>No account, app, or complicated process. Just good local service from a team that knows its craft.</p></div>
          <div className="process-row">
            <div className="process-step"><span>01</span><div className="process-icon"><MapPin size={20} /></div><h3>Bring it by</h3><p>Find us at 1427B NW Flanders, tucked into the neighborhood.</p></div>
            <div className="process-connector" />
            <div className="process-step"><span>02</span><div className="process-icon"><Scissors size={20} /></div><h3>We make a plan</h3><p>We talk through timing, fabric, and the best route for your piece.</p></div>
            <div className="process-connector" />
            <div className="process-step"><span>03</span><div className="process-icon"><Sparkles size={20} /></div><h3>Pick up happy</h3><p>Fresh, finished, and ready for its next outing. We will see you soon.</p></div>
          </div>
        </section>

        <section id="visit" className="visit-section page-width">
          <div className="visit-card">
            <div className="visit-copy"><div className="eyebrow"><span className="eyebrow-line" /> Come say hello</div><h2>Right here<br />on <i>Flanders.</i></h2><p>Easy to find, easy to talk to, and always happy to help you figure out the best next step for a beloved piece.</p><a href="https://www.google.com/maps/search/?api=1&query=1427B+NW+Flanders+St%2C+Portland%2C+OR+97209" target="_blank" rel="noreferrer" className="button button-dark" data-testid="link-directions">Get directions <Navigation size={16} /></a></div>
            <div className="map-art"><div className="map-grid-lines" /><div className="map-road road-a" /><div className="map-road road-b" /><div className="map-road road-c" /><div className="map-pin"><MapPin size={22} fill="currentColor" /></div><div className="map-label">1427B NW<br /><strong>FLANDERS ST.</strong></div><div className="map-corner">NW 14TH <span>+</span> NW 15TH</div></div>
          </div>
          <div className="hours-row"><div><Clock3 size={17} /><span><strong>Mon–Fri</strong> 8:00am–6:00pm</span></div><div><Clock3 size={17} /><span><strong>Saturday</strong> 9:00am–4:00pm</span></div><div><Phone size={17} /><a href="tel:+15032247733" data-testid="link-visit-phone"><strong>Call ahead</strong> 503.224.7733</a></div></div>
        </section>

        <section id="quote" className="quote-section">
          <div className="page-width quote-grid">
            <div className="quote-intro"><div className="eyebrow light"><span className="eyebrow-line" /> A little note is enough</div><h2>What can we<br /><i>take off</i> your plate?</h2><p>Tell us a little about what you need. We will follow up during shop hours with a thoughtful answer, not a robot.</p><div className="quote-contact"><span>Prefer a real voice?</span><a href="tel:+15032247733" data-testid="link-quote-phone"><Phone size={15} /> 503.224.7733</a></div></div>
            <form className="quote-form" onSubmit={handleQuote}>
              {quoteStatus === 'sent' ? <div className="success-state"><div className="success-mark"><Check size={24} /></div><div className="eyebrow light"><span className="eyebrow-line" /> Message received</div><h3>We’ll take it from here.</h3><p>Thanks for reaching out. A Pearl District Cleaners team member will be in touch during shop hours.</p><button type="button" className="button button-outline-light" onClick={() => setQuoteStatus('idle')} data-testid="button-send-another">Send another note <ArrowRight size={16} /></button></div> : <><div className="form-row"><label>Your name<input required name="name" placeholder="First and last" data-testid="input-name" /></label><label>Best number or email<input required name="contact" placeholder="How should we reach you?" data-testid="input-contact" /></label></div><label>What needs care?<textarea required name="message" rows={4} placeholder="A wedding dress, a duvet, a stubborn stain..." data-testid="input-message" /></label><div className="form-bottom"><span><CalendarDays size={15} /> We reply during shop hours</span><button type="submit" className="button button-accent" data-testid="button-submit-quote">Send my note <Send size={15} /></button></div></>}
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-width footer-main"><a href="#top" className="brand footer-brand" data-testid="link-footer-brand"><span className="brand-mark">P</span><span><strong>Pearl District</strong><em>Cleaners</em></span></a><p>Good clothes. Good hands.<br />A neighborhood cleaner on Flanders.</p><div className="footer-links"><a href="#services" data-testid="link-footer-services">Services</a><a href="#our-way" data-testid="link-footer-our-way">Our way</a><a href="#visit" data-testid="link-footer-visit">Visit</a><a href="#quote" data-testid="link-footer-quote">Contact</a></div></div>
        <div className="page-width footer-bottom"><span>© 2024 Pearl District Cleaners</span><span>1427B NW Flanders St · Portland, OR 97209</span><a href="tel:+15032247733" data-testid="link-footer-phone">503.224.7733 <ArrowUpRight size={13} /></a></div>
      </footer>
    </div>
  );
}

function Router() {
  return (
    // Keep a shared shell (sidebar, navbar) outside the boundary so it
    // survives a page crash.
    <RoutedErrorBoundary>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
