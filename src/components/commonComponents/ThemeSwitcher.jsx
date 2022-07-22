import React from 'react';

const ThemeSwitcher = ({toggleTheme}) => {

  return (
    <label className="switch">
     <input
      type="checkbox"
      onChange = {toggleTheme}
     />
     <span className="slider round"></span>
    </label>
  )
}

export default ThemeSwitcher;