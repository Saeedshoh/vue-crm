export default  function dataFilter(value, format = 'date'){
  const options = {
    year: 'numeric', month: 'numeric', day: 'numeric',
    hour: 'numeric', minute: 'numeric', second: 'numeric',
    hour12: false
  }
  return new Intl.DateTimeFormat('ru-RU', options).format(new Date(value))
}
