import React, { useState } from "react";
import Avatar from "./Avatar";
import CustomAvatar from "./CustomAvatar";

const activities = ["swim in the cool lake", "have a backyard barbecue", "go on a bike ride", "play frisbee in the park", "make homemade ice cream", "watch the sunset at the beach", "stargaze on a warm night"];

function SummerDayAdventure() {
  const [energy, setEnergy] = useState(100);
  const [fun, setFun] = useState(0);
  const [message, setMessage] = useState("Welcome to your Summer Day Adventure!");
  const [gameOver, setGameOver] = useState(false);

  // Avatar state
  const [skinTone, setSkinTone] = useState("#FFD1BA");
  const [hairColor, setHairColor] = useState("#4A4A4A");
  const [clothesColor, setClothesColor] = useState("#3498DB");
  const [tanLevel, setTanLevel] = useState(0);
  const [expression, setExpression] = useState("😊");

  const handleActivity = (index) => {
    if (gameOver) return;

    const energyCost = Math.floor(Math.random() * 21) + 10;
    const funGain = Math.floor(Math.random() * 11) + 15;

    setEnergy((prevEnergy) => Math.max(0, prevEnergy - energyCost));
    setFun((prevFun) => Math.min(100, prevFun + funGain));
    setMessage(`You ${activities[index]}. You spent ${energyCost} energy and gained ${funGain} fun!`);

    if (fun + funGain >= 100) {
      setGameOver(true);
      setMessage("Congratulations! You've had the perfect summer day!");
    } else if (energy - energyCost <= 0) {
      setGameOver(true);
      setMessage("You're too tired to continue. Time for a good night's sleep!");
    }
  };

  const handleCustomization = (type, value) => {
    switch (type) {
      case "skinTone":
        setSkinTone(value);
        break;
      case "hairColor":
        setHairColor(value);
        break;
      case "clothesColor":
        setClothesColor(value);
        break;
      default:
        break;
    }
  };

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial, sans-serif" }}>
      <h1>☀️ Summer Day Adventure 🏖️</h1>
      <Avatar energy={energy} fun={fun} />

      <p>
        Energy: {energy} | Fun: {fun}
      </p>
      <p>{message}</p>
      <div>
        {activities.map((activity, index) => (
          <button
            key={index}
            onClick={() => handleActivity(index)}
            disabled={gameOver}
            style={{
              margin: "5px",
              padding: "10px",
              fontSize: "16px",
              backgroundColor: gameOver ? "#ccc" : "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: gameOver ? "not-allowed" : "pointer",
            }}
          >
            {activity.charAt(0).toUpperCase() + activity.slice(1)}
          </button>
        ))}
      </div>
      <CustomAvatar skinTone={skinTone} hairColor={hairColor} clothesColor={clothesColor} tanLevel={tanLevel} expression={expression} />
      <div>
        <hr></hr>
        <h4> Customize Avatar</h4>
        <label>
          Skin Tone:
          <input type="color" value={skinTone} onChange={(e) => handleCustomization("skinTone", e.target.value)} />
        </label>
        <label>
          Hair Color:
          <input type="color" value={hairColor} onChange={(e) => handleCustomization("hairColor", e.target.value)} />
        </label>
        <label>
          Clothes Color:
          <input type="color" value={clothesColor} onChange={(e) => handleCustomization("clothesColor", e.target.value)} />
        </label>
      </div>
    </div>
  );
}

export default SummerDayAdventure;
