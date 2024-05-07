"use client"

import { format } from "date-fns";
import React from 'react'

import prismadb from '@/lib/prismadb'

import { useCertificates } from "@/hooks/get-certificates";
import { CertificateClient } from "./components/client";
import { Certificate } from "@prisma/client";

export type CertificateCardData = {
  id: string;
  title: string;
  provider: string;
  image: string;
  providerLogo: string | null;
  updatedAt: string;
  createdAt: string;
}

const CertificatesPage = () => {
  const [data, loading, error] = useCertificates()
  // const certificates = await prismadb.certificate.findMany()

  const formattedCertificates: CertificateCardData[] = data.map((item: Certificate) => ({
    id: item.id,
    provider: item.provider,
    title: item.title,
    image: item.imageUrl,
    providerLogo: item.providerLogoUrl,
    updatedAt: format(item.updatedAt, 'MMMM do, yyyy'),
    createdAt: format(item.createdAt, 'MMMM do, yyyy'),
  }))

  return (
    <>
      <div className="flex-col">
        <div className="flex-1 space-y-4 p-8 pt-6">
          {loading && (<p>Loading...</p>)}
          {error && (<p>{error}</p>)}
          <CertificateClient data={formattedCertificates} />
        </div>
      </div>
    </>
  )
}

export default CertificatesPage
