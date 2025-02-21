import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Files } from "lucide-react";
import { Project } from "../types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const linkStyles = "inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 transform duration-200 hover:scale-110 dark:hover:text-emerald-400 hover:text-emerald-400 hover:underline";

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-xl"
    >
      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          className="w-full max-h-48 object-cover transition-transform hover:scale-105 duration-300"
        />
      )}
      <div className="p-6">
        <h3 className={`text-xl font-bold mb-2 text-gray-900 dark:text-white ${project.liveLink ? 'cursor-pointer' : ''}`}>
          <a href={project.liveLink} className={project.liveLink ? '' : 'text-gray-900 dark:text-white'}>
            {project.title}
          </a>
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {project.description}
        </p>
        {project.technologies && project.technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech) => (
              <span key={tech} className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300">
                {tech}
              </span>
            ))}
          </div>
        )}
        <div className="flex gap-3 m-3 text-xl md:text-lg">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className={linkStyles}>
              <Github className="w-5 h-5" />
              View on GitHub
            </a>
          )}
          {project.liveLink && (
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className={linkStyles}>
              <ExternalLink className="w-5 h-5" />
              View Live
            </a>
          )}
          {project.resume && (
            <a href={project.resume} target="_blank" className={linkStyles}>
              <Files className="w-5 h-5" />
              Take a look at my resume
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};
