import React from 'react'

function Register() {
    return (
        <section className="register">
            <div className="container">
                <div className="register__inner">
                    <h2 className="register__title title">Working with POST request</h2>
                    <form action="#" method="post" className="register__form">
                        <div className="register__form--input">
                            <input id="name" type="text" placeholder="Your name" />
                            <label htmlFor="name"></label>
                        </div>
                        <div className="register__form--input">
                            <input type="email" id="email" placeholder="Email" />
                            <label htmlFor="email"></label>
                        </div>
                        <div className="register__form--input">
                            <input type="tel" id="phone" placeholder="Phone" />
                            <label className="input-helper" htmlFor="phone">+38 (XXX) XXX - XX - XX</label>
                        </div>
                        <fieldset className="register__form--fieldset">
                            <legend>Select your position</legend>
                            <div className="register__form--radiobutton">
                                <input type="radio" name="position" id="front"  />
                                <label htmlFor="front">Frontend developer</label>
                            </div>
                            <div className="register__form--radiobutton">
                                <input type="radio" name="position" id="back" />
                                <label htmlFor="back">Backend developer</label>
                            </div>
                            <div className="register__form--radiobutton">
                                <input type="radio" name="position" id="designer" />
                                <label htmlFor="designer">Designer</label>
                            </div>
                            <div className="register__form--radiobutton">
                                <input type="radio" name="position" id="qa" />
                                <label htmlFor="qa">QA</label>
                            </div>
                        </fieldset>
                        <div className="register__form--upload">
                            <label className="file__wrapper" htmlFor="upload">
                                <div className="file__button">Upload</div>
                                <div className="file__fake">Upload your photo</div>
                            </label>
                            <input name="file" type="file" name="file" id="upload" className="field__file" multiple />
                        </div>
                        <button type="submit" className="button" disabled>Sign up</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Register