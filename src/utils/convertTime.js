export const convertTime = (finishDate) => {
  const actual = new Date(Date.now());
  const end = new Date(Date.parse(finishDate));

  let minutes = Math.floor((end - actual) / 60000);
  const hours = Math.floor(minutes / 60);
  minutes = minutes % 60;

  return hours + "h " + minutes + "m";
};