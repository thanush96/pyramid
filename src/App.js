import React from "react";

export default function App() {
  const pyramid = () => {
    let n = 5;
    let rows = [];
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n - i; j++) {
        rows.push(<>&nbsp; &nbsp; &nbsp;</>); // three space
      }
      for (let k = 0; k < 2 * i - 1; k++) {
        rows.push(<>😍</>);
      }
      rows.push(<tr></tr>);
    }
    return rows;
  };

  return (
    <article>
      <table>{pyramid()}</table>
    </article>
  );
}
