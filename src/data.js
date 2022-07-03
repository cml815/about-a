let projects = [
  {

    id: "1",
    company: "Benefiber",
    theme: "#00ad42",
    product: "major brand",
    category: "categoryXXX",
    tests: [
      {name: "large brand", type: "B2C"},
      {name: "name", type: "type"}
    ],
    tags: [
      "tagXXX",
      "B2C",
      "health"
    ],
    image: require("./images/benefiber-aging.png"),
    snippet: "Benefiber. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo vel fringilla est ullamcorper eget nulla. In fermentum posuere urna nec tincidunt praesent semper.",
    title0: "Aging and Digestion",
    title1: "What Does the Gut-Brain Connection Mean",
    url0: "https://www.benefiber.com/fiber-in-your-life/fiber-and-wellness/aging-and-digestion/",
    url1: "https://www.benefiber.com/digestive-health/gut-health-101/what-is-gut-brain-connection/",
    url2: "https://www.benefiber.com/fiber-in-your-life/fiber-and-wellness/exercises-for-digestive-health/",
    title2: "Exercises for Digestive Health"
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
    image: require("./images/colgate.png"),
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
    company: "Medical News Today",
    product: "patient information",
    category: "authority",
    tests: [
      {name: "ooo", type: "bbb"}
    ],
    tags: [
      "",
      ""
    ],
    image: require("./images/mnt.png"),
    snippet: "Medical News Today Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo vel fringilla est ullamcorper eget nulla. In fermentum posuere urna nec tincidunt praesent semper.",
    url0: "https://www.medicalnewstoday.com/articles/313265",
    title0: "Everything You Need to Know About the Cerebellum",
    url1: "https://www.medicalnewstoday.com/articles/312292",
    title1: "What Does a Bone Marrow Biopsy Involve?"

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
    image: require("./images/reward-expert.png"),
    snippet: "Reward Expert Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo vel fringilla est ullamcorper eget nulla. In fermentum posuere urna nec tincidunt praesent semper.",
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

