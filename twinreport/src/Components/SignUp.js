import React from 'react';

import './ComponentCss/SignUp.css';

const SignUp = () => {
    return (
        <main className = "main-container">
            <div className="inscription">
                <h1 className="title-inscription">Inscription</h1>
                <form action="#">
                    <div className="boxInput">
                        <input type="text" name="champ de nom" id="nomm" className = "input" />
                        <span className="topp">Votre Nom</span>
                    </div>
                    <div className="boxInput">
                        <input type="password" name="champ du mot de passe" id="passwordd" className = "input"/>
                        <span className="topp">Mot de passe</span>
                    </div>
                    <div className="boxInput">
                        <input type="email" name="champ de l'email" id="email" className = "input"/>
                        <span className="topp">Votre email</span>
                    </div>
                    <div className="insBox">
                        <a  className = "inscrip">Valider</a>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default SignUp
