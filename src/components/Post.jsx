import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Post = () => {
    let parames = useParams()
    const [data,setData]=useState({})
    console.log(data);

    

    useEffect(()=>{
        async function mainData (){
            let projectInfo = await axios.get(`http://localhost:1337/api/portfolios/${parames.id}?populate=*`)
            setData(projectInfo.data.data);
            console.log(projectInfo.data.data);
        }
        mainData()
    },[])

  return (
    <div>
        <h1>{data?.attributes?.title}</h1>
    </div>
  )
}

export default Post