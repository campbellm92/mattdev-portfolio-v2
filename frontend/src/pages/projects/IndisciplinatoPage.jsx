import { useParams } from "react-router-dom";
import projectData from "../../data/projectData.jsx";
import Nav from "../../components/Navbar.jsx";
import SingleProjectLayout from "../../layouts/SingleProjectLayout.jsx";

export default function IndisciplinatoPage() {
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
        descriptionLong={project.descriptionLong}
        badges={project.badges}
        role={project.role}
        mainImg={project.mainImg}
        features={project.features}
      />
    </>
  );
}
