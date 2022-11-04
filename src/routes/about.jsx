import "../App.css";
import "../global.css";
import "../utils.css";
import "../App.css";
import profile from "./pro-pic-twitter.jpg"
import covidImage from "./covid-19.png"
import agileImage from "./agile.png"
import digitalImage from "./digital.png"

export default function About () {
  return (
    <main id="about" className="centered">
      <div className="flex">
        <h1>Caroline Leopold <br />Medical and Marketing Writer</h1>
      </div>
      <div className="inner container">
         
        </div>
        <div className="flex-m">
          <div className="split-container lh-room">
            <div className="container">
              <img src={profile} alt="Caroline Leopold" width="200"/>
            </div>
            <div>
            <p>As a consultant and writer, I engage clients on urgent grant and marketing projects. At<a href="https://www.fuelcopy.com"> Fuel Copy</a>, I map out strategy and create custom communications to meet revenue goals.</p>
            <p>About 75% of my time is writing grant proposals for universities, national non-profits and medical centers. The subject matter ranges from health system innovations, medical education, public health, and biomedical research.</p>
            <p>My remaining time is spent writing digital marketing content largely in health, technology and automotive and travel. The content builds the reputation and conversions for rising companies and larger brands.</p>
          </div>
          </div>
          </div>
          <div className="">
          <h4 className="center">Work highlights</h4>
          <ul className="flex-m">
            <li className="centered card-bordered">
              <img className="thumbnail" src={covidImage} />
              <p className="short-caption">$14.5M in grants for innovative COVID-19 projects</p></li>
            <li className="centered card-bordered">
            <img className="thumbnail" src={agileImage} />
              <p className="short-caption">Helped 16 small businesses win 13M in SBIR funding. </p></li>
            <li className="card-bordered centered">
              <img className="thumbnail" src={digitalImage} />
              <p className="short-caption">Content writing published on global brand websites and influential websites.</p></li>
        </ul>
          </div>
    </main>
  )

}