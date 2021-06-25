import './_card7nov.scss'
import Tabs from '../../reactive/tab/Tabs';
import {CardG9} from '../../examples/CardG9';

export default function Card() {
  return (
      <Tabs>
        <section className={'card7novContainer'}>
          <div className="inlineCard">
            <div className="card7 light">
              <h4 className="card7__heading">Dipen<span>Parmar</span> </h4>
              <h3 className="card7__sub_heading">Just for Css|scss Refreshment </h3>
              <p className="card7__content">dipensavji@gmail.com</p>
            </div>
            <div className="card7 dark">
              <h4 className="card7__heading">Dipen<span>Parmar</span> </h4>
              <h3 className="card7__sub_heading">Sub Heading for my Custom Card</h3>
              <p className="card7__content">dipensavji@gmail.com</p>
            </div>
          </div>
        </section>

        <section data-tabName={'CardG9'}>
          <CardG9/>
        </section>

      </Tabs>
  )
}
