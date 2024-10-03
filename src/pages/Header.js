import React from "react";


export default function Header(){
    return (
        <header class="container-fluid d-flex justify-content-center align-items-center h-100 bg-black w-100 maior py-3" >

            

            <div class="bg-warning container d-flex justify-content-center align-items-center h-100 bg-black w-100 menor py-4 justify-content-between">

            <div class="d-flex">
                <img src="/uberlogo.svg" alt="Logo Uber" />
                <div class="text-black">
                <a href="#" class=" text-white text-decoration-none p-3">Company</a>
                <a href="#" class=" text-decoration-none p-2 text-white">Safety</a>
                <a href="# " class=" text-decoration-none p-2 text-white">Help</a>
                </div>
            </div>


            <div>
            <a href="#" class="text-decoration-none text-white p-3">Login</a>

            <a href="#" class="text-decoration-none rounded-5 text-black p-1 text-black bg-white">Sign up</a>
            </div>
            </div>
            

            
        </header>
    );
}






