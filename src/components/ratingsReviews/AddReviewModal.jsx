import React from 'react';
import StarRatingUserInput from './StarRatingUserInput.jsx'
import {IMG_API_KEY} from '/Users/jasonchiou/HR/FEC/config/config.js'
import axios from 'axios';
let newAxios = axios.create({
  headers: {"Content-Type": "text/plain"}
});



class AddReviewModal extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      rating: null,
      recommend: null,
      reviewSummary: '',
      reviewBody: '',
      photos: [],
      photosForDisplay: [],
      nickname: '',
      email: ''

    }
    this.handleRatingChange = this.handleRatingChange.bind(this);
    this.handleReviewSummaryChange = this.handleReviewSummaryChange.bind(this);
    this.handleReviewBodyChange = this.handleReviewBodyChange.bind(this);
    this.remainingCharacters = this.remainingCharacters.bind(this);
    this.showRatingDescription = this.showRatingDescription.bind(this);
    this.handleRecommendationChange = this.handleRecommendationChange.bind(this);
    this.handlePictureAdd = this.handlePictureAdd.bind(this);
    this.handleNicknameChange = this.handleNicknameChange.bind(this);
    this.handleReviewSubmit = this.handleReviewSubmit.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.showImageThumbnails = this.showImageThumbnails.bind(this);
    this.encodeImageFileAsURL = this.encodeImageFileAsURL.bind(this);
    this.submitPhotoToImgbb = this.submitPhotoToImgbb.bind(this);
  }

  handleRatingChange(rating) {
    this.setState({
      rating: rating
    })
  }

  showRatingDescription() {
    var ratingsArray = ['Poor', 'Fair', 'Average', 'Good', 'Great']
    if (this.state.rating === null) {
      return ''
    } else {
      return (<div>{ratingsArray[this.state.rating - 1]}</div>)
    }

  }

  handleRecommendationChange(e) {
    this.setState({
      recommend: e.target.value
    })
  }

  handleReviewSummaryChange(e) {
    e.preventDefault();
    this.setState({
      reviewSummary: e.target.value
    })
  }

  handleReviewBodyChange(e) {
    e.preventDefault();
    this.setState({
      reviewBody: e.target.value
    })
  }

  handlePictureAdd(e) {
    e.preventDefault();
    console.log('handle picture add was invoked')
    const photosCopy = this.state.photos.slice();
    const photosForDisplayCopy = this.state.photosForDisplay.slice();
    for (let key in e.target.files) {
      if (key < 5 && photosCopy.length < 5) {
        this.encodeImageFileAsURL(e.target.files[key])
        photosForDisplayCopy.push(URL.createObjectURL(e.target.files[key]))
      }

    }
    this.setState({
      photos: photosCopy,
      photosForDisplay: photosForDisplayCopy
    })
  }



  encodeImageFileAsURL(imageFile) {
    var reader = new FileReader();
    const photosCopy = this.state.photos.slice();
    reader.onloadend = function() {
      addEncodedImageToState(reader.result)
    }

    let addEncodedImageToState = (imageBase64) => {
      let photosCopy = this.state.photos.slice();
      photosCopy.push(imageBase64);
      this.setState({
        photos: photosCopy
      })
    }
    reader.readAsDataURL(imageFile);
  }



  showImageThumbnails() {
    return (
    <div>
      {this.state.photosForDisplay.map((photo, index) =>
      <img key = {index} src = {photo.url}/>
      )}
    </div>

    )
  }

  handleNicknameChange(e) {
    e.preventDefault();
    this.setState({
      nickname: e.target.value
    })
  }

  handleEmailChange(e) {
    e.preventDefault();
    this.setState({
      email: e.target.value
    })
  }

  handleReviewSubmit(e) {
    e.preventDefault();
    console.log('review submit button clicked')
    let invalidEntries = [];
    if (this.state.rating === null) {
      invalidEntries.push('rating')
    }
    if (this.state.recommend === null) {
      invalidEntries.push('recommendation')
    }
    if (this.state.reviewBody.length < 50) {
      invalidEntries.push('review body')
    }
    if (this.state.nickname.length === 0) {
      invalidEntries.push('nickname')
    }
    if (this.state.email.length ===0 || !this.emailIsValid(this.state.email)) {
      invalidEntries.push('email')
    }

    if (invalidEntries.length > 0) {
      let invalidSubmissionString = 'You must enter the following: '
      invalidSubmissionString += invalidEntries.join(', ');
      alert(invalidSubmissionString);
      return;
    } else {
      this.submitPhotoToImgbb(this.state.photos[0])
      console.log('Review passes criteria')
      return;
    }
  }


  showState(e) {
    e.preventDefault();
    console.log(this.state);
  }

  remainingCharacters() {
    if (this.state.reviewBody.length > 50) {
      return <div>Minimum reached</div>
    } else {
      return (<div>Minimum required characters left: {50 - this.state.reviewBody.length}</div>)
    }
  }

  emailIsValid(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }

    return false;
  }

  submitPhotoToImgbb(photo) {
    newAxios.post('https://api.imgbb.com/1/upload', {
      params: {
        key: IMG_API_KEY,
        image: JSON.stringify(photo)
      },
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then((result) => {
      console.log(result)
    })
    .catch((err) => {
      console.error(err);
    })
  }

  render() {
    return (
      <div className = 'modal-background'>Modal
      <button onClick = {this.submitPhotoToImgbb.bind(this)}>Send POST request for test</button>
        <div className = 'modal-container'>
          <button className = 'exit-modal-button' onClick = {this.props.closeModal}>&times;</button>
          <div className = 'modal-title'>
            <h1>Write Your Review</h1>
          </div>
          <div className = 'modal-subtitle'>
            <h2>About the {this.props.product_name}</h2>
          </div>

          {/* User inputted star rating */}
          <StarRatingUserInput handleRatingChange = {this.handleRatingChange} /><span>{this.showRatingDescription()}</span>

          {/* Recommendation Radio buttons */}
          <form onChange = {this.handleRecommendationChange}>
          <p>Do you recommend this product?</p>
          <input type = "radio" id = "modal-recommend-yes" text = "yes" value = "true" name = "modal-recommendation"/>
          <label htmlFor="modal-recommend-yes">Yes</label>
          <input type = "radio" id = "modal-recommend-no" text = "no" value = "false" name = "modal-recommendation"/>
          <label htmlFor="modal-recommend-no">No</label>
          </form>

          {/* Review summary and body */}
          <form>
            Review Summary: <input onChange = {this.handleReviewSummaryChange} maxLength = "60" placeholder = 'Example: Best purchase ever!' size = "40"/>
          </form>

          <form>
            Review Body: <input onChange = {this.handleReviewBodyChange} maxLength = "1000" placeholder = "Why did you like the product or not?" font = "Times New Roman" minLength = "50" />
            <div>{this.remainingCharacters()}</div>
          </form>

          {/* Photo Upload */}
          <form>
            {this.state.photos.length < 5 ? <input type="file" name="filename" onChange = {this.handlePictureAdd} multiple/> : ''}
          </form>

          {this.state.photosForDisplay[0] && <img src = {this.state.photosForDisplay[0]} height = '20px' align = "left"/>}
          {this.state.photosForDisplay[1] && <img src = {this.state.photosForDisplay[1]} height = '20px' align = "left"/>}
          {this.state.photosForDisplay[2] && <img src = {this.state.photosForDisplay[2]} height = '20px' align = "left"/>}
          {this.state.photosForDisplay[3] && <img src = {this.state.photosForDisplay[3]} height = '20px' align = "left"/>}
          {this.state.photosForDisplay[4] && <img src = {this.state.photosForDisplay[4]} height = '20px' align = "left"/>}
          <br></br>
          <br></br>


          {/* Nickname field */}
          <form className = "modal-nickname-field">
            Nickname: <input onChange = {this.handleNicknameChange}type="text" maxLength = "60" placeholder = "Example: jackson11!"/><br/>
            <small><i>For privacy reasons, do not use your full name or email address</i></small><br></br>
          </form>

          {/* Email field */}
          <form className = "modal-email-field">
            Email: <input onChange = {this.handleEmailChange}type="text" maxLength = "60" placeholder = "Example: jackson11@email.com"/><br></br>
            <small><i>For authentication reasons, you will not be emailed</i></small><br></br>
          </form>

          <button onClick = {this.handleReviewSubmit}>Submit Review</button>


        </div>
        <button onClick = {this.showState.bind(this)}>Show state</button>

      </div>
    )
  }
}

export default AddReviewModal;

//