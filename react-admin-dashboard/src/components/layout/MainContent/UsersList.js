import React from 'react'
import Fake from 'utils/faker'
import Icons from 'components/Icons'

function User({ name, avatar }) {
  return (
    <div className="avatar">
      <div className="avatar__img">
        <img src="" alt="" />
      </div>
      <span className="avatar__name"> Add to </span>
      <Icons.OutlinePlusCircle className="avatar__icon" />
    </div>
  )
}

export default function UsersList() {
  return (
    <div className="avatar_list">
      {Fake.arrRandom(2, 10).map((user) => {
        return <User name={user} avatar={user} />
      })}
    </div>
  )
}
