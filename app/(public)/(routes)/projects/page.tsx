"use client"

import { useEffect, useState } from 'react';

import { ProjectFormSchema } from '@/schemas';
import axios from 'axios';
import React from 'react'
import toast from 'react-hot-toast';
import { Badge } from '@/components/ui/badge';
const ProjectsPage = () => {

  const [data, error, loading] = UseQuery('/api/projects')

  const tech = data.map((item: any) => item.technologies.split(','))
  console.log(tech);




  return (
    <>
      {tech[0].map((item:any)=>(
        <Badge key={item}>{item}</Badge>
      ))}

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
        console.log(response.data)
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
