import React from  'react';
import axios from 'axios';
import { url, API_KEY } from "../../../../../config/config.js";



class QuestionModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          name:'',
          email:'',
          input:'',
        }
    }

    authenticateOrError () {
      if(!this.state.name.length) {
        alert("Invalid Username")
      } else if (this.state.email.length < 1 || this.state.email.indexOf('@') === -1) {
        alert("Invalid Email")
      } else if (!this.state.input) {
        alert("You need to enter a answer")
      } else {
        console.log(this.state.input,
           this.state.name,
           this.state.email, this.props.productId, 'request')
        let endPoint = `${url}/qa/questions`
        axios.post(endPoint, {
            headers : {'Authorization' : API_KEY},
            body:this.state.input,
            name:this.state.name,
            email:this.state.email,
            product_id:this.props.productId,
        } )
        .then((res)=>console.log(res))
        .catch((err)=>console.error(err))
      }

    }

    onInputChangeState(stateItem, newState) {
      this.state[stateItem] = newState;
      this.setState(JSON.parse(JSON.stringify(this.state)));
    }



    render() {
        return (
              <div className="modal" >
                    <div className="modal-container" >
                      <input type="button" className="modal-exit" value="X" onClick={this.props.clickHandler}/>
                      <h1>Ask your Question</h1>
                      <h3>About the {this.props.product.name}</h3>
                      <form className="form">
                          <textarea className="user-input" type="text" maxLength="1000" placeholder="Please, enter your question here..." onChange={(event)=>this.onInputChangeState('input',event.target.value)} />
                          <div className="name-wrap">
                              NickName : <input className="user-name" type="text" maxLength="60" placeholder="Example: jackson11!" onChange={(event)=>this.onInputChangeState('name',event.target.value)} />
                              <b className="disclaimer-n">For privacy reasons, do not use your full name or email address</b>
                          </div>

                          <div className="email-wrap">
                              Email : <input className="user-email" type="email" maxLength="60" placeholder="Why did you like the product or not?" onChange={(event)=>this.onInputChangeState('email',event.target.value)} />
                              <b className="disclaimer-e">For authentication reasons, you will not be emailed</b>
                          </div>


                          <input className="user-submit" type="button" value="Submit" onClick={this.authenticateOrError.bind(this)}  />

                      </form>
                    </div>
              </div>
        )
    }
}

export default QuestionModal;