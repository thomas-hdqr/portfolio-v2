import { useRouter } from 'next/router';
import projects from '../../components/Projectsdata';
import ProjectModel from './projectModel';

const ProjectPage = ({ project }) => {
  const router = useRouter();
  
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return <ProjectModel project={project} />;
};

export async function getStaticPaths() {
  const paths = projects.map(project => ({
    params: { slug: project.title.toLowerCase().split(' ').join('-') },  // Use project's title as slug
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const project = projects.find(project => project.title.toLowerCase().split(' ').join('-') === params.slug);

  if (!project) {
    return {
      notFound: true,
    };
  }

  return {
    props: { project },
    revalidate: 1, // In seconds
  };
}

export default ProjectPage;
