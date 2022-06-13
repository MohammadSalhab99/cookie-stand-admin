import React from 'react'
import CreateForm from './CreateForm'
import ReportTable from './ReportTable';

export const hours = ['6am', '7am', '8am', '9am', '10am', 
'11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm' ,'Totals'];

function Main(props) {
  let updaterows =(data)=>{
    props.updaterow(data)
  }
  return (
    <>
    <CreateForm updaterow= {updaterows} />
    <ReportTable data={props.data} hours={hours} />
    </>
  )
}

export default Main