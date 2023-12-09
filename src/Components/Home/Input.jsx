import "./Input.css";
function Input() {
  return (
    <div className="input">
      <p className="input-text">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <input type="text" placeholder="Email Address" className="input-field" />
      <button className="input-button">Get Started</button>
    </div>
  );
}

export default Input;
