import Image from 'next/image'

function Projectcard(props) {
  return (
    <div className="w-[443px] border-2 border-black flex-none relative">
    <Image src={props.project.image} alt={props.project.title} width="100" height="100" objectFit='cover'  />
    <p className="">{props.project.title}</p>
    <p className="">{props.project.description}</p>
    <p className="">{props.project.tech}</p>
    <div className="cursor-pointer border-2 border-black rounded-2xl m-10">
        <a href={props.project.link} target="_blank" rel="noopener noreferrer"><p className="text-center p-2">See project</p></a> 
    </div>
</div>
  )
}

export default Projectcard

// export default function Projectcard(props) {
//     return (
//         <div className="project">
//             <img className="project-image" src={props.project.image} alt={props.project.title} />
//             <p className="project-title">{props.project.title}</p>
//             <p className="project-description">{props.project.description}</p>
//             <p className="project-tech">{props.project.tech}</p>
//             <div className="project-btn">
//                 <a href={props.project.link} target="_blank" rel="noopener noreferrer"><p>See project</p></a> 
//             </div>
//     </div>
//     )
// }