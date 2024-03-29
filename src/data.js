import { Categories } from "./components/Categories";

let projects = [
  {

    id: "1",
    company: "Benefiber",
    slug: "benefiber",
    theme: "#00ad42",
    product: "branding",
    category: "campaign",
    tags: [
      {tag: "health", type: ""},
      {tag: "supplement", type: ""}
    ],
    // tags: [
    //   "tagXXX",
    //   "B2C",
    //   "health"
    // ],
    image: require("./images/women-garden.jpg"),
    snippet: "Benefiber envisioned a content strategy to position the fiber supplement as top-of-mind for active people. As writer, I created a series of relatable and informational articles on Benefiber's website. The articles explain health topics in a (no pun intended) digestible format. Each article cited authoritative health sources and underwent regulatory review.",
    results: "The series feature articles remain on the Benefiber website to enable audiences to connect relatable health.",
    excerpt: "As we age, there are factors that contribute to the slowing of the digestive system...Though there's nothing we can do to prevent aging, eating a healthy diet, drinking plenty of water, and getting regular exercise are some of the things we can do to prevent digestive problems.",
    title0: "Aging and Digestion",
    title1: "What Does the Gut-Brain Connection Mean?",
    url0: "https://www.benefiber.com/fiber-in-your-life/fiber-and-wellness/aging-and-digestion/",
    url1: "https://www.benefiber.com/digestive-health/gut-health-101/what-is-gut-brain-connection/",
    url2: "https://www.benefiber.com/fiber-in-your-life/fiber-and-wellness/exercises-for-digestive-health/",
    title2: "Exercises for Digestive Health",
    url3: "https://www.benefiber.com/fiber-in-your-life/fiber-and-wellness/stress-and-digestion/",
    title3: "How Stress Affects Digestion",
    url4: "https://www.benefiber.com/digestive-health/gut-health-101/basic-digestive-health-facts/",
    title4: "Basic Facts About Digestive Health"
  },
  {
    id: "2",
    company: "Colgate®",
    slug: "colgate",
    product: "branding",
    category: "campaign",
    tags: [
      {tag: "health", type: ""},
      {tag: "relatable", type: ""}
    ],
    image: require("./images/braces-640.360.jpg"),
    snippet: "Colgate® used a content strategy to make the trusted oral health line more relatable. The brand's winning strategy is to offer clear, accurate information and product recommendations in one place. That winning strategy drives awareness and sales and bolsters the reputation of an already respected oral health brand.",
    results: "Magazine-style articles tied with health and brand information drive more awareness and sales for the respected oral health brand.",
    excerpt: "[T]here are actions you can take to prevent bad breath the next time you're under pressure from a first date, a job interview, an important meeting, giving a speech at the Oscars, or your next rocket launch (while wearing a space helmet, good breath is imperative). So sit back, relax, and calm those nerves, because we have a few tips and tricks that may be able to help you.",
    url0: "https://www.colgate.com/en-us/oral-health/bad-breath/how-to-help-bad-breath-go-away-under-stress",
    title0: "How to Get Rid of Stress-Induced Bad Breath",
    url1: "https://www.colgate.com/en-us/oral-health/tooth-sensitivity/what-causes-sensitive-teeth",
    title1: "What Causes Tooth Sensitivity & How to Treat It",
    url2: "https://www.colgate.com/en-us/oral-health/adult-orthodontics/tips-for-adults-with-braces",
    title2: "Tips For Adults With Braces",
    url3: "https://www.benefiber.com/fiber-in-your-life/fiber-and-wellness/exercises-for-digestive-health/",
    title3: "Exercises for Digestive Health",
    url14: "https://www.benefiber.com/digestive-health/gut-health-101/what-is-gut-brain-connection/",
    title4: "What Does the Gut-Brain Connection Mean?",
  },
  {
    id: "1g",
    company: "Funded: Grant for Hemophilia & Other Bleeding Disorders",
    slug: "nhf",
    product: "grant",
    category: "???",
    tags: [
      {tag: "health", type: ""},
      {tag: "relatable", type: ""}
    ],
    image: require("./images/hemophilia.jpg"),
    snippet: "As a national disease non-profit, the National Hemophilia Foundation is charged with educating providers and patients on the latest advances in bleeding disorder research. The CDC awarded the NHF with a $3 million dollar grant to prevent complications in males with hemophilia and raise awareness about von Willebrand Disease. vWD is the most common bleeding disorder and affects males and females, but if undiagnosed can lead to dangerous bleeding and miscarriage for pregnant women.",
    results: "The 5-year grant enabled NHF to deepen their partnerships with physician groups, hemophilia treatment centers and patients and their advocates. The collaborative has been working to reduce pain and disability among those with bleeding disorders.",
    excerpt: "NHF was awarded funding to continue the “First Step” education program for newly diagnosed families. This program targets families new to the bleeding disorder community, as well as carrier families. Through the program, families gain information and resources on topics like diagnosis, management, treatment options, and strategies to prevent secondary conditions. ",
    url0: "https://www.cdc.gov/ncbddd/hemophilia/aboutus-projects.html",
    title0: "CDC Grant Announcement",
    url1: "https://www.colgate.com/en-us/oral-health/tooth-sensitivity/what-causes-sensitive-teeth",
    title1: "What Causes Tooth Sensitivity & How to Treat It",
    url2: "https://www.colgate.com/en-us/oral-health/adult-orthodontics/tips-for-adults-with-braces",
    title2: "Tips For Adults With Braces"
  },
  {
    id: "2g",
    company: "Funded: COVID-19 Grants",
    slug: "covid-grants",
    product: "grant",
    category: "grant",
    tags: [
      {tag: "health", type: ""},
      {tag: "E-A-T", type: ""}
    ],
    image: require("./images/nurse.jpg"),
    snippet: "In 2020-2021, the COVID-19 pandemic caused crises in healthcare and education. I wrote and advised on multiple successful proposals on a range of issues including the health workforce and supporting undergraduate education. A total of $12.5 million in awards for pandemic-related problems",
    results: "A total of $12.5 million in awards for pandemic-related problems",
    excerpt: "This program promotes diversity among the health professions by providing awards to eligible health professions and nursing schools, for schools to provide scholarships to students from disadvantaged backgrounds who have a demonstrated financial need and are enrolled full-time in a health profession program or nursing program.",
    url0: "https://www.hrsa.gov/grants/find-funding/HRSA-20-006",
    title0: "Scholarships for Disadvantaged Health Students",
    url1: "https://www.montcopa.org/DocumentCenter/View/36093/Montgomery-County-Recovery-Plan-August-18-2022?bidId=",
    title1: "$1.2M Award for Workforce Development",
    url2: "https://www.benefiber.com/fiber-in-your-life/fiber-and-wellness/exercises-for-digestive-health/",
    title2: "Exercises for Digestive Health",
    url3: "https://www.colgate.com/en-us/oral-health/tooth-sensitivity/what-causes-sensitive-teeth",
    title3: "What Causes Tooth Sensitivity & How to Treat It",
    title4: "What Does the Gut-Brain Connection Mean?",
    url4: "https://www.benefiber.com/digestive-health/gut-health-101/what-is-gut-brain-connection/",
  },
  {
  id: "3",
  company: "Medical News Today",
  slug: "mnt",
  product: "authority",
  category: "authority",
  tags: [
    {tag: "health", type: ""},
    {tag: "E-A-T", type: ""}
  ],
  image: require("./images/mnt.jpg"),
  snippet: "Medical News Today, part of the 9th most visited health site, Healthline, is a major provider of medical information to consumers. As a contract medical writer, I researched, wrote, and cited balanced articles for patient audiences.",
  results: "Authoritative medical articles have made MNT one of the top health sites in the world",
  excerpt: "The cerebellum helps a person drive, throw a ball, or walk across the room...This article explains the anatomy, functions, and possible disorders of the cerebellum. It will also offer tips on preserving brain health.",
  url0: "https://www.medicalnewstoday.com/articles/313265",
  title0: "Everything You Need to Know About the Cerebellum",
  url1: "https://www.medicalnewstoday.com/articles/312292",
  title1: "What Does a Bone Marrow Biopsy Involve?",
  url2: "https://www.benefiber.com/fiber-in-your-life/fiber-and-wellness/exercises-for-digestive-health/",
  title2: "Exercises for Digestive Health",
  url3: "https://www.colgate.com/en-us/oral-health/tooth-sensitivity/what-causes-sensitive-teeth",
  title3: "What Causes Tooth Sensitivity & How to Treat It",
  title4: "What Does the Gut-Brain Connection Mean?",
  url4: "https://www.benefiber.com/digestive-health/gut-health-101/what-is-gut-brain-connection/",
},
  {
    id: "4",
    company: "RewardExpert",
    slug: "reward-expert",
    product: "startups",
    category: "SEO",
    tags: [
      {tag: "link-building", type: ""},
      {tag: "travel", type: ""},
      {tag: "startups", type: ""},
      {tag: "interviews", type: ""}
    ],
    // tags: "travel-tech",
    image: require("./images/zip.png"),
    snippet: "Reward Expert's active content creation and SEO has placed the website among the top in its category. As a way of building relationships, the site published interviews of CEOs of talked-about travel tech startups. I interviewed and wrote stories on CEOs at 30+ startups, including companies that had been featured in Mashable, TechCrunch and Fast Company.",
    excerpt: "Did you know you can travel around the world and get lodging for free? That’s what HomeExchange offers with their house swapping service. RewardExpert spoke with Alexandra Origet, HomeExchange’s global public relations director, to learn more.",
    url0: "https://www.rewardexpert.com/blog/homeexchange-how-travelers-can-get-free-lodging/",
    title0: "Home Exchange: How Travelers Can Get Free Lodging",
    url1: "https://www.rewardexpert.com/blog/vacatia-family-friendly-resort-rentals/",
    title1: "Vacatia: Family-Friendly Resort Rentals",
    url2: "https://www.rewardexpert.com/blog/rome2rio-have-the-freedom-to-not-plan-ahead/",
    title2: "Rome2rio: Have the Freedom to Not Plan Ahead",
    url3: "https://www.rewardexpert.com/blog/transit-an-easier-way-to-navigate-public-transportation/",
    title3: "Transit: An Easier Way to Navigate Public Transportation",
    url4: "https://www.rewardexpert.com/blog/gateguru-the-yelp-of-airports/",
    title4: "Gate Guru: the Yelp of Airports",
    url5: "https://www.rewardexpert.com/blog/airport-layovers-dont-need-to-be-boring-anymore-with-zipcar/",
    title5: "Airport Layovers Don’t Need to Be Boring Anymore with Zipcar"

  },
  {
    id: "5",
    company: "Johnson & Johnson",
    slug: "overture",
    product: "biotech",
    category: "magazine",
    tags: [
      {tag: "biotech", type: ""},
      {tag: "innovation", type: ""}
    ],
    // tags: [
    //   "",
    //   ""
    // ],
    image: require("./images/overture.png"),
    snippet: "Johnson & Johnson sponsored this article on technology to detect cancer more quickly.",
    excerpt: "IMAGINE IF DIAGNOSING CANCER WAS AS simple as a blood test. Dubbed “liquid biopsies,” they analyze the proteins and DNA of cancerous tumors that circulate within the blood. They could allow for an earlier diagnosis, which gives patients the best chance to beat cancer and live longer.",
    url0: "https://www.overtureglobal.io/story/liquid-biopsies-for-cancer-detection-move-closer-to",
    title0: "Liquid Biopsies for Cancer Detection Move Closer to Reality",
    url1: "https://www.nethealth.com/3-ways-to-keep-track-of-eh-during-covid-19-flu-season/",
    title1: "Tracking Employee Health During COVID-19",
    url2: "https://truveris.com/pbm-contracts-7-terms-employers-need-to-know/",
    title2: "PBM Contracts: 7 Terms Employers Need to Know"
  },
  {
    id: "5g",
    company: "Funded: Recovery Grant for Behavioral Health Workforce",
    slug: "recovery-grant",
    product: "grant",
    category: "grant",
    tags: [
      {tag: "health", type: ""},
      {tag: "E-A-T", type: ""}
    ],
    image: require("./images/therapy.jpg"),
    snippet: "Montgomery County, Pennsylvania issued a call for proposals to support workforce development and other County needs. I wrote a winning $1.2M proposal for Aspire Child and Family Services. The funded will enable workforce development and increased supports for children with autism spectrum disorder.",
    results: "",
    excerpt: "Aspire for Behavioral Health Access: Workforce Development: The project is a behavioral health workforce development and training program specifically designed to increase the number of 1) trained behavioral health technicians, 2) training programs for technicians seeking board certification in behavior analysis, and 3) continuing education opportunities for certified and licensed industry professionals. The project is designed to address the behavioral health workforce shortage and improve outcomes for children with autism spectrum disorder or other behavior health diagnoses.",
    url0: "https://www.montcopa.org/DocumentCenter/View/36093/Montgomery-County-Recovery-Plan-August-18-2022?bidId=",
    title0: "County Recovery Plan 2022",
    url1: "https://www.medicalnewstoday.com/articles/312292",
    title1: "What Does a Bone Marrow Biopsy Involve?",
    url2: "https://www.benefiber.com/fiber-in-your-life/fiber-and-wellness/exercises-for-digestive-health/",
    title2: "Exercises for Digestive Health",
    url3: "https://www.colgate.com/en-us/oral-health/tooth-sensitivity/what-causes-sensitive-teeth",
    title3: "What Causes Tooth Sensitivity & How to Treat It",
    title4: "What Does the Gut-Brain Connection Mean?",
    url4: "https://www.benefiber.com/digestive-health/gut-health-101/what-is-gut-brain-connection/",
  },
  {
    id: "6",
    company: "Aceable",
    slug: "aceable",
    product: "SEO",
    category: "SEO",
    tags: [
      {tag: "ecommerce", type: ""},
      {tag: "automotive", type: ""}
    ],
    // tags: [
    //   "",
    //   ""
    // ],
    image: require("./images/aceable.png"),
    snippet: "Aceable and its sub-brands (Drivers Ed & I Drive Safely) provide online driving courses need a strong web presence to be found. As a writer, I have been supported their long-running campaigns to be relevant and easily found in a highly competitive industry.",
    excerpt: "While traffic accidents and fatalities have been on the rise, driving under the influence is not the main cause of collisions. Nearly 43,000 people died in traffic accidents in 2021, but only 20% of those were alcohol-related, according to the U.S. Department of Transportation. So, you can see that a large proportion of serious crashes are the result of common driving mistakes drivers make every day. Many drivers just want to get where they’re going as comfortably and as efficiently as possible. But, nothing can ruin your day quite like getting a speeding ticket or causing a crash. So how can you minimize these dangerous and costly disruptions? Well, beyond the obvious, like remembering to stop at STOP signs and yield to emergency vehicles, the best way to avoid costly driving errors is to pay more attention to how you’re driving.",
    url0: "https://driversed.com/trending/ten-driving-mistakes-you-dont-know-youre-making/",
    title0: "Ten Driving Mistakes You Don’t Know You’re Making",
    url1: "https://www.aceable.com/blog/what-keep-your-cars-emergency-kit-winter/",
    title1: "What to Keep in Your Car's Emergency Kit",
    url2: "https://www.idrivesafely.com/defensive-driving/trending/tips-and-tricks-become-safer-and-more-confident-driver",
    title2: "Tips and Tricks to Become a Safer and More Confident Driver",
    title3: "Renew Your Ohio Driver's License",
    url3: "https://www.aceable.com/blog/how-to-renew-your-drivers-license-in-ohio/",
    title4: "Driving With a Suspended License",
    url4: "https://www.idrivesafely.com/defensive-driving/trending/driving-suspended-or-expired-license-or-no-license-all"
  },
  
  
  {
    id: "9",
    company: "Net Health",
    slug: "net-health",
    product: "lead generation",
    category: "lead-generation",
    tags: [
      {tag: "Lead generation"},
      {tag: "Convey new EHR features during COVID-19 emergency"},
    ],
    image: require("./images/net-health.png"),
    snippet: "Net Health offers custom electronic health/medical records for some of the fastest growing specialties, including Urgent Care. Their approach to attracting sales is by offering clear, concise ebooks and other collateral.",
    excerpt: "Employee burnout is widespread among healthcare professionals. Individuals experiencing burnout suffer mental or physical exhaustion, often combined with cynicism or alienation, and long-term work-related stress, leading to diminished performance.",
    url0: "https://www.nethealth.com/how-employee-health-can-ease-provider-burnout/",
    title0: "How Employee Health Can Ease Provider Burnout",
    url1: "https://www.nethealth.com/6-key-performance-indicators-for-your-occupational-medicine-practice/",
    title1: "6 Key Performance Indicators for Your Occupational Medicine Practice",
    url2: "https://www.nethealth.com/key-covid-indicators-making-the-case-for-evolving-kpis/",
    title2: "Key COVID Indicators: Making the Case for Evolving KPIs",
    url3: "https://www.nethealth.com/3-ways-to-keep-track-of-eh-during-covid-19-flu-season/",
    title3: "3 Ways to Keep Track of EH During Covid-19/Flu Season",
    url4: "https://www.idrivesafely.com/defensive-driving/trending/5-apps-parents-can-use-keep-their-teen-safe",
    title4: "Apps to Keep Teens Safe"
  },
  // {
  //   id: "11",
  //   company: "T2",
  //   product: "case-story",
  //   category: "lead-generation",
  //   tags: [
  //     {tag: "AWS migration"},
  //     {tag: "tech"}
  //   ],
  //   image: require("./images/t2.png"),
  //   snippet: "Many like read testimonials before they buy. For tech companies, buyers are often high-level specialists who prefer case studies to see how complex adoptions work in real life.",
  //   url0: "https://t2tech.us/client-stories/",
  //   title0: "AWS Migration",
  // },
  // {
  //   id: "12",
  //   company: "Talkatoo",
  //   product: "case study",
  //   category: "authority",
  //   tags: [
  //     {tag: "software"},
  //     {tag: "dictation"},
  //     {tag: "vet practice"}
  //   ],
  //   image: require("./images/talkatoo.png"),
  //   snippet: "Talkatoo has great word-of-month from vets who love the dictation software. As a writer, I was asked to convert a video interview into a compelling case study.",
  //   url0: "https://talkatoo.com/news/category/case-studies/",
  //   title0: "Dictation Software Helps Vet Practice",
  // }, 
  {
    id: "11",
    company: "Borshoff Agency",
    slug: "borshoff",
    product: "branding",
    category: "advertising",
    tags: [
      {tag: "advertising"},
    ],
    image: require("./images/surgery.jpg"),
    snippet: "I wrote thought-leadership articles geared toward hospital executive requiring a modern advertising strategy.",
    excerpt: "Online marketing has become increasingly ignored where many people scroll past content or disable ads. Compounding this problem are the people who are not even online, and many of them have significant healthcare needs.",
    url0: "https://borshoff.biz/build-effective-hospital-brand-strategy/",
    title0: "Build a Hospital Brand Strategy",
    url1: "https://borshoff.biz/hospitals-marketing-reach-a-wider-audience/",
    title1: "5 Ways Hospitals Can Reach a Wider Audience",
    url2: "https://truveris.com/pbm-contracts-7-terms-employers-need-to-know/",
    title2: "PBM Contracts: 7 Terms Employers Need to Know",
    url3: "https://www.nethealth.com/key-covid-indicators-making-the-case-for-evolving-kpis/",
    title3: "Key COVID Indicators: Making the Case for Evolving KPIs",
    url4: "https://www.nethealth.com/3-ways-to-keep-track-of-eh-during-covid-19-flu-season/",
    title4: "3 Ways to Keep Track of EH During Covid-19/Flu Season",
    
  },
  {
    id: "13",
    company: "Business Insider",
    slug: "business-insider",
    product: "startup PR",
    category: "media relations",
    tags: [
      {tag: "automotive"},
    ],
    image: require("./images/sparrow.webp"),
    snippet: "A profile I wrote on an edgy automotive startup was picked up and syndicated by Business Insider.",
    excerpt: "The Electrameccanica Sparrow is among the new contenders vying in the electric car market. This single-user vehicle with three wheels and odd shape is made in B.C. has gotten notice on Vancouver roads. ElectraMeccanica chief executive Jerry Kroll is confident that an oddly-shaped, three-wheeled electric vehicle will please Canada drivers and drum up big profits.",
    url0: "https://www.businessinsider.com/this-3-wheeled-electric-car-is-the-volkswagen-beetle-of-the-21st-century-2015-7",
    title0: "This 3-wheeled electric car is the 'Volkswagen Beetle of the 21st century'",
    url1: "https://www.rewardexpert.com/blog/airport-layovers-dont-need-to-be-boring-anymore-with-zipcar/",
    title1: "Airport Layovers Don’t Need to Be Boring Anymore with Zipcar",
    url2: "https://www.carinsurancequotes.com/articles/buyers-guide-green-cars-personalities",
    title2: "Buyer’s guide for green cars: Eco-wheels for 8 personalities, including yours",
    url3: "https://www.rewardexpert.com/blog/transit-an-easier-way-to-navigate-public-transportation/",
    title3: "Transit: An Easier Way to Navigate Public Transportation",
    url4: "https://www.rewardexpert.com/blog/gateguru-the-yelp-of-airports/",
    title4: "Gate Guru: the Yelp of Airports",
  },
  {
    id: "14",
    company: "Car Insurance Quotes",
    slug: "seo-site",
    product: "buyer's guide",
    category: "seo",
    tags: [
      {tag: "", type: ""},
      {tag: "", type: ""}
    ],
    // tags: [
    //   "",
    //   ""
    // ],
    image: require("./images/bmw.png"),
    snippet: "Online recommendation sites in the automotive sector have stiff competition. The content strategy aimed to unite buyers' car options with clever and fun content.",
    excerpt: "Green cars use alternate sources of fuel, giving them a much-deserved reputation for being friendly to the environment. Drivers love them because they spend more time on the road and less at the pump. With many options on the market, which one is right for you? Here’s a buyer’s guide to match you with a new ride.",
    url0: "https://www.carinsurancequotes.com/articles/buyers-guide-green-cars-personalities",
    title0: "Buyer’s guide for green cars: Eco-wheels for 8 personalities, including yours",
    url1: "https://www.businessinsider.com/this-3-wheeled-electric-car-is-the-volkswagen-beetle-of-the-21st-century-2015-7",
    title1: "This 3-wheeled electric car is the 'Volkswagen Beetle of the 21st century'",
    url2: "https://www.rewardexpert.com/blog/airport-layovers-dont-need-to-be-boring-anymore-with-zipcar/",
    title2: "Airport Layovers Don’t Need to Be Boring Anymore with Zipcar",
    url3: "https://www.rewardexpert.com/blog/transit-an-easier-way-to-navigate-public-transportation/",
    title3: "Transit: An Easier Way to Navigate Public Transportation",
    url4: "https://www.rewardexpert.com/blog/gateguru-the-yelp-of-airports/",
    title4: "Gate Guru: the Yelp of Airports",
  },
  {
    id: "15",
    company: "AlgaeCal",
    slug: "algaecal",
    product: "lead generation",
    category: "authority",
    tags: [
      {tag: "biotech", type: ""},
      {tag: "innovation", type: ""}
    ],
    // tags: [
    //   "",
    //   ""
    // ],
    image: require("./images/algaecal.png"),
    snippet: "AlgaeCal hired me to write an authoritative but relatable article on the health benefits of magnesium.",
    excerpt: "Research shows that magnesium benefits virtually every part of your body. It helps maintain normal muscle and nerve function, keeps your heart rhythm steady, supports a healthy immune system, and keeps your bones strong.",
    url0: "https://www.algaecal.com/algaecal-ingredients/magnesium/",
    title0: "The Effects of Magnesium and Why We Need It",
  }
  
]

export function getProjects () {
  return projects;
} 

export function getCategories() {
  return Categories;
}

// export function getProject() {
//   return projects;
// }

export function getProject(slug) {
  return projects.find(project => project.slug === slug);
}

export function getCategory(category) {
  return projects.find(project => project.category === category);
}
