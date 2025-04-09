function Initial() {
  return (
    <div className="p-10">
      <h1 className="font-bold">Token: </h1>
      <h2>{localStorage.getItem("token")}</h2>
      <br />
      <br />
      <br />
      <h1 className="font-bold">Usuário</h1>
      <h2>{localStorage.getItem("user")}</h2>
    </div>
  );
}

export default Initial;
