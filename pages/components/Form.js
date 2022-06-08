import React ,{useState} from 'react'
function Form() {
const [storedValues, setStored] = useState('')

const TableHandler = (e)=> {
   e.preventDefault();
   let values= {
   location: e.target.Loc.value,
   Minimum_Customers_per_Hour: e.target.MinCustomer.value,
   Maximum_Customers_per_Hour: e.target.MaxCustomer.value,
   Avg_Cookies_per_Sale: e.target.average.value,
 }
 setStored(values) 
}
  return (
<div>

   
    <div className="flex h-90 w-4/5  p-2 mx-auto bg-cyan-200">
    <form onSubmit={TableHandler}>
    <h3 className="text-4xl text-black pl-200 text-left md:text-center" >Cookie Stand Admin</h3>
        <label className="content-center mx-7">Location</label>
        <input name= "Loc" type="text" id="name" />
        <br></br>
        <br></br>
        <br></br>
        <div className="flex gap-3 place-items-center ">
            <div className='bg-cyan-200 rounded-lg'>
                <label >Minimum Customers per Hour:{" "}</label>
                <input name = "MaxCustomer"type="number" id="email" className="w-4/5 m-2 " />
            </div>
            <div className='bg-cyan-200 rounded-lg'>
                <label >Minimum Customers per Hour</label>
                <input name= "MinCustomer"type="number" id="telnum" className="w-4/5 m-2 " />
            </div>
            <div className='bg-cyan-200 rounded-lg'>
                <label >Avg Cookies per Sale</label>
                <input name = "average"type="number" id="rollno"className="w-4/5 m-2 " />
            </div>
            <button className="w-1/5 p-4 bg-cyan-600 rounded-lg" type='submit'  > Create</button>
        </div>
    </form>
    </div>
    <section className="text-left md:text-center">
      <p className='m-5 text-gray-600'>Report Table coming soon ......</p>
       <p className="text-left md:text-center">{JSON.stringify(storedValues)}</p>
       </section>
       
</div>

  )
}

export default Form

   /* <form>
        <input name ="location" type={"text"} />
        <tbody>
            <tr>
                <th>Minimum Customers per Hour</th>
                <th>Minimum Customers per Hour</th>
                <th>Avg Cookies per Sale</th>
            </tr>
            <tr>
                <td>
                    <input Name= "one" type ={"text"}/>
                </td>
                <td>
                    <input Name= "two" type ={"text"}/>
                </td>
                <td>
                    <input Name= "Three" type ={"text"}/>
                </td>
            </tr>

        </tbody> */
    
        /* <ul className="list-outside hover:list-inside">
            <li className= "list-item">Minimum Customers per Hour</li>
            <li>Minimum Customers per Hour</li>
            <li>Avg Cookies per Sale</li>

        </ul>
       */
        /* <button className="px-4 py-2 bg-gray-400 text-gray-50">Create</button> */