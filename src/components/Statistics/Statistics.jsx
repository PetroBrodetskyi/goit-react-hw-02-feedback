import React, { Component } from 'react';

class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <div>
        <p>Добре: {good}</p>
        <p>Нейтрально: {neutral}</p>
        <p>Погано: {bad}</p>
        <p>Загальна кількість відгуків: {total}</p>
        <p>Відсоток позитивних відгуків: {positivePercentage}%</p>
      </div>
    );
  }
}

export default Statistics;
