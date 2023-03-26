import Container from '@/components/Container.jsx'
import './Checkbox.scss'

/**
 *
 * @returns {JSX.Element}
 * @constructor
 * @src https://verpex.com/blog/website-tips/how-to-style-checkbox-and-radio-buttons-using-css
 */
function Checkbox() {
  return (
    <Container className="CustomInputs">
      <h1 className="mb-8 text-lg "> Css Custom Radio and checkbox </h1>

      <div className=" space-x-2 ">
        <input
          className="_radio "
          type="radio"
          name="e"
          style={{ '--size': '50px' }}
        />

        <input
          className="_radio "
          type="radio"
          name="e"
          style={{ '--size': '60px' }}
        />

        <input
          className="_radio "
          type="radio"
          name="e"
          style={{ '--size': '70px' }}
        />

        <input
          className="_radio round"
          type="radio"
          name="e"
          style={{ '--size': '50px' }}
        />

        <input
          className="_radio round"
          type="radio"
          name="e"
          style={{ '--size': '60px' }}
        />

        <input
          className="_radio round"
          type="radio"
          name="e"
          style={{ '--size': '70px' }}
        />
      </div>
    </Container>
  )
}

export default Checkbox
