import React from 'react';

import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import './ComponentCss/Home.css';

import img from '../IMAGES/Logo/Logo.svg';

// import { motion } from 'framer-motion';


const Home = () => {
    return (
        <div className = "home container">
            <div className="homeTitleBox">
                <h1 className="homeTitle">BienVenue</h1>
            </div>
            <motion.div className="imgLogoBox">
                <img className ='imgLogo' src={ img } alt="Le logo"/>
            </motion.div>
            <p className ="details" >
                Ou en êtes vous quant à l'avancée du <span>Twin network</span> revolutionnaire ?
            </p>
            <div className="btnReport">
                <div><Link className = "lk" to = "/login">Envoyer votre rapport</Link></div>
            </div>
        </div>
    )
}

export default Home;

