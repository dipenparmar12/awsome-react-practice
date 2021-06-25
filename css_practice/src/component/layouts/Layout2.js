import React from 'react'
import './layout2.css'

// .wrapper>header.header{Header}+aside.sidebar{SideBar}+(artical.content>h1{WebSite Title}+p>lorem20)+footer.footer{myFooter}
const Layout2 = () => {
  return (
      <>
        {<div className='page1'>
          <div className='topnav'>
            <img
                src='https://source.unsplash.com/random/50x50?sig=0'
                alt='#Logo'
                className='logo'
            />
            <div className='title'>Page Title</div>
          </div>
          <div className='hero'>
            <h1>BigTitle</h1>
            <div className='desc'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quis
              eum libero asperiores dolorem eaque doloremque facere voluptas optio
              odio vel nisi atque facilis magni ratione quo, ut ad provident!
            </div>
          </div>
          <div className='gallery'>
            {','
                .repeat(7)
                .split(',')
                .map((_, i) => (
                    <figure key={i}>
                      <img
                          src={`https://source.unsplash.com/random/200x200?sig=${i}`}
                          alt={'img' + i}
                          className='gallery_img'
                      />
                      <figcaption> Title: {Math.random()}</figcaption>
                    </figure>
                ))}
          </div>
        </div>}
      </>
  )
}

export default Layout2

/*
//
<img src="https://source.unsplash.com/random/200x200?sig={id}"/>
// https://source.unsplash.com/
*/
