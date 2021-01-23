import React from 'react'

import './ComponentCss/About.css'

const About = () => {
    return (
        <div className = "about container">
            <div className="textContainer">
                <div style = {{marginBottom: "10px"}}>
                    <h2 className="title textContainer">
                        Contactez Nous
                    </h2>
                    <p className="description">
                        Nous sommes tous étudiants en <span className="span">Twin </span> (Technologies du Web et L'image Numerique) à l'<span className="span">ESATIC </span> en Côte d'Ivoire
                    </p>
                </div>
                <div className="image">
                    
                </div>
                <section className="contacts">
                    <div className="infos">
                        <h3 className="infosTitle" id = "adress">Adresse:</h3>
                        <p>Abidjan-Côte d'Ivoire Treichville Zone4</p>
                    </div>
                    <div className="infos">
                        <h3 className="infosTitle" id = "phone">Contacts:</h3>
                        <p>01 51 64 52 14</p>
                    </div>
                    <div className="infos">
                        <h3 className="infosTitle" id = "mail">E-mail:</h3>
                        <p><a href="mailto:calixmonnet@gmail.com">calixmonnet@gmail.com</a></p>
                    </div>
                </section>
            </div>
            <form action="" className = "form">
                <div className = "textContainer">
                    <h2 className="form-title title">Envoyez Un message</h2>
                </div>
                <div className="inputBox">
                    <input className = "inputItem" type="text" name="name" id="name" required />
                    <span className = "topItem">Nom</span>
                </div>
                <div className="inputBox">
                    <input className = "inputItem" type="email" name="mail" id="mail" required />
                    <span className = "topItem">email</span>
                </div>
                <div className="textareaBox">
                    <textarea name="message" id="message"></textarea>
                </div>
                <input className = "submit" type="submit" value="Envoyer"/>
            </form>
        </div>
    )
}

export default About
