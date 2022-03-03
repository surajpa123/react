import logo from './logo.svg';
import './App.css';

function App() {
  const age = 22
  const name = "Suraj"
  const data = ["Google","Facebook","Amazon","HCL"]
  return (
    <div className="App">
      <h1>Hello {name}, Welcome to Masai</h1>
      <div>Your age is - {age > 10 ? "Vaild" : "Invaild"}</div>
      <div>I worked for {data.map((e)=>(<p>{e}</p>))}</div>
    </div>
    
  );
}

export default App;

// const data = [

// ]

// data.map((user)=>{
//   return <usercomp name={user.name} age={user.age}/>
// })