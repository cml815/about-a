let projects = [
  {

    id: "1",
    company: "Benefiber",
    theme: "#00ad42",
    product: "major brand",
    category: "",
    tests: [
      {name: "large brand", type: "B2C"},
      {name: "whatev", type: "B"}
    ],
    tags: [
      "large brand",
      "B2C",
      "health"
    ],
    image: require("./images/benefiber-aging.png"),
    snippet: "Benefiber. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo vel fringilla est ullamcorper eget nulla. In fermentum posuere urna nec tincidunt praesent semper.",
    title0: "Aging and Digestion",
    title1: "What Does the Gut-Brain Connection Mean",
    url0: "https://www.benefiber.com/fiber-in-your-life/fiber-and-wellness/aging-and-digestion/",
    url1: "https://www.benefiber.com/digestive-health/gut-health-101/what-is-gut-brain-connection/",
  },
  {
    id: "2",
    company: "Colgate",
    product: "major brand",
    category: "copywriting",
    tests: [
      {name: "large brand", type: "B2C"},
      {name: "whatev", type: "B"}
    ],
    tags: [
      "large brand",
      "B2C",
      "health"
    ],
    image: require("./images/health.png"),
    snippet: "Colgate Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo vel fringilla est ullamcorper eget nulla. In fermentum posuere urna nec tincidunt praesent semper.",
    url0: "https://www.colgate.com/en-us/oral-health/bad-breath/how-to-help-bad-breath-go-away-under-stress",
    title0: "How to Get Rid of Stress-Induced Bad Breath",
    url1: "https://www.colgate.com/en-us/oral-health/tooth-sensitivity/what-causes-sensitive-teeth",
    title1: "What Causes Tooth Sensitivity & How to Treat It",
    url2: "https://www.colgate.com/en-us/oral-health/adult-orthodontics/tips-for-adults-with-braces",
    title2: "Tips For Adults With Braces"
  },
  {
    id: "3",
    company: "Ingram Micro",
    product: "thought leadership",
    category: "enterprise marketing",
    tests: [
      {name: "ooo", type: "bbb"}
    ],
    tags: [
      "digital magazine",
      "Microsoft Azure"
    ],
    image: require("./images/health.png"),
    snippet: "Ingram Micro Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo vel fringilla est ullamcorper eget nulla. In fermentum posuere urna nec tincidunt praesent semper.",
    url: "",
  },
  {
    id: "4",
    company: "Reward Expert",
    product: "founder interviews",
    category: "SEO content",
    tests: [
      {name: "cookie", type: "stop"},
      {name: "lorem", type: "ipsum"}
    ],
    tags: "travel-tech",
    image: require("./images/thought.png"),
    snippet: "Reward Expert Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo vel fringilla est ullamcorper eget nulla. In fermentum posuere urna nec tincidunt praesent semper.",
    url: ""
  }
]

export function getProjects () {
  return projects;
} 

// export function getProject() {
//   return projects;
// }

export function getProject(company) {
  return projects.find(project => project.company === company);
}

