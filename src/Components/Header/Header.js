import logo from '../../assets/logo.svg'
import React from 'react';

function Header (){
 

        
        return(
            <nav className="d-flex flex-row color-white align-items-center" id='home'>
                <img id='gpti' className="navbar-brand" src={logo} alt="logo"/>
                
                <div className="d-flex align-items-center justify-content-between flex-grow-1 collapse-lg">
                    <div id='nav'>
                        <ul className='navbar-nav d-flex flex-row justify-content-between'>
                            <li className='navbar-item'>
                                <a  className='navbar-link' href='#' >Home</a>
                            </li>
                            <li className='navbar-item'>
                                <a className='navbar-link' href="#gpt" >What is GPT?</a>
                            </li>
                            <li className='navbar-item'>
                                <a className='navbar-link' href="#ai" >Open AI</a>
                            </li>
                            <li className='navbar-item'>
                                <a className='navbar-link' href="#studies" >Case Studies</a>
                            </li>
                            <li className='navbar-item'>
                                <a className='navbar-link' href="#library" >Library</a>
                            </li>
                        </ul>
                    </div>
        
                    <div id='account'>
                        <a className='navbar-link' href="#home">Sign in</a>
                        <a className='navbar-link' href="#home"><button>Sign up</button></a>
                    </div>
                </div>
                
                
            </nav>
            )
    }
    
    

export default Header;