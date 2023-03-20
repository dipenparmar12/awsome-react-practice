import React from 'react'
import './card.scss'
{
  // /* .g9.container>(.card>.content>div>img.img[src="$"]+div.left>.title{Card Title$}+.autor_name{Autor name}+.desc{lorem})*3 */
}

export const CardG9 = () => {
  return (
    <div className='g9 container'>
      {[...new Array(23)].map((_, i) => {
          return (
            <>
              <div className='card'>
                <div className='card__img'>
                  <img src='./200_200.jpeg' alt='Image' />
                </div>
                <div className='card__details'>
                  <h5 className='card__title'>Card title </h5>
                  <p className='card__author'>Autor Name </p>
                  <p className='card__desc'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </p>
                </div>
              </div>
            </>
          )
        })}
    </div>
  )
}
/*

// .cards {
//   display: grid;
//   gap: 2rem;
//   grid-template-columns: repeat(auto-fit, minmax(40rem, 1fr));

//   & .card {
//     background-color: rgba(0, 0, 0, 0.2);
//     box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.288);
//     padding: .6rem 1.6rem;
//     display: grid;
//     grid-template-columns: 15rem 1fr;
//     gap: 1rem;
//     align-items: center;

//     &__img > img {
//       width: 100%;
//       // border: 10px solid #000;
//     }
//   }
// }

//////////////////////// my ugly implimentation

{
  /!*
	 <div className='card'>
			<div className='content'>
				<div>
					<img className='img' src='./200_200.jpeg' alt='Image' />
				</div>
				<div className='left'>
					<div className='title'>Card title {el}</div>
					<div className='autor_name'>Autor Name {i}</div>
					<div className='desc'>
						// Lorem ipsum dolor sit amet consectetur, adipisicing
						elit.
					</div>
				</div>
			</div>
		</div> 
  *!/
}

// //// // .g9.container>.i.i_${cell $}*10
// .g9.container {
//   display: grid;
//   gap: 1.4rem;
//   grid-template-columns: repeat(auto-fit, minmax(10rem, 35rem));
//   justify-content: center;
//   margin: 3rem 1rem;

//   & .card {
//     background: rgb(233, 233, 233);
//     padding: 1.3rem;
//     min-height: 13rem;
//     border-radius: 3px;

//     .content {
//       display: grid;
//       grid-template-columns: 1fr 1.5fr;
//       text-align: left;

//       .img {
//         width: 100%;
//         height: 100%;
//       }

//       .left {
//         padding: 1.5rem;

//         .title {
//           font-size: 1.8rem;
//         }
//         .autor_name {
//           font-size: 0.9rem;
//           margin-top: 0.2rem;
//         }
//         .desc {
//           font-size: 1.4rem;
//           margin-top: 1.5rem;
//         }
//       }

//       // border: 3px solid #000;
//     }
//   }
// }
*/
