import React from 'react';

class CharacteristicsInputs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characteristics: {}
    }
    this.onChangeRouter = this.onChangeRouter.bind(this);
  }

  characteristicTypes = ['Size', 'Width', 'Comfort', 'Quality', 'Length', 'Fit'];

  charDefinitions= {
    Size: ['None selected', 'A size too small', 'Half a size too small', 'Perfect', 'Half a size too big', 'A size too wide'],
    Width: ['None selected', 'Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'],
    Comfort: ['None selected', 'Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'],
    Quality: ['None selected', 'Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'],
    Length: ['None selected', 'Runs short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'],
    Fit: ['None selected', 'Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long']
  }

  onChangeRouter(e) {
    console.log(e.target.value);
    console.log(e.target.name);
    if (e.target.name === 'Size') {
      this.props.handleSizeSelect(e.target.value)
    } else if (e.target.name === 'Width') {
      this.props.handleWidthSelect(e.target.value)
    } else if (e.target.name === 'Comfort') {
      this.props.handleComfortSelect(e.target.value)
    } else if (e.target.name === 'Quality') {
      this.props.handleQualitySelect(e.target.value)
    } else if (e.target.name === 'Length') {
      this.props.handleLengthSelect(e.target.value)
    } else if (e.target.name === 'Width') {
      this.props.handleWidthSelect(e.target.value)
    } else if (e.target.name === 'Fit') {
      this.props.handleFitSelect(e.target.value);
    }
  }


  render() {
    return (
      <div className = 'characteristics-inputs-container'>
        <br></br>
        {this.characteristicTypes.map((char, index) => {
          return (
            <div key = {index}>
              {this.props.metadata.characteristics[char] ?
              <div>
                <span
                  className = 'modal-characteristic-title'>{char}:&nbsp;
                  <i>
                    {this.charDefinitions[char][this.props.characteristicsState[this.props.metadata.characteristics[char].id]]}
                  </i>
                </span>
                <form className = "modal-size-form" onChange = {this.onChangeRouter}>
                  <div className = "radio-box">
                    <input type = "radio" name = {char} value ="1"/><label>{this.charDefinitions[char][1]}</label>
                  </div>
                  <div className = "radio-box">
                    <input type = "radio" name = {char} value ="2"/><label>&nbsp;</label>
                  </div>
                  <div className = "radio-box">
                    <input type = "radio" name = {char} value ="3"/><label>&nbsp;</label>
                  </div>
                  <div className = "radio-box">
                    <input type = "radio" name = {char} value ="4"/><label>&nbsp;</label>
                  </div>
                  <div className = "radio-box">
                    <input type = "radio" name = {char} value ="5"/><label>{this.charDefinitions[char][5]}</label>
                  </div>

                </form>
                </div>: ''}
            </div>
          )
        })}

      </div>
    )
  }

}

export default CharacteristicsInputs;