
const slider = document.createElement('div')

slider.innerHTML = `
<img src="./img/Aldar.jpg" alt="Aldar">
<img src="./img/Burj Khalifa.jpg" alt="Burj Khalifa">
<img src="./img/Capital Gate.jpg" alt="Capital Gate">
<img src="./img/The Gherkin.jpg" alt="The Gherkin">
<img src="./img/World Trade Center.jpg" alt="World Trade Center">
`


function SliderTransition (gallery) {

  if(!gallery) {
    throw new Error('Gallary element shoould be passed')
  }

    const sliderLeft = document.querySelector('.slider_left img')
    const sliderCenter = document.querySelector('.slider_center img')
    const sliderRight = document.querySelector('.slider_right img')

    const prevBtn = document.querySelector('.button  .prev')
    const nextBtn = document.querySelector('.button  .next')

    let left = gallery.firstElementChild
    let center = left.nextElementSibling
    let right = center.nextElementSibling


      function showImage(imgLeft, imgCenter, imgRight) {
        left = imgLeft
        center = imgCenter
        right = imgRight

        sliderLeft.src = imgLeft.src
        sliderCenter.src = imgCenter.src
        sliderRight.src = imgRight.src
        
        
        size (sliderLeft.width, sliderCenter.width, sliderRight.width) 

      }

      function size () {
          widthL = '200'
          width = '400'
          widthR = '200'
        }
      
    function prevSlidTransition () {
        showImage( left.previousElementSibling || gallery.lastElementChild,
                    center.previousElementSibling || gallery.lastElementChild, 
                    right.previousElementSibling || gallery.lastElementChild,
                    )
       
    }

    function nextSlidTransition () {
        showImage( left.nextElementSibling || gallery.firstElementChild,
                    center.nextElementSibling || gallery.firstElementChild, 
                    right.nextElementSibling || gallery.firstElementChild,
                    )
    }


    prevBtn.addEventListener('click', prevSlidTransition)
    nextBtn.addEventListener('click', nextSlidTransition)

}

SliderTransition (slider)



function SliderLine (gallery) {

  if(!gallery) {
    throw new Error('Gallary element shoould be passed')
  }

  this.gallery = gallery
  this.imgWatc = this.gallery.firstElementChild
  this.lineSlider = document.querySelector('.line_slider img')
  this.prevBtn = document.querySelector('.slider_focus .prev')
  this.nextBtn = document.querySelector('.slider_focus .next')

  this.showSlid = this.showSlid.bind(this)
  this.prevSlidLine = this.prevSlidLine.bind(this)
  this.nextSlidLine = this.nextSlidLine.bind(this)

  this.prevBtn.addEventListener('click', this.prevSlidLine)
  this.nextBtn.addEventListener('click', this.nextSlidLine)
}

SliderLine.prototype.showSlid = function showSlid (img) {
  this.imgWatc = img
  this.lineSlider.src = img.src
  }

SliderLine.prototype.prevSlidLine = function prevSlidLine() {
  this.showSlid (this.imgWatc.nextElementSibling || this.gallery.firstElementChild)
  }

SliderLine.prototype.nextSlidLine = function nextSlidLine() {
  this.showSlid (this.imgWatc.previousElementSibling || this.gallery.lastElementChild)
  }

const slidLine = new SliderLine (slider)