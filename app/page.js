'use client'
import SkeletonComp from '@/components/SkeletonComp'
import Image from 'next/legacy/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import 'react-loading-skeleton/dist/skeleton.css'
export default function Home() {
  const[data,setData]=useState([]);
const[loader,setLoader]=useState(true);
  const fetchData=async()=>{
    setLoader(true);
const res=await fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.NEXT_PUBLIC_Api_KEY}`);
const data=await res.json();
setData(data.results);
setLoader(false);

  }
  useEffect(()=>{
fetchData()
  },[])
  return (
    
   <div className='container'>
   {(loader)&&<SkeletonComp number={10}/>}

{(data!=undefined)&& data.map((value,index)=>{

return <div className="card" key={index}><Link href={value.url} target='_blank' >
<div className="image_container">
{value.multimedia!=null&&<Image src={value.multimedia[0].url } alt="a Image" layout='fill' priority/>}

</div>
<div className="article">
<h1>{value.title}</h1>
</div></Link>
</div>
})}





   </div>
  )
}
