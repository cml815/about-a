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
    url: "https://www.benefiber.com/fiber-in-your-life/fiber-and-wellness/aging-and-digestion/"
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
    url: ""
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

