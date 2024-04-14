"use client"

import { useEffect, useState } from 'react';

import { ProjectFormSchema } from '@/schemas';
import axios from 'axios';
import React from 'react'
import toast from 'react-hot-toast';
import { Badge } from '@/components/ui/badge';

import ProjectCard from '@/components/project/project-card';

const ProjectsPage = () => {

  const [data, error, loading] = UseQuery('/api/projects')

  const tech = data.map((item: any) => item.technologies.split(','))
  // console.log('PROJECT-PAGE.TSX::',data);

  return (
    <>
      {/* {tech[0].map((item:any)=>(
        <Badge key={item}>{item}</Badge>
      ))} */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {data.map((item: any) => (
          <ProjectCard key={item.id} item={item} />
        ))}
      </div>
    </>
  )
}

export default ProjectsPage



// Custom method
const UseQuery = (urlPath: any) => {
  const [data, setData] = useState<any>([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    (async () => {
      try {
        setLoading(true)
        setError(false)

        const response = await axios.get(urlPath)
        setData(response.data)

        setLoading(false)
      } catch (error) {
        setError(true)
        setLoading(false)
      }
    })()

  }, [])

  return [data, error, loading]
}
