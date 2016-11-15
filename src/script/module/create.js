export default () => {
  const date = new Date()
  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDay(),
    hour: date.getHours()
  }
}