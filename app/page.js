

import Image from 'next/legacy/image'
import Link from 'next/link'

export default async function Home() {
  

const res=await fetch(`https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${process.env.NEXT_PUBLIC_Api_KEY}`);
const data=await res.json();

  return (
    
   <div className='container'>


{(data!=undefined)&& data.results.map((value,index)=>{

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
