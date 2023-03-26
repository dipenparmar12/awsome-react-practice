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
    { title: 'Reaction', score: 80, outOf: 100, svg: 'Reaction' },
    { title: 'Memory', score: 92, outOf: 100, svg: 'Memory' },
    { title: 'Verbal', score: 61, outOf: 100, svg: 'Verbal' },
    { title: 'Visual', score: 72, outOf: 100, svg: 'Visual' },
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
                <div className="summary__item" data-item={i} key={i}>
                  <div className="details--title">
                    <span> {_?.icon} </span>
                    <span> {_?.title} </span>
                  </div>
                  <div className="details--score">
                    <span> {_?.score} </span>
                    <span> / {_?.outOf} </span>
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

/*
<div className="backplate">
  <div className="score">
    <h4 className="score--title">Your Result</h4>
    <div className="score--rating">
      <p>76</p>
      <p>of 100</p>
    </div>
    <h2 className="score--superlative">Great</h2>
    <p className="score--description">
      You scored higher than 65% of the people who have taken these tests.
    </p>
  </div>
  <div className="summary">
    <h3>Summary</h3>
    <div className="details red">
      <div className="details--title">
        <img
          src="/static/media/icon-reaction.0c1d6b98b4559ba72276d9ceda14692d.svg"
          alt="Reaction"
        />
        <p className="red">Reaction</p>
      </div>
      <div className="details--score">
        <span>80&nbsp;</span>
        <span>/ 100</span>
      </div>
    </div>
    <div className="details orange">
      <div className="details--title">
        <img
          src="/static/media/icon-memory.22a9e0501e58960f3c349cd96fcf108f.svg"
          alt="Memory"
        />
        <p className="orange">Memory</p>
      </div>
      <div className="details--score">
        <span>92&nbsp;</span>
        <span>/ 100</span>
      </div>
    </div>
    <div className="details green">
      <div className="details--title">
        <img
          src="/static/media/icon-verbal.cc1204a0b0559da591a3ea6e99c5cf50.svg"
          alt="Verbal"
        />
        <p className="green">Verbal</p>
      </div>
      <div className="details--score">
        <span>61&nbsp;</span>
        <span>/ 100</span>
      </div>
    </div>
    <div className="details blue">
      <div className="details--title">
        <img
          src="/static/media/icon-visual.61fc2697d5094b6e396276b1a1597c86.svg"
          alt="Visual"
        />
        <p className="blue">Visual</p>
      </div>
      <div className="details--score">
        <span>72&nbsp;</span>
        <span>/ 100</span>
      </div>
    </div>
    <button type="submit">Continue</button>
  </div>
</div>

.score {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(
    180deg,
    rgba(103, 67, 255, 1) 0%,
    rgba(56, 48, 193, 1) 100%
  );
  height: 356px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  justify-content: space-evenly;
  padding: 20px 60px;
}

@media (min-width: 750px) {
  .score {
    height: auto;
    border-radius: 30px;
    flex: 0 0 50%;
  }
}

.score--title {
  color: hsl(241, 100%, 89%);
}

.score--rating {
  width: 140px;
  height: 140px;
  border-radius: 100%;
  background-color: green;
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    180deg,
    rgba(74, 35, 204, 1) 0%,
    rgba(74, 35, 204, 0) 100%
  );
  gap: 5px;
}

.score--rating p:first-child {
  color: white;
  font-size: 36pt;
  font-weight: 700;
}

.score--rating p:last-child {
  color: hsl(241, 100%, 89%);
  font-weight: 600;
}

.score--superlative {
  color: white;
}

.score--description {
  color: hsl(241, 100%, 89%);
  text-align: center;
}


*/
