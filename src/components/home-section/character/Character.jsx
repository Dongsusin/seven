import "./character.scss";
import HomeSection from "../HomeSection";
import {
  rudy,
  rudy_large,
  delon,
  delon_large,
  evan,
  evan_large,
  karen,
  karen_large,
  yeonhee,
  yeonhee_large,
  silvesta,
  silvesta_large,
  aileen,
  aileen_large,
  rachel,
  rachel_large,
  vanessa,
  vanessa_large,
  chris,
  chris_large,
  spike,
  spike_large,
  jaeb,
  jaeb_large,
  ace,
  ace_large,
} from "../../../assets/images";
import React, { useState } from "react";
import Modal from "react-modal";

const Character = (props) => {
  const [modalIRudysOpen, setModalIsRudyOpen] = useState(false);
  const [modalIDelonOpen, setModalIsDelonOpen] = useState(false);
  const [modalIevanOpen, setModalIsevanOpen] = useState(false);
  const [modalIkarenOpen, setModalIskarenOpen] = useState(false);
  const [modalIyeonheeOpen, setModalIsyeonheeOpen] = useState(false);
  const [modalISilvestaOpen, setModalIsSilvestaOpen] = useState(false);
  const [modalIaileenOpen, setModalIsaileenOpen] = useState(false);
  const [modalrachelOpen, setModalIsrachelOpen] = useState(false);
  const [modalIvanessaOpen, setModalIsvanessaOpen] = useState(false);
  const [modalIchrisOpen, setModalIschrisOpen] = useState(false);
  const [modalIspikeOpen, setModalIsspikeOpen] = useState(false);
  const [modalIjaebOpen, setModalIsjaebOpen] = useState(false);
  const [modalIaceOpen, setModalIsaceOpen] = useState(false);
  return (
    <HomeSection className={`character ${props.isActive ? "active" : ""}`}>
      <video
        autoPlay="autoplay"
        muted="muted"
        playsinline="playsinline"
        loop="loop"
        className="video"
        src="https://sgimage.netmarble.com/mobile/game/tskgb/brand/v1/videos/f9abe5915e9f.mp4"
      />
      <div className="content">
        <h4 className="title main-color">캐릭터</h4>
        <ul className="character-list">
          <li
            className="character-item"
            onClick={() => setModalIsRudyOpen(true)}
          >
            <img src={rudy} alt="" className="character-image" />
          </li>
          <li
            className="character-item"
            onClick={() => setModalIsDelonOpen(true)}
          >
            <img src={delon} alt="" className="character-image" />
          </li>
          <li
            className="character-item"
            onClick={() => setModalIsevanOpen(true)}
          >
            <img src={evan} alt="" className="character-image" />
          </li>
          <li
            className="character-item"
            onClick={() => setModalIskarenOpen(true)}
          >
            <img src={karen} alt="" className="character-image" />
          </li>
          <li
            className="character-item"
            onClick={() => setModalIsyeonheeOpen(true)}
          >
            <img src={yeonhee} alt="" className="character-image" />
          </li>
          <li
            className="character-item"
            onClick={() => setModalIsSilvestaOpen(true)}
          >
            <img src={silvesta} alt="" className="character-image" />
          </li>
          <li
            className="character-item"
            onClick={() => setModalIsaileenOpen(true)}
          >
            <img src={aileen} alt="" className="character-image" />
          </li>
          <li
            className="character-item"
            onClick={() => setModalIsrachelOpen(true)}
          >
            <img src={rachel} alt="" className="character-image" />
          </li>
          <li
            className="character-item"
            onClick={() => setModalIsvanessaOpen(true)}
          >
            <img src={vanessa} alt="" className="character-image" />
          </li>
          <li
            className="character-item"
            onClick={() => setModalIschrisOpen(true)}
          >
            <img src={chris} alt="" className="character-image" />
          </li>
          <li
            className="character-item"
            onClick={() => setModalIsspikeOpen(true)}
          >
            <img src={spike} alt="" className="character-image" />
          </li>
          <li
            className="character-item"
            onClick={() => setModalIsjaebOpen(true)}
          >
            <img src={jaeb} alt="" className="character-image" />
          </li>
          <li
            className="character-item"
            onClick={() => setModalIsaceOpen(true)}
          >
            <img src={ace} alt="" className="character-image" />
          </li>
        </ul>
      </div>
      <Modal
        isOpen={modalIRudysOpen}
        onRequestClose={() => setModalIsRudyOpen(false)}
        className={"modal"}
      >
        <div className="modal-content">
          <img src={rudy_large} alt="" className="modal-image" />
          <div className="modal-description">
            <h4 className="modal-title">
              <div className="before" />
              루디
              <div className="after" />
            </h4>
            <h2 className="modal-subtitle">절대수호자</h2>
            <div className="modal-text">
              <p>
                신비의 숲 영주이자 세븐나이츠 중 한 명이다.
                <br />
                빛의 자리를 두고 또 다른 세븐나이츠 크리스와 큰 마찰이.
                <br />
                있었다. 지금은 크리스의 위협으로부터 테라 영지를 수호한다.
                <br />
              </p>
            </div>
            <div className="movie">
              <div className="movie-text">스킬영상</div>
              <div className="movie-video">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/OonjleriOVI?si=v155eE4Zr9bEHJxU"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
          <div className="close" onClick={() => setModalIsRudyOpen(false)} />
        </div>
      </Modal>
      <Modal
        isOpen={modalIDelonOpen}
        onRequestClose={() => setModalIsDelonOpen(false)}
        className={"modal"}
      >
        <div className="modal-content">
          <img src={delon_large} alt="" className="modal-image" />
          <div className="modal-description">
            <h4 className="modal-title">
              <div className="before" />
              델론즈
              <div className="after" />
            </h4>
            <h2 className="modal-subtitle">준음의 군주</h2>
            <div className="modal-text">
              <p>
                죽음의 힘을 다루는 세븐나이츠 중 한 명. 교활한 두뇌와
                <br />
                강력한 힘으로 아스드 대륙에 피바람을 일으킨다. 그가 대륙을
                <br />
                혼란에 빠뜨리는 목적이 무엇인지 밝혀지지 않았다.
                <br />
              </p>
            </div>
          </div>
          <div className="close" onClick={() => setModalIsDelonOpen(false)} />
        </div>
      </Modal>
      <Modal
        isOpen={modalIevanOpen}
        onRequestClose={() => setModalIsevanOpen(false)}
        className={"modal"}
      >
        <div className="modal-content">
          <img src={evan_large} alt="" className="modal-image" />
          <div className="modal-description">
            <h4 className="modal-title">
              <div className="before" />
              에반
              <div className="after" />
            </h4>
            <h2 className="modal-subtitle">모험가</h2>
            <div className="modal-text">
              <p>
                테라왕국을 수호하던 장군의 손자이다.
                <br />
                할아버지의 유언으로 신비한 목걸이의 주인을 찾기 위해
                <br />
                카린과 함께 모험을 떠난다.
                <br />
              </p>
            </div>
            <div className="movie">
              <div className="movie-text">스킬영상</div>
              <div className="movie-video">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/RrRM7rW_Oho?si=alMu9tD81xQR3urg"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
          <div className="close" onClick={() => setModalIsevanOpen(false)} />
        </div>
      </Modal>
      <Modal
        isOpen={modalIkarenOpen}
        onRequestClose={() => setModalIskarenOpen(false)}
        className={"modal"}
      >
        <div className="modal-content">
          <img src={karen_large} alt="" className="modal-image" />
          <div className="modal-description">
            <h4 className="modal-title">
              <div className="before" />
              카린
              <div className="after" />
            </h4>
            <h2 className="modal-subtitle">마법사</h2>
            <div className="modal-text">
              <p>
                고블린 무리의 습격으로 가족을 잃은 카린은
                <br />
                에반의 도움으로 홀로 살아남았다.
                <br />
                이후 에반과 함께 목걸이의 주인을 찾는 모험을 떠난다.
                <br />
              </p>
            </div>
            <div className="movie">
              <div className="movie-text">스킬영상</div>
              <div className="movie-video">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/LHD6Ib-5M90?si=Wm2N-HgGKpqkrz2p"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
          <div className="close" onClick={() => setModalIskarenOpen(false)} />
        </div>
      </Modal>
      <Modal
        isOpen={modalIyeonheeOpen}
        onRequestClose={() => setModalIsyeonheeOpen(false)}
        className={"modal"}
      >
        <div className="modal-content">
          <img src={yeonhee_large} alt="" className="modal-image" />
          <div className="modal-description">
            <h4 className="modal-title">
              <div className="before" />
              연희
              <div className="after" />
            </h4>
            <h2 className="modal-subtitle">종말의 인도자</h2>
            <div className="modal-text">
              <p>
                파괴의 전쟁 초기, 주변이 너무 시끄러워서 모조리
                <br />
                제압해 버렸다. 그러자 사람들은 연희를 수호자라 믿으며
                <br />
                사황이라 불렀다. 단지 조용히 쉬고 싶어 한 일일 뿐이었지만.
                <br />
              </p>
            </div>
          </div>
          <div className="close" onClick={() => setModalIsyeonheeOpen(false)} />
        </div>
      </Modal>
      <Modal
        isOpen={modalISilvestaOpen}
        onRequestClose={() => setModalIsSilvestaOpen(false)}
        className={"modal"}
      >
        <div className="modal-content">
          <img src={silvesta_large} alt="" className="modal-image" />
          <div className="modal-description">
            <h4 className="modal-title">
              <div className="before" />
              실베스타
              <div className="after" />
            </h4>
            <h2 className="modal-subtitle">파괴의 정화자</h2>
            <div className="modal-text">
              <p>
                실베스타는 한때 뛰어난 전투 능력과 정의감으로 백성들의
                <br />
                신뢰를 한 몸에 받는 빛의 기사였다. 하지만 파괴의 힘에 대해
                <br />
                알게 된 후, 그 힘을 봉인하기 위한 모험을 시작했다.
                <br />
              </p>
            </div>
          </div>
          <div
            className="close"
            onClick={() => setModalIsSilvestaOpen(false)}
          />
        </div>
      </Modal>
      <Modal
        isOpen={modalIaileenOpen}
        onRequestClose={() => setModalIsaileenOpen(false)}
        className={"modal"}
      >
        <div className="modal-content">
          <img src={aileen_large} alt="" className="modal-image" />
          <div className="modal-description">
            <h4 className="modal-title">
              <div className="before" />
              아일린
              <div className="after" />
            </h4>
            <h2 className="modal-subtitle">포디나의 여제</h2>
            <div className="modal-text">
              <p>
                아일린은 뛰어난 지휘 능력과 힘, 그리고 총명함으로
                <br />
                포디나의 여제가 되었다. 준비를 마친 그녀는 이제 침묵의
                <br />
                광산을 벗어나 영토를 넓히기 위한 모든 준비를 마쳤다.
                <br />
              </p>
            </div>
            <div className="movie">
              <div className="movie-text">스킬영상</div>
              <div className="movie-video">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/aB5RO_EvRT8?si=JRGJgI6Nqs618AhE"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
          <div className="close" onClick={() => setModalIsaileenOpen(false)} />
        </div>
      </Modal>
      <Modal
        isOpen={modalrachelOpen}
        onRequestClose={() => setModalIsrachelOpen(false)}
        className={"modal"}
      >
        <div className="modal-content">
          <img src={rachel_large} alt="" className="modal-image" />
          <div className="modal-description">
            <h4 className="modal-title">
              <div className="before" />
              레이첼
              <div className="after" />
            </h4>
            <h2 className="modal-subtitle">불멸의 화신</h2>
            <div className="modal-text">
              <p>
                화염의 사막을 다스리는 여제가 된 레이첼은
                <br />
                자신을 불멸의 화신이라 칭하였다. 최근 화염의 사막을
                <br />
                노리는 세력들이 많아지자, 신경이 곤두서 있다.
                <br />
              </p>
            </div>
            <div className="movie">
              <div className="movie-text">스킬영상</div>
              <div className="movie-video">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/DLRDjQlZGLA?si=YTC0wwueAJfLp3nI"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
          <div className="close" onClick={() => setModalIsrachelOpen(false)} />
        </div>
      </Modal>
      <Modal
        isOpen={modalIvanessaOpen}
        onRequestClose={() => setModalIsvanessaOpen(false)}
        className={"modal"}
      >
        <div className="modal-content">
          <img src={vanessa_large} alt="" className="modal-image" />
          <div className="modal-description">
            <h4 className="modal-title">
              <div className="before" />
              바네사
              <div className="after" />
            </h4>
            <h2 className="modal-subtitle">시간 목격자</h2>
            <div className="modal-text">
              <p>
                바네사는 시간의 틈 속에서 마법을 연구한 끝에
                <br />
                대마법사의 경지에 올랐다. 하지만 본래 시간으로
                <br />
                돌아왔을 때는 이미 십수 년이 지난 후였다.
                <br />
              </p>
            </div>
          </div>
          <div className="close" onClick={() => setModalIsvanessaOpen(false)} />
        </div>
      </Modal>
      <Modal
        isOpen={modalIchrisOpen}
        onRequestClose={() => setModalIschrisOpen(false)}
        className={"modal"}
      >
        <div className="modal-content">
          <img src={chris_large} alt="" className="modal-image" />
          <div className="modal-description">
            <h4 className="modal-title">
              <div className="before" />
              크리스
              <div className="after" />
            </h4>
            <h2 className="modal-subtitle">지옥의 군주</h2>
            <div className="modal-text">
              <p>
                봉인되어 있던 대악마의 힘을 얻은 크리스는
                <br />
                지옥의 군주가 되었다. 수많은 몬스터 군단을 손에
                <br />
                넣은 크리스. 이제 그의 복수가 시작되려 한다.
                <br />
              </p>
            </div>
            <div className="movie">
              <div className="movie-text">스킬영상</div>
              <div className="movie-video">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/uyU-r8nh0sA?si=PMbTpKUjNrhL_Qlt"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
          <div className="close" onClick={() => setModalIschrisOpen(false)} />
        </div>
      </Modal>
      <Modal
        isOpen={modalIspikeOpen}
        onRequestClose={() => setModalIsspikeOpen(false)}
        className={"modal"}
      >
        <div className="modal-content">
          <img src={spike_large} alt="" className="modal-image" />
          <div className="modal-description">
            <h4 className="modal-title">
              <div className="before" />
              스파이크
              <div className="after" />
            </h4>
            <h2 className="modal-subtitle">혹한의 폭군</h2>
            <div className="modal-text">
              <p>
                강력한 카리스마로 수많은 얼음 정령을 통솔한 스파이크.
                <br />
                이제 눈보라의 대지를 손에 넣기 위해 얼음 여왕에게 도전한다.
                <br />
                혹한의 심장이 녹지 않는 이상 그는 멈추지 않을 것이다.
                <br />
              </p>
            </div>
            <div className="movie">
              <div className="movie-text">스킬영상</div>
              <div className="movie-video">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/9o0NqifUIrI?si=DZQ9-E2a-kvLeJOW"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
          <div className="close" onClick={() => setModalIsspikeOpen(false)} />
        </div>
      </Modal>
      <Modal
        isOpen={modalIjaebOpen}
        onRequestClose={() => setModalIsjaebOpen(false)}
        className={"modal"}
      >
        <div className="modal-content">
          <img src={jaeb_large} alt="" className="modal-image" />
          <div className="modal-description">
            <h4 className="modal-title">
              <div className="before" />
              제이브
              <div className="after" />
            </h4>
            <h2 className="modal-subtitle">수호신</h2>
            <div className="modal-text">
              <p>
                드래곤들의 인정을 받은 제이브는
                <br />
                드넓은 용의 유적지 전체를 지키는 군주이자 수호신이 되었다.
                <br />
                막강한 드래곤들이 모여있는 그의 군세는 강력한 힘이 있다.
                <br />
              </p>
            </div>
          </div>
          <div className="close" onClick={() => setModalIsjaebOpen(false)} />
        </div>
      </Modal>
      <Modal
        isOpen={modalIaceOpen}
        onRequestClose={() => setModalIsaceOpen(false)}
        className={"modal"}
      >
        <div className="modal-content">
          <img src={ace_large} alt="" className="modal-image" />
          <div className="modal-description">
            <h4 className="modal-title">
              <div className="before" />
              에이스
              <div className="after" />
            </h4>
            <h2 className="modal-subtitle">총운검의 주인</h2>
            <div className="modal-text">
              <p>
                에이스가 총운검의 목소리에 응하자 수많은 적들이 단칼에
                <br />
                쓰러졌다. 총운검의 목소리를 듣는 자는 그 검에 인정받은
                <br />
                진정한 주인뿐. 그 주인에게만 무시무시한 힘을 빌려준다.
                <br />
              </p>
            </div>
          </div>
          <div className="close" onClick={() => setModalIsaceOpen(false)} />
        </div>
      </Modal>
    </HomeSection>
  );
};

export default Character;
