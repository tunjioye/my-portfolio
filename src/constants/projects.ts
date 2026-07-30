export type ProjectImage = {
  src: string;
  alt: string;
  label: string;
};

export type Project = {
  title: string;
  src: string | null;
  images?: ProjectImage[];
  href: string | null;
  description: string;
  stack: string[];
};

const wellfoundScreenshots = (
  projectSlug: string,
  projectTitle: string,
  count: number,
): ProjectImage[] =>
  Array.from({ length: count }, (_, index) => {
    const screenshotNumber = index + 1;
    const screenshotFilename = `screenshot-${String(screenshotNumber).padStart(2, "0")}.webp`;

    return {
      src: `/images/projects/${projectSlug}/${screenshotFilename}`,
      alt: `${projectTitle} screenshot ${screenshotNumber}`,
      label: `Screenshot ${screenshotNumber}`,
    };
  });

const namedScreenshots = (
  projectSlug: string,
  projectTitle: string,
  labels: readonly string[],
): ProjectImage[] =>
  labels.map((label) => {
    const screenshotFilename = `${label
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "")}.webp`;

    return {
      src: `/images/projects/${projectSlug}/${screenshotFilename}`,
      alt: `${projectTitle} ${label} screen`,
      label,
    };
  });

export const projects: Project[] = [
  {
    title: "Pepvote",
    src: "/images/projects/pepvote/pepvote-home.webp",
    description:
      "an electronic voting platform for managing elections, polls and other election processes.",
    href: "https://pepvote.com",
    stack: [
      "React",
      "Next JS",
      "Convex",
      "Better Auth",
      "Git",
      "GitHub",
      "Vercel",
      "Shad CN",
      "Tailwind CSS",
      "Resend",
      "PostHog",
    ],
  },
  {
    title: "Dominion Mandate Posting",
    src: null,
    images: [
      {
        src: "/images/projects/dominion-mandate-posting/auth.webp",
        alt: "Dominion Mandate Posting Google sign-in page",
        label: "Google sign-in",
      },
      {
        src: "/images/projects/dominion-mandate-posting/dashboard.webp",
        alt: "Dominion Mandate Posting dashboard with Substack posts and social repost statuses",
        label: "RSS post dashboard",
      },
      {
        src: "/images/projects/dominion-mandate-posting/metrics.webp",
        alt: "Dominion Mandate Posting metrics dashboard with feed reliability and social repost coverage",
        label: "Metrics dashboard",
      },
    ],
    description:
      "A social publishing workflow that syncs Dominion Mandate Substack posts and helps the Dominion City North York team track and automate reposts to connected social channels.",
    href: "https://dominion-mandate-posting.vercel.app",
    stack: [
      "Next JS",
      "TypeScript",
      "Tailwind CSS",
      "Shad CN",
      "Convex",
      "Better Auth",
      "Buffer",
      "Vercel",
      "Git",
      "GitHub",
    ],
  },
  {
    title: "Swift Aza",
    src: null,
    images: [
      {
        src: "/images/projects/swift-aza/swift-aza-login.webp",
        alt: "Swift Aza passwordless login page",
        label: "Login",
      },
      {
        src: "/images/projects/swift-aza/swift-aza-product.webp",
        alt: "Swift Aza Buy Crypto and Sell Crypto product page",
        label: "Product page",
      },
      {
        src: "/images/projects/swift-aza/swift-aza-terms.webp",
        alt: "Swift Aza Terms of Use page",
        label: "Terms of Use",
      },
      {
        src: "/images/projects/swift-aza/swift-aza-privacy.webp",
        alt: "Swift Aza Privacy Policy page",
        label: "Privacy Policy",
      },
    ],
    description:
      "Swift Aza is a simple Crypto Web App. With On-Ramp (Buy Crypto) and Off-Ramp (Sell Crypto) features. Leveraging <a href='https://paybis.com' target='_blank' rel='noopener noreferrer' class='text-blue-500 hover:underline underline-offset-4'>Paybis</a> Apis and Widget Web SDK. While using <a href='https://convex.dev' target='_blank' rel='noopener noreferrer' class='text-blue-500 hover:underline underline-offset-4'>Convex</a> Backend as a Service. And <a href='https://posthog.com' target='_blank' rel='noopener noreferrer' class='text-blue-500 hover:underline underline-offset-4'>PostHog</a> for Analytics.",
    href: "https://swiftaza.com",
    stack: [
      "React",
      "TypeScript",
      "Next JS",
      "Tailwind CSS",
      "Node JS",
      "Shad CN",
      "Git",
      "GitHub",
      "Railway",
      "Convex",
      "Convex Auth",
      "Paybis Apis",
      "Paybis Widget Web SDK",
      "PostHog",
    ],
  },
  {
    title: "Triptimizer",
    src: null,
    images: [
      {
        src: "/images/projects/triptimizer/home.webp",
        alt: "Triptimizer home page with the trip-sequencing form",
        label: "Home page",
      },
      {
        src: "/images/projects/triptimizer/about.webp",
        alt: "Triptimizer About page",
        label: "About",
      },
      {
        src: "/images/projects/triptimizer/get-pass.webp",
        alt: "Triptimizer Get Pass registration page",
        label: "Get Pass",
      },
    ],
    description:
      "Triptimizer is an innovative web application designed to streamline the process of planning and optimizing your trips. With Triptimizer, you can effortlessly generate the most efficient routes for your journeys, taking into account either the shortest distance or the shortest time to reach multiple destinations.",
    href: "https://triptimizer.vercel.app",
    stack: [
      "React",
      "TypeScript",
      "Next JS",
      "CSS Modules",
      "SCSS",
      "Simpler State",
      "React Hook Form",
      "Git",
      "GitHub",
      "Vercel",
      "Node JS",
      "Restful Api",
      "Postman",
      "Vercel KV (a Redis Store)",
      "Google Places Api",
      "Google Distance Matrix Api",
      "Google Sheets Api",
      "Resend",
    ],
  },
  {
    title: "Knockout Pokedex",
    src: null,
    images: [
      {
        src: "/images/projects/knockout-pokedex/home.webp",
        alt: "Knockout Pokedex homepage with the first generation Pokémon grid",
        label: "Pokédex home",
      },
      {
        src: "/images/projects/knockout-pokedex/butterfree-details.webp",
        alt: "Knockout Pokedex Butterfree details modal with stats and types",
        label: "Butterfree details",
      },
      {
        src: "/images/projects/knockout-pokedex/arc-search.webp",
        alt: "Knockout Pokedex search results for arc",
        label: "Search: arc",
      },
    ],
    description:
      "This is a simple Pokedex built with Knockout.js. In my attempt to learn Knockout.js, I decided to build a simple Pokedex. The Pokedex is a simple web application that displays a list of Pokemon and their details. The application is built with Knockout.js, HTML, CSS, and JavaScript.",
    href: "https://knockout-pokedex.vercel.app",
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Knockout.js",
      "Vite",
      "Git",
      "GitHub",
      "Vercel",
      "Node JS",
      "PokeApi",
    ],
  },
  {
    title: "Jochebed Foundation Website",
    src: null,
    images: [
      {
        src: "/images/projects/jochebed-foundation/home.webp",
        alt: "Jochebed Foundation home page",
        label: "Home",
      },
      {
        src: "/images/projects/jochebed-foundation/scholarship.webp",
        alt: "Jochebed Foundation scholarship page",
        label: "Scholarship",
      },
      {
        src: "/images/projects/jochebed-foundation/get-involved.webp",
        alt: "Jochebed Foundation get involved page",
        label: "Get involved",
      },
      {
        src: "/images/projects/jochebed-foundation/contact.webp",
        alt: "Jochebed Foundation contact page",
        label: "Contact",
      },
      {
        src: "/images/projects/jochebed-foundation/faq.webp",
        alt: "Jochebed Foundation frequently asked questions page",
        label: "FAQ",
      },
    ],
    description:
      "Official Jochebed Foundation Website. Jochebed Foundation is a non-profit organization that provides education via her scholarship initiative to people regardless of financial barriers. Jochebed Foundation also provides funding for religious projects.",
    href: "https://jochebed-foundation.clearerangle.com",
    stack: [
      "React",
      "TypeScript",
      "Next JS",
      "Tailwind CSS",
      "Shad CN",
      "React Hook Form",
      "Git",
      "GitHub",
      "Vercel",
      "Node JS",
    ],
  },
  {
    title: "Any CBT",
    src: null,
    images: [
      {
        src: "/images/projects/any-cbt/login.webp",
        alt: "Any CBT login page",
        label: "Login page",
      },
    ],
    description:
      "Any CBT allows you generate CBT questions and take a quiz from uploaded materials from written text, uploaded documents and youtube video.",
    href: "https://anycbt.clearerangle.com",
    stack: [
      "React",
      "TypeScript",
      "Next JS",
      "Tailwind CSS",
      "Shad CN",
      "Simpler State",
      "React Hook Form",
      "Git",
      "GitHub",
      "Vercel",
      "Node JS",
      "Restful Api",
      "Postman",
      "Render",
      "Stripe",
      "Resend",
    ],
  },
  {
    title: "Terrace FI",
    src: "/images/projects/terrace-fi/terrace-fi.webp",
    description:
      "<a href='https://terrace.fi' target='_blank' rel='noopener noreferrer' class='text-blue-500 hover:underline underline-offset-4'>Terrace</a> provides market access to the world’s leading centralized and decentralized crypto trading and liquidity venues through a single, integrated platform. This is a platform similar to Binance but targeted towards businesses rather than individual customers. Even though personal accounts are also supported.",
    href: "https://app.terrace.fi",
    stack: [
      "React",
      "TypeScript",
      "Next JS",
      "Graph QL",
      "Apollo GraphQL Playground",
      "Node JS",
      "Hasura",
      "Tailwind CSS",
      "Shad CN",
      "Fusion Auth",
      "Aphrodite CSS",
      "MOBX",
      "Git",
      "GitHub",
      "AWS",
    ],
  },
  {
    title: "Love Message",
    src: null,
    images: [
      {
        src: "/images/projects/love-message/love-message-01-initial.webp",
        alt: "Love Message encryption form",
        label: "Encrypt a message",
      },
      {
        src: "/images/projects/love-message/love-message-02-message.webp",
        alt: "Love Message encrypted message output for I love you.",
        label: "Encrypted message",
      },
      {
        src: "/images/projects/love-message/love-message-03-decrypt.webp",
        alt: "Love Message decryption form",
        label: "Decrypt a message",
      },
    ],
    description:
      "Love Message is a fun project that encrypts and decrypts a message.",
    href: "https://lm.tunjioyeniran.com",
    stack: [
      "React",
      "TypeScript",
      "Next JS",
      "CSS Modules",
      "SCSS",
      "Simpler State",
      "Git",
      "GitHub",
      "Vercel",
    ],
  },
  {
    title: "Yawo",
    src: null,
    images: [
      {
        src: "/images/projects/yawo/home.webp",
        alt: "Yawo homepage promoting collateral-free loans for small businesses",
        label: "Homepage",
      },
      {
        src: "/images/projects/yawo/how-it-works.webp",
        alt: "Yawo loan application and repayment process",
        label: "How it works",
      },
      {
        src: "/images/projects/yawo/eligibility.webp",
        alt: "Yawo eligibility and requirements for traders",
        label: "Who qualifies",
      },
    ],
    description:
      "Yawo is a platform that gives quick loan to small businesses especially traders.",
    href: "https://yawo.ng",
    stack: [
      "React",
      "Next JS",
      "Styled Components",
      "Simpler State",
      "Contentful",
      "Git",
      "GitHub",
      "Netlify",
    ],
  },
  {
    title: "Account Report",
    src: null,
    images: wellfoundScreenshots("account-report", "Account Report", 11),
    description:
      "Account Report is an accounting software developed to make financial data entry easy & generating financial reports even easier. <a href='https://wellfound.com/projects/1294367-account-report' target='_blank' rel='noopener noreferrer' class='text-blue-500 hover:underline underline-offset-4'>See it on Wellfound</a>",
    href: null,
    stack: [
      "PHP",
      "TALL STACK",
      "Tailwind CSS",
      "Alpine JS",
      "Laravel 8",
      "Laravel Livewire",
      "Git",
      "Github",
      "CI/CD",
      "Heroku",
    ],
  },
  {
    title: "Reventify Web App",
    src: null,
    images: wellfoundScreenshots("reventify-app", "Reventify Web App", 20),
    description:
      "Reventify is a progressive web application that provides professionals with the resources and tools needed to advance their careers. Career planning tool and <b>CV Builder</b> with <b>Expert Insights / Smart Suggestions</b>. Visit <a href='https://reventify.com' target='_blank' rel='noopener noreferrer' class='text-blue-500 hover:underline underline-offset-4'>Reventify Website</a> for more information about features. <a href='https://wellfound.com/projects/1294370-reventify-web-app' target='_blank' rel='noopener noreferrer' class='text-blue-500 hover:underline underline-offset-4'>See it on Wellfound</a>",
    href: null,
    stack: [
      "React",
      "Redux",
      "Next JS",
      "PWA",
      "Vercel",
      "SCSS",
      "CSS Grid",
      "FIGMA",
      "Git",
      "Github",
      "CI/CD",
      "Node JS",
      "GraphQL Client",
      "Google Cloud Platform (GCP)",
      "Puppeteer // for downloading CV as PDF",
    ],
  },
  {
    title: "Reventify CMS",
    src: null,
    images: wellfoundScreenshots("reventify-cms", "Reventify CMS", 1),
    description:
      "Reventify CMS houses the data that powers accurate CV suggestions for customers. Built with Strapi JS, it gives technical and non-technical users an easier way to manage expert-insight data, coupon codes, and imports. <a href='https://wellfound.com/projects/1294369-reventify-cms' target='_blank' rel='noopener noreferrer' class='text-blue-500 hover:underline underline-offset-4'>See it on Wellfound</a>",
    href: null,
    stack: ["Strapi", "Node JS", "MongoDB", "CSV / JSON Import-Export"],
  },
  {
    title: "Agridata",
    src: null,
    images: wellfoundScreenshots("agridata", "Agridata", 7),
    description:
      "Agridata by Agriteer. The aim of the project is to create a place for people to get the latest average market price for common day to day commodities such as Beans, Rice etc. <a href='https://wellfound.com/projects/1294383-agridata' target='_blank' rel='noopener noreferrer' class='text-blue-500 hover:underline underline-offset-4'>See it on Wellfound</a>",
    href: null,
    stack: [
      "PHP",
      "TALL STACK",
      "Tailwind CSS",
      "Alpine JS",
      "Laravel 8",
      "Laravel Livewire",
      "Git",
      "Github",
      "CI/CD",
      "Heroku",
      "Excel Sheet Import",
    ],
  },
  {
    title: "IFSGRANT",
    src: null,
    description:
      "IFSGRANT is an application built for managing forest population data within a region or location. Registered Users can upload statistics generated from field research into the system which will then automatically calculate other statistics using preset formulas. <a href='https://documenter.getpostman.com/view/7841485/TVmJhJTZ' target='_blank' rel='noopener noreferrer' class='text-blue-500 hover:underline underline-offset-4'>IFSGRANT API V1 Documentation</a>.",
    href: null,
    stack: [
      "PHP",
      "TALL STACK",
      "Tailwind CSS",
      "Alpine JS",
      "Laravel 8",
      "Laravel Livewire",
      "Git",
      "Github",
      "CI/CD",
      "Heroku",
      "Excel Sheet Import",
    ],
  },
  {
    title: "Oyoyo",
    src: "/images/projects/oyoyo/oyoyo.webp",
    description:
      "Oyoyo is an application built for tailors, weavers and other artisans for client management and work orders. Oyoyo aims to connect fashionistas to quality tailors and weavers by showcasing their works in a lookbook (a social feed inspired by tiktok) with ability to engage with artisans via liking, commenting or sharing their media post, as well as calling or chatting with registered tailors and weavers.",
    href: "https://oyoyo-staging.vercel.app",
    stack: [
      "React",
      "Redux",
      "Next JS",
      "Vercel",
      "SCSS",
      "CSS Grid",
      "FIGMA",
      "Git",
      "Gitlab",
      "CI/CD",
      "Node JS",
      "MongoDB",
      "Mongoose",
      "Socket IO",
      "Paystack Payments API",
    ],
  },
  {
    title: "Heroshe Website",
    src: null,
    images: wellfoundScreenshots("heroshe-website", "Heroshe Website", 12),
    description:
      "Buy products from any trusted US online store using your Heroshe US Shipping Address and Heroshe will ship and deliver your package to you.",
    href: "https://heroshe.com",
    stack: [
      "Craft CMS",
      "Twig",
      "SCSS",
      "Git",
      "Docker",
      "Gitlab",
      "CI/CD",
      "Zeplin",
    ],
  },
  {
    title: "Heroshe Operations Manager - HERA",
    src: null,
    images: wellfoundScreenshots(
      "heroshe-operations-manager",
      "Heroshe Operations Manager - HERA",
      14,
    ),
    description:
      "Heroshe’s operations admin dashboard for managing shipments, customers, manifests, arrivals, logistics, payments, orders, dispatch, scheduled pickups, and team access. <a href='https://wellfound.com/projects/1294368-hera' target='_blank' rel='noopener noreferrer' class='text-blue-500 hover:underline underline-offset-4'>See it on Wellfound</a>",
    href: null,
    stack: ["Vue JS", "Vuex", "Nuxt JS", "Sentry", "Git"],
  },
  {
    title: "Heroshe Customer Web App - VERA",
    src: null,
    images: wellfoundScreenshots(
      "heroshe-web-application",
      "Heroshe Customer Web App - VERA",
      18,
    ),
    description:
      "Heroshe’s customer shipping portal, where customers can track shipments, pay for shipping and delivery, fund wallets, preview processed-shipment images, and schedule pickups. <a href='https://wellfound.com/projects/1294366-vera' target='_blank' rel='noopener noreferrer' class='text-blue-500 hover:underline underline-offset-4'>See it on Wellfound</a>",
    href: "https://myheroshe.com",
    stack: ["Vue JS", "Nuxt JS", "SCSS", "Jest", "Gitlab", "CI/CD", "Zeplin"],
  },
  {
    title: "Heroshe Printing Service - PHERO",
    src: null,
    images: wellfoundScreenshots(
      "heroshe-printing-service",
      "Heroshe Printing Service - PHERO",
      2,
    ),
    description:
      "A printer-management service for Heroshe warehouse teams. Its GUI makes it easier to register and manage printers, monitor their status, and review logs without needing command-line or Ngrok expertise. <a href='https://wellfound.com/projects/1294375-phero-v3' target='_blank' rel='noopener noreferrer' class='text-blue-500 hover:underline underline-offset-4'>See it on Wellfound</a>",
    href: null,
    stack: ["JavaScript", "jQuery", "jQuery AJAX", "HTML5", "CSS3", "WebSockets"],
  },
  {
    title: "Tapword",
    src: null,
    images: wellfoundScreenshots("tapword", "Tapword", 4),
    description:
      "<em>words are limitless</em> : is a word game that tests your knowledge of English words. Tapword provides a means to combine as many letters as you can to make the longest word you possibly can when given a limited number of random letters..",
    href: "https://tapword.tunjioyeniran.com",
    stack: [
      "React",
      "Next JS",
      "SCSS",
      "CSS Grid",
      "Spellchecker Api",
      "Vercel",
      "PWA",
    ],
  },
  {
    title: "C & I Leasing Chatbot Forms",
    src: null,
    images: wellfoundScreenshots(
      "c-i-leasing-chatbot-forms",
      "C & I Leasing Chatbot Forms",
      4,
    ),
    description:
      "webview forms developed for C & I Leasing Oracle ODA Chatbot. The forms are integrated with the client's car reservation API (test environment). <a href='https://c-ileasing-forms.vercel.app/reservation' target='_blank' rel='noopener noreferrer' class='text-blue-500 hover:underline underline-offset-4'>Car Reservation Form</a>, <a href='https://c-ileasing-forms.vercel.app/dashboard' target='_blank' rel='noopener noreferrer' class='text-blue-500 hover:underline underline-offset-4'>Hertz Feedback Form</a> and <a href='https://c-ileasing-forms.vercel.app/dashboard' target='_blank' rel='noopener noreferrer' class='text-blue-500 hover:underline underline-offset-4'>Hertz Feedback Dashboard</a>. The forms are also designed to look like Google Forms.",
    href: "https://c-ileasing-forms.vercel.app",
    stack: [
      "React",
      "Next JS",
      "SCSS",
      "CSS Grid",
      "Git",
      "Gitlab",
      "CI/CD",
      "Node JS",
    ],
  },
  {
    title: "Homehealth",
    src: null,
    images: wellfoundScreenshots("homehealth", "Homehealth", 7),
    description:
      "a portal that provides information about COVID-19 coronavirus. Resources, Statistics, <a href='https://homehealth.vercel.app/forms/risk-assessment' target='_blank' rel='noopener noreferrer' class='text-blue-500 hover:underline underline-offset-4'>Risk Assessment Form</a> and <a href='https://homehealth.vercel.app/dashboard' target='_blank' rel='noopener noreferrer' class='text-blue-500 hover:underline underline-offset-4'>Risk Assessment Dashboard</a>.",
    href: "https://homehealth.vercel.app",
    stack: [
      "React",
      "Next JS",
      "SCSS",
      "CSS Grid",
      "Git",
      "Gitlab",
      "CI/CD",
      "Node JS",
    ],
  },
  {
    title: "Trade Finance UI/UX Design",
    src: null,
    images: namedScreenshots(
      "trade-finance-ui-ux-design",
      "Trade Finance UI/UX Design",
      [
        "Auth - Login",
        "Dashboard",
        "New Form M - Header",
        "New Form M - Transportation",
        "New FX Request",
        "Upload XML to CBN",
        "New Form M - Attachments",
        "New Form M - End - Part 1",
        "New Form M - End - Part 2",
        "New Form M - End - Part 3",
        "New Form M - End - Part 4",
        "New Form M - Goods - Add Goods",
        "New Form M - Goods",
      ],
    ),
    description:
      "UI/UX Design and Prototyping of a Trade Solution in progress ...",
    href: "https://www.figma.com/proto/kHXvT63ao4pzcCVX40fToq/Trade-Finance-Dashboard",
    stack: ["FIGMA", "Adobe Illustrator"],
  },
  {
    title: "Pepvote Alpha",
    src: null,
    images: wellfoundScreenshots("pepvote-alpha", "Pepvote Alpha", 15),
    description:
      "an electronic voting platform for managing elections, polls and other election processes.",
    href: "https://pepvote.com",
    stack: ["PHP", "Laravel", "Vue", "GitBook", "Bitbucket"],
  },
  {
    title: "Edgetechies",
    src: null,
    images: wellfoundScreenshots("edgetechies", "Edgetechies", 4),
    description:
      "Edgetechies, is a company passionate about designing & building compelling digital products, managing projects/brands and equipping everyday people/organizations to leverage new technologies in creating value.",
    href: "https://archive.edgetechies.com",
    stack: [
      "Vue",
      "Nuxt JS",
      "Netlify",
      "Netlify Forms",
      "SCSS",
      "CSS Grid",
      "Git",
      "Github",
      "CI/CD",
      "Node JS",
    ],
  },
  {
    title: "Alethic Resources",
    src: null,
    images: [
      {
        src: "/images/projects/alethic-resources/home.webp",
        alt: "Alethic Resources home hero",
        label: "Home",
      },
      {
        src: "/images/projects/alethic-resources/about.webp",
        alt: "Alethic Resources About Us section",
        label: "About",
      },
      {
        src: "/images/projects/alethic-resources/vision.webp",
        alt: "Alethic Resources Vision section",
        label: "Vision",
      },
      {
        src: "/images/projects/alethic-resources/products.webp",
        alt: "Alethic Resources products section",
        label: "Products",
      },
      {
        src: "/images/projects/alethic-resources/services.webp",
        alt: "Alethic Resources services section",
        label: "Services",
      },
      {
        src: "/images/projects/alethic-resources/team.webp",
        alt: "Alethic Resources expert team section",
        label: "Team",
      },
      {
        src: "/images/projects/alethic-resources/contact.webp",
        alt: "Alethic Resources contact and office information",
        label: "Contact",
      },
    ],
    description: "official website of Alethic Resources Nigeria Limited.",
    href: "https://alethicresources.netlify.app",
    stack: ["React", "Bitbucket", "Netlify"],
  },
  {
    title: "Template String Parser",
    src: null,
    description:
      "a package for interpolating strings. replace parts of a template string with passed object key : value.",
    href: "https://github.com/tunjioye/templatestringparser",
    stack: ["JavaScript", "NPM"],
  },
  {
    title: "Sprocket API Frontend Demo",
    src: null,
    description:
      "Frontend Demo consuming API of a store of products with features such as filtering, sorting and pagination.",
    href: null,
    stack: ["React", "Next JS", "RSuite JS", "SCSS", "AJAX", "Heroku", "Git"],
  },
  {
    title: "Result Request System",
    src: null,
    description:
      "The Development of a System to Request Student Results from Universities. A Final Year Project Demo.",
    href: null,
    stack: [
      "PHP",
      "Laravel",
      "Vue",
      "AJAX",
      "Heroku",
      "PostgreSQL",
      "Git",
      "Github",
      "CI/CD",
    ],
  },
  {
    title: "Smart XMX",
    src: null,
    description:
      "Simple PHP Class to utilize <a href='https://smartsmssolutions.com' target='_blank' rel='noopener noreferrer' class='text-blue-500 hover:underline underline-offset-4'>Smart SMS Solutions</a> Bulk SMS HTTP API.",
    href: "https://github.com/tunjioye/smartxmx",
    stack: ["CSS", "SCSS", "CSS Flex", "Git"],
  },
  {
    title: "Spectre CSS Examples",
    src: null,
    images: [
      {
        src: "/images/projects/spectre-css-examples/login-01.webp",
        alt: "Spectre CSS email login example",
        label: "Email login",
      },
      {
        src: "/images/projects/spectre-css-examples/login-02.webp",
        alt: "Spectre CSS username login example",
        label: "Username login",
      },
    ],
    description:
      "Spectre CSS Examples provides some quick html examples based on the Spectre CSS Framework.",
    href: "https://github.com/tunjioye/spectre-css-examples",
    stack: ["CSS", "SCSS", "CSS Flex", "Git"],
  },
  {
    title: "TKP Mission Forms",
    src: null,
    images: wellfoundScreenshots("tkp-mission-forms", "TKP Mission Forms", 1),
    description:
      "custom built form entry for TKP (The Kingdom Project) events and mission outreaches.",
    href: "https://forms.tkpmission.org",
    stack: ["Laravel", "Bootstrap 3", "Google Docs"],
  },
  {
    title: "TKP Forms API V1",
    src: null,
    description:
      "A collection of API Endpoints for TKP Mission Forms. Using <a href='https://jsonapi.org' target='_blank' rel='noopener noreferrer' class='text-blue-500 hover:underline underline-offset-4'>jsonapi</a> standard.",
    href: "https://documenter.getpostman.com/view/7841485/SzzoYukD",
    stack: ["Laravel", "JSON-API", "Postman"],
  },
  {
    title: "Brain on Mission",
    src: null,
    description: "built the brain on mission online goal card generator.",
    href: null,
    stack: ["Laravel", "jQuery", "AJAX"],
  },
  {
    title: "Studogram",
    src: null,
    description: "an affiliate online book store mainly for study materials.",
    href: null,
    stack: ["WordPress", "WooCommerce"],
  },
  {
    title: "Me // My Old Portfolio",
    src: null,
    images: [
      {
        src: "/images/projects/old-portfolio/home.webp",
        alt: "Tunji Oyeniran old portfolio home page",
        label: "Home page",
      },
      {
        src: "/images/projects/old-portfolio/projects.webp",
        alt: "Tunji Oyeniran old portfolio projects page",
        label: "Projects page",
      },
    ],
    description:
      "build a simple portfolio just like mine : fork then change the preset configurations and markdown pages.",
    href: "https://tunji-oyeniran-portfolio.netlify.app",
    stack: ["React", "Gatsby", "GraphQL", "Markdown", "Github Pages", "PWA"],
  },
];
