import React from 'react'
import logotype from '../../assets/img/logo.svg'
import Button from '../Basic/Button'
function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <a href="#" className="header__logo"><img src={logotype} alt="Logotype" />
                    </a>
                    <div className="header__menu">
                        <Button text="Users"></Button>
                        <Button text="Sign Up"></Button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header