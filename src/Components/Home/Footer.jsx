import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div>
        <ul>
          <li>
            <Link to="">Questions? Contact us.</Link>
          </li>

          <li>
            <Link to="">FAQ</Link>
          </li>
          <li>
            <Link to="">Investor Relations</Link>
          </li>
          <li>
            <Link to="">Privacy</Link>
          </li>
          <li>
            <Link to="">Speed Test</Link>
          </li>
        </ul>
        <select className="selectfooter">
          <option value="option1">English</option>
        </select>
      </div>
      <div>
        <ul>
          <li>
            <Link to="">Help Center</Link>
          </li>
          <li>
            <Link to="">Jobs</Link>
          </li>
          <li>
            <Link to="">Cookie Preferences</Link>
          </li>
          <li>
            <Link to="">Legal Notices</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <Link to="">Account</Link>
          </li>
          <li>
            <Link to="">Ways to Watch</Link>
          </li>
          <li>
            <Link to="">Corporate Information</Link>
          </li>
          <li>
            <Link to="">Only on Netflix</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <Link to="">Media Center</Link>
          </li>
          <li>
            <Link to="">Terms of Use</Link>
          </li>
          <li>
            <Link to="">Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
