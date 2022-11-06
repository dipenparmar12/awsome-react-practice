import React from 'react'
import Container from 'componentsDump/Container'
import Heading2 from 'componentsDump/Heading2'
import Heading5 from 'componentsDump/Heading5'
import Text from 'componentsDump/Text'
import Icon1 from 'assets/Icon1.png'
import Icon2 from 'assets/Icon2.png'
import Heading4 from 'componentsDump/Heading4'
import Icons from 'componentsDump/Icons'
import Button from 'componentsDump/Button'
import Img0 from 'assets/image_0.jpg'
import Img1 from 'assets/image_1.jpg'
import Img2 from 'assets/image_2.jpg'
import Img3 from 'assets/image_3.jpg'
import Icon3 from 'assets/Icon3.png'
import Icon4 from 'assets/Icon4.png'
import Icon5 from 'assets/Icon5.png'

export default function SectionHeroSecondary() {
  return (
    <Container>
      <section className="text-gray-600 body-font mx-auto md:px-20 py-5 ">
        <div className="container flex flex-wrap px-5 py-24 mx-auto items-center">
          <div className="w-full md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 ">
            <img src={Img0} className="object-cover" />
          </div>

          <div className="w-full  md:w-1/2 md:pl-12  flex flex-col">
            <Heading5>About Our Company</Heading5>
            <Heading2>We're Partner of Your Innovations</Heading2>
            <Text>
              There are many variations of passages of lorem ipsum available,
              but the <br /> majority have suffered alteration is some form, by
              injected humour, or <br /> randomized words which dont't look
              even.
            </Text>

            <div className="md:flex my-4">
              <div className="flex flex-1 items-center">
                <span className="h-36 inline-block">
                  <img src={Icon1} alt="i1" className="h-full" />
                </span>
                <Heading4> Web Development </Heading4>
              </div>
              <div className="flex flex-1 items-center">
                <span className="h-36 inline-block">
                  <img src={Icon2} alt="i1" className="h-full" />
                </span>
                <Heading4> Internal Networking </Heading4>
              </div>
            </div>

            <ul className="md:flex flex-col gap-3 text-xl text-black font-bold mb-5">
              <li>
                <Icons.CheckCircle className="mr-2" /> Exploring version oflorem
                veritatis proin
              </li>
              <li>
                <Icons.CheckCircle className="mr-2" /> auctor aliquet aenean
                simply free text veritatis quis
              </li>
              <li>
                <Icons.CheckCircle className="mr-2" /> Consequat ipsum nec lorem
                saglitties sem nibh.
              </li>
            </ul>

            <div>
              <Button className={'mt-8 px-12 py-4'}> LEARN MORE</Button>
            </div>
          </div>
        </div>

        <div className="md:flex gap-10 mt-5 SectionFeatureCards translate-y-14 relative z-10 pb-20 md:pb-0 ">
          <FeatureCard
            img={Img1}
            icon={Icon3}
            content="Perfect solutions that bushiness demands"
          />
          <FeatureCard
            img={Img2}
            icon={Icon4}
            content="Perfect solutions that bushiness demands"
          />
          <FeatureCard
            img={Img3}
            icon={Icon5}
            content="Perfect solutions that bushiness demands"
          />
        </div>
      </section>
    </Container>
  )
}

function FeatureCard({
  img,
  icon,
  content = ' Perfect solutions that bushiness demands',
}) {
  return (
    <div className="group relative md:w-[32rem] h-[24rem] z-10 mb-20 md:mb-0">
      <img
        src={img}
        alt=""
        className="absolute object-cover w-full h-full group-hover:brightness-90 default_transition"
      />
      <Heading4 className="w-10/12 mx-auto absolute -bottom-10 left-1/2 -translate-x-1/2 bg-white text-center  px-10 py-5 group-hover:shadow-lg group-hover:scale-105 default_transition">
        {content}
        <img
          src={icon}
          className="absolute object-cover w-2/12 -bottom-10 right-0 top-0 -translate-y-full  default_transition"
        />
      </Heading4>
    </div>
  )
}

/* 
========================================================
SectionHeroSecondary
 - ContainerWrapper	
 - TwoColumn Layout
   	- Left: GRID Images (SectionBranding)
   	- Right: 
   		- Heading5
   		- Heading2
   		- Text
   		- Icons (TwoColumn layout)
   		 		- Left: [Icon:Heading6]
   		 		- Right: [Icon:Heading6]
   		- FeatureList
   		- Button2
  - FeatureCards
  	- Card
  	 	Img:Icon:Text

======================================================== 
*/
