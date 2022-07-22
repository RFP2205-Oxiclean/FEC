import React, {useState} from 'react';

const TopNavBar = (props) => {

  const [theme, setTheme] = useState(null)



  return (
    <div className = 'top-nav-bar'>
      <span className = 'top-nav-left-bar'>
        <span className = 'top-nav-left-bar-word'>SALE</span>
        <span className = 'top-nav-left-bar-word'>WOMEN </span>
        <span className = 'top-nav-left-bar-word'>MEN</span>
        <span className = 'top-nav-left-bar-word'>STYLES</span>
        <span className = 'top-nav-left-bar-word'>STORES</span>
        <span className = 'top-nav-left-bar-word'>SEARCH</span>
      </span>
      <span className = 'top-nav-title-bar'>
        <span className = 'top-nav-title-word'>ATELIER</span>
      </span>
      <span className = 'top-nav-right-bar'>
        <span className = 'top-nav-right-bar-word'>COUNTRY</span>
        <span className = 'top-nav-right-bar-word'>SIGN IN</span>
        <span className = 'top-nav-right-bar-word'>WISHLIST</span>
        <span className = 'top-nav-right-bar-word'>BAG (0)</span>
      </span>
    </div>
  )
}

export default TopNavBar;