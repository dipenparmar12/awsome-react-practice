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

export default function SectionServices() {
  const cards = [
    {
      variant: 'black',
      icon: Icon6,
      title: 'Product Development',
      content: 'Lorem ipsum dolor sit  consectetur adipisicing, assumenda.',
    },
    {
      variant: 'white',
      icon: Icon7,
      title: 'Digital Marketing',
      content: 'Lorem ipsum dolor sit  consectetur adipisicing, assumenda.',
    },
    {
      variant: 'black',
      icon: Icon8,
      title: 'Security System',
      content: 'Lorem ipsum dolor sit  consectetur adipisicing, assumenda.',
    },
    {
      variant: 'black',
      icon: Icon6,
      title: 'UI/UX Designing',
      content: 'Lorem ipsum dolor sit  consectetur adipisicing, assumenda.',
    },
    {
      variant: 'black',
      icon: Icon8,
      title: 'Data Analysis',
      content: 'Lorem ipsum dolor sit  consectetur adipisicing, assumenda.',
    },
  ]
  return (
    <div className="flex justify-center items-center bg-radial">
      <Container className="py-28 ">
        <div className="flex items-center py-20 ">
          <div className="w-6/12">
            <Heading5 className={'pl-14 '}> What we're Offering </Heading5>
            <Heading2 className="pl-14 font-medium title-font mb-2  !text-white">
              Dealing in all Professional <br /> IT Services
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

        <div className="flex gap-8 px-20 py-10 text-gray-1">
          {cards.map((card, i) => (
            <ServiceCard card={card} key={i} />
          ))}
        </div>
      </Container>
    </div>
  )
}

function ServiceCard({ card }) {
  // Default black
  const styles = {
    container: '!bg-black',
    title: 'text-white',
    text: 'text-gray-1',
  }

  if (card.variant === 'black') {
    styles.container = '!bg-primary-2'
    styles.title = 'text-white'
    styles.text = 'text-gray-1'
    // styles.icon = 'bg-black'
  } else if (card.variant === 'white') {
    styles.container = 'bg-white'
    styles.title = 'text-black'
    styles.text = 'text-gray-1'
    styles.icon = 'bg-secondary-1'
  }

  return (
    <div
      className={classNames(
        'group flex-1 px-10 py-4 relative hover:scale-105 default_transition',
        styles.container,
      )}
    >
      <div
        className={classNames(
          'absolute top-2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-32 h-32 rounded-full shadow-lg',
          styles.icon,
        )}
      >
        <img src={card.icon || ''} alt="" className={'w-full h-full'} />
      </div>
      <Heading4
        className={classNames('text-center mt-20 mb-2 px-6', styles.title)}
      >
        {card.title}
      </Heading4>
      <Paragraph className={classNames('text-center px-4 py-2', styles.text)}>
        {card.content}
        {card.variant}
      </Paragraph>
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
