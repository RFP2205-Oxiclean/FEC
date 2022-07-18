import React from 'react';
// import {fa-light fa-slider} from 'react-icons/fa'

const ProductBreakdown = ({characteristics}) => {

  const characteristicsValuesArray = () => {
    const array = []
    for (let key in characteristics) {
      array.push(parseFloat(characteristics[key].value))
    }
    return array;
  }

  const characteristicsNamesArray = () => {
    const array = [];
    for (let key in characteristics) {
      array.push(key)
    }
    return array;
  }

  const characteristicsDescriptions = {
    Size: ['Too small', 'Too large'],
    Width: ['Too narrow', 'Too wide'],
    Comfort: ['Uncomfortable', 'Perfect'],
    Quality: ['Poor', 'Perfect'],
    Length: ['Runs short', 'Runs long'],
    Fit: ['Runs tight', 'Runs long']
  }

  return (
    <div className = 'product-breakdown-container'>
      {characteristicsNamesArray().map((name, index) => {
        return (
          <div key = {index}> <br></br>{name}<br></br>
            <input className = 'product-breakdown-slider' type = "range" value = {characteristicsValuesArray()[index] * 10} readOnly/>
            <i className = 'left-characteristic-desc'>{characteristicsDescriptions[name][0]}</i>
            <i className = 'right-characteristic-desc'>{characteristicsDescriptions[name][1]}</i>
            <br></br>
          </div>)
      })}


    </div>
  )
}

export default ProductBreakdown;