
import Image from 'next/legacy/image'
import Link from 'next/link'

export default function Home() {
  return (
    
   <div className='container'>

<div className="card"><Link href={""} target='_blank'>
<div className="image_container">
  <Image src="https://static01.nyt.com/images/2023/09/21/multimedia/21murdoch-notebook-01-hfqk/21murdoch-notebook-01-hfqk-threeByTwoSmallAt2X.jpg" alt="a Image" layout='fill'/>
</div>
<div className="article">

  <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, voluptatum.</h1>
</div></Link>
</div>




   </div>
  )
}
