import React from 'react';
import './select.scss';

const Select = ({ option, onChangeHandler }) => {
  const renderOption = () => {
    return option.map(data => <option key={data.key} value={data.key}>{data.name}</option>)
  }

  return (
    <select className="select-container" onChange={(event) => onChangeHandler(event.target.value)}>
      {renderOption()}
    </select>
  )
}
export default Select;