export default function Footer() {
  return (
    <footer>
      <div className="contact flex-m">
        <div className="inner">
          <p>Ask me (almost) anything!</p>
          <p><span>Email&nbsp;<a href="mailto:caroline@fuelcopy.com">caroline@fuelcopy.com</a></span></p>
        </div>
        <div className="socials flex-c">
          <a href="https://www.linkedin.com/in/cleopold"><p>LinkedIn</p></a>
          <a href="https://www.github.com/cml55"><p>Github</p></a>
        </div>

      </div>
      
      <div>
        <p className="center">&copy;{(new Date().getFullYear())} Caroline Leopold</p>
      </div>
    </footer>
  )
}