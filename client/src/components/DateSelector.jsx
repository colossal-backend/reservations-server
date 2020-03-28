import React, { useState } from 'react';
import styled from 'styled-components';
import Calendar from './Calendar';

// Tue, Mar 17

const SelectWrapper = styled.div`
  width: 233px;
  height: 18px;
  display: block;
  padding: 5px 24px 5px 32px;
  margin-bottom: 3px;
  padding-top: 7px;
  padding-bottom: 3px;
  border-radius: 3px;
  border: 1px solid #cccccc;
  border-radius: 3px;
  background-color: white;
`;

const DateText = styled.p`
  position: relative;
  bottom: 31px;
  right: 3px;
  font-size: 13.33px;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
`;

const Icon = styled.img`
  position: relative;
  right: 24px;
  bottom: 3px;
  vertical-align: middle;
  height: 14px;
  width: 14px;
  z-index: 3;
`;

const DateSelector = ({ selectedDate, setSelectedDate, thisMonth, nextMonth, today, nextMoment}) => {
  const [calendar, setCalendar] = useState(false);

  return (
    <SelectWrapper onClick={() => { setCalendar(!calendar); }}>
      <Icon src="https://fecreservations.s3-us-west-1.amazonaws.com/calendar.png" />
      <DateText>{ `${selectedDate.format('ddd')}, ${selectedDate.format('MMM')} ${selectedDate.format('D')}` }</DateText>
      { calendar ? <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} thisMonth={thisMonth} nextMonth={nextMonth} currentDate={today} nextMoment={nextMoment}/> : null }
    </SelectWrapper>
  );
};
// https://fecreservations.s3-us-west-1.amazonaws.com/calendar.png

export default DateSelector;
