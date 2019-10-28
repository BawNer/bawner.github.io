const timer = document.createElement('div')
const body = document.querySelector('body')
timer.setAttribute('id', 'timer')
body.appendChild(timer)

function setFirstSign() {
  let date = new Date()
  
  const uDataSignEnd = date.setDate(date.getDate() + 1)
  
  localStorage.setItem('uDataSignEnd', JSON.stringify(uDataSignEnd))
}

function parseTime(duration) {
  let hours = Math.floor(duration / (1000 * 60 * 60) % 24)
  let minutes = Math.floor(duration / (1000 * 60) % 60)
  let seconds = Math.floor((duration / 1000) % 60)

  hours = hours < 10 ? '0' + hours : hours
  minutes = minutes < 10 ? '0' + minutes : minutes
  seconds = seconds < 10 ? '0' + seconds : seconds

  return {
    hours,
    minutes,
    seconds
  }

}

function checkTimeOut() {
  const dateEnd = JSON.parse(localStorage.getItem('uDataSignEnd'))
  if (dateEnd - new Date().getTime() > 0) {
    // время еще не истекло
     let checkData = setInterval(() => {
      if (dateEnd - new Date().getTime() > 0) {
        // отрисовываем таймер
        let timeEnd = dateEnd - new Date().getTime()
        
        timer.innerText = `${parseTime(timeEnd).hours}:${parseTime(timeEnd).minutes}:${parseTime(timeEnd).seconds}`
      } else {
        console.log('Время истекло')
        // очищаем интервал и можно делать редирект
        clearInterval(chekData)
        checkData = null
      }
     }, 1000)
  } else {
    // надо делать редирект
    console.log('Пора делать редирект')
  }
}

function checkSign() {
  if (localStorage.getItem('uDataSignEnd') == null) {
    setFirstSign()
    checkTimeOut()
  } else {
    checkTimeOut()
  }
}

checkSign()