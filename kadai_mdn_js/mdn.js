const date = new Date(Date.now());
const options = {
  year: "numeric",
  month: "long",
  day: "numeric"
};

console.log(date.toLocaleString("ja-JP", options));