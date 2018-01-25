const workerize = require('workerize')
const fs = require('fs')

const counter = workerize(fs.readFileSync(__dirname + '/counter.js', 'utf8'))
counter.start(1000)

document.querySelector('.start').addEventListener('click', () => counter.start())
document.querySelector('.stop').addEventListener('click', () => counter.stop())

counter.addEventListener('message', (event) => {
  const { data } = event

  if (data.count) {
    document.querySelector('.counter').innerHTML = `Count: ${data.count}`
  }
  else {
    console.log('message', data)
  }
})
