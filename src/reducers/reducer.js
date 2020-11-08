import { data, suit } from '../mockData/data';
import { dateInMilliseconds, filterWithDate } from '../utils/utils';

const defaultState = {
  isLoadMore: true,
  productData: [],
  isDateWrong: false,
  graphData: [],
}
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "LOAD_MORE":
      return {
        ...state,
        productData: suit.slice(0, action.payload),
        isLoadMore: action.payload < suit.length
      }
    case "GRAPH_Filter":
      const filterDate = action.payload
      const fromDate = dateInMilliseconds(filterDate.fromValue)
      const toDate = dateInMilliseconds(filterDate.toValue)
      return {
        ...state,
        isDateWrong: fromDate > toDate,
        graphData: (fromDate < toDate) ? filterWithDate(data, filterDate) : state.graphData
      }
    default:
      return state;
  }
}

export default reducer