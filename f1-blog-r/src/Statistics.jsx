import "./Statistics.scss";

function Statistics() {
  const drivers = [
    {
      pos: "1",
      name: "Firstname Lastname",
      team: "Enter teamname",
      points: "381",
    },
    {
      pos: "2",
      name: "Firstname Lastname",
      team: "Enter teamname",
      points: "381",
    },
    {
      pos: "3",
      name: "Firstname Lastname",
      team: "Enter teamname",
      points: "381",
    },
    {
      pos: "4",
      name: "Firstname Lastname",
      team: "Enter teamname",
      points: "381",
    },
    {
      pos: "5",
      name: "Firstname Lastname",
      team: "Enter teamname",
      points: "381",
    },
  ];

  return (
    <section className="statistics__container">
      <div className="statistics__container--inner">
        <h2>Driver Standing</h2>
        <div className="statistics__container--inner-content">
          <div className="statistics__container--inner-content-drivers">
            <table>
              <thead>
                <tr>
                  <th>Pos</th>
                  <th>Driver</th>
                  <th>Team</th>
                  <th>Points</th>
                </tr>
              </thead>
              <tbody>
                {drivers.map((driver, index) => (
                  <tr key={index}>
                    <td>{driver.pos}</td>
                    <td>{driver.name}</td>
                    <td>{driver.team}</td>
                    <td>{driver.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="statistics__container--inner-content-teams">
            <table>
              <thead>
                <tr>
                  <th>Pos</th>
                  <th>Team</th>
                  <th>Points</th>
                </tr>
              </thead>
              <tbody>
                {drivers.map((driver, index) => (
                  <tr key={index}>
                    <td>{driver.pos}</td>
                    <td>{driver.team}</td>
                    <td>{driver.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Statistics;
