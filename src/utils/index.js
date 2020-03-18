export const formatNumber = num =>
  num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");

export const formatDate = dateString => {
  const dt = new Date(dateString);
  return `${(dt.getMonth() + 1).toString().padStart(2, "0")}/${dt
    .getDate()
    .toString()
    .padStart(2, "0")}/${dt
    .getFullYear()
    .toString()
    .padStart(4, "0")} ${dt
    .getHours()
    .toString()
    .padStart(2, "0")}:${dt
    .getMinutes()
    .toString()
    .padStart(2, "0")}:${dt
    .getSeconds()
    .toString()
    .padStart(2, "0")}`;
};

export const getMinNumInCountries = arr => {
  let lowestValue = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]?.confirmed < lowestValue) {
      lowestValue = arr[i]?.confirmed;
    }
  }
  return lowestValue;
};

export const getMaxNumInCountries = arr => {
  let greatestValue = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]?.confirmed > greatestValue) {
      greatestValue = arr[i]?.confirmed;
    }
  }
  return greatestValue;
};
