function App() {
  const personalinfo = {
    uN: "username123",
    mobile: 9361468714,
    gender: "male",
    dob: "03/12/2002",
    address: ["chennai", "TN", "india"],
  };

  const edu = [
    { degree: "BE", instit: "BIT", field: "ECE", start: "2020", end: "2024" },
    {
      degree: "BSc",
      instit: "jamal mohammed",
      field: "History",
      start: "2021",
      end: "2024",
    },
    {
      degree: "BCom",
      instit: "SRM",
      field: "commerce",
      start: "2018",
      end: "2020",
    },
  ];

  function totYears(start, end) {
    return Number(end) - Number(start);
  }

  const resume = {
    name: "anon",
    company: "TCS",
    totEx: 5,
    industry: "dev",
    prev: [
      { company: "CTS", role: "jun-dev", years: 2 },
      { company: "Zoho", role: "sen-dev", years: 1 },
    ],
  };

  return (
    <>
      <div>
        <h1>task{personalinfo.uN}</h1>
      </div>
      <div>
        {edu.map((item, index) => (
          <div key={index}>
            <h3>{item.degree}</h3>
            <p>institute: {item.instit}</p>
            <p>filed: {item.field}</p>
            <p>
              duration: {item.start} - {item.end} (
              {totYears(item.start, item.end)} years)
            </p>
          </div>
        ))}
      </div>
      <div>

      </div>
      <div>
      <h1>Resume of {resume.name}</h1>
      <p>Current Company: {resume.company}</p>
      <p>Total Experience: {resume.totEx} years</p>
      <p>Industry: {resume.industry}</p>

      <h2>Previous Experience:</h2>

      {resume.prev.map((job, index) => (
        <div key={index}>
          <h3>{job.company}</h3>
          <p>Role: {job.role}</p>
          <p>Years: {job.years}</p>
        </div>
      ))}
    </div>
    </>
  );
}

export default App;
