/* eslint-disable react/no-array-index-key */
import React from 'react'
import classNames from 'classnames'
import Container from 'componentsDump/Container'
import Heading2 from 'componentsDump/Heading2'
import Heading5 from 'componentsDump/Heading5'
import Heading4 from 'componentsDump/Heading4'
import Paragraph from 'componentsDump/Paragraph'
import Icon6 from 'assets/icon6.png'
import Icon7 from 'assets/icon7.png'
import Icon8 from 'assets/icon8.png'
import Heading3 from 'componentsDump/Heading3'
import Text from 'componentsDump/Text'
import Icons from 'componentsDump/Icons'

export default function SectionProjects() {
  const projects = [
    {
      img: `image_5.jpg`,
      title: 'Tech Solutions',
      text: ' Design/Ideas ',
    },
    {
      img: `image_6.jpg`,
      title: 'Smart visions',
      text: ' Design/Ideas',
    },
    {
      img: `image_7.jpg`,
      title: 'Platform integration',
      text: ' Design/Ideas',
    },
    {
      img: `image_6.jpg`,
      title: 'Web Development',
      text: ' Design/Ideas',
    },
  ]

  return (
    <div className="flex justify-center items-center bg-white">
      <Container className="py-20 ">
        <div className="flex items-center py-20 ">
          <div className="w-6/12">
            <Heading5 className={'pl-14 '}> Our Completed Projects </Heading5>
            <Heading2 className="pl-14 font-medium title-font mb-2  !text-black">
              Improve & Enhance our <br /> Tech Projects
            </Heading2>
          </div>

          <div className="px-10" />

          <Paragraph className="w-6/12 !text-lg !text-gray-400/90 !leading-loose">
            There are many variations of passages of available but majority have
            <br />
            suffered alteration in some form, by humour or randomized words
            <br />
            which don't look even slightly believable.
          </Paragraph>
        </div>

        <div className="flex gap-8 px-14 py-10 text-gray-1">
          {projects.map((project, i) => (
            <ServiceCard key={i} data={project} />
          ))}
        </div>
      </Container>
    </div>
  )
}

function ServiceCard({ data }) {
  // React.useEffect(() => {
  //   console.log('SectionProjects.js::[72]', data.img)
  // }, [])

  return (
    <div
      className="group cursor-pointer card h-[31rem] flex-1 relative bg-gradient-to-b from-black/10 to-black/60 "
      // style={{
      //   '--url': `${process.env.PUBLIC_URL}/img/${data.img}`,
      // }}
    >
      {/* <img
        src={`/img/${data.img}`}
        alt=""
        className="absolute w-full h-full object-cover  opacity-90 bg-gradient-to-b from-black/10 to-black/80"
        // style={{
        //   backgroundImage: `/img/${data.img}`,
        // }}
      /> */}

      <div className=" absolute bottom-0 w-full flex justify-around items-center">
        <div>
          <Heading3 className={classNames('!text-white mb-0  ')}>
            {data.title}
          </Heading3>
          <Text className={classNames('!text-secondary-2 mb-7 ')}>
            {data.text}
          </Text>
        </div>
        <div className=" default_transition invisible group-hover:!visible border-2 border-transparent group-hover:!border-white aspect-square text-center align-middle p-2 rounded-full ">
          <Icons.LineArrowRight className="!text-white text-2xl  " />
        </div>
      </div>
    </div>
  )
}

/* 
========================================================

SectionServices (2[1:1]/1 Column Layout (T-Layout))
 - ContainerWrapper	
 - Row-1/Colum-1
   		- Heading5
   		- Heading2
	- Row-1/Colum-2
		- Paragraph
	- Row-2/Colum-1
		- ServiceCards (5 Columns Layout)
			- Card (Variants:Dark,White)
			  -	Icon
			  - Heading3
				- Paragraph

======================================================== 
*/
