import React, { Component } from "react";
import css from "./FeedbackOptions.module.css"
class FeedbackOptions extends Component{
    state = {}
    render() {
        return (<>
                
                    <div className={css.buttonsConteiner}>
                        <button className={css.button} name="good"  onClick={this.props.onLeaveFeedback}>Good</button>
                        <button className={css.button} name="neutral"  onClick={this.props.onLeaveFeedback}>Neutral</button>
                        <button className={css.button} name="bad"  onClick={this.props.onLeaveFeedback}>Bad</button>
                    </div>
                </>
        )
    }
}

export default FeedbackOptions