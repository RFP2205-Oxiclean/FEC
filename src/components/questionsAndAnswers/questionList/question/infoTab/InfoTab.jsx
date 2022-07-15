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
            productName : ''
        }
    }


    toggleModal = () => {
        // console.log()
        // let endPoint = `${url}/products/${this.props.productId}`
        // axios.get(endPoint)                               // dont set current state create a new one
        // .then((res)=>{
        //
        //     console.log(res)
        // })
        // .catch((err)=>{
        //     console.error("error in getting product", err)
        // })

        let endPoint = `${url}/products/${this.props.productId}`
        console.log(endPoint)
        axios.get(endPoint)
        .then((res) => {
            this.state.productName = res;
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
        let yes = <p className="helpful-event"  >Yes ({this.props.question.question_helpfulness})</p>;
        let add = <p className="add-answer-vent" onClick={()=>this.toggleModal()}>Add Answer</p>;
        if (this.state.activeModal) {
            return (
            <div className="info-tab"> Helpful?
                <div onClick={()=>this.props.sendHelpful()}>{yes}
                </div> | {add}
                <AnswerModal question={this.props.question} clickHandler={this.toggleModal.bind(this) } />
            </div>)
        } else {
            return (
                <div className="info-tab"> Helpful?
                    <div onClick={()=>this.props.sendHelpful()}>{yes}
                    </div> | {add}
                </div>)
        }
    }

}




// const InfoTab = (props) => {
//     let yes = <p className="helpful-event"  >Yes ({props.question.question_helpfulness})</p>;
//     let addOriginal = <p className="add-answer-vent" onClick={()=>toggleModal()}>Add Answer</p>;

//     let addAlternate = (<p className="add-answer-vent" onClick={()=>toggleModal()} >
//         Add An

//     </p>);

//     return (

// }

export default InfoTab;