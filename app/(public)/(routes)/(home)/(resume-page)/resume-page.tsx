
import React from 'react'
import Link from 'next/link'

import { Resume } from '@/components/public/resume/resume'
// import { ReactPdfResume } from '@/components/public/resume/react-pdf-resume'
const ResumePage = () => {
  return (
    <>
      {/* <div>
        <p>Click the link below to download the PDF file:</p>
        <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer" locale={false} download>
          Download PDF
        </Link>
      </div> */}
      <Resume />
    </>
  )
}

export default ResumePage
