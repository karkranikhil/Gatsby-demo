import React from 'react'
import {navigate} from 'gatsby'
import Header from '../components/Header/Header'
const Test=()=>(
    <div>
        <Header title="Test page"></Header>
<h1>Test page</h1>
<button onClick={()=>navigate("/")}>Navigate to home</button>
    </div>

    )
export default Test;