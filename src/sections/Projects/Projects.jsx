import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://dawnandbreeze.com/"
          h3="Dawn & Breeze"
          p="Ecommerce Cloting Website"
        />
        <ProjectCard
          src={freshBurger}
          link="https://beethel.com/"
          h3="Beethel"
          p="Ecommerce Suppliment website"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/shashwatmishraog/plant-disease-detection-mini-1/"
          h3="Mini Project"
          p="Plant Diesease Detection Application"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/SHASHWATMISHRAOG/VPC-TERRAFORM-GITHUB-ACTIONS"
          h3="VPC"
          p="Terraform Creation"
        />
      </div>
    </section>
  );
}

export default Projects;
