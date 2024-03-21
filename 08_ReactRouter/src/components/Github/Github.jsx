import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData();
    // const [data, setData] = useState([])
    // useEffect( () => {
    //     fetch("https://api.github.com/users/sillydotdev")
    //     .then(response => response.json())
    //     .then(data => {
    //         setData(data)
    //     })
    // }, [])
  return (
    <div className='text-center bg-cyan-500 text-green-950 p-4 text-3xl'>Github: {data.followers}
    <img src={data.avatar_url} alt="Github picture" />
    </div>
  )
}

export default Github
export const githubLoaderInfo = async () => {
    const response = await fetch("https://api.github.com/users/sillydotdev")
    return response.json();
}