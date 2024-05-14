// components/projects/project-list.tsx
import React from 'react';
import ProjectGrid from './project-grid';
import { Project } from '@prisma/client';

interface ProjectListProps {
  projects: Project[];
}

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  if (!projects.length) {
    return <div>No projects available</div>;
  }

  const featured = ["gallery", "dub", "ui"];
  const featuredProjects = featured.map((slug) =>
    projects.find((project) => project.slug === slug)
  ).filter((project): project is Project => project !== undefined);

  return (
    <div className="mx-5 md:mx-0">
      <div className="grid gap-4">
        <h2 className="font-display text-2xl font-semibold">Featured</h2>
        <ProjectGrid projects={featuredProjects} />
      </div>

      <div className="mb-8 mt-12 border-t border-gray-200" />

      <div className="grid gap-4">
        <h2 className="font-display text-2xl">All Projects</h2>
        <ProjectGrid projects={projects} />
      </div>
    </div>
  );
};

export default ProjectList;
