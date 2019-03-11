let mouseIsDown = false
$(document).on('mousedown', () => {
  mouseIsDown = true
  $('body').css('cursor', 'grabbing')
  $('.grid').css('display', 'block')
})
$(document).on('mouseup', () => {
    mouseIsDown = false
    $('body').css('cursor', 'default')
    // $('.grid').css('display', 'none')
})

$(document).on('mousemove', (e) => {
    if (!mouseIsDown) return
    e.preventDefault()
 
    
    $('.grid').css('top', e.pageY-50)
})