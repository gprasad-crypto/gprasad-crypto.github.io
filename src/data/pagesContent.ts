export interface PullQuoteData {
  text: string;
}

export interface SectionData {
  heading: string;
  body: string[];
  pullQuote?: PullQuoteData;
}

export interface KeyMomentData {
  label: string;
  description: string;
}

export interface DeepDiveContent {
  slug: string;
  accentColor: string;
  imageSrc: string;
  title: string;
  subtitle: string;
  intro: string;
  sections: SectionData[];
  keyMoments: KeyMomentData[];
}

export const PAGE_CONTENT: Record<string, DeepDiveContent> = {
  experience: {
    slug: 'experience',
    accentColor: '#F4845F',
    imageSrc: 'https://fifth-gentle-45902158.figma.site/_components/v2/4de492f6d9cf8244ad5293233e5c6f52407d42fc/1.02464a56.png',
    title: 'OVERALL LEARNING & EXPERIENCE',
    subtitle: 'Lead UX Designer · Salesforce Industries',
    intro: 'A career built on high-stakes, high-visibility work. From being the first designer on Consumer Goods Cloud to growing a design team of 90+, this is the full arc.',
    sections: [
      {
        heading: 'ORIGIN',
        body: [
          'GP joined Salesforce Industries from a startup background — bringing a bias for shipping, first-principles thinking, and comfort with ambiguity into a large enterprise environment.',
          'He was hired as the first UX designer on Consumer Goods Cloud, which meant building design practice from zero: no templates, no established team, no precedents inside Salesforce for offline-first mobile field apps.',
        ],
        pullQuote: {
          text: 'Being first meant every decision I made either became a pattern or a problem someone else had to undo.',
        },
      },
      {
        heading: 'BUILDING THE TEAM',
        body: [
          'Over several years, the design org grew from 1 to 90+ designers across Salesforce Industries. GP was active in hiring at every stage, personally running structured onboarding sessions to establish design culture and expectations.',
          'He served as a key member of the Internal UX Review Board (IURB) — a cross-functional governance body that reviewed design quality across the Industries org — and as Design Systems Ambassador for the Consumer Goods organisation.',
        ],
        pullQuote: {
          text: "The review board wasn't gatekeeping — it was a forcing function to raise the quality floor across every team simultaneously.",
        },
      },
      {
        heading: 'CAREER ARC',
        body: [
          'Consumer Goods Cloud → Health Cloud → Life Sciences Cloud. Each transition brought a fundamentally different user context: field sales reps on mobile, elderly patients in home health, pharmaceutical field reps under compliance scrutiny.',
          'The through-line across all three: design systems thinking, cross-functional influence, and the willingness to hold a blocker even when the schedule says otherwise.',
        ],
      },
      {
        heading: 'DESIGN PHILOSOPHY',
        body: [
          "GP's core operating principle is that design quality and business outcomes are not in tension — they compound. Catching a sequence error eight weeks before GA is not being difficult; it is the job.",
          'He brings a systems-first lens to every problem: before designing a screen, understand the platform capability underneath it. Before designing a component, understand what it will become when ten teams inherit it.',
        ],
        pullQuote: {
          text: "The work I'm proudest of isn't the pixel — it's the decision that prevented the wrong pixel from ever being built.",
        },
      },
    ],
    keyMoments: [
      { label: 'First Designer', description: 'Consumer Goods Cloud — blank canvas, no team' },
      { label: '90+ Designers', description: 'Team scaled through active hiring and onboarding' },
      { label: 'IURB Member', description: 'Internal UX Review Board — cross-org quality governance' },
      { label: 'Design Systems Ambassador', description: 'Consumer Goods org — system-level design leadership' },
    ],
  },

  'consumer-goods': {
    slug: 'consumer-goods',
    accentColor: '#6BBF7A',
    imageSrc: 'https://fifth-gentle-45902158.figma.site/_components/v2/4de492f6d9cf8244ad5293233e5c6f52407d42fc/2.b977faab.png',
    title: 'CONSUMER GOODS CLOUD',
    subtitle: 'First Designer · Offline-First Mobile · Enterprise Acquisition',
    intro: 'Starting with a blank canvas in 2017–18, the challenge was to replace Excel and legacy tools used by field sales reps visiting 15–20+ stores a day. No precedent for offline-first enterprise mobile existed at the time.',
    sections: [
      {
        heading: 'THE USER',
        body: [
          "Sales and merchandising reps at companies like Pepsi and Kellogg's. Their day is 15–20 store visits on a route. Every interaction with the app happens in a store aisle, often with no connectivity.",
          'The prior state: Excel spreadsheets, cumbersome legacy tools, paper forms. The cognitive load was enormous. The job demanded a 360 connected view of each account combined with smart selling features that surfaced opportunity without adding friction.',
        ],
        pullQuote: {
          text: "You're designing for someone standing in a cereal aisle in a Walmart at 8am with no signal. Every unnecessary tap is costing them a sale.",
        },
      },
      {
        heading: 'OFFLINE-FIRST ARCHITECTURE',
        body: [
          'Building offline-first mobile had no established playbook at Salesforce at the time. The design decisions cascaded from that single constraint: what can the rep do with no connection, and what must wait?',
          'The result was a 360 connected view that cached essential account data locally, with intelligent sync on reconnection. Smart selling features — surfacing recommended products, flagging missed distribution — were designed to degrade gracefully offline.',
        ],
        pullQuote: {
          text: "Offline-first isn't a feature. It's a design philosophy that changes every decision from data model to micro-interaction.",
        },
      },
      {
        heading: 'THE BLOCKER THAT MATTERED',
        body: [
          'Eight weeks before GA, GP caught a critical sequence error in order management. The error would have caused reps to place orders that silently failed — a data integrity problem invisible to QA but catastrophic in a store visit.',
          'He held the blocker despite significant schedule pressure. The fix took three weeks and pushed GA. The PM acknowledged it directly after launch — the kind of acknowledgment that only comes when a near-miss becomes clear in retrospect.',
        ],
        pullQuote: {
          text: "I held the blocker. Three-week fix, pushed GA. The PM thanked me after launch. That's the job.",
        },
      },
      {
        heading: 'ENTERPRISE ACQUISITION: ACCENTURE CAS',
        body: [
          'The ISV partner Accenture CAS was acquired, bringing two products into the Salesforce ecosystem: Joint Business Planning (JBP) and Account Scenario Planning, built for Key Account Managers.',
          'The integration challenge was a lift-and-shift over approximately 8–12 months while maintaining visual and interaction consistency with the core mobile product — even though KAMs work in dense, data-heavy, keyboard-driven desktop workflows, not field mobile.',
        ],
        pullQuote: {
          text: 'Two completely different interaction models, one design system. The KAM desktop product and the field mobile product had to feel like they came from the same family.',
        },
      },
    ],
    keyMoments: [
      { label: 'First Designer, 2017', description: 'Blank canvas — no team, no offline-first precedent' },
      { label: 'Offline-First Mobile', description: 'Designed novel patterns with no existing reference' },
      { label: 'Held the GA Blocker', description: 'Caught order management error 8 weeks before launch' },
      { label: 'Accenture CAS Integration', description: 'JBP + Account Scenario Planning — 8–12 month lift-and-shift' },
    ],
  },

  'health-cloud': {
    slug: 'health-cloud',
    accentColor: '#E882B4',
    imageSrc: 'https://fifth-gentle-45902158.figma.site/_components/v2/4de492f6d9cf8244ad5293233e5c6f52407d42fc/3.4df853b4.png',
    title: 'HEALTH CLOUD',
    subtitle: 'Home Health · Patient Mobile App · Trust-First Design',
    intro: 'A patient-facing mobile app built on Salesforce Experience Cloud for home health care. The core design constraint was trust — designing for elderly patients who would open the app moments before a caregiver arrived at their door.',
    sections: [
      {
        heading: 'THE USER CONTEXT',
        body: [
          'The patient opens the app moments before a caregiver arrives for a home visit. They need to verify identity, read pre-visit instructions, and have a clear path to an SOS emergency function if anything feels wrong.',
          'The user is typically elderly. The emotional stakes are high. A confusing UI is not a usability problem — it is a trust and safety problem.',
        ],
        pullQuote: {
          text: "When your user is an elderly patient who doesn't know if the person at their door is their caregiver or a stranger, \"error state\" isn't a UI pattern — it's a real-world risk.",
        },
      },
      {
        heading: 'BREAKING OUT OF EXPERIENCE CLOUD',
        body: [
          'The app was built on Salesforce Experience Cloud, which provides a templated CMS-style foundation. The stock templates were clinically adequate but emotionally cold — wrong for a home health context where warmth and reassurance are functional requirements.',
          'GP broke out of the standard templates through a combination of custom Lightning Web Components, aggressive CSS overrides, and the Industries Experience Framework — creating a distinctly human-feeling interface within a platform constraint.',
        ],
        pullQuote: {
          text: 'The platform gave us the structure. We gave it a soul.',
        },
      },
      {
        heading: 'THE CAREGIVER CARD',
        body: [
          'The centrepiece design decision was the caregiver identity card. The instinct might be to lead with credentials — licence number, certification, agency. GP inverted this: emotional signals first.',
          "Name, face, role, ETA. That's the first screen. Clinical detail is one tap deeper. The hierarchy was deliberate: what does a patient need to feel safe, and what do they need to feel informed? Those are different things and they belong on different screens.",
        ],
        pullQuote: {
          text: "Credentials don't create trust at first glance. A name and a face do. We put the clinical detail one tap deeper.",
        },
      },
      {
        heading: 'RESEARCH FOUNDATION',
        body: [
          'The design was grounded in discovery sessions conducted in India alongside internal healthcare SMEs. The research exposed assumptions that would have made the app less usable in non-Western contexts — particularly around naming conventions, family involvement in care, and digital comfort levels.',
          'The app went GA after an iterative design process that kept the trust constraint front-of-mind from first wireframe to final build.',
        ],
      },
    ],
    keyMoments: [
      { label: 'Trust as Constraint', description: 'Emotional safety as a hard UX requirement' },
      { label: 'Caregiver Card Inversion', description: 'Emotional signals first, clinical detail one tap deeper' },
      { label: 'Platform Override', description: 'Custom LWC + CSS + Industries Experience Framework' },
      { label: 'Discovery in India', description: 'On-site research with local healthcare SMEs' },
    ],
  },

  'life-sciences': {
    slug: 'life-sciences',
    accentColor: '#6EB5FF',
    imageSrc: 'https://fifth-gentle-45902158.figma.site/_components/v2/4de492f6d9cf8244ad5293233e5c6f52407d42fc/4.4457fbce.png',
    title: 'LIFE SCIENCES CLOUD',
    subtitle: 'Four Parallel Workstreams · MRM Events Platform · Compliance Design',
    intro: 'Approximately one year of work across four simultaneous design workstreams: HCP Provider Card, Account Management, Events/MRM, and Consent Capture. Each had distinct users, constraints, and stakes.',
    sections: [
      {
        heading: 'HCP PROVIDER CARD',
        body: [
          "Pharmaceutical field reps get approximately 90 seconds of physician attention. The HCP Provider Card had to surface the right signals — relationship history, engagement patterns, credentials — in a form that a rep could absorb in the waiting room before entering the office.",
          'The design challenge was signal prioritisation: out of a rich data model, what 3–4 things predict a productive 90 seconds? The answer required close collaboration with medical affairs and field operations.',
        ],
        pullQuote: {
          text: "Ninety seconds of a physician's time. The card had to tell the rep everything that mattered before they walked through the door.",
        },
      },
      {
        heading: 'EVENTS / MRM PLATFORM',
        body: [
          'The Medical, Educational, and Research (MRM) workstream covered pharma-sponsored medical events management: compliance management, speaker management, real-time expense capture, and Sunshine Act reporting.',
          'The critical architecture decision was to build the platform as an industry-agnostic capability, with pharma-specific logic — Sunshine Act compliance, FMV validation, speaker onboarding workflows — living in a configuration layer rather than being hardcoded into the platform.',
        ],
        pullQuote: {
          text: 'We built the platform for any industry. We built the compliance for pharma. That decision meant the platform is now used across three Salesforce clouds.',
        },
      },
      {
        heading: 'MRM: IN-PERSON DISCOVERY',
        body: [
          'The MRM workstream was the only one where GP went GA with in-person discovery — attending pharma-sponsored events to observe the actual workflow of expense capture, speaker management, and compliance sign-off in real time.',
          'That fieldwork exposed friction the paper process had hidden: reps were doing workarounds at the event itself, capturing expenses in personal notes apps because the prior digital tool was too slow at the point of capture.',
        ],
        pullQuote: {
          text: "You don't understand real-time expense capture until you watch someone try to do it while managing a speaker, a venue, and an auditor simultaneously.",
        },
      },
      {
        heading: 'CONSENT CAPTURE',
        body: [
          'Multi-jurisdictional regulatory compliance (GDPR and equivalents) presented a design challenge that was as much about process as interface. The consent workflow had to be legally defensible in multiple regulatory contexts while remaining lightweight enough for field reps to complete during a customer interaction.',
          'The solution was a modular consent framework where jurisdiction-specific language and requirements were configuration-driven, and the rep\'s UI remained consistent across geographies.',
        ],
        pullQuote: {
          text: 'GDPR compliance in the field means a rep in Paris and a rep in Chicago need the same interaction pattern — with different legal text underneath.',
        },
      },
    ],
    keyMoments: [
      { label: '90-Second HCP Window', description: 'Signal prioritisation for physician-facing rep card' },
      { label: 'Industry-Agnostic MRM', description: 'Platform now used across 3+ Salesforce clouds' },
      { label: 'Sunshine Act Compliance', description: 'FMV validation and speaker onboarding in config layer' },
      { label: 'Multi-Jurisdictional Consent', description: 'GDPR + equivalents — consistent rep UX, variable legal config' },
    ],
  },
};
