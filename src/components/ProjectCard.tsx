import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Maximize2 } from "lucide-react";
import { Project } from "../types";
import { ImageModal } from "./ImageModal";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const linkStyles =
  "inline-flex items-center gap-1 pt-3 text-blue-600 dark:text-blue-400 transform duration-200 hover:scale-110 dark:hover:text-emerald-400 hover:text-emerald-400 hover:underline";

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  // Memoize technologies for better performance
  const technologyList = useMemo(() => {
    return project.technologies?.map((tech) => (
      <span
        key={tech}
        className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300"
      >
        {tech}
      </span>
    ));
  }, [project.technologies]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-xl"
    >
      {project.image && (
        <div className="relative group md:group-hover:cursor-zoom-in">
          <button
            onClick={() => setIsImageModalOpen(true)}
            className="relative group w-full max-h-48"
            aria-label={`View ${project.title} image in full screen`}
          >
            <img
              src={project.image}
              alt={`${project.title} - Project Image`} // Enhanced alt text for SEO
              className="w-full max-h-48 object-cover transition-transform group-hover:scale-105 duration-300 md:cursor-pointer"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/40 transition-colors md:opacity-100 opacity-0">
              <Maximize2 className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity transform scale-75 group-hover:scale-100" />
            </div>
          </button>
        </div>
      )}
      <div className="p-6">
        <h3
          className={`text-xl font-bold mb-2 text-gray-900 dark:text-white ${
            project.liveLink ? "cursor-pointer" : ""
          }`}
        >
          {/* Added title attribute for better SEO */}
          <a
            href={project.liveLink}
            className={project.liveLink ? "" : "text-gray-900 dark:text-white"}
            title={`Visit ${project.title} Live Demo`}
          >
            {project.title}
          </a>
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {project.description}
        </p>
        {project.technologies && project.technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">{technologyList}</div>
        )}
        <div className="flex gap-2 m-2 text-lg md:text-lg">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={linkStyles}
              title={`View ${project.title} code on GitHub`}
            >
              <Github className="w-5 h-5" />
              View GitHub Code
            </a>
          )}
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className={linkStyles}
              title={`Visit the live demo of ${project.title}`}
            >
              <ExternalLink className="w-5 h-5" />
              View Live
            </a>
          )}
        </div>
      </div>
      {project.image && (
        <ImageModal
          isOpen={isImageModalOpen}
          onClose={() => setIsImageModalOpen(false)}
          imageUrl={project.image}
          title={project.title}
        />
      )}
    </motion.div>
  );
};
