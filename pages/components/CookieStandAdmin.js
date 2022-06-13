import React,{useState} from 'react'
import Main from './Main'
import Head from './Head'
import Header from './Header'
import Footer from './Footer'
import CreateForm from './CreateForm'


function CookieStandAdmin() {
    const [rows, setrows] = useState([])
    let updaterow=(data)=>{
         
      setrows([...rows,data])
    }
  return (
    <div>
        <Head/>
        <Header/>
        <Main data ={rows} updaterow={updaterow}/>
        <br></br>
        <br></br>
        <Footer/>
    </div>
  )
}

export default CookieStandAdmin