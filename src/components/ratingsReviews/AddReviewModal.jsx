import React from 'react';
import StarRatingUserInput from './StarRatingUserInput.jsx'
import {IMG_API_KEY} from '/Users/jasonchiou/HR/FEC/config/config.js'
import axios from 'axios';
import {Image} from 'cloudinary-react'



class AddReviewModal extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      rating: null,
      recommend: null,
      characteristics: {
        Size: 0,
        Width: 0,
        Comfort: 0,
        Quality: 0,
        Length: 0,
        Fit: 0
      },
      reviewSummary: '',
      reviewBody: '',
      photos: [],
      photosForDisplay: [],
      photosURLs: [],
      nickname: '',
      email: ''

    }
    this.handleRatingChange = this.handleRatingChange.bind(this);
    this.handleReviewSummaryChange = this.handleReviewSummaryChange.bind(this);
    this.handleReviewBodyChange = this.handleReviewBodyChange.bind(this);
    this.remainingCharacters = this.remainingCharacters.bind(this);
    this.handleRecommendationChange = this.handleRecommendationChange.bind(this);
    this.handlePictureAdd = this.handlePictureAdd.bind(this);
    this.handleNicknameChange = this.handleNicknameChange.bind(this);
    this.handleReviewSubmit = this.handleReviewSubmit.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.showImageThumbnails = this.showImageThumbnails.bind(this);
    this.handleSizeSelect = this.handleSizeSelect.bind(this);
    this.handleComfortSelect = this.handleComfortSelect.bind(this);
    this.handleWidthSelect = this.handleWidthSelect.bind(this);
    this.handleQualitySelect = this.handleQualitySelect.bind(this);
    this.handleFitSelect = this.handleFitSelect.bind(this);
    this.handleLengthSelect = this.handleLengthSelect.bind(this);
    this.addImageURL = this.addImageURL.bind(this);
    this.submitReviewToServer = this.submitReviewToServer.bind(this);
  }

  handleRatingChange(rating) {
    this.setState({
      rating: rating
    })
  }

  handleRecommendationChange(e) {
    let bool;
    if (e.target.value === 'true') {
      bool = true;
    } else {
      bool = false;
    }
    this.setState({
      recommend: bool
    })
  }

  handleSizeSelect(e) {
    console.log('size selected: ', e.target.value)
    var characteristicsCopy = JSON.parse(JSON.stringify(this.state.characteristics));
    characteristicsCopy['Size'] = e.target.value;
    this.setState({
      characteristics: characteristicsCopy
    })
  }

  handleWidthSelect(e) {
    console.log('width selected: ', e.target.value)
    var characteristicsCopy = JSON.parse(JSON.stringify(this.state.characteristics));
    characteristicsCopy['Width'] = e.target.value;
    this.setState({
      characteristics: characteristicsCopy
    })
  }

  handleComfortSelect(e) {
    console.log('comfort selected: ', e.target.value)
    var characteristicsCopy = JSON.parse(JSON.stringify(this.state.characteristics));
    characteristicsCopy['Comfort'] = e.target.value;
    this.setState({
      characteristics: characteristicsCopy
    })
  }

  handleQualitySelect(e) {
    console.log('quality selected: ', e.target.value)
    var characteristicsCopy = JSON.parse(JSON.stringify(this.state.characteristics));
    characteristicsCopy['Quality'] = e.target.value;
    this.setState({
      characteristics: characteristicsCopy
    })
  }

  handleLengthSelect(e) {
    console.log('length selected: ', e.target.value)
    var characteristicsCopy = JSON.parse(JSON.stringify(this.state.characteristics));
    characteristicsCopy['Length'] = e.target.value;
    this.setState({
      characteristics: characteristicsCopy
    })
  }

  handleFitSelect(e) {
    console.log('fit selected: ', e.target.value)
    var characteristicsCopy = JSON.parse(JSON.stringify(this.state.characteristics));
    characteristicsCopy['Fit'] = e.target.value;
    this.setState({
      characteristics: characteristicsCopy
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
    console.log(e.target.files);
    const photosCopy = this.state.photos.slice();
    const photosForDisplayCopy = this.state.photosForDisplay.slice();
    for (let key in e.target.files) {
      if (key < 5 && photosCopy.length < 5) {
        const formData = new FormData();
        console.log(e.target.files[key])
        formData.append("file", e.target.files[key]);
        formData.append("upload_preset", "vg1vzwft")
        photosCopy.push(formData);
        photosForDisplayCopy.push(URL.createObjectURL(e.target.files[key]))
      }
    }

    this.setState({
      photos: photosCopy,
      photosForDisplay: photosForDisplayCopy
    })
  }

  submitImagesToCloudinary() {

    console.log('Attempting to submit images to cloudinary', this.state.photos);
    const url = `https://api.cloudinary.com/v1_1/dky0ccpc4/image/upload`
    return Promise.all(
      this.state.photos.map((photo, index) => {
        return new Promise((resolve, reject) => {
          axios.post(url, photo)
          .then((response) => {
            console.log('posted this image')
            this.addImageURL(response.data.secure_url)
            resolve();
          })
          .catch((err) => {
            reject(err);
          })
        })
      })
    )


  }


  addImageURL(url) {
    let photosURLsCopy = this.state.photosURLs.slice();
    photosURLsCopy.push(url);
    this.setState({
      photosURLs: photosURLsCopy
    })
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
    this.submitImagesToCloudinary()
    .then(() => {
      let invalidEntries = [];
      if (this.state.rating === null) {
        invalidEntries.push('rating')
      }
      if (this.state.recommend === null) {
        invalidEntries.push('recommendation')
      }

      if(!this.state.characteristics['Size'] ||
          !this.state.characteristics['Width'] ||
          !this.state.characteristics['Comfort'] ||
          !this.state.characteristics['Quality'] ||
          !this.state.characteristics['Length'] ||
          !this.state.characteristics['Fit']) {
        invalidEntries.push('characteristics')
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
        console.log('Images were uploaded and review passes criteria, attempting to POST the review to server')
        this.submitReviewToServer();
        return;
      }
    })
    .catch((err) => {
      console.error('errored in handleReviewSubmit')
    })

  }

  submitReviewToServer() {
    let review = {
      product_id: this.props.product_id,
      rating: this.state.rating,
      summary: this.state.reviewSummary,
      body: this.state.reviewBody,
      recommend: this.state.recommend,
      name: this.state.nickname,
      email: this.state.email,
      photos: this.state.photosURLs,
      characteristics: this.state.characteristics
    }
    console.log(review);
  }


  showState(e) {
    e.preventDefault();
    console.log(this.state);
  }

  remainingCharacters() {
    if (this.state.reviewBody.length > 50) {
      return <div>Minimum reached</div>
    } else {
      return (<small><i>Minimum required characters left: {50 - this.state.reviewBody.length}</i></small>)
    }
  }

  emailIsValid(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }

    return false;
  }

  sizeDefinitions = ['None selected', 'A size too small', 'Half a size too small', 'Perfect', 'Half a size too big', 'A size too wide'];

  widthDefinitions = ['None selected', 'Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'];

  comfortDefinitons = ['None selected', 'Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'];

  qualityDefinitions = ['None selected', 'Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'];

  lengthDefinitions = ['None selected', 'Runs short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'];

  fitDefinitions = ['None selected', 'Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long'];

  render() {
    return (
      <div className = 'modal-background'>
        <div className = 'modal-container'>
          <div><button className = 'exit-modal-button' onClick = {this.props.closeModal}>&times;</button></div>

          <div className = 'modal-title'>
            Write Your Review
          </div>
          <div className = 'modal-subtitle'>
            About the {this.props.product_name}
          </div>
          <br></br>
          {/* User inputted star rating */}
          <StarRatingUserInput handleRatingChange = {this.handleRatingChange} />

          {/* Recommendation Radio buttons */}
          <br></br>
          <form onChange = {this.handleRecommendationChange}>
          Do you recommend this product?&nbsp;&nbsp;
            <input type = "radio" id = "modal-recommend-yes" text = "yes" value = "true" name = "modal-recommendation"/>
            <label htmlFor="modal-recommend-yes">Yes</label>
            <input type = "radio" id = "modal-recommend-no" text = "no" value = "false" name = "modal-recommendation"/>
            <label htmlFor="modal-recommend-no">No</label>
          </form>

          {/* Characteristics Radio Buttons */}
          <br></br>
          <span className = 'modal-characteristic-title'>Size: <i>{this.sizeDefinitions[this.state.characteristics['Size']]}</i></span>
          <form className = "modal-size-form" onChange = {this.handleSizeSelect}>
            <div className = "radio-box">
              <input type = "radio" name = "size" value ="1"/><label>A size too small</label>
            </div>
            <div className = "radio-box">
              <input type = "radio" name = "size" value ="2"/><label>&nbsp;</label>
            </div>
            <div className = "radio-box">
              <input type = "radio" name = "size" value ="3"/><label>&nbsp;</label>
            </div>
            <div className = "radio-box">
              <input type = "radio" name = "size" value ="4"/><label>&nbsp;</label>
            </div>
            <div className = "radio-box">
              <input type = "radio" name = "size" value ="5"/><label>A size too big</label>
            </div>

          </form>
          <hr></hr>

          <span className = 'modal-characteristic-title'>Width: <i>{this.widthDefinitions[this.state.characteristics['Width']]}</i></span>
          <form onChange = {this.handleWidthSelect}>
            <div className = "radio-box">
              <input type = "radio" name = "size" value ="1"/><label>Too narrow</label>
            </div>
            <div className = "radio-box">
              <input type = "radio" name = "size" value ="2"/><label>&nbsp;</label>
            </div>
            <div className = "radio-box">
              <input type = "radio" name = "size" value ="3"/><label>&nbsp;</label>
            </div>
            <div className = "radio-box">
              <input type = "radio" name = "size" value ="4"/><label>&nbsp;</label>
            </div>
            <div className = "radio-box">
              <input type = "radio" name = "size" value ="5"/><label>Too wide</label>
            </div>

          </form>

          <span className = 'modal-characteristic-title'>Comfort: <i>{this.comfortDefinitons[this.state.characteristics['Comfort']]}</i></span>
          <form onChange = {this.handleComfortSelect}>
            <div className = "radio-box">
              <input type = "radio" name = "size" value ="1"/><label>Uncomfortable</label>
            </div>
            <div className = "radio-box">
              <input type = "radio" name = "size" value ="2"/><label>&nbsp;</label>
            </div>
            <div className = "radio-box">
              <input type = "radio" name = "size" value ="3"/><label>&nbsp;</label>
            </div>
            <div className = "radio-box">
              <input type = "radio" name = "size" value ="4"/><label>&nbsp;</label>
            </div>
            <div className = "radio-box">
              <input type = "radio" name = "size" value ="5"/><label>Perfect</label>
            </div>

          </form>
          <span className = 'modal-characteristic-title'>Quality: <i>{this.qualityDefinitions[this.state.characteristics['Quality']]}</i></span>
          <form onChange = {this.handleQualitySelect}>
            <div className = "radio-box">
              <input type = "radio" name = "size" value ="1"/><label>Poor</label>
            </div>
            <div className = "radio-box">
              <input type = "radio" name = "size" value ="2"/><label>&nbsp;</label>
            </div>
            <div className = "radio-box">
              <input type = "radio" name = "size" value ="3"/><label>&nbsp;</label>
            </div>
            <div className = "radio-box">
              <input type = "radio" name = "size" value ="4"/><label>&nbsp;</label>
            </div>
            <div className = "radio-box">
              <input type = "radio" name = "size" value ="5"/><label>Perfect</label>
            </div>

          </form>


          <span className = 'modal-characteristic-title'>Length: <i> {this.lengthDefinitions[this.state.characteristics['Length']]}</i></span>
          <form onChange = {this.handleLengthSelect}>
            <div className = "radio-box">
              <input type = "radio" name = "size" value ="1"/><label>Runs short</label>
            </div>
            <div className = "radio-box">
              <input type = "radio" name = "size" value ="2"/><label>&nbsp;</label>
            </div>
            <div className = "radio-box">
              <input type = "radio" name = "size" value ="3"/><label>&nbsp;</label>
            </div>
            <div className = "radio-box">
              <input type = "radio" name = "size" value ="4"/><label>&nbsp;</label>
            </div>
            <div className = "radio-box">
              <input type = "radio" name = "size" value ="5"/><label>Runs long</label>
            </div>

          </form>

          <span className = 'modal-characteristic-title'>Fit: <i>{this.fitDefinitions[this.state.characteristics['Fit']]}</i></span>
          <form onChange = {this.handleFitSelect}>
            <div className = "radio-box">
              <input type = "radio" name = "size" value ="1"/><label>Runs tight</label>
            </div>
            <div className = "radio-box">
              <input type = "radio" name = "size" value ="2"/><label>&nbsp;</label>
            </div>
            <div className = "radio-box">
              <input type = "radio" name = "size" value ="3"/><label>&nbsp;</label>
            </div>
            <div className = "radio-box">
              <input type = "radio" name = "size" value ="4"/><label>&nbsp;</label>
            </div>
            <div className = "radio-box">
              <input type = "radio" name = "size" value ="5"/><label>Runs long</label>
            </div>

          </form>



          {/* Review summary and body */}
          <form>
            <br></br>
            Review Summary: <input onChange = {this.handleReviewSummaryChange} maxLength = "60" placeholder = 'Example: Best purchase ever!' size = "40"/>

          </form>
          <br></br>
          Review Body:
          <form>
             <textarea id = "modal-review-body" onChange = {this.handleReviewBodyChange} maxLength = "1000" placeholder = "Why did you like the product or not?" font = "Times New Roman" minLength = "50" />
            <div>{this.remainingCharacters()}</div>
          </form>

          {/* Photo Upload */}
          <form>
          <br></br>
            {this.state.photos.length < 5 ? <div>Submit Photos (optional): <br></br><input type="file" name="filename" text = {'Submit Photo(s)'}onChange = {this.handlePictureAdd} multiple/></div> : ''}
          </form>
          <span>
          {this.state.photosForDisplay[0] && <img className = 'thumbnail-image' src = {this.state.photosForDisplay[0]} height = '100px' align = "left"/>}
          {this.state.photosForDisplay[1] && <img className = 'thumbnail-image' src = {this.state.photosForDisplay[1]} height = '100px' align = "left"/>}
          {this.state.photosForDisplay[2] && <img className = 'thumbnail-image' src = {this.state.photosForDisplay[2]} height = '100px' align = "left"/>}
          {this.state.photosForDisplay[3] && <img className = 'thumbnail-image' src = {this.state.photosForDisplay[3]} height = '100px' align = "left"/>}
          {this.state.photosForDisplay[4] && <img className = 'thumbnail-image' src = {this.state.photosForDisplay[4]} height = '100px' align = "left"/>}
          </span>
          <br></br>


          {/* Nickname field */}
          <form className = "modal-nickname-field">
            Nickname: <input onChange = {this.handleNicknameChange}type="text" maxLength = "60" placeholder = "Example: jackson11!"/><br/>
            <small><i>For privacy reasons, do not use your full name or email address</i></small>
          </form>
          <br></br>
          {/* Email field */}
          <form className = "modal-email-field">
            Email: <input onChange = {this.handleEmailChange}type="text" maxLength = "60" placeholder = "Example: jackson11@email.com"/><br></br>
            <small><i>For authentication reasons, you will not be emailed</i></small>
          </form>
          <br></br>
          <form>
          <button onClick = {this.handleReviewSubmit}>Submit Review</button>
          <button onClick = {this.showState.bind(this)}>Show state</button>
          </form>



        </div>


      </div>
    )
  }
}

export default AddReviewModal;

//