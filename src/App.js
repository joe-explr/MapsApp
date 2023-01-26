import "./styles.css";
function Prime(num) {
  if (num === 1) {
    return false;
  }
  let n = Math.floor(Math.sqrt(num));
  for (let i = 2; i <= n; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
function numType(num) {
  let x =
    num % 2 === 0 && num !== 2 ? "#21be73" : Prime(num) ? "#fe5e53" : "#fddb3a";
  return x;
}
const Grid = () => {
  const range = Array.from(new Array(32), (x, i) => i);

  const Grd = range.map((val) => {
    let style = {
      backgroundColor: numType(val)
    };
    return (
      <div style={style}>
        <h1>{val}</h1>
      </div>
    );
  });
  return Grd;
};
export default function App() {
  return (
    <div className="App">
      <h1>Simple Array Maps App</h1>
      <h2>Number Generator</h2>
      <div className="grid-container">
        <Grid />
      </div>
    </div>
  );
}
