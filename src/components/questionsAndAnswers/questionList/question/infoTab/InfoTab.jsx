import React from 'react';
import AnswerModal from './AnswerModal';
import axios from 'axios';
import { url, API_KEY } from "../../../../../../config/config.js";

//let original = <p className="add-answer-vent" >Add Answer</p>;

class InfoTab extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activeModal: false,
            product : null,
        }
    }


    toggleModal = () => {

        let endPoint = `${url}/products/${this.props.productId}`
        axios.get(endPoint)
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
          console.error('Error in getProductInformation', err);
        })
    }

    render() {
        console.log(this.props.activeHelpful, 'this here')
        let yesData = this.props.activeHelpful ? this.props.question.question_helpfulness : this.props.question.question_helpfulness + 1;
        let yes = <p className="helpful-event"  >Yes ({yesData})</p>;
        let add = <p className="add-answer-vent" onClick={this.toggleModal.bind(this)}>Add Answer</p>;
        if (this.state.activeModal) {
            return (
            <div className="info-tab"> Helpful?
                <div onClick={this.props.sendHelpful.bind(this)}>{yes}
                </div> | {add}
                <AnswerModal question={this.props.question} clickHandler={this.toggleModal.bind(this)} product={this.state.product} />
            </div>)
        } else {
            return (
                <div className="info-tab"> Helpful?
                    <div onClick={this.props.sendHelpful.bind(this)}> {yes}
                    </div> | {add}
                </div>)
        }
    }

}


export default InfoTab;