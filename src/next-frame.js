/* global cancelAnimationFrame */

export default
function nextFrame({done}, handle) {
  if (done === true) {
    cancelAnimationFrame(handle)
  }
}
