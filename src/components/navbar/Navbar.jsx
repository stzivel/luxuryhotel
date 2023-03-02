import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import './navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';


function Navbar() {

    const links = [
        {
            link:'#Home',
            title:'HOME',
        },
        {
            link:'#Appartments',
            title:'APPARTMENTS',
        },
        {
            link:'#Aboutus',
            title:'ABOUT US',
        },
        {
            link:'#Contact',
            title:'CONTACT',
        },


    ]

    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div className='navbar'>

            <div className="navbar__links">

                <div className="navbar__links-logo">

                    <img src={logo} alt="" />

                </div>

                <div className="navbar__links-container">

                    {links.map((link)=>(
                        <p><a href={link.link}>{link.title}</a></p>
                    ))}

                  
                    

                    {/* <p><a href="#Home">ΑΡΧΙΚΗ</a></p>
                    <p><a href="#Apartments">ΤΑ ΔΙΑΜΕΡΙΣΜΑΤΑ ΜΑΣ</a></p>
                    <p><a href="#Aboutus">ΣΧΕΤΙΚΑ ΜΕ ΕΜΑΣ</a></p>
                    <p><a href="#Contact">ΕΠΙΚΟΙΝΩΝΙΑ</a></p> */}
                   
                </div>

                <div className="navbar__links-button">
                    <button type='button'>BOOK</button>
                </div>

            </div>

            <div className="navbar__menu">

                {toggleMenu 
                ? <RiCloseLine size={26} onClick={()=> setToggleMenu(false)}/>
                : <RiMenu3Line size={26} onClick={()=>setToggleMenu(true)}/>
                }

                {toggleMenu && (
                    <div className="navbar__menu-container">
                        <div className="navbar__menu-container-links">

                        {links.map((link)=>(
                        <p><a href={link.link}>{link.title}</a></p>
                         ))}

                        </div>

                        <div className='navbar__menu-container-button'>
                        <button type='button'>ΚΡΑΤΗΣΗ</button>

                        </div>
                    </div>
                )
                
                }

            </div>

            
        
        </div>
    )
}

export default Navbar