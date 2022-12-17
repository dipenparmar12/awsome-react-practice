import React from 'react'
const Layout = () => {
  return (
    <>
      <div className='lay9'>
        <div className='card'>
          <img
            src='https://source.unsplash.com/random/50x50?sig=1'
            alt='#img'
          />
          <div className='content'>
            <div className='title'>card title</div>
            <div className='artist'>Autor name</div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              temporibus?
            </p>
          </div>
        </div>

        <div className='card'>
          <img
            src='https://source.unsplash.com/random/50x50?sig=1'
            alt='#img'
          />
          <div className='content'>
            <div className='title'>card title</div>
            <div className='artist'>Autor name</div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              temporibus?
            </p>
          </div>
        </div>

        <div className='card'>
          <img
            src='https://source.unsplash.com/random/50x50?sig=1'
            alt='#img'
          />
          <div className='content'>
            <div className='title'>card title</div>
            <div className='artist'>Autor name</div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              temporibus?
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout

// .lay9 {
//   display: grid;
//   grid-template-columns: repeat(auto-fit, 35rem);
//   justify-content: center;
//   gap: 1.2rem;
//   margin: 1rem;

//   & .card {
//     padding: 1rem;
//     background-color: rgba(205, 212, 252, 0.596);
//     display: grid;

// 		align-content: space-between;

//     grid-template-columns: repeat(2, 2fr);

//     img {
//       width: 80%;
//       height: 80%;
//     }

//     .content {
//       width: 100%;
//       height: 80%;

//       // background: lightsalmon;
//       .title {
//         color: red;
//         font-size: 1.6rem;
//       }

//       .artist {
//         color: blue;
//         font-size: 1.3rem;
//       }

//       p {
//         color: darkslategrey;
//         font-size: 1.4rem;
//       }
//     }
//   }
// }
