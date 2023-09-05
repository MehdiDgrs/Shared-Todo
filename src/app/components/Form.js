import Button from "./Button";

export default function Form({
  res,
  loading,
  title,
  clickHandler,
  InputChangeHandler,
}) {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      <form
        onSubmit={(e) => {
          console.log(e);
        }}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <label> Name </label>
        <input
          name="name"
          autoComplete="name"
          onChange={InputChangeHandler}
        ></input>
        <br />
        <label name="mdp"> Password </label>
        <input type="password" name="mdp" onChange={InputChangeHandler}></input>
        <br />
        {!loading ? <Button text="Log" handler={clickHandler} /> : ""}
        {res?.status == "400" && (
          <span style={{ textAlign: "center", color: "red" }}>
            erreur lors de l'inscription
          </span>
        )}
      </form>
    </>
  );
}
