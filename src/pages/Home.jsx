import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {
    const [data,setData]=useState([])

    useEffect(()=>{
        async function mainData (){
            let projectInfo = await axios.get("http://localhost:1337/api/portfolios?populate=*")
            setData(projectInfo.data.data);
            console.log(projectInfo.data.data);
        }
        mainData()
    },[])

  return (
    <>
        {data.map((item)=>(
            <div>
                <h1>{item.attributes.title}</h1>
                {item.attributes.images.data.map((imgItem)=>(
                    <img src={imgItem[0].attributes.src} alt="img" />
                ))}
            </div>
        ))}
    </>
  )
}

export default Home