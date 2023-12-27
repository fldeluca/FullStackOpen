import { useState } from "react";

const Button = ({ name, handleClick }) => {
  return (
    <>
      <button onClick={handleClick}>{name}</button>
    </>
  );
};

const StatisticLine = ({ text, number }) => {
  if (text === "Positive") {
    return (
      <tr>
        <td>{text}</td>
        <td>{number} %</td>
      </tr>
    );
  } else {
    return (
      <tr>
        <td>{text}</td>
        <td>{number}</td>
      </tr>
    );
  }
};

const Statistic = ({ props }) => {
  if (props.isEmpty) {
    return <p>No feedback given</p>;
  } else {
    return (
      <div>
        <table>
          <tbody>
            <StatisticLine text="Good" number={props.good} />
            <StatisticLine text="Neutral" number={props.neutral} />
            <StatisticLine text="Bad" number={props.bad} />
            <StatisticLine text="Total" number={props.sum} />
            <StatisticLine text="Average" number={props.avg} />
            <StatisticLine text="Positive" number={props.positive} />
          </tbody>
        </table>
      </div>
    );
  }
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [isEmpty, setIsEmpty] = useState(true);
  const sum = good + neutral + bad;
  const avg = (good * 1 + neutral * 0 + bad * -1) / sum;
  const positive = (good / sum) * 100;

  const props = {
    good: good,
    neutral: neutral,
    bad: bad,
    sum: sum,
    avg: avg,
    positive: positive,
    isEmpty: isEmpty,
  };

  const handleGoodClick = () => {
    const updatedGood = good + 1;
    setGood(updatedGood);
    setIsEmpty(false);
  };

  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1;
    setNeutral(updatedNeutral);
    setIsEmpty(false);
  };

  const handleBadClick = () => {
    setBad(bad + 1);
    setIsEmpty(false);
  };

  return (
    <div>
      <h1>Give feedback</h1>
      <Button name="Good" handleClick={handleGoodClick} />
      <Button name="Neutral" handleClick={handleNeutralClick} />
      <Button name="Bad" handleClick={handleBadClick} />
      <h1>Statistics</h1>
      <Statistic props={props} />
    </div>
  );
};

export default App;
