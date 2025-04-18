import { useParams } from "react-router-dom";
import projectData from "../../data/projectData.js";
import Nav from "../../components/Navbar.jsx";
import SingleProjectLayout from "../../layouts/SingleProjectLayout";

export default function SingleProjectPage() {
  const { id } = useParams();
  const project = projectData.find((p) => p.id === id);

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <>
      <Nav />
      <SingleProjectLayout
        title={project.title}
        description={project.description}
        role={project.role}
        mainImg={project.mainImg}
        features={project.features}
        challenges={project.challenges}
      />
    </>
  );
}
