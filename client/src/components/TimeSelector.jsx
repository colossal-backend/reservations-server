import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TimeSelectorWrapper = styled.div`
  position: relative;
  border: 1px solid #cccccc;
  border-radius: 3px;
  width: 142px;
  height: 27px;
`;

const SelectWrapper = styled.select`
  position: relative;
  bottom: 18px;
  width: 100%;
  height: 100%;
  padding: 0px 0px 0px 25px;
  overflow: visible !important;
  background-color: transparent;
  border: none;
  outline: 0;
`;

const Icon = styled.img`
  display: inline-block;
  position: relative;
  left: 9px;
  top: 3px;
  vertical-align: middle;
  height: 13px;
  width: 13px;
  z-index: 3;
`;

const TimeSelector = ({ timeOptions, setSelectedTime }) => (
  <TimeSelectorWrapper>
    <Icon src="https://fecreservations.s3-us-west-1.amazonaws.com/clock.png" />
    <SelectWrapper onChange={(e) => { e.preventDefault(); setSelectedTime(e.target.value); }}>
      {timeOptions.map((time) => (<option key={time}>{time}</option>))}
    </SelectWrapper>
  </TimeSelectorWrapper>
);

TimeSelector.propTypes = {
  timeOptions: PropTypes.arrayOf(PropTypes.string),
  setSelectedTime: PropTypes.func,
};

TimeSelector.defaultProps = {
  timeOptions: [],
  setSelectedTime: () => {},
};
// https://fecreservations.s3-us-west-1.amazonaws.com/clock.png

export default TimeSelector;
