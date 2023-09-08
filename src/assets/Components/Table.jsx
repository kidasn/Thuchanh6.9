import React from 'react'
    
export default function Table({doList}) {
    console.log(doList);
  return (
    <div>
        <table className="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Content</th>
      </tr>
  </thead>
  <tbody>
    {
        doList.map((item,index)=>{
        return(
            <tr key={Date.now()*Math.random()}>
                <td>{index+1}</td>
                <td>{item}</td>

            </tr>
        )
        })
    }
  </tbody>
</table>

    </div>
  )
}
