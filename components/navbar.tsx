import Link from "next/link"
import React from "react"

function Navbar() {
return(
    <ul className="flex justify-center items-center gap-4" >
   <li><Link href="/" className="bg-blue-400" >
          Home 
          </Link></li>
       
        <li><Link href="/about" className="bg-blue-400" >
          About 
          </Link></li>
        <li>
           <Link href="/contact" className="bg-blue-300" >
           Contact 
          </Link>
        </li>
        <li>
        <Link href="/feedback" className="bg-blue-400" >
           Feedback 
          </Link>
        </li>
         </ul>
)
}


export default Navbar