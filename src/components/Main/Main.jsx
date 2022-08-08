import React from 'react'
import Button from '../Basic/Button'

function Main() {
    return (
        <main className="main">
            <div className="container">
                <div className="main__inner">
                    <div className="main__content">
                        <h1 className="main__title">Test assignment for front-end developer</h1>
                        <p className="main__text">
                            What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the
                            world of Front-End Development keeps evolving.
                        </p>
                        <Button text="Sign Up"></Button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main