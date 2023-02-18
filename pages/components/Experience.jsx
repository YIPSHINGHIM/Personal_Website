function Experience({ Title, Company, Date, details = [] }) {
  // console.log(details[0]);

  const listItems = details.map((item) => (
    <li key={item.toString()}>{item}</li>
  ));

  return (
    <div className="Experience">
      <h4 className="text-3xl font-semibold">{Title}</h4>
      <h5 className="text-xl font-semibold">{Company}</h5>
      <h6 className="text-mg font-medium text-cyan-600">{Date}</h6>
      <ul className="list-disc list-inside">{listItems}</ul>

      <br />
    </div>
  );
}

export default Experience;
