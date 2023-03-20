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
        <div className="score">
          <h6 className="score__title"> Your Result </h6>
          <div className="score__circle">
            <span> 76 </span>
            <span> of 100 </span>
          </div>
          <h3 className="score__sub-title"> Great </h3>
          <p className="score__content">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>

        <div className="summary">
          <h2>Summary</h2>
        </div>
      </div>
    </Container>
  )
}

export default ResultsSummary
