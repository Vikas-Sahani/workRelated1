import './App.css';
import { useRef } from 'react';
function App() {
  return (
    <div className="App">
      <h1>Owner Name</h1>
      <div className='table'>
        <div className='tr'>
          <div className='name'>
            Name
          </div>
          {Count().map((e=>{
            let color = "red";
            if(e%2===0){
              color = "blue"
            }
            return <div className='td' style={{backgroundColor:color}}>{e}</div>
          })
          )}
          <div className='totalAttendance'>Total Attendance</div>
          <div className='totalAttendance'>Amount</div>
          <div className='totalAttendance'>Money Taken</div>
          <div className='totalAttendance'>Remaining Amount</div>
        </div>
        <EmployeeDetail name="Emp1"/>
        <EmployeeDetail name="Emp2"/>
        <EmployeeDetail name="Emp3"/>
      </div>
    </div>
  );
}

function Count(){
  let arr = []
  for(let i=1; i<=31; i++){
    arr.push(i)
  }
  return arr;
}

function EmployeeDetail(props){

  return(
  <div className='empDetail'>
    <div className='name'>
      {props.name}
    </div>
    {/* <Box/> */}
    {Count().map(e=> <Box e={e}/>)}
    <input type="text" style={{width:"15px"}}/>
    <input type="text" style={{width:"15px"}}/>
    <input type="text" style={{width:"15px"}}/>
    <input type="text" style={{width:"15px"}}/>
  </div>)
}

function Box(props){
  const amt = useRef();

  let color = "red"
  if(props.e%2===0){
    color = "blue"
  }
  return (<div style={{backgroundColor:color}}>
    <input type="checkbox" className='box' onMouseOver={function(e){
        amt.current.style.display = "inline";
        console.log(e.target)
      }}/>
    <input type="text" ref={amt} style={{display:"none"}} className='box-text'/>
  </div>)
}



export default App;
