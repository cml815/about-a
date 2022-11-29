import "../App.css";
import "../global.css";
import "../utils.css";

export default function Contact () {
  return (
    <main className="contactWrap">
      <div className="contactContainer paddingLg flex-m">
        <div className="panelHalf">
          <h2>Let's chat</h2>
        </div>
        <div className="panelHalf">
          <div>
            <p>Do you want to talk about the craft and economy of writing?<a href="mailto:caroline@fuelcopy.com">&nbsp;Email</a>&nbsp;is the best way to reach me. </p>
            <p>It's great if you have questions about medical writing or grant writing. My expertise is with projects in the United States. My understanding of the landscape outside my country's borders is limited. </p>
          </div>
          <div>
          <h4>Interested in copy and code?</h4>
          </div>
          <p>
            Digital writers need skills beyond copy. As a side project, I have been building websites first in Wordpress and now in Express and React. Feel free to browse this site's <a href="https://www.github.com/cml815/about-a">Github repository </a>and reach out with observations or questions.
          </p>
          </div>
        </div>
    </main>
  )
}