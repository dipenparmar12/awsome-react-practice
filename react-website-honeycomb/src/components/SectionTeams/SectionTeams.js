/* eslint-disable react/no-array-index-key */
import React from 'react'
import classNames from 'classnames'
import Container from 'componentsDump/Container'
import Heading2 from 'componentsDump/Heading2'
import Heading5 from 'componentsDump/Heading5'
import Paragraph from 'componentsDump/Paragraph'
import Heading3 from 'componentsDump/Heading3'
import Text from 'componentsDump/Text'
import Icons from 'componentsDump/Icons'

import ImgTeamMember1 from 'assets/team-member-1.jpg'
import ImgTeamMember2 from 'assets/team-member-2.jpg'
import ImgTeamMember3 from 'assets/team-member-3.jpg'

export default function SectionTeams() {
  const projects = [
    {
      img: ImgTeamMember1,
      name: 'Christine Eve',
      designation: ' Developer ',
    },
    {
      img: ImgTeamMember2,
      name: 'Mike Hardson',
      designation: ' Developer',
    },
    {
      img: ImgTeamMember3,
      name: 'Jessica Brown',
      designation: ' Designer ',
    },
  ]

  return (
    <div className="flex justify-center items-center bg-white">
      <Container className="py-28 ">
        <div className="md:flex items-center py-20 ">
          <div className="md:w-6/12">
            <Heading5 className={'md:pl-14 '}> Our Expert People </Heading5>
            <Heading2 className="md:pl-14 font-medium title-font mb-2  !text-black">
              Meet Our Professional <br /> Team Members
            </Heading2>
          </div>

          <div className="px-10" />

          <Paragraph className="md:w-6/12 !text-lg !text-gray-400/90 !leading-loose">
            There are many variations of passages of available but majority have
            <br />
            suffered alteration in some form, by humour or randomized words
            <br />
            which don't look even slightly believable.
          </Paragraph>
        </div>

        <div className="md:flex gap-24 mt-5 SectionFeatureCards translate-y-14 relative z-10  ">
          {projects.map((data, i) => (
            <FeatureCard key={i} data={data} img={data.img} />
          ))}
        </div>
      </Container>
    </div>
  )
}

function FeatureCard({ data }) {
  return (
    <div className="card_team  h-[31rem] flex-1 relative half-a-border-on-top mb-36 md:mb-0">
      <div className="p-7  hover:g default_transition">
        <div>
          <img
            src={data.img}
            alt={data.img}
            className="w-full h-full hover:brightness-90 default_transition"
          />
        </div>

        <div className="flex mt-5 ">
          <div className="flex-1 ">
            <Heading3 className={classNames('!text-black mb-0  ')}>
              {data.name}
            </Heading3>
            <Text className={classNames('!text-gray-1 ')}>
              {data.designation}
            </Text>
          </div>
          <div className="relative group">
            <div className=" absolute right-0 cursor-pointer w-16 h-16  p-5 bg-secondary-1 hover:brightness-90 flex place-items-center">
              <Icons.ShareAlt className="!text-white !text-2xl h-full w-full inline-block mr-2 " />
            </div>
            <ul className="hidden default_transition group-hover:!flex group-hover:-translate-y-full  absolute py-4 -right-full  translate-y-0 flex-col bg-white border z-10">
              <li className="w-16 h-12 p-3">
                <Icons.Twitter className="!text-black w-full h-full" />
              </li>
              <li className="w-16 h-12 p-3">
                <Icons.Facebook className="!text-black w-full h-full" />
              </li>
              <li className="w-16 h-12 p-3">
                <Icons.PinterestP className="!text-black w-full h-full" />
              </li>
              <li className="w-16 h-12 p-3">
                <Icons.Instagram className="!text-black w-full h-full" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

/* 
========================================================
======================================================== 
*/
