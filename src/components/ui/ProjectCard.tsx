import React from 'react';
import { Project } from '../../types';
import { Card } from './Card';
import { Icon } from './Icon';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project } : ProjectCardProps) => {
  return (
    <Card className="flex flex-col animate-slide-in p-0 overflow-hidden">
      <div className="relative overflow-hidden group">
        <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-cyber-primary/30 transition-opacity duration-500 group-hover:opacity-0"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-cyber-surface to-transparent"></div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-cyber-text-primary mb-2">{project.title}</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs font-mono bg-cyber-primary/20 text-cyber-primary px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
        <p className="text-cyber-text-secondary flex-grow mb-6">{project.description}</p>
        <div className="mt-auto flex items-center space-x-4">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-cyber-accent hover:underline flex items-center gap-2">
              Live Demo
            </a>
          )}
          {typeof project.repoUrl === 'string' && project.repoUrl.trim() !== '' && (
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository" className="text-cyber-text-secondary hover:text-cyber-primary transition-colors duration-300">
              <Icon name="github" className="h-6 w-6" />
            </a>
          )}
        </div>
      </div>
    </Card>
  );
};