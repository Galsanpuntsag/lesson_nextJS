import moment from "moment";

export const formatData = (dateStr) => {
  const dt = moment(dateStr).format("LL");
  return dt;
};
