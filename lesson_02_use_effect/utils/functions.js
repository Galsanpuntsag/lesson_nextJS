import moment from "moment";

export const formatData = (dateStr) => {
  const dt = moment(dateStr).format("LL");
  return dt;
};

export const getData = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};
