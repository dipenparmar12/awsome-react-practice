import React from 'react'
import Fake from 'utils/faker'
import Icons from 'components/Icons'
import './AvatarList.scss'

function Avatar({ name, avatar }) {
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

export default function AvatarList() {
  return (
    <div className="avatar_container">
      <div className="avatar_list">
        {Fake.arrRandom(7, 10).map((_, i) => {
          // eslint-disable-next-line react/no-array-index-key
          return <Avatar name={i + 1} avatar={i} key={i} />
        })}
      </div>
    </div>
  )
}
