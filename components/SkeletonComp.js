import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton from 'react-loading-skeleton'
export default function SkeletonComp({number}) {
 
  return (
    Array(number).fill(0).map((_,index)=>{
return    <div className="card1" key={index}>
<div className="image_container1"  style={{marginTop:"1px",paddingBottom:"5px"}}>
<Skeleton count={1} height={190} />
</div>
<div className="article1" style={{marginTop:"1px"}} >
<Skeleton count={3} height={20}/>
</div>
</div>
    })
 
  )
}
