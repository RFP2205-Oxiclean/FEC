import React from 'react';
import StarRatingUserInput from './StarRatingUserInput.jsx'

class AddReviewModal extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      rating: null,
      recommend: null,

    }
    this.handleRatingChange = this.handleRatingChange.bind(this);
  }

  handleRatingChange(rating) {
    this.setState({
      rating: rating
    })
  }

  handleRecommendationChange() {
    console.log('handleRecommendationChange was invoked');
  }

  showState(e) {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div className = 'modal-background'>Modal
        <div className = 'modal-container'>
          <button className = 'exit-modal-button' onClick = {this.props.closeModal}>&times;</button>
          <div className = 'modal-title'>
            <h1>Write Your Review</h1>
          </div>
          <div className = 'modal-subtitle'>
            <h2>About the {this.props.product_name}</h2>
          </div>

          <StarRatingUserInput handleRatingChange = {this.handleRatingChange}/>
          <form>
            Review Summary: <input maxLength = "60" placeholder = 'Example: Best purchase ever!' size = "40"/>
          </form>
          <form>
            Review Body: <textarea maxLength = "1000" placeholder = "Why did you like the product or not?" font = "Times New Roman" minLength = "50" />
          </form>


        </div>
        <button onClick = {this.showState.bind(this)}>Show state</button>

      </div>
    )
  }
}

export default AddReviewModal;