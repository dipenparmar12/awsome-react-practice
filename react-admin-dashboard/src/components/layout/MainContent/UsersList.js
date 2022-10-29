import React from 'react'
import Fake from 'utils/faker'
import Icons from 'components/Icons'

function User({ name, avatar }) {
  return (
    <div className="avatar">
      <div className="avatar__img">
        <img src={`http://placeimg.com/50/50/people?${Math.random()}`} alt="" />
      </div>
      <span className="avatar__name"> Dipen {name} </span>
      {name === 1 && <Icons.Plus className="avatar__icon" />}
    </div>
  )
}

export default function UsersList() {
  return (
    <div className="avatar_list">
      {Fake.arrRandom(8, 10).map((_, i) => {
        return <User name={i + 1} avatar={i} />
      })}
    </div>
  )
}
