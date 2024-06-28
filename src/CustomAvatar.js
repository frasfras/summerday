import React from "react";

const CustomAvatar = ({ skinTone, hairColor, clothesColor, tanLevel, expression }) => {
  // These could be replaced with actual images or more complex SVGs
  const avatarStyle = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: skinTone,
    border: `5px solid ${clothesColor}`,
    position: "relative",
  };

  const hairStyle = {
    width: "80px",
    height: "40px",
    backgroundColor: hairColor,
    borderTopLeftRadius: "40px",
    borderTopRightRadius: "40px",
    position: "absolute",
    top: "-20px",
  };

  const faceStyle = {
    fontSize: "30px",
  };

  return (
    <div style={avatarStyle}>
      <div style={hairStyle}></div>
      <div style={faceStyle}>{expression}</div>
      {tanLevel > 0 && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(210, 180, 140, 0.3)",
            borderRadius: "50%",
            opacity: tanLevel * 0.2,
          }}
        ></div>
      )}
    </div>
  );
};

export default CustomAvatar;
