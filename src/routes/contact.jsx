import "../App.css";
import "../global.css";
import "../utils.css";

export default function Contact () {
  return (
    <main className="contactWrap">
      <div className="contactContainer ">
        <h2>Let's chat</h2>
        <p>I'm open to talk about the craft and economy of writing. <a href="mailto:caroline@fuelcopy.com">Email</a>&nbsp;is the best way to reach me. </p>
        <p>It's great if you have questions about medical writing or grant writing. My expertise is with projects in the United States. My understanding of the landscape outside my country's borders is limited. </p>
        <p>
          You may be curious about this website. I have been making sites as a hobby and feel free to browse this site's Github repo. It's a dead simple build with React and a JSON data file for the portfolio entries.
        </p>
      </div>
    </main>
  )
}