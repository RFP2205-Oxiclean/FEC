import React from 'react';

class Photo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    toggleModal () {

    }

    render() {
      <div className="photo-container">
        <img src={this.props.url}>

        </img>
      </div>
    }

}

export default Photo;