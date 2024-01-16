import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    const [data,setData]=useState([])

    useEffect(()=>{
        async function mainData (){
            let projectInfo = await axios.get("http://localhost:1337/api/portfolios?populate=*")
            setData(projectInfo.data.data);
            // console.log(projectInfo.data.data);
        }
        mainData()
    },[])

  return (
    <>
        {data.map((item)=>(
            <div>
                <h1>{item.attributes.title}</h1>
                {item.attributes.images.data.map((imgItem)=><div>
                    <Link to={`/post/${item.id}`}>
                        <img src={`http://localhost:1337${imgItem.attributes.url}`} alt="img" />
                    </Link>
                </div>)}
                {item.attributes.description.map((itm)=><div>
                    {itm.children.map((txt)=><p>{txt.text}</p>)}
                </div>)}
            </div>
        ))}
    </>
  )
}

export default Home