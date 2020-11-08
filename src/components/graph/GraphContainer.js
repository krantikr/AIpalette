import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import ReactHighstock from 'react-highcharts/ReactHighstock';
import { graphFilter } from '../../actions/actions';

import Select from './../select/Select';
import './graph.scss';

const GraphContainer = ({ graphData, graphFilter, isDateWrong }) => {
  const [fromValue, setFromValue] = useState('01/09/2008');
  const [toValue, setToValue] = useState('30/09/2008');

  useEffect(() => {
    graphFilter({ fromValue, toValue })
  }, [fromValue, toValue]);

  const config = {
    yAxis: {
      opposite: false,
      title: {
        offset: 50,
        text: 'Engagement %',
        align: "middle",
      }
    },
    rangeSelector: false,
    navigator: {
      enabled: false
    },
    scrollbar: {
      enabled: false
    },
    series: [{
      name: 'AAPL',
      data: graphData,
      showInNavigator: false,
      tooltip: {
        valueDecimals: 2
      }
    }]
  };

  const fromOption = [{ name: 'Sep 2008', key: '01/09/2008' }, { name: 'Oct  2008', key: '01/10/2008' }, { name: 'Nov 2008', key: '01/11/2008' }]
  const toOption = [{ name: 'Sep 2008', key: '30/09/2008' }, { name: 'Oct  2008', key: '30/10/2008' }, { name: 'Nov 2008', key: '30/11/2008' }]

  return (
    <div className="graph-container">
      <div className="filter-container">
        <span>From</span>
        <Select option={fromOption} onChangeHandler={setFromValue} />
        <span>To</span>
        <Select option={toOption} onChangeHandler={setToValue} />
      </div>
      <p className="error">{isDateWrong && 'To date should be greater thanfrom date'}</p>
      <ReactHighstock config={config}></ReactHighstock>
    </div>
  )
}

const mapStateToProps = (state) => ({
  graphData: state.graphData,
  isDateWrong: state.isDateWrong
});

const mapDispatchToProps = dispatch => ({
  graphFilter: data => dispatch(graphFilter(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(GraphContainer);