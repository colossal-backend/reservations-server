import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const PartySelectorWrapper = styled.div`
  position: relative;
  left: 144px;
  bottom: 29px;
  border: 1px solid #cccccc;
  border-radius: 3px;
  margin: 0px 0px 0px 3px;
  width: 142px;
  height: 27px;
`;

const SelectWrapper = styled.select`
  position: relative;
  bottom: 20px;
  width: 100%;
  height: 100%;
  padding: 3px 0px 0px 25px;
  overflow: visible !important;
  background-color: transparent;
  border: none;
  outline: 0;
`;

const Icon = styled.img`
  display: inline-block;
  position: relative;
  left: 5px;
  top: 2px;
  vertical-align: middle;
  height: 16px;
  width: 16px;
  z-index: 3;
`;


const PartySelector = ({ setSelectedPartySize }) => (
  <PartySelectorWrapper>
    {/* eslint-disable-next-line max-len */}
    <Icon src="https://fecreservations.s3-us-west-1.amazonaws.com/party.png" />
    <SelectWrapper onChange={(e) => { e.preventDefault(); setSelectedPartySize(parseInt(e.target.value.substring(0, 1), 0)); }}>
      <option data>1 person</option>
      <option>2 people</option>
      <option>3 people</option>
      <option>4 people</option>
      <option>5 people</option>
      <option>6 people</option>
    </SelectWrapper>
  </PartySelectorWrapper>
);

PartySelector.propTypes = {
  setSelectedPartySize: PropTypes.func,
};

PartySelector.defaultProps = {
  setSelectedPartySize: () => {},
};

export default PartySelector;
