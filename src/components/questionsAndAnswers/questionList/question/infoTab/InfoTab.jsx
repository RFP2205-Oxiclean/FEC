import React from 'react';
import AnswerModal from './answerModal/AnswerModal';


//let original = <p className="add-answer-event" >Add Answer</p>;

class InfoTab extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activeModal: false,
        }
    }


    toggleModal = () => {
        if (this.state.activeModal) {
            this.state.activeModal =  false;
        } else {
            this.state.activeModal =  true;
        }
        this.setState(JSON.parse(JSON.stringify(this.state)));
    }

    render() { // &nbsp; is a whitespace character
        let yesData = this.props.activeHelpful ? this.props.question.question_helpfulness : this.props.question.question_helpfulness + 1;
        let yes = <p className="helpful-event"  >Yes ({yesData})</p>;
        let add = <p className="add-answer-event " onClick={this.toggleModal.bind(this)}>Add Answer</p>;
        let answerModal = this.state.activeModal ? <AnswerModal question={this.props.question} clickHandler={this.toggleModal.bind(this)} product={this.props.product} /> : null

            return (
                <div className="info-tab">Helpful?&nbsp;
                    <div className="wrap" onClick={this.props.sendHelpful.bind(this)}> {yes}
                    </div>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;{add}
                    {answerModal}
                </div>)

    }

}


export default InfoTab;