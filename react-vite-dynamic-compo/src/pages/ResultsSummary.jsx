import Container from '@/components/Container.jsx'
import './ResultsSummary.scss'

// @src: https://www.frontendmentor.io/solutions/react-results-summary-solution-Msq92SYd2h
// @Src: https://main--cosmic-otter-6bc648.netlify.app/

/**
 *
 * @returns {JSX.Element}
 * @constructor
 * @src
 *  - https://stackoverflow.com/a/55290215/8592918
 */
function ResultsSummary() {
  return (
    <Container className={'ResultsSummary'}>
      <div className="backplate">
        <div className="result">
          <h1 className="result__title"> Your Result </h1>
          <div className="result__circle">
            <span> 76 </span> of 100
          </div>
          <h3 className="result__sub_title"> Great </h3>
          <p className="result__content">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>

        <div className="summary">
          <h2>Summary</h2>
          <div className="">
            <div className="summary__item"></div>
            <div className="summary__item"></div>
            <div className="summary__item"></div>
            <div className="summary__item"></div>
          </div>
          <button className="button">Continue</button>
        </div>
      </div>
    </Container>
  )
}

export default ResultsSummary
