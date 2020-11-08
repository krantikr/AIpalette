export const dateInMilliseconds = date => {
  const dateArgs = date.match(/\d{2,4}/g);
  const year = dateArgs[2];
  const month = parseInt(dateArgs[1]) - 1;
  const day = dateArgs[0];
  return new Date(year, month, day).getTime();
}

export const filterWithDate = (data, date) => {
  const filterData = [];
  data.map(val => {
    const fromDate = dateInMilliseconds(date.fromValue)
    const toDate = dateInMilliseconds(date.toValue)
    if (fromDate < toDate) {
      if (fromDate <= val[0] && toDate > val[0]) {
        filterData.push(val);
      }
    }
  })
  return filterData;
}