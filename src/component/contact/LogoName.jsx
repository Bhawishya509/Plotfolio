import React from 'react'
import "./LogoName.css"

const LogoName = (props) => {
  return (
    <>
    
    <div className='div1'>
    <props.logo className="div1logo" style={{color:"rgb(247, 19, 95)"}}>
    </props.logo>
    <div className="nameclasss">
    <a className='nameclasss2' href={props.link}>{props.names}</a>
    <a className='nameclasss3' href={props.link}>{props.val}</a>
    </div>
    
    </div>
    </>
  )
}

export default LogoName