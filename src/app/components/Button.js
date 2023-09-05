export default function Button({ handler, text }) {
  return (
    <button
      style={{
        backgroundColor: "blue",
        border: "none",
        padding: "10px",
        borderRadius: "5px",
        color: "white",
        textAlign: "center",
        justifyContent: "center",
        margin: "auto",
        width: "75%",
      }}
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = "#091366";
        e.target.style.boxShadow = "2px  grey";
        e.target.style.cursor = "pointer";
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = "blue";
      }}
      onClick={handler}
    >
      {text}
    </button>
  );
}
