import './App.css';
// import { useRef } from 'react';
import { useState } from 'react';
function App() {
  const[emp1, setEmp1] = useState(0);
  const[emp2, setEmp2] = useState(0);
  const[emp3, setEmp3] = useState(0);
  const rate = 500;
  return (
    <div className="App">
      <h1>Owner Name</h1>
      <table >
        <thead>
          <tr>
            <th>Date</th>
            <th>Emp1</th>
            <th>Emp2</th>
            <th>Emp3</th>
          </tr>
        </thead>
        <tbody>
        {Count().map(cnt=>{
          return(
            <tr key={cnt}>
              <td>{cnt}</td>

              <td className='amt_att'><input type="checkbox" onChange={(e)=>{
                if(e.target.checked){
                  setEmp1(emp1+1);
                  e.target.disabled= true;
                }
              }} />
              <input type="text" onChange={(e)=>{
                e.target.disabled= true;
              }} />
              </td>
              
              <td className='amt_att'><input type="checkbox" onChange={(e)=>{
                if(e.target.checked){
                  setEmp2(emp2+1);
                  e.target.disabled= true;
                }
              }} />
              <input type="text" onChange={(e)=>{
                e.target.disabled= true;
              }} />
              </td>
              
              <td className='amt_att'><input type="checkbox" onChange={(e)=>{
                if(e.target.checked){
                  setEmp3(emp3+1);
                  e.target.disabled= true;
                }
              }} />
              <input type="text" onChange={(e)=>{
                e.target.disabled= true;
              }} />
              </td>
            </tr>)
        })}
        </tbody>

        <tfoot>
          <tr>
            <td>T Present</td>
            <td><input type="text" disabled value={emp1}/></td>
            <td><input type="text" disabled value={emp2}/></td>
            <td><input type="text" disabled value={emp3}/></td>
          </tr>
          <tr>
            <td>Amount</td>
            <td><input type="text" disabled value={rate*emp1}/></td>
            <td><input type="text" disabled value={rate*emp3}/></td>
            <td><input type="text" disabled value={rate*emp1}/></td>
          </tr>
          <tr>
            <td>MoneyTaken</td>
            <td><input type="text" disabled/></td>
            <td><input type="text" disabled/></td>
            <td><input type="text" disabled/></td>
          </tr>
          <tr>
            <td>RemMoney</td>
            <td><input type="text" disabled/></td>
            <td><input type="text" disabled/></td>
            <td><input type="text" disabled/></td>
          </tr>
        </tfoot>
        

      </table>





      {/* <div className='table'>
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
          <div className='amt'>Amount</div>
          <div className='moneyTaken'>Money Taken</div>
          <div className='RemAmt'>Remaining Amount</div>
        </div>
        <EmployeeDetail name="Emp1"/>
        <EmployeeDetail name="Emp2"/>
        <EmployeeDetail name="Emp3"/>
      </div> */}
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

// function EmployeeDetail(props){

//   return(
//   <div className='empDetail'>
//     <div className='name'>
//       {props.name}
//     </div>
//     {/* <Box/> */}
//     {Count().map(e=> <Box e={e}/>)}
//     <input type="text" style={{width:"15px", height:"15px"}}/>
//     <input type="text" style={{width:"15px", height:"15px"}}/>
//     <input type="text" style={{width:"15px", height:"15px"}}/>
//     <input type="text" style={{width:"15px", height:"15px"}}/>
//   </div>)
// }

// function Box(props){
//   const amt = useRef();

//   let color = "red"
//   if(props.e%2===0){
//     color = "blue"
//   }
//   return (<div style={{backgroundColor:color}}>
//     <input type="checkbox" className='box' onMouseOver={function(e){
//         amt.current.style.display = "inline";
//         console.log(e.target)
//       }}/>
//     <input type="text" ref={amt} style={{display:"none"}} className='box-text'/>
//   </div>)
// }



export default App;
