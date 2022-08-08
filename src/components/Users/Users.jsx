import React, { useContext, useEffect } from 'react'
import { UsersContext } from '../../context/users/UsersContext';
import Button from '../Basic/Button'
import Preloader from '../Basic/Preloader';
import UserCard from './UserCard'

function Users() {

    const { users, loading, getUsers, setCountPage, count, hideButton } = useContext(UsersContext);

    const getUsersList = () => {
        setCountPage(count)
        getUsers(users, count)
    }

    return (
        <section className="users">
            <div className="container">
                <div className="users__inner">
                    <h2 className="users__title title">Working with GET request</h2>
                    <div className="users__cards">

                        {
                            users.map(user => (
                                <UserCard user={user} key={user.id} />
                            ))
                        }

                    </div>
                    {
                        hideButton
                            ? null
                            : loading
                                ? <Preloader />
                                : <Button onClick={getUsersList} clasName="users__button" text="Show More" />
                    }

                </div>
            </div>
        </section>
    )
}

export default Users