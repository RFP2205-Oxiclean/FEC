import React from 'react';
import axios from 'axios';
import ImageModal from './imageModal/ImageModal.jsx'
const Buffer = require('buffer').Buffer

class Photo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalActive: false,
        }
    }

    toggleModal () {
        this.state.modalActive = this.state.modalActive ? false : true;
        this.setState(JSON.parse(JSON.stringify(this.state)));
    }

    render() {
        let modal = null;
        if (this.state.modalActive) {
            modal = <ImageModal photo={this.props.url} clickHandler={this.toggleModal.bind(this)} />
        }

        return (
            <div className="photo-container" onClick={this.toggleModal.bind(this)}>
                <img src={this.props.url} className="photo" />
                {modal}
            </div>)
    }

}



export default Photo;

