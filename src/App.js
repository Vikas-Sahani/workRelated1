import './App.css';
import ghanshyamSahani from "./img/GhanshyamSahani.png"
import { useState } from 'react';
function App() {
  const[emp1, setEmp1] = useState(0);
  const[emp2, setEmp2] = useState(0);
  const[emp3, setEmp3] = useState(0);
  const rate = 500;
  const[moneyTakenByEmp1, setMoneyTakenByEmp1] = useState(0);
  const[moneyTakenByEmp2, setMoneyTakenByEmp2] = useState(0);
  const[moneyTakenByEmp3, setMoneyTakenByEmp3] = useState(0);
  
  const[remAmt1, setRemAmt1] = useState(0);
  const[remAmt2, setRemAmt2] = useState(0);
  const[remAmt3, setRemAmt3] = useState(0);
  return (
    <div className="App">
      <div className='owner'>
        <img src={ghanshyamSahani} alt='ownerImg'/>
      </div>
      <h2>Total Attendance</h2>
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

              <td className='amt_att'>
                <input type="checkbox" onChange={(e)=>{
                  if(e.target.checked){
                    setEmp1(emp1+1);
                    e.target.disabled= true;
                    e.target.nextSibling.disabled=true;
                    setRemAmt1(moneyTakenByEmp1+remAmt1)
                    setMoneyTakenByEmp1(0);
                  }
                }} />
                <input type="text" onChange={(e)=>{
                  if(isNaN(e.target.value)){
                    alert("Please Enter a Number")
                    e.target.value="";
                  } else{
                    setMoneyTakenByEmp1(Number(e.target.value));
                  }
                }}/>
              </td>

              <td className='amt_att'>
                <input type="checkbox" onChange={(e)=>{
                  if(e.target.checked){
                    setEmp2(emp2+1);
                    e.target.disabled= true;
                    e.target.nextSibling.disabled=true;
                    setRemAmt2(moneyTakenByEmp2+remAmt2)
                    setMoneyTakenByEmp2(0);
                  }
                }} />
              <input type="text" onChange={(e)=>{
                  if(isNaN(e.target.value)){
                    alert("Please Enter a Number")
                    e.target.value="";
                  }else{
                    setMoneyTakenByEmp2(Number(e.target.value));
                  } 
                }}/>
              </td>
              
              <td className='amt_att'>
                <input type="checkbox" onChange={(e)=>{
                  if(e.target.checked){
                    setEmp3(emp3+1);
                    e.target.disabled= true;
                    e.target.nextSibling.disabled=true;
                    setRemAmt3(moneyTakenByEmp3+remAmt3)
                    setMoneyTakenByEmp3(0);
                  }
                }} />
                <input type="text" onChange={(e)=>{
                  if(isNaN(e.target.value)){
                    alert("Please Enter a Number")
                    e.target.value="";
                  } else{
                    setMoneyTakenByEmp3(Number(e.target.value));
                  }
                }}/>
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
            <td><input type="text" disabled value={rate*emp2}/></td>
            <td><input type="text" disabled value={rate*emp3}/></td>
          </tr>
          <tr>
            <td>MoneyTaken</td>
            <td>
              <input type="text" disabled value={remAmt1} />
            </td>
            <td>
              <input type="text" disabled value={remAmt2} />
            </td>
            <td>
              <input type="text" disabled value={remAmt3} />
            </td>
          </tr>
          <tr>
            <td>RemMoney</td>
            <td><input type="text" disabled value={(emp1*rate)-remAmt1}/></td>
            <td><input type="text" disabled value={(emp2*rate)-remAmt2}/></td>
            <td><input type="text" disabled value={(emp3*rate)-remAmt3}/></td>
          </tr>
        </tfoot>
      </table>
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
export default App;
