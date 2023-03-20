import React from 'react'
import styled from 'styled-components/macro'

const Panel = styled.div`
  min-height: 100vh;
  overflow: hidden;
  display: flex;

  .panel {
    flex: 1;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background: gray;
    box-shadow: inset 0 0 0 5px rgba(255, 255, 255, 0.1);
    color: white;
    text-align: center;
    align-items: center;
    /* Safari transitionend event.propertyName === flex */
    /* Chrome + FF transitionend event.propertyName === flex-grow */
    transition: font-size 0.7s cubic-bezier(0.61, -0.19, 0.7, -0.11),
      flex 0.7s cubic-bezier(0.61, -0.19, 0.7, -0.11), background 0.2s;
    font-size: 20px;
    background-size: cover;
    background-position: center;
  }

  /* Flex Children */
  .panel > * {
    flex: 1 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 0;
    width: 100%;
    transition: transform 0.5s;
  }

  .panel p {
    text-transform: uppercase;
    font-family: ',Amatic SC', cursive;
    text-shadow: 0 0 4px rgba(0, 0, 0, 0.72), 0 0 14px rgba(0, 0, 0, 0.45);
    font-size: 2em;
  }

  .panel > *:first-child {
    transform: translateY(-100%);
  }
  .panel > *:last-child {
    transform: translateY(100%);
  }

  .panel.open-active > *:first-child {
    transform: translateY(0);
  }
  .panel.open-active > *:last-child {
    transform: translateY(0);
  }

  .panel p:nth-child(2) {
    font-size: 4em;
  }

  .panel.open {
    font-size: 25px;
    flex: 5;
  }

  .panel1 {
    background-image: url('https://source.unsplash.com/gYl-UtwNg_I/1500x1500');
  }
  .panel2 {
    background-image: url('https://source.unsplash.com/rFKUFzjPYiQ/1500x1500');
  }
  .panel3 {
    background-image: url('https://images.unsplash.com/photo-1465188162913-8fb5709d6d57?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&w=1500&h=1500&fit=crop&s=967e8a713a4e395260793fc8c802901d');
  }
  .panel4 {
    background-image: url('https://source.unsplash.com/ITjiVXcwVng/1500x1500');
  }
  .panel5 {
    background-image: url('https://source.unsplash.com/3MNzGlQM7qs/1500x1500');
  }

  @media only screen and (max-width: 600px) {
    .panel p {
      font-size: 1em;
    }
  }
`

export default function Day5Gallery() {
  React.useEffect(() => {
    console.clear()
  })

  const handlePanelToggle = (e) => {
    e.currentTarget.classList.toggle('open')
  }

  const toggleActive = (e) => {
    // e.persist()
    if (e.propertyName.includes('flex')) {
      e.currentTarget.classList.toggle('open-active')
    }
  }

  return (
    <Panel>
      {[...new Array(5)].map((_, i) => {
        return (
          <div
            className={`panel panel${i + 1} `}
            onClick={handlePanelToggle}
            key={i}
            onTransitionEnd={toggleActive}
          >
            <p>Hey</p>
            <p>Let's</p>
            <p>Dance</p>
          </div>
        )
      })}
    </Panel>
  )
}
