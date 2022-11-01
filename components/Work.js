import Projectcard from '../components/Projectcard'
import Projectsdata from '../components/Projectsdata'

function Work() {

  // To map projects cards
  const projectElements = Projectsdata.map(project => {
  return <Projectcard 
  key={project.id} 
  project={project}
  />
})

  return (
    <div id="work" className="pt-10">
        <h2 className="sm:px-20 px-10">Recent work</h2>
        <div className="scrollbar-hide flex flex-nowrap overflow-x-auto py-10 cursor-grab overflow-scroll">
            {projectElements}
        </div>
    </div>
  )
}

export default Work
