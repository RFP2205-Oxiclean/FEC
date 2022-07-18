import React from 'react';
import AnswerModal from './answerModal/AnswerModal';
import axios from 'axios';
import { url, API_KEY } from "../../../../../../config/config.js";

//let original = <p className="add-answer-event" >Add Answer</p>;

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
        axios.get(endPoint, {headers : {
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
          console.error('Error in getProductInformation', err);
        })
    }

    render() { // &nbsp; is a whitespace character
        console.log(this.props.activeHelpful, 'this here')
        let yesData = this.props.activeHelpful ? this.props.question.question_helpfulness : this.props.question.question_helpfulness + 1;
        let yes = <p className="helpful-event"  >Yes ({yesData})</p>;
        let add = <p className="add-answer-event " onClick={this.toggleModal.bind(this)}>Add Answer</p>;
        let answerModal = this.state.activeModal ? <AnswerModal question={this.props.question} clickHandler={this.toggleModal.bind(this)} product={this.state.product} /> : null

            return (
                <div className="info-tab">Helpful?&nbsp;
                    <div className="wrap" onClick={this.props.sendHelpful.bind(this)}> {yes}
                    </div>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;{add}
                    {answerModal}
                </div>)

    }

}


export default InfoTab;