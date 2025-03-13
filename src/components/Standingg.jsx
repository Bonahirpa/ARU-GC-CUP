import React from "react";

function Standingg() {
  return (
    <section id="home">
      <h2>GC Cup Standings</h2>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Dep't</th>
            <th>Won</th>
            <th>=</th>
            <th>Lost</th>
            <th>Pt</th>
          </tr>
        </thead>
        <tbody>
          {[
            { rank: 1, dept: "Economics", won: 2, draw: 1, lost: 0, points: 7 },
            {
              rank: 2,
              dept: "Management",
              won: 2,
              draw: 1,
              lost: 0,
              points: 7,
            },
            { rank: 3, dept: "Gadaa", won: 2, draw: 0, lost: 1, points: 6 },
            { rank: 4, dept: "CS", won: 2, draw: 0, lost: 1, points: 6 },
            { rank: 5, dept: "Medicine", won: 2, draw: 0, lost: 1, points: 6 },
            {
              rank: 6,
              dept: "Accounting",
              won: 1,
              draw: 2,
              lost: 0,
              points: 5,
            },
            { rank: 7, dept: "IITM", won: 1, draw: 1, lost: 1, points: 4 },
            { rank: 8, dept: "Law", won: 1, draw: 1, lost: 1, points: 4 },
            { rank: 9, dept: "Marketing", won: 1, draw: 0, lost: 2, points: 3 },
            { rank: 10, dept: "IS", won: 1, draw: 0, lost: 2, points: 3 },
            {
              rank: 11,
              dept: "Sociology",
              won: "-",
              draw: "-",
              lost: "-",
              points: "-",
            },
            {
              rank: 12,
              dept: "Logistics",
              won: "-",
              draw: "-",
              lost: "-",
              points: "-",
            },
          ].map(({ rank, dept, won, draw, lost, points }) => (
            <tr key={rank}>
              <td>{rank}</td>
              <td>{dept}</td>
              <td>{won}</td>
              <td>{draw}</td>
              <td>{lost}</td>
              <td>{points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Standingg;
