import './grid-two-section.scss'
import img1 from './story-1.jpeg'
import img2 from './story-2.jpeg'
const GridTwoSection = () => {
  return (
    <>
      <div className='grid-two-section'>
        <div className='content-img'>
          <img className='img' src={img1} alt='random' />
          <img className='img2' src={img2} alt='random' />
        </div>
        <div className='content'>
          <p className='slugan'>Happy customers</p>
          <h3 className='title'>The Best decision of our lives</h3>
          <p className='paragraph'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi autem perferendis natus
            officia repudiandae voluptatem quis uasi laudantium aut.
          </p>
          <button className='btn'> Find your own home </button>
        </div>
      </div>
    </>
  )
}

export default GridTwoSection
