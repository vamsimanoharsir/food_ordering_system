import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import fish from './fish.jfif'
import chicken from './chicken.jfif'
import dosa from './dosa.jfif'
import idli from './idli.jfif'
import sambar from './sambar.jfif'
import unavailable from './unavailable.jfif';
import { useNavigate } from 'react-router';
import {Link} from 'react-router-dom'

function HomePage(props) {

    const history=useNavigate()
    const [dish,setDish]=useState('')
    const [count,setCount]=useState(0)

    const n1=dish
    const items=['chicken','sambar','fish','idli','dosa']
    const pics=[chicken,sambar,fish,idli,dosa];

    // const ingredients=(n2)=>{
    //     console.log('n2 is ',n2)
    //     history(`/${n2}`)
    // }

    return (
        <div>
            <h4 className='btn btn-primary'>this is our food ordering system</h4><br/><br/>
            <h5>you are searching for {dish}</h5><br/>
            <input className='btn btn-info' type="text" placeholder='search dish' onChange={(e)=>setDish(e.target.value)}/><br/><br/>
            {items.includes(n1)?'available! order now!':`we dont have that dish`}<br/><br/>
            {/* if dish is available display dish image and its ingredients else display unavailable image */}
            {items.includes(n1)?<div><img src={pics[items.indexOf(n1)]}/><br/><br/></div>:<img src={unavailable}/>}<br/>


            { items.includes(n1) && 
            <Link to={`/${dish}`}>
            {/* link to will work only when type='submit' is present */}
            <button type="submit" className="btn btn-outline-success">click me for ingredients used
            </button>
            </Link>}

        </div>
    );
}

export default HomePage;