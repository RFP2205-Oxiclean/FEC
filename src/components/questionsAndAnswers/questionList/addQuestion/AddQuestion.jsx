import React from 'react';
import QuestionModal from './QuestionModal.jsx';
import axios from 'axios';



class AddQuestion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeModal: false
        };
    }

    toggleModal () {
        if (this.state.activeModal) {
            this.state.activeModal =  false;
        } else {
            this.state.activeModal =  true;
        }
        this.setState(JSON.parse(JSON.stringify(this.state)));
  }

  render () {
       let modal = this.state.activeModal ? <QuestionModal data={this.props.data} clickHandler={this.toggleModal.bind(this)} product={this.props.product} productId={this.props.productId}/> : null
      return (
        <div className="button-wrapper">
            <div className="interactive-buttons add-a" data-testid="add-question-button" onClick={this.toggleModal.bind(this)}>ADD A QUESTION +</div>
            {modal}
        </div>

        )
    }


}



export default AddQuestion