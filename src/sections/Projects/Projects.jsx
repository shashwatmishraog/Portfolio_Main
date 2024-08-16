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
        <div className={styles.projectRow}>
          <ProjectCard
            src={viberr}
            link="https://dawnandbreeze.com/"
            h3="Dawn & Breeze"
            p="House of Db MultiCorp Ecommerce store with modern minimal clothing for a unique style."
          />
        </div>
        <div className={styles.projectRow}>
          <ProjectCard
            src={freshBurger}
            link="https://beethel.com/"
            h3="Beethel"
            p="This is a specialized eCommerce suppliment store built for actor Danish Bhat"
          />
        </div>
        <div className={styles.projectRow}>
          <ProjectCard
            src={hipsster}
            link="https://github.com/shashwatmishraog/plant-disease-detection-mini-1/"
            h3="Mini Project"
            p="Plant Disease Detection Application using YOLO V8 and Flask api"
          />
        </div>
        <div className={styles.projectRow}>
          <ProjectCard
            src={fitLift}
            link="https://github.com/SHASHWATMISHRAOG/VPC-TERRAFORM-GITHUB-ACTIONS"
            h3="VPC"
            p="Automate Terraform VPC deployment using GitHub Actions CI/CD pipeline."
          />
        </div>
      </div>
    </section>
  );
}

export default Projects;
