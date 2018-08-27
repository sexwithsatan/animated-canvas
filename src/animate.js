import repaint from './repaint.js'
const {requestAnimationFrame} = window

function loop(ms, now, next, {
  start = now,
  delta = 0
} = {}) {
  const elapsed = now - start + delta
  const handle = requestAnimationFrame(function (t) {
    loop(ms, t, next, {
      start: now,
      delta: elapsed % ms
    })
  })

  if (elapsed > ms) {
    next(handle, elapsed)
  }
}

export default
function animate(fps, frames, blit) {
  const g = frames()
  const ms = 1000/fps
  const handle = requestAnimationFrame(function (t) {
    repaint(handle, blit, g.next())
    loop(ms, t, function (handle, elapsed) {
      repaint(handle, blit, g.next(elapsed))
    })
  })

  return g
}