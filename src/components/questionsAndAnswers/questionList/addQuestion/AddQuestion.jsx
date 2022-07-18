import React from 'react';
import QuestionModal from './QuestionModal.jsx';
import axios from 'axios';
import { url, API_KEY } from "../../../../../config/config.js";



class AddQuestion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: null,
            activeModal: false
        };
    }

    toggleModal () {
        let endPoint = `${url}/products/${this.props.productId}`
        let newAxios = axios.create({
            headers : {'Authorization' : API_KEY}
       })
        newAxios.get(endPoint, {headers : {
            'Authorization' : API_KEY
        }})
        .then((res) => {
            this.state.product = res.data;
            if (this.state.activeModal) {
                this.state.activeModal =  false;
            } else {
                this.state.activeModal =  true;
            }
            this.setState(JSON.parse(JSON.stringify(this.state)));
        })
        .catch((err) => {
            console.error('Error in get Product Information', err);
        })
  }

  render () {
       let modal = this.state.activeModal ? <QuestionModal data={this.props.data} clickHandler={this.toggleModal.bind(this)} product={this.state.product} productId={this.props.productId}/> : null

      return (
        <div className="button-wrapper">
            <div className="interactive-buttons add-a" onClick={this.toggleModal.bind(this)}>ADD A QUESTION +</div>
            {modal}
        </div>

        )
    }


}



export default AddQuestion