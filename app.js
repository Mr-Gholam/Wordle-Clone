
const boxs = document.querySelectorAll('.box')
let number = 0
// const validWord = words[Math.ceil(Math.random()*2315)]
const validWord = "moone"
const spellWord = validWord.split("")
console.log(spellWord)
const object = []
document.body.onkeydown = ({ key }) => {
  if (key == "Backspace") {
    if (number == 0 || object.length == 0) return
    object.pop()
    boxs[number - 1].textContent = ""
    number--
  } else if (key == "Enter" && object.length == 5) {
    for (let i = 0; i <= object.length; i++) {
      let guess = object[i]
      let checking = spellWord.includes(guess)
      if (checking) {
        let place = spellWord.indexOf(guess)
        let placeHolder = number - 5
        if (object[i] === spellWord[i]) {
          boxs[placeHolder + place].style.background = 'green'
        } else {
          let worngPlace = object.indexOf(guess)
          boxs[placeHolder + worngPlace].style.background = '#ffef00'
        }
      }
    }
    object.length = 0
  } else if (key === 'Tab' || key === 'CapsLock' || key === 'Shift' || key === 'Control' || key === 'Alt' || key === '' || key === '\\' || key === 'Enter') {
    return
  } else {
    if (object.length == 5) return
    object.push(key)
    boxs[number].textContent = key
    number++
  }
}
