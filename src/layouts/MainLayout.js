import React from "react"
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
const MainLayout =(props)=>(
    <div>
        <Header/>
        <div className="container pt-4">
            <div className="row justify-content-md-center">
                <div className={props.column}>
                {props.children}
                </div>
            </div>
           
        </div>
        <Footer/>
    </div>
)
export default MainLayout