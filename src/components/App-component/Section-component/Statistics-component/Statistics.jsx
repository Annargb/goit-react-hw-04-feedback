import {
  StatisticsTextItem,
  AccentText,
  StatisticList,
} from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <>
    <StatisticList>
      <StatisticsTextItem>
        Good: <AccentText>{good}</AccentText>
      </StatisticsTextItem>
      <StatisticsTextItem>
        Bad: <AccentText>{bad}</AccentText>
      </StatisticsTextItem>
      <StatisticsTextItem>
        Neutral: <AccentText>{neutral}</AccentText>
      </StatisticsTextItem>
      <StatisticsTextItem>
        Total: <AccentText>{total}</AccentText>
      </StatisticsTextItem>
      <StatisticsTextItem>
        Positive feedback: <AccentText>{positivePercentage}%</AccentText>
      </StatisticsTextItem>
    </StatisticList>
  </>
);
