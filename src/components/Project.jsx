// import projects from "../data";
import "../utils.css"

export function Project () {
  const projects = [
    {
      company: "Benefiber",
      product: "branding",
      category: "copywriting",
      tests: [
        { name: "aaa", type: "aaa-type"},
        {name: "bbb", type: "bbb-type"}
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
        {name: "myName", type: "myType"},
        {name: "Alias", type: "aliatype"}
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
        {name: "testy", type: "A"},
        {name: "meme", type: "B"}
      ],
      tags: "travel-tech"
    }
  ];

  return (
    <div>
      {projects.map((project, index) => (
        <div key={index}>
          <h2>Company: {project.company}</h2>
          <div>
            {project.tests.map((test, i) => (
              <p key={i}>
                {test.name} typed {test.type}
              </p>
            ))}
          </div>
        </div>
      ))}
      </div>
  );
            }
