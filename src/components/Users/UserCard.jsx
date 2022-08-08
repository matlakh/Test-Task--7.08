import React from 'react'

const UserCard = (props) => {
    return (
        <div className="users__card">
            <img className="users__card--img" src={props.user.photo} alt="user" />
            <p className="users__card--name">{props.user.name}</p>
            <p className="users__card--position">{props.user.position}</p>
            <p className="users__card--email">{props.user.email}</p>
            <p className="users__card--phone">{props.user.phone}</p>
        </div>
    )
}

export default UserCard