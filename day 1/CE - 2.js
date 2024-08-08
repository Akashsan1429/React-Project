import React from 'react';
function Msg()
{
  let myobject={name:"Madras"};
  let n =myobject;
  myobject.name="Chennai";
  console.log(myobject);
  let myarray=["a","e","i","o"];
  let v =myarray;
  myarray.push("u");
  console.log(myarray);
  alert("Check the console output!");
}
const Akash=()=>{
  return(
    <div>

     <button onClick={Msg}>Click</button>
    </div>
  )
}
export default Akash;