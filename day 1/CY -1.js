import React from 'react';
function comp()
{
 const name1=("Kabil");
 const name2=("Kabil");
 console.log(name1 === name2);
 const o1={name:"Kabil"};
 const o2={name:"Kabil"};
 console.log(o1 === o2);
}
const Akash=()=>{
  return(
    <div>

     <button onClick={comp}>Click</button>
    </div>
  )
}
export default Akash;