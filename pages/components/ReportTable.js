import React ,{useState ,useEffect} from "react";

function ReportTable(props) {
    const [totals, settotals] = useState([48,42,30,24,42,24,36,42,42,48,36,42,24,36,516])

    useEffect(() => {
        if (props.data.length >1){
            let oldTotals= totals.map((element, idx) => {
                return  element=element+props.data[0].hourly_sales[idx]
              });
              settotals(oldTotals)
        }
    
    }, [props.data])
    return (<>
    {props.data.length >0? (
     
        <div className="content-center">
         <table  className="m-auto border border-collapse	bg-cyan-500 rounded-lg ">
            <thead>
                    <tr className="rounded-lg">
                        
                        <th className="rounded-lg pr-3">Location</th>
                        {props.hours.map((ele, idx) => {
                            return <th className=" content-center  pr-3	" key={idx}>{ele+" "}</th>;
                        })}
                            
                    </tr>

            </thead>
            <tbody>
   
            {props.data.map((stand , index) => {
              return <tr className={`banner ${index %2==0 ? "bg-cyan-400" : "bg-cyan-300"}`} key={index}>
                    <td className=" border border-black" >{stand.location}</td>
                    {stand.hourly_sales.map((ele,idx)=>{
                        return <td key={idx} className="border border-black content-center">{ele}</td>
                    }
) }
              </tr>;
            })}
            </tbody>
            <tfoot>
            <tr className="font-bold">
          <td className="border border-black" >Totals</td>
          {totals.map((ele ,index) =>{
              return (<td className="border border-black" key={index}>{ele}</td>)
          })}
          </tr>
            </tfoot>
        </table> 
        
        </div>
      ) : (
            <h1 className="content-center"> no cookies stands</h1>
      )}
    </>
  )
}

export default ReportTable