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
            uploadURLs:[]
        }
    }

    clearPhotos() {
        this.state.photos = [];
        this.setState(JSON.parse(JSON.stringify(this.state)));
    }
    loadFiles(files) {

        let maxIteration = 10;
        let promiseArray = [];

        let readFile = (index) => {
            return new Promise ((res, rej) => {

                let reader = new FileReader();
                let data = reader.readAsDataURL(files[index])
                let loop = (iteration) => {
                    setTimeout(()=>{
                        if (reader.result) {
                            res(reader.result)
                        } else if (iteration > maxIteration) {
                            rej('failure')
                        } else {
                            loop(iteration+1)
                        }
                    },200)
              }
              loop(0);
            })
        }



        for (let i = this.state.photos.length; i < files.length && i < this.state.photoLimit; i++ ) {
            promiseArray.push(readFile(i));
        }
        for (let i = this.state.photos.length; i < promiseArray.length; i++) {
              promiseArray[i].then((res)=>{
                  this.state.photos.push(res);

                  this.setState(JSON.parse(JSON.stringify(this.state)));
              })
        }


     }

    getURLsForUploadedFiles(files) { //returns promise array
        let results = [];
        for (let i = 0 ; i < files.length; i++) {
            let newPromise = new Promise((resolve,reject)=>{
                let form = new FormData();
                let newAxios = axios.create();
                form.append("file",files[i])
                form.append("upload_preset", "ct85fmvz")
                newAxios.post('https://api.cloudinary.com/v1_1/dwldnydnb/image/upload',form)
                .then((res)=>resolve(res))
                .catch((err)=>{reject(err)})
            })
            results.push(newPromise)
        }
        return results;
    }

    validateEmail() { // add more details later
        if (this.state.email.length < 4 || this.state.email.indexOf('@') === -1
        || this.state.email.indexOf(' ') !== -1 || this.state.email.indexOf('.') === -1
        || this.state.email.indexOf('.') === this.state.email.length-1
        ){
          return true;
        }
        return false;
    }

    authenticateOrError () {
        if(!this.state.name.length) {
            alert("Invalid Username")
        } else if (this.validateEmail(this.state.email)) {
            alert("Invalid Email")
        } else if (!this.state.input) {
            alert("You need to enter an answer")
        } else if (this.state.photos.length > 0){
            Promise.all(this.getURLsForUploadedFiles(this.state.photos))
            .then((res)=>{
                res.map((oneReq)=>{
                  this.state.uploadURLs.push(oneReq.data.url)
                })
                this.setState(JSON.parse(JSON.stringify(this.state)));
                this.sendForm();
            }).catch((err)=>{
                console.error(err);
                alert("Failed to upload your files, please try again \b Acceptable Formats: PNG JPG JPEG");
            })
        } else {
          this.sendForm();
        }

    }

    sendForm() {

        let endPoint = `${url}/qa/questions/${this.props.question.question_id}/answers`
        let newAxios = axios.create({
          headers : {'Authorization' : API_KEY}
        })
        newAxios.post(endPoint, {
            question_id:this.props.question.question_id,
            body:this.state.input,
            name:this.state.name,
            email:this.state.email,
            photos:this.state.uploadURLs
        })
        .then((res)=>{alert("Form succesfully submitted!");this.props.clickHandler()})
        .catch((err)=>console.error(err))
    }

    onInputChangeState(stateItem, newState) {
        this.state[stateItem] = newState;
        this.setState(JSON.parse(JSON.stringify(this.state)));
    }



    render() {
        return (
            <div className="modal" data-testid="answer-modal" >
                  <div className="modal-container" >
                      <input type="button" className="modal-exit" data-testid="a-exit" value="X" onClick={this.props.clickHandler}/>
                      <h1>Submit your Answer</h1>
                      <h3>{this.props.product.name} : {this.props.question.question_body}</h3>
                      <form className="form">
                          <textarea className="user-input" data-testid="text-input" type="text" maxLength="1000" placeholder="Please, enter your answer here..." onChange={(event)=>this.onInputChangeState('input',event.target.value)} />
                          <div className="name-wrap">
                              NickName : <input className="user-name" type="text" data-testid="user-name-input" maxLength="60" placeholder="Example: jackson541!" onChange={(event)=>this.onInputChangeState('name',event.target.value)} />
                              <b className="disclaimer-n">For privacy reasons, do not use your full name or email address</b>
                          </div>

                          <div className="email-wrap">
                              Email : <input className="user-email" type="email" maxLength="60" data-testid="email-input" placeholder="Example: jack@email.com" onChange={(event)=>this.onInputChangeState('email',event.target.value)} />
                              <b className="disclaimer-e">For authentication reasons, you will not be emailed</b>
                          </div>


                          <div className="upload-msg">Upload up to 5 photos below:</div><input className="submit-photos-button" type="file" accepts="image/*" multiple onChange={(event)=>this.loadFiles(event.target.files)} onClick={this.clearPhotos.bind(this)}/>
                          <PhotoList photos={this.state.photos}/>
                          <input className="small-interactive-buttons" data-testid="submit" type="button" value="Submit" onClick={this.authenticateOrError.bind(this)}  />
                      </form>
                  </div>
            </div>
        )
    }
}





export default AnswerModal