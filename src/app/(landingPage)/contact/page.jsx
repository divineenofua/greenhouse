import React from 'react'
import Contacthead from '@/components/contact/contacthead'
 import Letter from '@/components/newsletter/letter'
 import ContactImg from '@/components/contact/contactimgs'
export default function Page() {
  return (
    <> 
    <div className="  max-w-[1200px] mx-auto  px-12  "> 
      <div>
        <Contacthead />
      </div>
         <h3 className=' font-bold text-[22px]'>Follow us on our social platforms</h3>
        <ContactImg />
    </div>
    <div>
        {/* <Letter />   */}
      </div>
    </>
  )
}
