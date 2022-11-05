/* eslint-disable react/no-array-index-key */
import React from 'react'
import classNames from 'classnames'
import Container from 'componentsDump/Container'
import ImgPartner1 from 'assets/partner-2.jpg'
import ImgPartner2 from 'assets/partner-1.jpg'

export default function SectionPartners() {
  return (
    <div className="border-t border-b py-16">
      <Container className=" mx-20 flex justify-center gap-14 items-center ">
        <img
          src={ImgPartner1}
          className="w-40 default_transition hover:scale-110 border border-transparent hover:border-black/20"
        />
        <img
          src={ImgPartner2}
          className="w-40 default_transition hover:scale-110 border border-transparent hover:border-black/20"
        />
        <img
          src={ImgPartner1}
          className="w-40 default_transition hover:scale-110 border border-transparent hover:border-black/20"
        />
        <img
          src={ImgPartner1}
          className="w-40 default_transition hover:scale-110 border border-transparent hover:border-black/20"
        />
        <img
          src={ImgPartner1}
          className="w-40 default_transition hover:scale-110 border border-transparent hover:border-black/20"
        />
      </Container>
    </div>
  )
}

/* 
========================================================


======================================================== 
*/
