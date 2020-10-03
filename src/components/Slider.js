// import styled from "styled-components";
import React from 'react';
// import hero1 from './hero1.jpg';
// import hero2 from './hero2.jpg';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

function Slider(){
    return (
        <AwesomeSlider>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>1</div>
    </AwesomeSlider>
    );
}

// const Slider = (
//     <AwesomeSlider>
//         <div>1</div>
//         <div>2</div>
//         <div>3</div>
//         <div>1</div>
//     </AwesomeSlider>
// )
export default Slider;

// const Container = styled.div`
// width: 60%;
// overflow: hidden;
// `;

// const Button = styled.button`
// all: unset;
// border: 1px solid coral;
// padding: 0.5em 2em;
// color: coral;
// border-radius: 10px;
// &:hover {
// transition: all 0.3s ease-in-out;
// background-color: coral;
// color: #fff;
// }
// `;

// const SliderContainer = styled.div`
// width: 100%;
// display: flex; 
// `;

// const TOTAL_SLIDES = 2;
// export default function Slider() {
// const [currentSlide, setCurrentSlide] = useState(0);
// const slideRef = useRef(null);
// const nextSlide = () => {
// if (currentSlide >= TOTAL_SLIDES) {
//   setCurrentSlide(0);
// } else {
//   setCurrentSlide(currentSlide + 1);
// }
// };
// const prevSlide = () => {
// if (currentSlide === 0) {
//   setCurrentSlide(TOTAL_SLIDES);
// } else {
//   setCurrentSlide(currentSlide - 1);
// }
// };

// useEffect(() => {
// slideRef.current.style.transition = "all 0.5s ease-in-out";
// slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
// }, [currentSlide]);
// return (
// <Container>
//   {currentSlide}
//   <SliderContainer ref={slideRef}>
//     <Slide img={img1} />
//     <Slide img={img2} />
//     <Slide img={img3} />
//   </SliderContainer>
//   <Button onClick={prevSlide}>Previous Slide</Button>
//   <Button onClick={nextSlide}>Next Slide</Button>
// </Container>
// );
// }