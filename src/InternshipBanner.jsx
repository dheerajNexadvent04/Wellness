import React, { useEffect, useState } from "react";
import "./InternshipBanner.css";
import logoImage from "./assets/logo.png";

const objectives = [
  "Projects and Presentations on Mental Health",
  "Orientation to the applied field of psychology",
  "Neuropsychology and Forensic Psychology exposure",
  "Case History Taking * MSE (Mental status examination)",
  "Introduction to Counselling skills",
  "Hands-on practice of psychometric assessments",
  "Acquire the requisite competencies of a Psychologist",
];

const learnerChallenges = [
  "You understand core theory, but struggle to apply it in real sessions.",
  "You have studied concepts, but lack hands-on psychology exposure.",
  "You are unsure how counselling conversations work in practice.",
  "You want to feel internship-ready before your next academic step.",
];

const fieldSteps = [
  {
    id: "STEP 1",
    title: "You won't just sit in a classroom.",
    description:
      "Real psychology happens in the real world. Our program takes you beyond theory into actual human environments.",
    image:
      "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "STEP 2",
    title: "You will be in cafes. Watching conversations.",
    description:
      "Learn to observe social dynamics, body language, and interpersonal communication in natural settings.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "STEP 3",
    title: "In public spaces. Observing behaviour.",
    description:
      "Study crowd psychology, stress responses, and decision-making in high-pressure urban environments.",
    image:
      "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "STEP 4",
    title: "In communities. Understanding people.",
    description:
      "Engage with diverse groups to understand cultural contexts, social structures, and group dynamics.",
    image:
      "https://images.unsplash.com/photo-1593113630400-ea4288922497?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "STEP 5",
    title: "Psychology in real life.",
    description:
      "Transform your understanding of human behavior through hands-on experience and expert mentorship.",
    image:
      "https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=1400&q=80",
  },
];

const internshipPlans = [
  {
    name: "Foundation",
    subtitle: "Start your psychology journey with structured exposure.",
    price: "Rs 5,000",
    badge: "",
    cta: "Start Your Internship",
    items: [
      "120-hour internship access",
      "Templates and worksheets",
      "Community exposure tasks",
      "Guided observership sessions",
      "Program completion certificate",
      "College documentation support",
    ],
  },
  {
    name: "Advanced",
    subtitle: "Go deeper and build stronger practical confidence.",
    price: "Rs 6,000",
    badge: "Most Chosen",
    featured: true,
    cta: "Upgrade to Advanced",
    items: [
      "Everything in Foundation",
      "Letter of Recommendation support",
      "Premium digital resource kit",
      "Recorded masterclass access",
      "Advanced reflection material",
      "Priority activity participation",
    ],
  },
  {
    name: "Mentorship Plus",
    subtitle: "Build direction with focused guidance and career support.",
    price: "Rs 6,500",
    badge: "Limited Seats",
    cta: "Apply for Mentorship Plus",
    items: [
      "Everything in Advanced",
      "Exclusive membership sessions",
      "1:1 career mentorship",
      "Personalised career mapping",
      "Extended learning community access",
      "Priority access to future programs",
    ],
  },
];

const immersionTiles = [
  {
    title: "Live Training",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=80",
    className: "tile-large",
  },
  {
    title: "Real-World Observation",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80",
    className: "tile-top-right",
  },
  {
    title: "Peer Practice",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1400&q=80",
    className: "tile-mid-right",
  },
  {
    title: "Community Exposure",
    image:
      "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=1400&q=80",
    className: "tile-bottom-1",
  },
  {
    title: "Shadowing",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80",
    className: "tile-bottom-2",
  },
  {
    title: "Listening Circles",
    image:
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1400&q=80",
    className: "tile-bottom-3",
  },
];

const experimentSteps = [
  {
    id: "1",
    title: "Choose a Question",
    text: "Pick a real behaviour, bias, communication, or emotion that you are curious about.",
  },
  {
    id: "2",
    title: "Step Into the Real World",
    text: "Go beyond controlled settings. Observe people, interactions, and patterns in real environments.",
  },
  {
    id: "3",
    title: "Engage and Observe",
    text: "Interact, listen, and notice what is actually happening, not what you assumed.",
  },
  {
    id: "4",
    title: "Make Sense of It",
    text: "Break down what you saw. Identify patterns, contradictions, and useful insights.",
  },
  {
    id: "5",
    title: "Present Your Understanding",
    text: "Share your findings, your thinking, and how your perspective changed.",
  },
];

export default function InternshipBanner() {
  const [activeExperimentStep, setActiveExperimentStep] = useState(0);
  const [activeNavSection, setActiveNavSection] = useState("product");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [headerFloating, setHeaderFloating] = useState(false);
  const navSectionIds = [
    "product",
    "experience",
    "challenge",
    "steps",
    "pricing",
    "immersion",
    "experiment",
    "final-cta",
  ];

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal-on-scroll");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, nextProgress)));
      setHeaderFloating(scrollTop > 12);
    };

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveNavSection(entry.target.id);
          }
        });
      },
      { threshold: 0.45 }
    );

    navSectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        sectionObserver.observe(element);
      }
    });

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      sectionObserver.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main>
      <div className="scroll-progress-track" aria-hidden="true">
        <span className="scroll-progress-fill" style={{ width: `${scrollProgress}%` }} />
      </div>

      <aside className="section-pagination" aria-label="Section navigation">
        {navSectionIds.map((id) => (
          <button
            key={id}
            type="button"
            className={`section-dot ${activeNavSection === id ? "active" : ""}`}
            onClick={() =>
              document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
            }
            aria-label={`Go to ${id.replace("-", " ")} section`}
          />
        ))}
      </aside>

      <header className={`site-header ${headerFloating ? "is-floating" : ""}`}>
        <div className="page-shell topbar">
          <div className="topbar-left" aria-hidden="true">
            <button type="button" className="header-icon-btn" aria-label="Menu">
              <svg viewBox="0 0 24 24" width="30" height="30" fill="none" aria-hidden="true">
                <path d="M4 7H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M4 12H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M4 17H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <div className="logo-block" aria-label="1Wellness Clinic">
            <img className="logo-image" src={logoImage} alt="1Wellness Clinic" />
          </div>

          <div className="topbar-right" aria-hidden="true">
            <button type="button" className="header-icon-btn" aria-label="Account">
              <svg viewBox="0 0 24 24" width="29" height="29" fill="none" aria-hidden="true">
                <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.8" />
                <path d="M4 20C5.5 16.7 8.4 15 12 15C15.6 15 18.5 16.7 20 20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>
            <button type="button" className="header-icon-btn" aria-label="Search">
              <svg viewBox="0 0 24 24" width="29" height="29" fill="none" aria-hidden="true">
                <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.8" />
                <path d="M16 16L20 20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>
            <button type="button" className="header-icon-btn" aria-label="Cart">
              <svg viewBox="0 0 24 24" width="29" height="29" fill="none" aria-hidden="true">
                <path d="M5 8.5H19L18 19H6L5 8.5Z" stroke="currentColor" strokeWidth="1.8" />
                <path d="M9 8.5V7C9 5.3 10.3 4 12 4C13.7 4 15 5.3 15 7V8.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <section id="product" className="page-shell product-layout reveal-on-scroll">
        <article className="left-card">
          <div className="left-card-inner">
            <p className="poster-kicker">1Wellness Clinic</p>
            <h1 className="poster-title">
              <span className="poster-main">
                <span>PSYCHOLOGY</span>
                <span>INTERNSHIP</span>
              </span>
              <span className="poster-sub">Online/Offline</span>
            </h1>
            <p className="poster-note">OPEN FOR CLASS 12TH, UG/PG/M.PHIL/Phd</p>
          </div>
        </article>

        <article className="right-content">
          <h2 className="product-title">The Summer Psychology Internship</h2>
          <p className="product-price">Rs. 5,500.00</p>

          <div className="cta-row">
            <a className="apply-btn" href="mailto:Clinic.1wellness@gmail.com">
              Apply Now
            </a>
            <a className="contact-link" href="tel:+919560463949">
              +91 9560-463-949
            </a>
          </div>

          <section className="objectives-card" id="objectives">
            <h3>OUR OBJECTIVES</h3>
            <ul className="objective-list">
              {objectives.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </article>
      </section>

      <section id="experience" className="page-shell experience-section reveal-on-scroll">
        <article className="experience-copy">
          <p className="experience-tag">Beyond Theory</p>
          <h3>Psychology is built through observation, interaction, and practice.</h3>
          <p className="experience-sub">
            This internship is designed for learners who want real application, not
            only memorisation.
          </p>
          <p className="experience-text">
            Over one month, participants work on mental health case discussions,
            counselling basics, behavioural understanding, and practical assessment
            exposure under guided mentorship from the 1Wellness Clinic team.
          </p>

          <div className="experience-actions">
            <a className="brochure-btn" href="mailto:Clinic.1wellness@gmail.com">
              Request Program Brochure
            </a>
            <a className="ghost-btn" href="tel:+919560463949">
              Talk to Admissions
            </a>
          </div>
        </article>

        <article className="experience-media">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
            alt="Students learning together in an interactive workshop setting"
            loading="lazy"
          />
          <div className="media-badge">
            <strong>120+ Hours</strong>
            <span>Applied Learning Journey</span>
          </div>
        </article>
      </section>

      <section id="challenge" className="page-shell challenge-section reveal-on-scroll">
        <h3>Most Psychology Learners Feel This.</h3>

        <div className="challenge-list">
          {learnerChallenges.map((item) => (
            <div key={item} className="challenge-item">
              <span className="challenge-dot" aria-hidden="true" />
              <p>{item}</p>
            </div>
          ))}
        </div>

        <div className="challenge-note">
          This is not only a knowledge gap. It is an exposure and practice gap.
        </div>
      </section>

      <section id="steps" className="page-shell step-series reveal-on-scroll">
        {fieldSteps.map((step, index) => (
          <article
            key={step.id}
            className={`step-story reveal-on-scroll ${index % 2 === 1 ? "reverse" : ""}`}
          >
            <div className="step-copy">
              <p className="step-kicker">{step.id}</p>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>

            <div className="step-media">
              <img src={step.image} alt={step.title} loading="lazy" />
              <span className="step-dot" aria-hidden="true" />
            </div>
          </article>
        ))}
      </section>

      <section id="pricing" className="page-shell pricing-section reveal-on-scroll">
        <h3>Choose Your Internship Experience</h3>
        <p className="pricing-intro">
          Not everyone needs the same level of depth. Choose the path that fits your
          learning goals.
        </p>

        <div className="pricing-grid">
          {internshipPlans.map((plan) => (
            <article
              key={plan.name}
              className={`pricing-card ${plan.featured ? "featured" : ""}`}
            >
              {plan.badge && <span className="plan-badge">{plan.badge}</span>}

              <p className="plan-subtitle">{plan.subtitle}</p>
              <h4>{plan.price}</h4>

              <ul className="plan-list">
                {plan.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <a className="plan-btn" href="mailto:Clinic.1wellness@gmail.com">
                {plan.cta}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="immersion" className="page-shell immersion-section reveal-on-scroll">
        <h3>Not Classes. Experiences.</h3>
        <p>
          This is a structured, real-world learning environment where you observe,
          interact, and apply psychology.
        </p>

        <div className="immersion-grid">
          {immersionTiles.map((tile) => (
            <article key={tile.title} className={`immersion-tile ${tile.className}`}>
              <img src={tile.image} alt={tile.title} loading="lazy" />
              <div className="immersion-overlay" />
              <h4>{tile.title}</h4>
            </article>
          ))}
        </div>
      </section>

      <section id="experiment" className="experiment-section reveal-on-scroll">
        <div className="page-shell experiment-inner">
          <p className="experiment-kicker">Your Final Experience</p>
          <h3>Run a Real Psychology Experiment</h3>
          <p className="experiment-intro">
            This is not just an assignment. This is where your theory and practical
            understanding come together.
          </p>

          <div className="experiment-desktop-grid">
            {experimentSteps.map((step) => (
              <article key={step.id} className="experiment-card">
                <div className="experiment-number">{step.id}</div>
                <h4>{step.title}</h4>
                <p>{step.text}</p>
              </article>
            ))}
          </div>

          <div className="experiment-mobile">
            <div
              className="experiment-track"
              style={{ transform: `translateX(-${activeExperimentStep * 100}%)` }}
            >
              {experimentSteps.map((step) => (
                <article key={step.id} className="experiment-card mobile-card">
                  <div className="experiment-number">{step.id}</div>
                  <h4>{step.title}</h4>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>

            <div className="experiment-pagination">
              {experimentSteps.map((step, index) => (
                <button
                  key={step.id}
                  type="button"
                  className={`page-dot ${index === activeExperimentStep ? "active" : ""}`}
                  onClick={() => setActiveExperimentStep(index)}
                  aria-label={`Go to step ${step.id}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="final-cta" className="final-cta-section reveal-on-scroll">
        <div className="page-shell final-cta-inner">
          <p className="final-cta-kicker">Summer Psychology Internship 2026</p>
          <h3>If you are serious about psychology, start experiencing it.</h3>
          <p className="final-cta-sub">
            Stop only studying concepts. Start understanding people, behaviour, and
            real conversations.
          </p>
          <p className="final-cta-highlight">This is where theory finally makes sense.</p>

          <div className="final-cta-actions">
            <a className="final-btn solid" href="mailto:Clinic.1wellness@gmail.com">
              Reserve Your Spot
            </a>
            <a className="final-btn outline" href="#objectives">
              View Full Program Details
            </a>
          </div>

          <p className="final-cta-note">Limited seats to maintain quality of experience.</p>

          <div className="final-cta-points">
            <span>120-hour structured internship</span>
            <span>Real-world exposure and practice</span>
            <span>Built by psychologists</span>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="page-shell footer-grid">
          <div className="footer-brand">
            <p>
              <strong>Bringing Mental Health Learning to Real Life.</strong> 1Wellness
              Clinic supports students through practical psychology exposure and guided
              internship training.
            </p>
            <p className="footer-contact">
              Mumbai | Gurugram | hello@1wellnessclinic.com | +91 9560-463-949
            </p>

            <div className="footer-social">
              <a href="#" aria-label="X">
                X
              </a>
              <a href="#" aria-label="Instagram">
                IG
              </a>
              <a href="#" aria-label="YouTube">
                YT
              </a>
              <a href="#" aria-label="LinkedIn">
                IN
              </a>
              <a href="mailto:hello@1wellnessclinic.com" aria-label="Email">
                Mail
              </a>
            </div>
          </div>

          <div className="footer-links">
            <a href="#">Psychology Internship</a>
            <a href="#">Advanced Internship Track</a>
            <a href="#">Mentorship Plus</a>
            <a href="#">The Summer Psychology Internship 2026</a>
            <a href="#">The Psychology Bootcamp 2026</a>
            <a href="#">After Hours Circle</a>
          </div>

          <div className="footer-links">
            <a href="#">About Us</a>
            <a href="#">Contact Us</a>
            <a href="#">Terms of Service</a>
            <a href="#">Refund Policy</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms and Conditions</a>
          </div>
        </div>

        <div className="page-shell footer-bottom">
          <span>© 2026, 1Wellness Clinic.</span>
          <span>Wellnessphere Pvt Ltd</span>
        </div>
      </footer>
    </main>
  );
}
