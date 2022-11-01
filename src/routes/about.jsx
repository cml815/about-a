import "../App.css";
import "../global.css";
import profile from "./pro-pic-twitter.jpg"

export default function About () {
  return (
    <main className="centered">
      <div className="flex">
        <h1>Caroline Leopold <br />Medical and Marketing Writer</h1>
      </div>
      <div className="inner container">
          <p>As a consultant, I engage numerous clients on urgent grant and marketing projects. At<a href="https://www.fuelcopy.com"> Fuel Copy</a>, I map out strategy and create custom communications to meet revenue goals.</p>
        </div>
        <div className="flex-mobile">
          <div className="split-container">
            <p>About 75% of my time is writing grant proposals for universities, national non-profits and medical centers. The subject matter ranges from health system innovations, medical education, public health, and biomedical research.</p>
            <p>My remaining time is spent writing digital marketing content largely in health, technology and automotive and travel.</p>
          </div>
          <div className="container">
            <img src={profile} alt="Caroline Leopold" width="300"/>
          </div>
        </div>
        <div>
        <h2>Collaborative creator</h2>
        <p>What unites my grant and marketing writing is that I make persuasive arguments grounded in data, research and practical concerns.</p>
        <p>My projects often engage various stakeholders on important subjects. Stemming a pandemic. Relieving the shortage of nurses. Finding treatments for serious illnesses. </p>
        <h2>Work highlights</h2>
        <ul>
        <li><p>$14.5M in grants for innovative COVID-19 projects</p></li>
        <li><p>Helped 16 small businesses win 13M in SBIR funding. </p></li>
        <li><p>Content writing published on global brand websites and influential websites.</p></li>
        </ul>
      </div>
    </main>
  )

}