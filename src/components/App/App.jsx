import React, { Component } from "react";
import css from './App.module.css'
import { countTotalFeedback } from "utils/countTotalFeedback";
import { countPositiveFeedbackPercentage } from "utils/countPositiveFeedbackPercentage";
import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from "components/Section/Section";
import { Notification } from "components/Notification/Notification";
export class App extends Component{
  state = {
   good: 0,
   neutral: 0,
   bad: 0
}
 
  handleFeedbackOnClick = ({target:{name}}) => {
    this.setState({[name]:this.state[name]+1}
      )
  }
  
  render() {
    return (
      <div onClick={this.show} className={css.appStyle}>
          <Section className={css.sectionFeedback} title="Please leave feedback">
             <FeedbackOptions
                  options={this.state}
                  onLeaveFeedback={this.handleFeedbackOnClick}
              />
          </Section>
        
          <Section className={css.sectionStat} title="Statistics">
              {this.state.good === 0 && this.state.neutral === 0 && this.state.bad === 0
                  ? <Notification message="There is no feedback"/>
                  : <Statistics
                      good={this.state.good}
                      neutral={this.state.neutral}
                      bad={this.state.bad}
                      total={countTotalFeedback(this.state)}
                      positivePercentage={countPositiveFeedbackPercentage(this.state)}
                   />
               }
          </Section>
      </div>
    );
  }
};
