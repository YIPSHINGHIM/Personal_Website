function School({ Uni, Title, Date, Result }) {
  return (
    <div className="School">
      <h3 className="text-3xl font-semibold">{Title}</h3>
      <h4 className="text-xl font-semibold">{Uni}</h4>
      <h5 className="text-mg font-medium text-cyan-600">{Date}</h5>

      <p className="text-md">{Result}</p>
      <br />
    </div>
  );
}

export default School;
