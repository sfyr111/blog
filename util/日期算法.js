
// 得到每周的第一天(周一)
function getFirstDateOfWeek (theDate) {
  var firstDateOfWeek
  theDate.setDate(theDate.getDate() + 1 - theDate.getDay())
  firstDateOfWeek = theDate
  return firstDateOfWeek
}
// 得到每周的最后一天(周日)
function getLastDateOfWeek (theDate) {
  var lastDateOfWeek
  theDate.setDate(theDate.getDate() + 7 - theDate.getDay())
  lastDateOfWeek = theDate
  return lastDateOfWeek
}

// 得到上周的第一天(周一)
function getPreviousFirstDateOfWeek (theDate) {
  var firstDateOfWeek
  theDate.setDate(theDate.getDate() - 6 - theDate.getDay())
  firstDateOfWeek = theDate
  return firstDateOfWeek
}
// 得到上周的最后一天(周日)
function getPreviousLastDateOfWeek (theDate) {
  var lastDateOfWeek
  theDate.setDate(theDate.getDate() + 7 - theDate.getDay())
  lastDateOfWeek = theDate
  return lastDateOfWeek
}

// 得到下周的第一天(周一)
function getNextFirstDateOfWeek (theDate) {
  var firstDateOfWeek
  theDate.setDate(theDate.getDate() + 8 - theDate.getDay())
  firstDateOfWeek = theDate
  return firstDateOfWeek
}
// 得到下周的最后一天(周日)
function getNextLastDateOfWeek (theDate) {
  var lastDateOfWeek
  theDate.setDate(theDate.getDate() + 7 - theDate.getDay())
  lastDateOfWeek = theDate
  return lastDateOfWeek
}
