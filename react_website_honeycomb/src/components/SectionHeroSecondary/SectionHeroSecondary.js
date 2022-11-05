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

export default function SectionHeroSecondary() {
  return (
    <Container>
      <section className="text-gray-600 body-font mx-auto px-10 py-5">
        <div className="container flex flex-wrap px-5 py-24 mx-auto items-center">
          <div className="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 ">
            LEFT TODO::
          </div>

          <div className="flex flex-col md:w-1/2 md:pl-12">
            <Heading5>About Our Company</Heading5>
            <Heading2>We're Partner of Your Innovations</Heading2>
            <Text>
              There are many variations of passages of lorem ipsum available,
              but the <br /> majority have suffered alteration is some form, by
              injected humour, or <br /> randomized words which dont't look
              even.
            </Text>

            <div className="flex my-4">
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

            <ul className="flex flex-col gap-3 text-xl text-black font-bold mb-5">
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
      </section>
    </Container>
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
