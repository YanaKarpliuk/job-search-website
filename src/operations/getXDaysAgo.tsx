import moment from "moment";

export default function getXDaysAgo(date: string) {
  return moment(date, "YYYYMMDD").fromNow();
}
