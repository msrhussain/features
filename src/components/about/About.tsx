import React from "react";
import useSelectedLanguage from "../../hooks/useSelectedLanguage";
import "../../styles/_about.scss";
import { aboutData } from "../../utils";

const About: React.FC = () => {
  const { selectLanguage } = useSelectedLanguage();
  console.log("about", selectLanguage);
  const data = aboutData["en"];

  return (
    <div className="about-page">
      <header className="about-page__header">
        <h1>{data.personalInfo.name}</h1>
        <div className="contact-info">
          <p>
            <strong>Phone:</strong> {data.personalInfo.phone}
          </p>
          <p>
            <strong>Email:</strong> {data.personalInfo.email}
          </p>
          <p>
            <strong>GitHub:</strong>{" "}
            <a href={data.personalInfo.github}>GitHub</a>
          </p>
          <p>
            <strong>Portfolio:</strong>{" "}
            <a href={data.personalInfo.portfolio}>Portfolio</a>
          </p>
          <p>
            <strong>LinkedIn:</strong>{" "}
            <a href={data.personalInfo.linkedin}>LinkedIn</a>
          </p>
        </div>
      </header>

      <section className="about-page__section">
        <h2>Career Summary</h2>
        <p>{data.careerSummary}</p>
      </section>

      <section className="about-page__section">
        <h2>Technical Skills</h2>
        <ul>
          <li>
            <strong>Frontend:</strong> {data.technicalSkills.frontend}
          </li>
          <li>
            <strong>Backend (Basic Knowledge):</strong>{" "}
            {data.technicalSkills.backend}
          </li>
          <li>
            <strong>Tools and Libraries:</strong> {data.technicalSkills.tools}
          </li>
          <li>
            <strong>Concepts:</strong> {data.technicalSkills.concepts}
          </li>
          <li>
            <strong>System Design & Architecture:</strong>{" "}
            {data.technicalSkills.systemDesign}
          </li>
        </ul>
      </section>

      <section className="about-page__section">
        <h2>Experience</h2>
        {data.experience.map((job, index) => (
          <div key={index} className="experience">
            <h3>
              {job.company} - {job.role}
            </h3>
            <p>
              <em>
                {job.period} | {job.location}
              </em>
            </p>
            <ul>
              {job.achievements.map((achievement, i) => (
                <li key={i}>{achievement}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="about-page__section">
        <h2>Projects</h2>
        {data.projects.map((project, index) => (
          <div key={index} className="projects">
            <h3>{project.name}</h3>
            <p>{project.techStack}</p>
            <ul>
              {project.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="about-page__section">
        <h2>Education</h2>
        <p>{data.education.degree}</p>
        <p>
          {data.education.institution} | {data.education.graduation}
        </p>
      </section>
    </div>
  );
};

export default About;
