import React, { Component } from 'react';
import css from "./Feedback.module.css"

class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <div className={css.feedbackbtnflex}>
        {options.map((option) => (
          <button className={css.feedbackbutton} key={option} onClick={() => onLeaveFeedback(option)}>
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </button>
        ))}
      </div>
    );
  }
}

export default FeedbackOptions;
