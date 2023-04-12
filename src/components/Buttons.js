import React from 'react'
export default function Buttons(){
    let linkedinHandle = "https://www.linkedin.com/in/himral-garg-a2b30621a/";
    let email = "himralgarg@google.com";
    return(
        <div className = 'button'>
            <a href ={linkedinHandle}>LinkedIn</a>
            <a href ={email}>Email</a>
        </div>
    );
}