import Projectcard from '../components/Projectcard'
import Projectsdata from '../components/Projectsdata'

function Work() {

  // To map incoming projects cards
  const projectElements = Projectsdata.map(project => {
  return <Projectcard 
  key={project.id} 
  project={project}
  />
})


  return (
    <div className="px-20 pt-10">
        <h2>Recent work</h2>
        <div className="flex flex-nowrap overflow-x-auto py-10 cursor-grab">
            {projectElements}
        </div>
    </div>
  )
}

export default Work
