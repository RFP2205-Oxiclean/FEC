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
        return (
            <div className="photo-container">
                <img src={this.props.url} className="photo">

                </img>
            </div>)
      }

}

export default Photo;