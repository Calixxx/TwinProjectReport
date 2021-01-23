import React from 'react'

import './ComponentCss/Login.css'

const Login = () => {
    return (
        <main className="main-container">
            <div className="container-client">
                        <div className="connexion">
                            <h1 className="title-connexion">Connexion</h1>
                            <form action="" className="formm">
                                <div className="boxInput">
                                    <input type="text" name="identifiant" id="nom" className="input" />
                                    <span className="topp">Identifiant</span>
                                </div>
                                <div className="boxInput">
                                    <input type="password" name = "passwordd" id = "password" className = "input"/>
                                    <span className="topp">Mot de passe</span>
                                </div>
                                <div className="connectBox">
                                    <a className = "connect" >Connexion</a>
                                </div>
                            </form>
                        </div>
            </div>
        </main>
    )
}

export default Login
