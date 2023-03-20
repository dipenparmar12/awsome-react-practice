import Container from '@/components/Container.jsx'
import './ResultsSummary.scss'

// @src: https://www.frontendmentor.io/solutions/react-results-summary-solution-Msq92SYd2h
function ResultsSummary() {
  return (
    <Container className={'ResultsSummary'}>
      <div className="backplate ">
        <div className="score">
          <h6 className="score__title margin-y-1">Your Result</h6>
          <div className="score__circle margin-y-1">
            <span className="big_number">76</span>
            <span>of 100</span>
          </div>
          <h3 className="score__sub-title margin-y-1">Great</h3>
          <p className="score__content margin-y-1">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
        <div className="summary">Summary</div>
      </div>
    </Container>
  )
}

export default ResultsSummary
