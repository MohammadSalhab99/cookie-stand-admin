import React,{useState} from 'react'

function CreateForm(props) {


    const TableHandler = (e)=> {
       e.preventDefault();
       let values= {
       location: e.target.Loc.value,
       Minimum_Customers_per_Hour: e.target.MinCustomer.value,
       Maximum_Customers_per_Hour: e.target.MaxCustomer.value,
       Avg_Cookies_per_Sale: e.target.average.value,
       hourly_sales:[48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36 ,516]
     }
     props.updaterow(values) 
    }
  return (
 
    <div className = "py-10">
    
       
    <div className="flex h-90 w-4/5  p-2 mx-auto bg-cyan-200 rounded-lg ">
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
                <input name = "MaxCustomer"type="number" className="w-4/5 m-2 " />
            </div>
            <div className='bg-cyan-200 rounded-lg'>
                <label >Maximum Customers per Hour</label>
                <input name= "MinCustomer"type="number"  className="w-4/5 m-2 " />
            </div>
            <div className='bg-cyan-200 rounded-lg'>
                <label >Avg Cookies per Sale</label>
                <input name = "average"type="number" className="w-4/5 m-2 " />
            </div>
            <button className="w-1/5 p-4 bg-cyan-600 rounded-lg" type='submit'  > Create</button>
        </div>
    </form>
    </div>
    {/* <section className="text-left md:text-center">
      <p className='m-5 text-gray-600'>Report Table coming soon ......</p>
       <p className="text-left md:text-center">{JSON.stringify(storedValues)}</p>
       </section>
        */}
</div>
  )}

export default CreateForm