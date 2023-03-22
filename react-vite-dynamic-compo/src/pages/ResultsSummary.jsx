import Container from '@/components/Container.jsx'
import './ResultsSummary.scss'

// @src: https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV
// @src: https://www.frontendmentor.io/solutions/react-results-summary-solution-Msq92SYd2h
// @Src: https://main--cosmic-otter-6bc648.netlify.app/
// @Src: https://github.com/kevin-powell/results-summary-component-main/blob/master/style.css

/**
 *
 * @returns {JSX.Element}
 * @constructor
 * @src
 *  - https://stackoverflow.com/a/55290215/8592918
 */
function ResultsSummary() {
  const items = [
    { title: 'Reaction', score: 80, outOf: 100 },
    { title: 'Memory', score: 92, outOf: 100 },
    { title: 'Verbal', score: 61, outOf: 100 },
    { title: 'Visual', score: 72, outOf: 100 },
  ]

  return (
    <Container className={'ResultsSummary'}>
      <div className="backplate">
        <div className="result">
          <h1 className="result__title"> Your Result </h1>
          <div className="result__circle">
            <span> 76 </span> of 100
          </div>
          <div>
            <h3 className="result__sub_title"> Great </h3>
            <p className="result__content">
              You scored higher than 65% of the people who have taken these
              tests.
            </p>
          </div>
        </div>

        <div className="summary">
          <h2 className="summary__title">Summary</h2>
          <div className="summary__items">
            {items.map((_, i) => {
              return (
                <div className="summary__item" key={i}>
                  <div>
                    <span> {_?.icon} </span>
                    <span> {_?.title} </span>
                  </div>
                  <div>
                    <span> {_?.score} </span> / {_?.outOf}
                  </div>
                </div>
              )
            })}
          </div>
          <button className="button">Continue</button>
        </div>
      </div>
    </Container>
  )
}

export default ResultsSummary
