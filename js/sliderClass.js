// class SLIDER {
// 	constructor(el){
// 			this.slider = el.slider
// 			this.sliderList = this.slider.querySelector('.slider-list')
// 			this.sliderItems = this.slider.querySelectorAll('.slider-list__item')
// 			this.prewBtn = this.slider.querySelector('.prew')
// 			this.nextBtn = this.slider.querySelector('.next')
// 			this.activeSlide = 0
// 			this.moveSlide = 100
// 			this.timeMove = 1000
// 			this.dir = el.direction
// 			this.interval = this.timeMove + 1000
// 			// dots
// 			this.ul = document.createElement('ul');
// 			this.ul.classList.add('slider-dots')
// 			this.sliderItems.forEach(()=>{
// 					const li = document.createElement('li')
// 					this.ul.appendChild(li)
// 			})
// 			this.slider.appendChild(this.ul)
// 			this.sliderDotsLi = this.slider.querySelectorAll('.slider-dots li')
// 			this.sliderDotsLi[this.activeSlide].classList.add('active')
// 			this.sliderDotsLi.forEach((dot, key)=>{
// 					dot.addEventListener('click', ()=>{this.controllerDots(key)})
// 			})
// 			this.active = true
// 			// autoplay
// 			let autoPlaySlider = setInterval(()=>{
// 					this.move(this.nextBtn)
// 			}, this.interval)
// 			this.slider.addEventListener('mouseenter', ()=>{
// 					clearInterval(autoPlaySlider)
// 			})
// 			this.slider.addEventListener('mouseleave', ()=>{
// 					autoPlaySlider = setInterval(()=>{
// 							this.move(this.nextBtn)
// 					}, this.interval)
// 			})
			
// 			this.sliderItems.forEach((slide, key)=>{
// 					if(this.activeSlide != key){
// 							slide.style.transform = `translate${this.dir}(${this.moveSlide}%)`
// 					}
// 					if(key == this.sliderItems.length - 1){
// 							slide.style.transform = `translate${this.dir}(${-this.moveSlide}%)`
// 					}
// 			})
// 			this.nextBtn.addEventListener('click', ()=>{this.move(this.nextBtn)})
// 			this.prewBtn.addEventListener('click', ()=>{this.move(this.prewBtn)})
// 	}
// 	move(btn){
// 			this.nextBtn.disabled = true
// 			this.prewBtn.disabled = true
// 			setTimeout(() => {
// 					this.nextBtn.disabled = false
// 					this.prewBtn.disabled = false
// 			}, this.timeMove + 200);
// 			let btnPrewOrNext = this.nextBtn == btn ? -this.moveSlide : this.moveSlide;
// 			this.sliderItems.forEach((slide, key)=>{
// 					if(this.activeSlide != key){
// 							slide.style.transform = `translate${this.dir}(${-btnPrewOrNext}%)`
// 							slide.style.transition = `0ms`
// 					}
// 			})
// 			setTimeout(()=>{
// 					this.sliderItems[this.activeSlide].style.transform = `translate${this.dir}(${btnPrewOrNext}%)`
// 					this.sliderItems[this.activeSlide].style.transition = `${this.timeMove}ms`
// 					this.sliderDotsLi[this.activeSlide].classList.remove('active')
// 					if(btn == this.nextBtn){
// 							this.activeSlide++
// 							if(this.activeSlide >= this.sliderItems.length){
// 									this.activeSlide = 0
// 							}
// 					}else if(btn == this.prewBtn){
// 							this.activeSlide--
// 							if(this.activeSlide < 0){
// 									this.activeSlide = this.sliderItems.length - 1
// 							}
// 					}
// 					this.sliderItems[this.activeSlide].style.transform = `translate${this.dir}(${0}%)`
// 					this.sliderItems[this.activeSlide].style.transition = `${this.timeMove}ms`
// 					this.sliderDotsLi[this.activeSlide].classList.add('active')
// 			}, 100)
// 	}
// 	controllerDots(dotKey){
// 			if(this.active && dotKey != this.activeSlide){
// 					this.sliderItems.forEach((slide)=>{
// 							slide.style.transition = '0ms'
// 					})
// 					this.active = false
// 					this.sliderDotsLi.forEach((dot)=>{dot.classList.remove('active')})
// 					let dotLeftOrRight = dotKey > this.activeSlide ? -this.moveSlide : this.moveSlide
// 					this.sliderItems[dotKey].style.transform = `translate${this.dir}(${-dotLeftOrRight}%)`;
// 					setTimeout(()=>{
// 							this.sliderItems[this.activeSlide].style.transform = `translate${this.dir}(${dotLeftOrRight}%)`
// 							this.sliderItems[this.activeSlide].style.transition = `${this.timeMove}ms`
// 							this.sliderDotsLi[this.activeSlide].classList.remove('active')
// 							this.activeSlide = dotKey
// 							this.sliderItems[this.activeSlide].style.transform = `translate${this.dir}(${0}%)`
// 							this.sliderItems[this.activeSlide].style.transition = `${this.timeMove}ms`
// 							this.sliderDotsLi[this.activeSlide].classList.add('active')
// 					}, 100)
// 					setTimeout(()=>{
// 							this.active = true
// 					}, this.timeMove + 200);
// 			}
// 	}
// }

// const sliders = document.querySelectorAll('.slider')
// sliders.forEach((item, key)=>{
// 	const dirEl = item.getAttribute('direction')
// 	const dir = (item.hasAttribute('direction') && dirEl == "Y" || dirEl == 'y')?'Y':'X';
// 	new SLIDER({
// 			slider: item,
// 			direction: dir
// 	})
// })