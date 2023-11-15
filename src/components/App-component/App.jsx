import { Component } from 'react';
import { Statistics } from './Section-component/Statistics-component/Statistics';
import { FeedbackOptions } from './Section-component/FeedbackOptions-component/FeedbackOptions';
import { Section } from './Section-component/Section';
import { Notification } from './Section-component/Notification-component/Notification';
import { Wrapper } from './App.styled';
import { GlobalStyle } from './GlobalStyle';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addStatistic = event => {
    const review = event.target.dataset.id;

    this.setState(prevState => {
      return {
        [review]: prevState[review] + 1,
      };
    });
  };

  countTotalFeedback = () =>
    this.state.good + this.state.neutral + this.state.bad;

  countPositiveFeedbackPercentage = () =>
    Math.round((this.state.good * 100) / this.countTotalFeedback());

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positiveFeedbacks = this.countPositiveFeedbackPercentage();
    const options = Object.keys(this.state);

    return (
      <Wrapper>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.addStatistic}
          ></FeedbackOptions>
        </Section>

        <Section title="Statistics">
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positiveFeedbacks}
            ></Statistics>
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
        <GlobalStyle />
      </Wrapper>
    );
  }
}
