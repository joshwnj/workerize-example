let id
let count = 0
export function start (delay = 1000) {
  clearInterval(id)
  id = setInterval(() => {
    count += 1
    postMessage({ count })
  }, delay)
}

export function stop () {
  clearInterval(id)
}
