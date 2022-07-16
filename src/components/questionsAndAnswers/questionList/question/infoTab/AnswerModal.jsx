import React from  'react';



class AnswerModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          name:'',
          email:'',
          input:'',
          imageCount:0,
          photos : []
        }
    }

    loadFile(file) {

    }

    authenticateOrError =  () => {


    }



    render() {
        return (
              <div className="add-answer-modal" >
                    <div className="aa-modal-container" >
                      <h1>Submit your Answer</h1>
                      <h3>{this.props.product.name} : {this.props.question.question_body}</h3>
                      <form className="aa-form">
                          <textarea className="aa-user-input" type="text" maxLength="1000" placeholder="Please, enter your question here" />

                          NickName : <input className="aa-user-name" type="text" maxLength="60" placeholder="Example: jackson541!" />
                          <b className="aa-disclaimer-n">For privacy reasons, do not use your full name or email address</b>

                          Email : <input className="aa-user-email" type="email" maxLength="60" placeholder="Example: jack@email.com" />
                          <b className="aa-disclaimer-e">For authentication reasons, you will not be emailed</b>

                          <input className="aa-user-photos" type="file" accepts="image/*" />
                          <input className="aa-user-submit" type="button" value="Submit"  />

                      </form>
                    </div>
              </div>
        )
    }
}



//onClick={this.props.clickHandler}



export default AnswerModal