const title = document.querySelector('.intro__title-change');

const messages = [
  'учить!',
  'помогать!',
  'проверять!',
  'вдохновлять!'
]

export function changeText () {


    let i
    setInterval(function() {
      if (i == undefined || i >= messages.length) {
        i = 0
      }
      title.textContent = messages[i]
      i = i + 1
    }, 10000)
}

