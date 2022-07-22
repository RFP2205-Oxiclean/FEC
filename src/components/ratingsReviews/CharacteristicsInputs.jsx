import React from 'react';

class CharacteristicsInputs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characteristics: {}
    }
  }

  sizeDefinitions = ['None selected', 'A size too small', 'Half a size too small', 'Perfect', 'Half a size too big', 'A size too wide'];

  widthDefinitions = ['None selected', 'Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'];

  comfortDefinitons = ['None selected', 'Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'];

  qualityDefinitions = ['None selected', 'Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'];

  lengthDefinitions = ['None selected', 'Runs short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'];

  fitDefinitions = ['None selected', 'Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long'];


  render() {
    return (
      <div className = 'characteristics-inputs-container'>
        <br></br>
              {this.props.metadata.characteristics['Size'] ? <div><span className = 'modal-characteristic-title'>Size: <i>{this.sizeDefinitions[this.props.characteristicsState[`${this.props.metadata.characteristics['Size'].id}`]]}</i></span>
              <form className = "modal-size-form" onChange = {this.props.handleSizeSelect}>
                <div className = "radio-box">
                  <input type = "radio" name = "size" value ="1"/><label>A size too small</label>
                </div>
                <div className = "radio-box">
                  <input type = "radio" name = "size" value ="2"/><label>&nbsp;</label>
                </div>
                <div className = "radio-box">
                  <input type = "radio" name = "size" value ="3"/><label>&nbsp;</label>
                </div>
                <div className = "radio-box">
                  <input type = "radio" name = "size" value ="4"/><label>&nbsp;</label>
                </div>
                <div className = "radio-box">
                  <input type = "radio" name = "size" value ="5"/><label>A size too big</label>
                </div>

              </form>
              <br></br></div>: ''}

              {this.props.metadata.characteristics['Width'] ? <div><span className = 'modal-characteristic-title'>Width: <i>{this.widthDefinitions[this.props.characteristicsState[`${this.props.metadata.characteristics['Width'].id}`]]}</i></span>
              <form onChange = {this.props.handleWidthSelect}>
                <div className = "radio-box">
                  <input type = "radio" name = "size" value ="1"/><label>Too narrow</label>
                </div>
                <div className = "radio-box">
                  <input type = "radio" name = "size" value ="2"/><label>&nbsp;</label>
                </div>
                <div className = "radio-box">
                  <input type = "radio" name = "size" value ="3"/><label>&nbsp;</label>
                </div>
                <div className = "radio-box">
                  <input type = "radio" name = "size" value ="4"/><label>&nbsp;</label>
                </div>
                <div className = "radio-box">
                  <input type = "radio" name = "size" value ="5"/><label>Too wide</label>
                </div>

              </form>
              <br></br></div> : ''}

              {this.props.metadata.characteristics['Comfort'] ? <div><span className = 'modal-characteristic-title'>Comfort: <i>{this.comfortDefinitons[this.props.characteristicsState[`${this.props.metadata.characteristics['Comfort'].id}`]]}</i></span>
              <form onChange = {this.props.handleComfortSelect}>
                <div className = "radio-box">
                  <input type = "radio" name = "size" value ="1"/><label>Uncomfortable</label>
                </div>
                <div className = "radio-box">
                  <input type = "radio" name = "size" value ="2"/><label>&nbsp;</label>
                </div>
                <div className = "radio-box">
                  <input type = "radio" name = "size" value ="3"/><label>&nbsp;</label>
                </div>
                <div className = "radio-box">
                  <input type = "radio" name = "size" value ="4"/><label>&nbsp;</label>
                </div>
                <div className = "radio-box">
                  <input type = "radio" name = "size" value ="5"/><label>Perfect</label>
                </div>

              </form>
              <br></br></div> : ''}

              {this.props.metadata.characteristics['Quality'] ? <div><span className = 'modal-characteristic-title'>Quality: <i>{this.qualityDefinitions[this.props.characteristicsState[`${this.props.metadata.characteristics['Quality'].id}`]]}</i></span>
              <form onChange = {this.props.handleQualitySelect}>
                <div className = "radio-box">
                  <input type = "radio" name = "size" value ="1"/><label>Poor</label>
                </div>
                <div className = "radio-box">
                  <input type = "radio" name = "size" value ="2"/><label>&nbsp;</label>
                </div>
                <div className = "radio-box">
                  <input type = "radio" name = "size" value ="3"/><label>&nbsp;</label>
                </div>
                <div className = "radio-box">
                  <input type = "radio" name = "size" value ="4"/><label>&nbsp;</label>
                </div>
                <div className = "radio-box">
                  <input type = "radio" name = "size" value ="5"/><label>Perfect</label>
                </div>

              </form>
              <br></br></div> : ''}

              {this.props.metadata.characteristics['Length'] ? <div><span className = 'modal-characteristic-title'>Length: <i> {this.lengthDefinitions[this.props.characteristicsState[`${this.props.metadata.characteristics['Length'].id}`]]}</i></span>
              <form onChange = {this.props.handleLengthSelect}>
                <div className = "radio-box">
                  <input type = "radio" name = "size" value ="1"/><label>Runs short</label>
                </div>
                <div className = "radio-box">
                  <input type = "radio" name = "size" value ="2"/><label>&nbsp;</label>
                </div>
                <div className = "radio-box">
                  <input type = "radio" name = "size" value ="3"/><label>&nbsp;</label>
                </div>
                <div className = "radio-box">
                  <input type = "radio" name = "size" value ="4"/><label>&nbsp;</label>
                </div>
                <div className = "radio-box">
                  <input type = "radio" name = "size" value ="5"/><label>Runs long</label>
                </div>

              </form>
              <br></br></div> : ''}

              {this.props.metadata.characteristics['Fit'] ? <div><span className = 'modal-characteristic-title'>Fit: <i>{this.fitDefinitions[this.props.characteristicsState[`${this.props.metadata.characteristics['Fit'].id}`]]}</i></span>
              <form onChange = {this.props.handleFitSelect}>
                <div className = "radio-box">
                  <input type = "radio" name = "size" value ="1"/><label>Runs tight</label>
                </div>
                <div className = "radio-box">
                  <input type = "radio" name = "size" value ="2"/><label>&nbsp;</label>
                </div>
                <div className = "radio-box">
                  <input type = "radio" name = "size" value ="3"/><label>&nbsp;</label>
                </div>
                <div className = "radio-box">
                  <input type = "radio" name = "size" value ="4"/><label>&nbsp;</label>
                </div>
                <div className = "radio-box">
                  <input type = "radio" name = "size" value ="5"/><label>Runs long</label>
                </div>

              </form></div> : ''}
              </div>
    )
  }

}

export default CharacteristicsInputs;