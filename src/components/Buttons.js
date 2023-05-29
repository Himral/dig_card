import React from 'react'
export default function Buttons(){
    let linkedinHandle = "https://www.linkedin.com/in/himral-garg-a2b30621a/";
    let email = "himralgarg@google.com";
    return(
        <div className = 'buttonClass'>
                    <button>
                    
                    <a href = "mailto:himralgarg@gmail.com">Email</a>
                    </button>
                    <button>
                   
                    <a href="https://www.linkedin.com/in/himral-garg-a2b30621a/"         
                     target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </button>
                    
                        
                    
            
        </div>
    );
}