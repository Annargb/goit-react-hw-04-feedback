import { OptionList, OptionsButton } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <OptionList>
    {options.map(option => (
      <li key={option}>
        <OptionsButton type="button" data-id={option} onClick={onLeaveFeedback}>
          {option}
        </OptionsButton>
      </li>
    ))}
  </OptionList>
);
