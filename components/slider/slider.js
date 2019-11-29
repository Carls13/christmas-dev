import React, { useState } from 'react';

import './slider.css';

const Slider = () => {
	const [sliderShowing, setSlider] = useState(1);

	const onPrevClick = () => {
		if (sliderShowing === 1) {
			setSlider(3);
			return;
		}
		setSlider(sliderShowing - 1);
	}

	const onNextClick = () => {
		if (sliderShowing === 3) {
			setSlider(1);
			return;
		}
		setSlider(sliderShowing + 1);
	}

	return (
	   <div className="slider mb-3" id="gallery">
	   		<div className={`slide ${sliderShowing === 1 ? 'slide-active' : null} text-center`}>
	   			<img src="./../../static/slider1.png" />
	   		</div>
	   		<div className={`slide ${sliderShowing === 2 ? 'slide-active' : null} text-center`}>
	   			<img src="./../../static/slider2.png" />
	   		</div>
	   		<div className={`slide ${sliderShowing === 3 ? 'slide-active' : null} text-center`}>
	   			<img src="./../../static/slider3.png" />
	   		</div>
			<a className="prev" onClick={() => onPrevClick()}>&#10094;</a>
			<a className="next" onClick={() => onNextClick()}>&#10095;</a>
			<div className="dots-control text-center">
				<span className={`dot ${sliderShowing === 1 ? 'dot-active' : null}`} onClick={() => setSlider(1)}></span>
				<span className={`dot ${sliderShowing === 2 ? 'dot-active' : null}`} onClick={() => setSlider(2)}></span>
				<span className={`dot ${sliderShowing === 3 ? 'dot-active' : null}`} onClick={() => setSlider(3)}></span>
			</div>
	   </div>
)};

export default Slider;