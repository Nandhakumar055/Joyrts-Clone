

import './index.css'

// Small Devices View

const NavItems = (props) => {
    const { onClickNav, isActiveNav , navItem} = props
    const { item, path } = navItem


    const onClickNavigation = () => {
        onClickNav(item)
    }

    return(
        <a href={path} className='anchor-tag'>
            <li className={isActiveNav ? 'active-sm-nav-item' : 'sm-nav-item'} onClick={onClickNavigation} >
                {item}
            </li>
        </a>
    )
}

// Large Devices View 

const LGNavItems = (props) => {
    const { onClickNav, isActiveNav , navItem} = props
    const { item, path } = navItem


    const onClickNavigation = () => {
        onClickNav(item)
    }

    return(
        <a href={path} >
            <li className={isActiveNav ? 'active-lg-nav-item' : 'lg-nav-item'} onClick={onClickNavigation} >
                {item}
            </li>
        </a>
    )
}

module.exports = { NavItems, LGNavItems}