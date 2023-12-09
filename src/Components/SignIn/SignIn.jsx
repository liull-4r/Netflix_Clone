import { Link } from "react-router-dom";
import "./SignIn.css";
// import logo from "./download.png"
function SignIn() {
  return (
    <div className="container">
      <Link to="/">
        <img
          className="logo"
          src="https://w7.pngwing.com/pngs/26/116/png-transparent-netflix-logo-netflix-television-show-streaming-media-film-netflix-logo-television-text-trademark-thumbnail.png"
          alt=""
        />
      </Link>
      <div>
        <img
          className="background-image"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/361232c5-0c99-480d-a955-aaa1e387e9c6/ET-en-20231204-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
      </div>

      <div className="form">
        <h3>Sign In</h3>
        <input type="text" placeholder="Email or phone number " />
        <input type="password" placeholder="Password" />
        <button>Sign In</button>
        <div>
          <input type="checkbox" />
          <span className="remember">Remember me</span>
          <span>
            <Link to="">Need help?</Link>
          </span>
        </div>

        <p style={{ fontSize: "16px", marginTop: "50px" }}>
          New to Netflix? <Link to="/">Sign up now.</Link>
        </p>
        <p>
          This page is protected by Google reCAPTCHA to ensure you are not a
          bot.{" "}
          <Link
            style={{ fontSize: "16px", marginTop: "50px", color: "blue" }}
            to=""
          >
            Learn more.
          </Link>
        </p>
      </div>
      <div className="footerlink">
        <div>
          <ul>
            <li>
              <Link to="/">Questions? Contact us.</Link>
            </li>
            <li>
              <Link to="/">FAQ</Link>
            </li>
            <li>
              <Link to="/">Cookie Preferences</Link>
            </li>
          </ul>
        </div>
        <div style={{ marginTop: "30px" }}>
          <li>
            <Link>Help Center</Link>
          </li>
          <li>
            <Link>Corporate Information</Link>
          </li>
        </div>
        <div style={{ marginTop: "50px" }}>
          <li>
            <Link>Terms of Use</Link>
          </li>
        </div>
        <div style={{ marginTop: "50px" }}>
          <li>
            <Link>Privacy</Link>
          </li>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
