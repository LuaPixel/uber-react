import React from "react";


export default function Header(){
    return (
        <header class="container-fluid d-flex justify-content-center align-items-center h-100 bg-black w-100 maior py-3" >

            

            <div class="bg-warning container d-flex justify-content-center align-items-center h-100 bg-white w-100 menor py-4 justify-content-between">

            <div class="d-flex">
                <img src="/uberlogo.svg" alt="gdfbghb" />
                <div class="text-black">
                <a href="#" class=" text-decoration-none p-3">Company</a>
                <a href="#" class=" text-decoration-none p-2">Safety</a>
                <a href="# " class=" text-decoration-none p-2">Help</a>
                </div>
            </div>


            <div>
            <a href="#" class="Text-decoration-none">Login</a>

            <a href="#" class="Text-decoration-none rounded-5 text-black p-1">Sign up</a>
            </div>
            </div>
            

            
        </header>
    );
}






