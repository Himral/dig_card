import React from 'react'
import { FaLinkedin,FaEnvelope } from "react-icons/fa";
export default function Buttons(){
    let linkedinHandle = "https://www.linkedin.com/in/himral-garg-a2b30621a/";
    let email = "himralgarg@google.com";
    return(
        <div className = 'buttonClass'>
                    <button className='btn'>
                    <FaEnvelope/>
                    <a href = "mailto:himralgarg@gmail.com">
                    Email
                    </a>
                    </button>

                    <button className='btn'>
                    <FaLinkedin/>
                    <a href="https://www.linkedin.com/in/himral-garg-a2b30621a/"         
                     target="_blank" rel="noopener noreferrer">
                    LinkedIn
                    </a>
                    </button>
                    
                        
                    
            
        </div>
    );
}