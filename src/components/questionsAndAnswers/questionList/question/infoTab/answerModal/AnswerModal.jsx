import React from  'react';
import axios from 'axios';
import PhotoList from './PhotoList.jsx'
import { url, API_KEY } from "../../../../../../../config/config.js";



class AnswerModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          name:'',
          email:'',
          input:'',
          photos : [],
          photoLimit : 5,
        }
    }

     loadFile(files) {


      let newAxios = axios.create();
      let reader = new FileReader()
      let loadPromise = new Promise ((res, rej) => {
      let data = reader.readAsDataURL(files[0])

        setTimeout(()=>{
          if (reader.result) {
            res(reader.result)
          } else {
            rej('failure')
          }
        },200)


      })
      .then((res) =>{
          this.state.photos[0] = res
          this.setState(JSON.parse(JSON.stringify(this.state)));
          //this.authenticateOrError()
          let form = new FormData();
          form.append("file",this.state.photos[0])
          form.append("upload_preset", "ct85fmvz")
          newAxios.post('https://api.cloudinary.com/v1_1/dwldnydnb/image/upload',form)
          .then((res)=>console.log(res))
          .catch((err)=>console.error(err))

      })
      .catch((err)=>console.error(err))



      // loadPromise.then((res, err)=>{
      //   console.log("yo")
      //   console.log("hi", reader.result)
      // })






      //console.log(file.target.files[0])

     }

    authenticateOrError () {
      if(!this.state.name.length) {
        alert("Invalid Username")
      } else if (this.state.email.length < 1 || this.state.email.indexOf('@') === -1) {
        alert("Invalid Email")
      } else if (!this.state.input) {
        alert("You need to enter an answer")
      } else {
        console.log(this.state.input,
           this.state.name,
           this.state.email,
           this.state.photos[0], 'request')
        let endPoint = `${url}/qa/questions/${this.props.question.question_id}/answers`
        let newAxios = axios.create({
          headers : {'Authorization' : API_KEY}
        })
        newAxios.post(endPoint, {
            question_id:this.props.question.question_id,
            body:this.state.input,
            name:this.state.name,
            email:this.state.email,
            photos:this.state.photos
        })
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
                      <h1>Submit your Answer</h1>
                      <h3>{this.props.product.name} : {this.props.question.question_body}</h3>
                      <form className="form">
                          <textarea className="user-input" type="text" maxLength="1000" placeholder="Please, enter your answer here..." onChange={(event)=>this.onInputChangeState('input',event.target.value)} />
                          <div className="name-wrap">
                              NickName : <input className="user-name" type="text" maxLength="60" placeholder="Example: jackson541!" onChange={(event)=>this.onInputChangeState('name',event.target.value)} />
                              <b className="disclaimer-n">For privacy reasons, do not use your full name or email address</b>
                          </div>

                          <div className="email-wrap">
                              Email : <input className="user-email" type="email" maxLength="60" placeholder="Example: jack@email.com" onChange={(event)=>this.onInputChangeState('email',event.target.value)} />
                              <b className="disclaimer-e">For authentication reasons, you will not be emailed</b>
                          </div>


                          <input className="user-photos" type="file" accepts="image/*" multiple onChange={(event)=>this.loadFile(event.target.files)}/>
                          {/* <PhotoList photos={this.state.photos}/> */}
                          <input className="user-submit" type="button" value="Submit" onClick={this.authenticateOrError.bind(this)}  />

                      </form>
                    </div>
              </div>
        )
    }
}



//onClick={this.props.clickHandler}



export default AnswerModal