/* global cancelAnimationFrame */

export default
function nextFrame({done}, handle) {
  if (done) {
    cancelAnimationFrame(handle)
  }
}
