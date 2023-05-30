import React from 'react'
import {FaTwitterSquare,FaFacebookSquare,FaInstagramSquare,FaGithubSquare} from "react-icons/fa"
function Socials(){
    return(
        <div className='socials'>
            <FaTwitterSquare className='icons'/>
            <FaFacebookSquare className='icons'/>
            <FaInstagramSquare className='icons'/>
            <FaGithubSquare className='icons'/>
        </div>
    );
}

export default Socials