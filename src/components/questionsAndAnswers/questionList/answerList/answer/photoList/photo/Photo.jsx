import React from 'react';
import axios from 'axios';
import ImageModal from './imageModal/ImageModal.jsx'
const Buffer = require('buffer').Buffer

class Photo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photo: undefined,
            modalActive: false
        }
    }

    componentDidMount() {
        this.getImage();
    }

    componentDidUpdate() {

    }

    getImage() {
      if (this.props.url !== undefined) {
            let endPoint = this.props.url;
            axios.get(endPoint, {
              responseType:'arraybuffer',
          })
          .then((res)=>{
              this.state.photo = Buffer.from(res.data,'binary').toString('base64');
              this.setState(JSON.parse(JSON.stringify(this.state)))
          })
          .catch((err)=>console.error(err))
          }

    }

    toggleModal () {
        this.state.modalActive = this.state.modalActive ? false : true;
        this.setState(JSON.parse(JSON.stringify(this.state)));
    }

    render() {
        let modal = null;
        if (this.state.modalActive) {
            modal = <ImageModal photo={this.state.photo} clickHandler={this.toggleModal.bind(this)} />
        }

        return (
            <div className="photo-container" onClick={this.toggleModal.bind(this)}>
                <img src={'data:image/jpeg;base64, '+this.state.photo} className="photo" />
                {modal}
            </div>)
    }

}



export default Photo;

