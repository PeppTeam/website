import React from "react"

export const Bio = ({ name, role, image }) => (
  <div style={{ textAlign: "center" }}>
    {image && (
      <div
        style={{
          borderRadius: "50%",
          background: `url(https:${image})`,
          paddingTop: "100%",
          position: "relative",
          backgroundSize: "cover",
          marginBottom: "16px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
          }}
        />
      </div>
    )}

    <p
      style={{
        fontFamily: "Catamaran",
        fontWeight: 800,
        margin: 0,
      }}
    >
      {name}
    </p>
    <p
      style={{
        fontFamily: "Catamaran",
        margin: 0,
        fontSize: "0.8em",
      }}
    >
      {role}
    </p>
  </div>
)
