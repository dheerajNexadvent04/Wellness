import React, { useEffect, useState } from "react";
import "./InternshipBanner.css";
import logoImage from "./assets/logo.png";
import certificateStudentImage from "./assets/CERTIFICATE GIVING TO STUDENT.jpeg";
import certificateSecondStudentImage from "./assets/GIVING CERTIFICATE TO SECOND STUDENT.jpeg";
import ladiesHallImage from "./assets/LADIES IS SPEACKING IN HALL.jpeg";
import ladiesMicImage from "./assets/LADIES IS SPEAKING , MIRCO SHOOT.jpeg";
import mamSeminarImage from "./assets/MAM SPEAKING IN SEMINAR.jpeg";
import secondStudentGroupImage from "./assets/SECOND STUDENT GROUP IMAGE.jpeg";
import seminarImage from "./assets/SEMINAR.jpeg";
import seniorTeachersImage from "./assets/SENIOR TEACHERS SITTING IN THE HALL ON THE TABLE.jpeg";
import studentGroupImage from "./assets/STUDENT GROUP IMAGE.jpeg";
import studentTakingClassImage from "./assets/STUDENT TAKING CLASS.jpeg";
import studentTeacherDiscussionSecondImage from "./assets/STUDENT TEACHER DISCUSIION SECOND SHORT.jpeg";
import studentTeacherDiscussionTwoImage from "./assets/STUDENT TEACHER DISCUSION 2.jpeg";
import studentTeacherGroupDiscussionImage from "./assets/STUDENT TEACHER GROUP DISCUSSION.jpeg";
import classLearningVideo from "./assets/STUNDENT LEARING IN CLASS VIDEO.mp4";
import thirdGroupImage from "./assets/THIRD GROUP IMAGE.jpeg";

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
    title: "Start with guided classroom learning.",
    description:
      "Build confidence through structured sessions where mentors explain how theory is used in practical situations.",
    image: studentTakingClassImage,
  },
  {
    id: "STEP 2",
    title: "Observe live seminar communication.",
    description:
      "Watch experts present real psychology topics and learn how ideas are explained to a room full of learners.",
    image: mamSeminarImage,
  },
  {
    id: "STEP 3",
    title: "Practice public speaking and presentation.",
    description:
      "Develop confidence by sharing your psychology understanding in hall sessions and group presentations.",
    image: ladiesHallImage,
  },
  {
    id: "STEP 4",
    title: "Join mentor-led discussion circles.",
    description:
      "Participate in student-teacher discussions where you ask questions, reflect, and connect concepts with practice.",
    image: studentTeacherDiscussionTwoImage,
  },
  {
    id: "STEP 5",
    title: "Complete with certificate recognition.",
    description:
      "Showcase your learning journey and receive completion certificates that support your academic and career profile.",
    image: certificateStudentImage,
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
    title: "Live Seminar Room",
    image: seminarImage,
    className: "tile-bottom-3",
  },
  {
    title: "Faculty Insight Sessions",
    image: seniorTeachersImage,
    className: "tile-top-right",
  },
  {
    title: "Student-Teacher Group Discussion",
    image: studentTeacherGroupDiscussionImage,
    className: "tile-mid-right",
  },
  {
    title: "Focused Discussion Circle",
    image: studentTeacherDiscussionSecondImage,
    className: "tile-bottom-1",
  },
  {
    title: "Student Team Cohort",
    image: studentGroupImage,
    className: "tile-bottom-2",
  },
  {
    title: "In-Class Learning Video",
    video: classLearningVideo,
    poster: studentTakingClassImage,
    className: "tile-large",
  },
];

const programHighlights = [
  {
    title: "Certificate Presentation",
    image: certificateSecondStudentImage,
  },
  {
    title: "Seminar Presentation Session",
    image: ladiesMicImage,
  },
  {
    title: "Student Cohort Session II",
    image: secondStudentGroupImage,
  },
  {
    title: "Student Cohort Session III",
    image: thirdGroupImage,
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

const whatsappBookingLink =
  "https://wa.me/919560463949?text=Hi%2C%20I%20want%20to%20book%20my%20slot%20for%20the%20Psychology%20Internship.";

function SlotBookingCta() {
  return (
    <section className="page-shell inline-slot-cta reveal-on-scroll" aria-label="Book your slot">
      <div className="slot-cta-card">
        <p className="slot-cta-kicker">Admissions Open</p>
        <h3>Book your slot now</h3>
        <p>
          Limited seats available. Secure your internship spot directly on WhatsApp.
        </p>
        <a
          className="slot-cta-btn"
          href={whatsappBookingLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Book your slot on WhatsApp"
        >
          <svg
            className="slot-cta-btn-icon"
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M19.05 4.91A9.82 9.82 0 0 0 12.03 2c-5.45 0-9.88 4.43-9.88 9.88 0 1.74.45 3.44 1.31 4.95L2 22l5.34-1.4a9.84 9.84 0 0 0 4.69 1.2h.01c5.45 0 9.88-4.43 9.88-9.88a9.8 9.8 0 0 0-2.87-7.01Zm-7.02 15.22h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.17.83.85-3.09-.2-.31a8.2 8.2 0 0 1-1.26-4.36c0-4.53 3.68-8.21 8.22-8.21a8.14 8.14 0 0 1 5.82 2.41 8.16 8.16 0 0 1 2.4 5.81c0 4.53-3.68 8.22-8.21 8.22Zm4.5-6.16c-.25-.12-1.47-.72-1.69-.8-.23-.08-.39-.12-.56.12-.16.25-.64.8-.78.97-.14.16-.28.18-.53.06-.25-.12-1.04-.38-1.98-1.22a7.34 7.34 0 0 1-1.37-1.71c-.14-.25-.02-.38.1-.5.11-.11.25-.28.37-.42.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.49-.4-.42-.56-.42h-.48c-.17 0-.43.06-.66.31-.22.25-.86.84-.86 2.06 0 1.22.88 2.39 1.01 2.56.12.16 1.72 2.62 4.16 3.67.58.25 1.04.4 1.39.51.58.18 1.1.15 1.52.09.46-.07 1.47-.6 1.67-1.18.21-.57.21-1.06.14-1.18-.06-.11-.22-.17-.47-.29Z" />
          </svg>
          Book on WhatsApp
        </a>
      </div>
    </section>
  );
}

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
            src={ladiesMicImage}
            alt="Speaker presenting in seminar with projection setup"
            loading="lazy"
          />
          <div className="media-badge">
            <strong>120+ Hours</strong>
            <span>Applied Learning Journey</span>
          </div>
        </article>
      </section>

      <SlotBookingCta />

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

        <div className="program-highlights">
          {programHighlights.map((item) => (
            <article key={item.title} className="highlight-card">
              <img src={item.image} alt={item.title} loading="lazy" />
              <p>{item.title}</p>
            </article>
          ))}
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

      <SlotBookingCta />

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
              {tile.video ? (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  preload="auto"
                  poster={tile.poster}
                >
                  <source src={tile.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img src={tile.image} alt={tile.title} loading="lazy" />
              )}
              <div className="immersion-overlay" />
              <h4>{tile.title}</h4>
            </article>
          ))}
        </div>
      </section>

      <SlotBookingCta />

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
