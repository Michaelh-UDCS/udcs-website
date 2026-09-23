/**
 * Pillar guide: Google Workspace for startups.
 * Promo codes must never appear here — hand out 1:1 via Contact only.
 */

export interface GuideFaqItem {
  question: string;
  answer: string;
}

export interface GuidePathRow {
  path: string;
  bestWhen: string;
  cta: string;
}

export const googleWorkspaceStartupsContent = {
  badge: "Founder operating stack",
  heading: "Google Workspace for startups that want email they own",
  subhead:
    "Professional @yourcompany.com email, Drive, Meet, and Calendar—the same stack Universal Dynamic runs on—plus a clear path to a website you own on Google Cloud.",

  disclosure:
    "Universal Dynamic Consulting Services LLC participates in the Google Workspace Referral Program. If you start a Google Workspace subscription through our link, we may receive a referral reward from Google. We are not Google, and Google does not endorse our consulting services. Pricing, features, and eligibility are controlled by Google and may change.",

  disclosureShort: "Paid referral link — we may earn a reward if you start Google Workspace through this link.",

  answerHeading: "What Google Workspace enables for a startup",
  answerBody:
    "Google Workspace gives a new company a professional identity on its own domain: business Gmail, shared Drive files, Docs and Sheets, Meet, Calendar, and Admin controls so the business—not a personal freemail inbox—owns the accounts vendors and banks expect. Universal Dynamic uses Google Workspace day to day and includes official business email when we launch client-owned Google Cloud websites.",

  freemailHeading: "Why freemail breaks trust",
  freemailLead:
    "Banks, primes, and many clients expect you@yourcompany.com—not a free Gmail or Yahoo address—when you open accounts, bid work, or send contracts.",
  freemailBullets: [
    "Credibility: a custom domain signals a real operating business.",
    "Deliverability: authenticated business email (SPF, DKIM, DMARC) is harder to get right on freemail for company outreach.",
    "Offboarding: when someone leaves, Admin keeps the mailbox and files with the company.",
    "Texas readiness: entity filings, banking, and SAM.gov profiles pair cleanly with professional email on your domain.",
  ],

  featuresHeading: "What you actually get",
  featuresLead:
    "Google Workspace brings messaging, meetings, docs, and admin into one subscription. Exact storage, Meet limits, and Gemini features depend on the edition Google publishes at signup—always confirm current plans on Google’s site.",
  features: [
    { title: "Gmail on your domain", body: "you@yourcompany.com instead of a personal freemail address." },
    { title: "Drive & editors", body: "Shared files plus Docs, Sheets, and Slides for the team." },
    { title: "Meet & Calendar", body: "Video meetings and scheduling without a separate consumer account mash-up." },
    { title: "Chat & Admin", body: "Team chat plus Admin controls for users, security, and offboarding." },
  ],
  plansNote:
    "For most small teams, Business Starter or Business Standard is the decision. Standard adds more storage and collaboration features many growing shops want. Use aliases (info@, sales@) before buying extra seats when one person can own those inboxes. See Google’s current Google Workspace plans and pricing for live figures.",
  plansUrl: "https://workspace.google.com/pricing",

  setupHeading: "Day-1 setup that matters",
  setupLead:
    "Signing up is straightforward. DNS and security are where startups get stuck—and where inbound mail starts landing in spam if you skip steps.",
  setupChecklist: [
    "Verify you control the domain in Google Admin",
    "Add Google MX records so mail routes to Gmail",
    "Configure SPF, DKIM, and DMARC for authentication",
    "Enforce 2-Step Verification for every user",
    "Create users first; add aliases only where needed",
  ],
  setupBridge:
    "Want this done with your website ownership handoff? That is our Fast Website Launch and Google Workspace path—full Admin ownership on your Google account from Day 1.",

  pathsHeading: "Self-serve vs done-for-you",
  pathsLead:
    "Choose the path that matches how much Admin work you want to own.",
  paths: [
    {
      path: "Self-serve trial",
      bestWhen: "You control DNS and want to learn Google Admin yourself",
      cta: "Start Google Workspace trial (referral link)",
    },
    {
      path: "UDCS concierge",
      bestWhen: "You want Google Workspace plus a site you own, transferred Day 1",
      cta: "Book a free consult",
    },
  ] as GuidePathRow[],

  howHeading: "How the trial and referral work",
  howLead:
    "Eligible new businesses can start a Google Workspace trial through our referral link. Google runs the trial length, billing, and plan terms.",
  howBullets: [
    "Use our referral link so signup is attributed correctly—Google cannot credit referrals that skip the link.",
    "If you want a first-year promotion code, contact us; codes are handed out one-to-one and are not published on this page.",
    "We market to eligible net-new businesses only. Government entities, existing Google Workspace customers, and reseller customers are outside this path.",
  ],

  faqs: [
    {
      question: "Do I need Google Workspace if I already have Gmail?",
      answer:
        "Consumer Gmail is fine for personal use. Google Workspace puts business email on your domain with Admin controls so the company owns mailboxes and files when people join or leave.",
    },
    {
      question: "Starter or Standard for a 2–10 person startup?",
      answer:
        "Many very small teams begin on Business Starter. Business Standard is often the better fit when you need more storage and collaboration features. Confirm live limits on Google’s pricing page before you decide.",
    },
    {
      question: "Can I keep my domain registrar and still use Google Workspace?",
      answer:
        "Yes. You keep the registrar and add the DNS records Google requires (verification, MX, and email authentication). You do not have to move the domain registration to Google.",
    },
    {
      question: "What happens to email if an employee leaves?",
      answer:
        "With Google Workspace Admin, you can suspend or delete the user, transfer Drive files, and keep company email under your control—unlike a personal freemail account the employee walks away with.",
    },
    {
      question: "Is Universal Dynamic a Google Partner?",
      answer:
        "We participate in the Google Workspace Referral Program. That is not the same as Google Cloud Partner Advantage. We do not claim to be a Google Partner unless we hold that separate status.",
    },
    {
      question: "Do you get paid if I sign up through your link?",
      answer:
        "Yes. If you start an eligible Google Workspace subscription through our referral link, we may receive a one-time referral reward from Google after their program rules are met. You can also buy Google Workspace directly from Google with no referral.",
    },
  ] as GuideFaqItem[],

  closingLead: "Ready for professional email—or the full owned stack?",
  primaryCta: "Book a free consult",
  primaryHref: "/contact",
  secondaryCta: "Start Google Workspace trial",
  tertiaryCta: "Request a promo code",
  tertiaryHref: "/contact",
} as const;
