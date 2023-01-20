import Flickity from "react-flickity-component";
import "./flickity.css";

import styles from "./css/Main.module.css";

const flickityOptions = {
  initialIndex: 0,
  prevNextButtons: false,
};

function Carousel() {
  return (
    <Flickity
      className={"carousel"} // default ''
      elementType={"div"} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
      static // default false
    >
      <div className="gallery-cell">
        <div className="box-position1 main-box">
          <div className="gallery-title">
            Great Action
            <br />
            Beyond the Shipbuilder
          </div>
          <div className="gallery-subtitle">
            최고의 기술과 품질로 담대한 항해를 시작합니다.
          </div>
          <button className="gallery-button">조선,해양 부문 더보기</button>
        </div>
        <img
          alt="1"
          src="http://www.hdhyundai.co.kr/_images/main/visual01.jpg"
        />
      </div>
      <div className="gallery-cell">
        <div className="box-position2 main-box">
          <div className="gallery-title">
            Driving Forward
            <br />
            The Global Industy
          </div>
          <div className="gallery-subtitle">
            세상을 바꾸는 기술로 고객 감동을 실현합니다.
          </div>
          <button className="gallery-button">조선,해양 부문 더보기</button>
        </div>
        <img
          alt="2"
          src="http://www.hdhyundai.co.kr/_images/main/visual02.jpg"
        />
      </div>
      <div className="gallery-cell">
        <div className="box-position3 main-box">
          <div className="gallery-title">
            Consistent Innovation
            <br />
            For Richer, Cleaner
            <br />
            Tomorrow
          </div>
          <div className="gallery-subtitle">
            새로운 생각과 끊임없는 도전으로 혁신의 미래를 열어갑니다.
          </div>
          <button className="gallery-button">조선,해양 부문 더보기</button>
        </div>
        <img
          alt="3"
          src="http://www.hdhyundai.co.kr/_images/main/visual03.jpg"
        />
      </div>
    </Flickity>
  );
}

function Main() {
  return (
    <section className={styles.section}>
      <Carousel />
    </section>
  );
}

export default Main;
