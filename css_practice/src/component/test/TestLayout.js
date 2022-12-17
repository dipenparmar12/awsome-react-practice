import React from 'react'

// .wrapper>header.header{Header}+aside.sidebar{SideBar}+(artical.content>h1{WebSite Title}+p>lorem20)+footer.footer{myFooter}
const Testlayout = () => {
  return (
    <>
      <div className='wrapper'>
        <header className='header'>Header</header>
        <aside className='sidebar'>SideBar</aside>
        <artical className='content'>
          <h1>WebSite Title</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            doloremque quae similique quaerat ipsa, neque minus suscipit
            temporibus dolore eligendi.
          </p>
        </artical>
        <footer className='footer'>myFooter</footer>
      </div>
    </>
  )
}

export default Testlayout

//<img src="https://source.unsplash.com/random/200x200?sig={id}" />
// https://source.unsplash.com/

// .wrapper {
//   max-width: 1100px;
//   margin: 0 20px;
//   display: grid;
//   grid-gap: 10px;
// }

// @media screen and (min-width: 500px) {
//   /* no grid support? */
//   .sidebar {
//     float: left;
//     width: 19.1489%;
//   }

//   .content {
//     float: right;
//     width: 79.7872%;
//   }

//   .wrapper {
//     margin: 0 auto;
//     grid-template-columns: 1fr 3fr;
//   }

//   .header,
//   .footer {
//     grid-column: 1 / -1;
//     /* needed for the floated layout */
//     clear: both;
//   }
// }

// .wrapper > * {
//   background-color: #444;
//   color: #fff;
//   border-radius: 5px;
//   padding: 20px;
//   font-size: 150%;
//   /* needed for the floated layout*/
//   margin-bottom: 10px;
// }

// /* We need to set the widths used on floated items back to auto, and remove the bottom margin as when we have grid we have gaps. */
// @supports (display: grid) {
//   .wrapper > * {
//     width: auto;
//     margin: 0;
//   }
// }
