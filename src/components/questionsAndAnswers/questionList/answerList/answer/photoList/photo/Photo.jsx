import React from 'react';
import axios from 'axios';
const Buffer = require('buffer').Buffer

class Photo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photo: null
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
              responseType:'arraybuffer'
          })
          .then((res)=>{
              this.state.photo = Buffer.from(res.data,'binary').toString('base64');
              this.setState(JSON.parse(JSON.stringify(this.state)))
          })
          .catch((err)=>console.error(err))
          }

    }

    toggleModal () {

    }

    render() {
        return (
            <div className="photo-container">

                <img src={'data:image/jpeg;base64, '+this.state.photo} className="photo" />
            </div>)
      }

}

export default Photo;