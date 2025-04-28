import "./news.scss";
import HomeSection from "../HomeSection";
import React, { useEffect } from "react";

const News = (props) => {
  useEffect(() => {
    const sliderInner = document.querySelector(".slider__inner"); //움직이는 영역
    const slider = document.querySelectorAll(".slider"); //이미지
    const sliderBtn = document.querySelector(".slider__btn"); // 버튼
    const sliderBtnPrev = document.querySelector(".slider__btn .prev"); //왼쪽 버튼
    const sliderBtnNext = document.querySelector(".slider__btn .next"); //오른쪽 버튼

    let currentIndex = 0, //현재 이미지
      sliderLength = slider.length,
      sliderWidth = slider[0].offsetWidth,
      sliderFirst = slider[0], //첫번째 이미지
      sliderLast = slider[sliderLength - 1], //인덱스 값이니깐 //마지막 이미지
      cloneFirst = sliderFirst.cloneNode(true), //첫번째 이미지 복사
      cloneLast = sliderLast.cloneNode(true); //마지막 이미지 복사

    sliderInner.appendChild(cloneFirst);
    sliderInner.insertBefore(cloneLast, sliderFirst);

    function gotoSlider(direction) {
      sliderInner.classList.add("transition");
      sliderBtn.classList.add("disable");

      const posInitial = sliderInner.offsetLeft;
      // console.log(posInitial);

      //만약에 direction에 매개변수에 -1이 들어오면 왼쪽으로, 1이 들어오면 오른쪽으로
      if (direction === -1) {
        // 이미지가 추가돼서 위치값이 달라져서 초기화 시켜준것
        sliderInner.style.left = posInitial + sliderWidth + "px";
        currentIndex--;
      } else if (direction === 1) {
        sliderInner.style.left = posInitial - sliderWidth + "px";
        currentIndex++;
      }
    }
    // gotoSlider();

    // 순간이동 메서드
    function checkIndex() {
      sliderInner.classList.remove("transition");

      // console.log(currentIndex)
      // 마지막 이미지 갔을 때
      if (currentIndex === sliderLength) {
        sliderInner.style.left = -(1 * sliderWidth) + "px";
        currentIndex = 0;
      }
      // 처음 이미지
      if (currentIndex === -1) {
        sliderInner.style.left = -(sliderLength * sliderWidth) + "px";
        currentIndex = sliderLength - 1;
      }
    }
    sliderBtnPrev.addEventListener("click", () => {
      gotoSlider(-1);
      setTimeout(() => {
        sliderBtn.classList.remove("disable");
      }, 300);

      let dot = document.querySelectorAll(".slider__dot .dot");
      // 클론해주었으니깐 이미지5가 첫화면
      if (currentIndex < 0) {
        dot.forEach((el) => {
          el.classList.remove("active");
          dot[sliderLength - 1].classList.add("active");
        });
      } else {
        dot.forEach((el) => {
          el.classList.remove("active");
          dot[currentIndex].classList.add("active");
        });
      }
    });
    sliderBtnNext.addEventListener("click", () => {
      gotoSlider(1);
      setTimeout(() => {
        sliderBtn.classList.remove("disable");
      }, 300);
    });
    sliderInner.addEventListener("transitionend", checkIndex);
  }, []);
  return (
    <HomeSection className={`news ${props.isActive ? "active" : ""}`}>
      <div className="news_container">
        <h4 className="title main-color">스토리</h4>
        <div className="slider__wrap">
          <div className="slider__img">
            <div class="slider__inner">
              <div class="slider">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/IF0mdYumfcg?si=aFHNjkIDz0ngDKTj"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
              <div class="slider">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/fZ_jbFwMG_E?si=R6PZmpUgWPoEJO7x"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
              <div class="slider">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/3FDAGqoHoKY?si=fFvXTiS1kAaQrD12"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
              <div class="slider">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/qRmoXBzDrKs?si=mzPsvhA0vAA__xmf"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
              <div class="slider">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/3-ujXU5gWmo?si=XNIQjoJ31s9J_E7T"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
              <div class="slider">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/6hMKJ-sEYkM?si=Oj-kgKo2h6ReHJqR"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
              <div class="slider">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/_DiRB2-kmiU?si=vR5a_KsJkUctJNQN"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
              <div class="slider">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/0XV-C17gMOM?si=w5I4toezrnAkje1K"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
              <div class="slider">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/H8WtiRHw0LI?si=L9tURa7KBsviUYLi"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
              <div class="slider">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/BSnst2Kj7q0?si=LSjqp1Em2rM1qvvm"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
          <div className="slider__btn">
            <span className="prev" />
            <span className="next" />
          </div>
        </div>
      </div>
    </HomeSection>
  );
};

export default News;
