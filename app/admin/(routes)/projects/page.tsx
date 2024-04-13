import { format } from "date-fns";
import React from 'react'

import prismadb from '@/lib/prismadb'

import { ProjectClient } from "./components/client";

export type ProjectCardData = {
  id: string;
  projectName: string;
  technologies: string;
  // technologies: Array<string>;
  aboutProject: string;
  liveDemoLink: string  | null;
  githubLink: string;
  updatedAt: string;
  createdAt: string;
}

const ProjectsPage = async () => {
  const projects = await prismadb.project.findMany({
    include:{
      images:true
    }
  })

  const formattedProject: ProjectCardData[] = projects.map((item) => ({
    id: item.id,
    projectName: item.projectName,
    technologies: item.technologies,
    aboutProject: item.aboutProject,
    liveDemoLink: item.liveDemoLink,
    githubLink: item.githubLink,
    image: item.images[0],
    updatedAt: format(item.updatedAt, 'MMMM do, yyyy'),
    createdAt: format(item.createdAt, 'MMMM do, yyyy'),
  }))

  return (
    <>
      <div className="flex-col">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <ProjectClient data={formattedProject} />
        </div>
      </div>
    </>
  )
}

export default ProjectsPage
