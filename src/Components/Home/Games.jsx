// import React from 'react'
import "./Games.css"
function Games() {
  return (
    <div className="games">
      <div style={{ padding: "2em 1em" }}>
        <h3>Mobile games now included in every plan</h3>
        <p style={{ fontSize: "0.7em",opacity: "0.8",paddingTop: "1em" }}>
          No ads, extra fees, or in-app purchases. Enjoy unlimited access to a
          growing catalog of popular and exclusive games.
        </p>
      </div>
      <div className="gamesimage"></div>
    </div>
  );
}

export default Games