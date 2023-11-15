import { Statistics } from './Section-component/Statistics-component/Statistics';
import { FeedbackOptions } from './Section-component/FeedbackOptions-component/FeedbackOptions';
import { Section } from './Section-component/Section';
import { Notification } from './Section-component/Notification-component/Notification';
import { Wrapper } from './App.styled';
import { GlobalStyle } from './GlobalStyle';
import { useState } from 'react';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addStatistic = event => {
    const review = event.target.dataset.id;

    if (review === 'good') {
      setGood(prevState => prevState + 1);
    }

    if (review === 'neutral') {
      setNeutral(prevState => prevState + 1);
    }

    if (review === 'bad') {
      setBad(prevState => prevState + 1);
    }
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () =>
    Math.round((good * 100) / countTotalFeedback());

  const total = countTotalFeedback();
  const positiveFeedbacks = countPositiveFeedbackPercentage();
  const options = ['good', 'neutral', 'bad'];

  return (
    <Wrapper>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={addStatistic}
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
};
