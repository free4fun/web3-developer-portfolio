import React from 'react';
import { Project } from '../../types';
import { Card } from './Card';
import { Icon } from './Icon';
interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project } : ProjectCardProps) => {
  return (
    <Card className="flex flex-col animate-slide-in p-0 overflow-hidden group">
      <div className="relative overflow-hidden">
        <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-l sm:text-4xl font-bold text-lg font-title tracking-widest text-cyber-primary mb-2">{project.title}</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs font-txt tracking-widest bg-cyber-primary/20 text-cyber-primary px-2 py-1 rounded">{tag}</span>
          ))}
        </div>
        <p className="flex-grow mb-6 text-lg font-txt tracking-widest text-white">{project.description}</p>
        <div className="mt-auto flex items-center space-x-4">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-lg font-txt tracking-widest text-cyber-secondary animate-text-glow-secondary flex items-center gap-2 hover:text-cyber-primary hover:animate-text-glow-primary">Live Demo</a>
          )}
          {!project.liveUrl && <span className="text-cyber-primary text-lg font-txt tracking-widest">Coming Soon</span>}
          {typeof project.repoUrl === 'string' && project.repoUrl.trim() !== '' && (
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository" className="text-xl text-cyber-primary">
              <Icon name="github" className="h-8 w-8 hover:text-cyber-secondary transition-colors duration-500" />
            </a>
          )}
        </div>
      </div>
    </Card>
  );
};