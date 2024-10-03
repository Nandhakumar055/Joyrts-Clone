
"use client";
import { useState } from 'react'
import './index.css'
import {NavItems, LGNavItems} from '../NavItems';


const navigationItems = [
    {
        id: 1,
        item : 'Home',
        path : '/#HomeSection',
    },
    {
        id: 2,
        item : 'About Us',
        path: '/#AboutSection',
    },
    {
        id: 3,
        item : 'Services',
        path : '/#ServiceSection',
    },
    {
        id: 4,
        item : 'Technology',
        path : '#',
    },
    {
        id: 5,
        item : 'Execution Model',
        path : '#',
    },
    {
        id: 6,
        item : 'Contact Us',
        path : '#',
    },
    {
        id: 7,
        item : 'Careers',
        path : '#',
    }
    
]


const Header = () => {
    const [isOpenNav, setOpenNav] = useState(false);
    const [activeNavItem, setActiveNavItem] = useState('Home')
    const [navigationItemsList, setNavigationItemsList] = useState([...navigationItems])

    const onClickNavbar = () => {
        setOpenNav(!isOpenNav)
    }

    const onClickNavigationItem = navItem => {
        setActiveNavItem(navItem)
        setOpenNav(!isOpenNav)
    }


    return(
        <nav className='header-section-container'>
            <div className='header-main-container'>
                <img src="https://res.cloudinary.com/dhoeemazz/image/upload/v1727766246/logo-red_h8r0g9.png" alt="Logo" className='web-logo'/>
                {/* Hamburger Icon and Cross Icon */}
                <div className="nav-icon-container">
                    <div className={isOpenNav ? 'bar active' : 'bar not-active'} onClick={onClickNavbar}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <ul className='nav-item-container'>
                    {
                        navigationItemsList.map(eachItem => (
                            <LGNavItems navItem={eachItem} key={eachItem.id} onClickNav={onClickNavigationItem} isActiveNav={eachItem.item === activeNavItem} />
                        ))
                    }
                </ul>
            </div>
            
            {isOpenNav &&
                <ul className='mobile-nav-item-container'>
                    {
                        navigationItemsList.map(eachItem => (
                            <NavItems navItem={eachItem} key={eachItem.id} onClickNav={onClickNavigationItem} isActiveNav={eachItem.item === activeNavItem}  />
                        ))
                    }
                </ul>
            }
        </nav>
    )
}

export default Header