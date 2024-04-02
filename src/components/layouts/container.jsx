import React  from "react"
import { NavLink } from "react-router-dom"
import { Route, Routes } from "react-router-dom";
import { PageOne } from "../pageone"
import { PageTwo } from "../pagetwo"



export default function Container() {

    return(
        <div> 
            <NavLink className="nav-link" to="/pageOne">show page one</NavLink>
            <hr />
            <NavLink className="nav-link" to="/pageTwo">show page two</NavLink>
                    
                <main>
                    <Routes>
                        <Route path="/pageOne" element={ <PageOne /> } />
                        <Route path="/pageTwo" element={ <PageTwo /> } />
                    </Routes>
                </main>
        </div>
    )
}