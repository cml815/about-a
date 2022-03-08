let projects = [
  {
    company: "Benefiber",
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
    ]
  },
  {
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
    ]
  },
  {
    company: "Ingram Micro",
    product: "thought leadership",
    category: "enterprise marketing",
    tests: [
      {name: "ooo", type: "bbb"}
    ],
    tags: [
      "digital magazine",
      "Microsoft Azure"
    ]
  },
  {
    company: "Reward Expert",
    product: "founder interviews",
    category: "SEO content",
    tests: [
      {name: "cookie", type: "stop"},
      {name: "lorem", type: "ipsum"}
    ],
    tags: "travel-tech"
  }
]

export function getProjects () {
  return projects;
} 