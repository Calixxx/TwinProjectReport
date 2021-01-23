import React from 'react'

import './ComponentCss/NavBar.css';

import {Link } from 'react-router-dom';
import Logo from '../IMAGES/Logo/Report.svg';


class NavBar extends React.Component {

    constructor(){
        super();
        this.state = {
            isActive:false
        }
    }

    wrapper = () =>{
        const menuBtn = document.querySelector('.menuBtnBox');
        let navList = document.querySelector('.nav');

        menuBtn.addEventListener('click', (e) => {
            navList.classList.toggle('toggle');   
            menuBtn.classList.toggle('open')
            e.stopPropagation();
        });
    }
    exit = () =>{
        let links = document.querySelectorAll('.link')
        let navList = document.querySelector('.nav');
        const menuBtn = document.querySelector('.menuBtnBox');
        
        links.forEach(link => {
            navList.classList.remove('toggle');
            menuBtn.classList.remove('open');
        });
    }

    hidden = () =>{
        let menuBtn = document.querySelector('.menuBtnBox');
        menuBtn.addEventListener('click', function(){

        })
    }

    render(){
        return (
            <div className = "navBar">
                <div className="logoBox">
                    <Link className = "logo-name" to = "/"><h2>TwinReport</h2></Link>    
                    <Link to = "/"><img class = "logo" src={ Logo } alt="Le Logo"/></Link>
                </div>
                <nav className = "nav">
                    <ul class = "links">
                      <Link className = "link" onClick = { this.exit } to="/">Accueil</Link>
                      <Link className = "link" onClick = { this.exit } to="/login">Mon Compte</Link>
                      <Link className = "link" onClick = { this.exit } to="/about">à propos</Link>
                    </ul>
                </nav>
                <div className="menuBtnBox">
                    <div  onClick={ this.wrapper } className="menuBtn">
    
                    </div>
                </div>
            </div>
        )
    }
}


export default NavBar;
