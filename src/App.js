import logo from './logo.svg';
import './App.css';

function App() {
  const os = ["Android","Blackberry","iPhone","Windows Phone"];

  return (
   <div>
  <h1>Hello{os[0]}</h1>
   </div>
  );
}
export default App;

// const data = [

// ]

// data.map((user)=>{
//   return <usercomp name={user.name} age={user.age}/>
// })