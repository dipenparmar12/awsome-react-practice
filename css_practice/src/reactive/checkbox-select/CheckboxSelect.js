import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: yellow;
  min-height: 70vh;
  padding-top: 20px;
  padding-bottom: 20px;

  .checkbox-control {
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
    background: white;
    border-radius: 5px;
    box-shadow: 10px 10px 0 rgba(0, 0, 0, 0.1);

    display: flex;
    align-items: center;
    border-bottom: 1px solid #f1f1f1;

    .checkbox {
      margin: 20px;
    }

    label {
      padding: 20px;
      transition: background 0.2s;
      font-family: 'helvetica neue';
      font-weight: 200;
      border-left: 1px solid #d1e2ff;
    }
  }
`

// TODO:::NOT_DONE
// JS-30 10 - Hold Shift to Check Multiple Checkboxes

export default function CheckboxSelect() {
  React.useEffect(() => {
    console.clear()
  })

  const boxs = React.useRef()

  // let start = null
  let lastChecked = null

  const checkboxClick = (e) => {
    const chlicked = e.currentTarget
    const cbControls = boxs.current.childNodes
    let between = false
    if (e.ctrlKey && e.target.checked) {
      cbControls.forEach((cb) => {
        const checkbox = cb.childNodes[0]

        if (checkbox === chlicked || checkbox === lastChecked) {
          between = !between
        }

        console.log('CheckboxSelect.js::[59] between', between)
        if (between) {
          console.log('CheckboxSelect.js::[62] between', checkbox)
        }
      })
    }
    lastChecked = chlicked
  }

  return (
    <Wrapper ref={boxs}>
      {[...new Array(8)].map((_, i) => (
        <div className='checkbox-control' key={i}>
          <input
            type='checkbox'
            className='checkbox'
            id={'checkbox-' + i}
            onClick={checkboxClick}
          />
          <label htmlFor={'checkbox-' + i}> Checkbox {i} </label>
        </div>
      ))}
    </Wrapper>
  )
}
