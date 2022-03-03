import logo from './logo.svg';
import './App.css';

function App() {
  const os = ["Android","Blackberry","iPhone","Windows Phone"];
  const manu = ["Samsung","HTC","Micromax","Apple"];
  return (
    <div className="App">
      <h1 className='os'>React Mobile OS</h1>
      
      <div className='system'>
      <h1>Mobile Operating System</h1>
      {os.map((e)=>(<ul><li>{e}</li></ul>))}</div>
    
      <div className='system'>
      <h1>Mobile Manufacturers</h1>
        {manu.map((e)=>(<ul><li>{e}</li></ul>))}</div>
    </div>
    
  );
}

export default App;

// const data = [

// ]

// data.map((user)=>{
//   return <usercomp name={user.name} age={user.age}/>
// })