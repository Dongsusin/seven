import "./character.scss";
import HomeSection from "../HomeSection";
import * as images from "../../../assets/images";
import React, { useState } from "react";
import Modal from "react-modal";
import { motion, AnimatePresence } from "framer-motion";
import bg_2 from "../../../assets/vidio/bg-2.mp4";

// 캐릭터 그룹 나누기
const characterGroups = [
  [
    {
      id: "evan",
      name: "에반",
      subtitle: "모험가",
      description: `테라 왕국을 수호하던 장군의 손자.
      할아버지의 유언을 따라 신비한 목걸이의 주인을 찾아 모험을 시작한다.
      정의감 넘치고 용감한 청년이다.`,
      video: "https://www.youtube.com/embed/RrRM7rW_Oho?si=alMu9tD81xQR3urg",
      img: images.evan,
      largeImg: images.evan_large,
    },
    {
      id: "karen",
      name: "카린",
      subtitle: "마법사",
      description: `고블린 습격으로 가족을 잃은 소녀.
      에반의 도움으로 생존하고, 함께 신비한 목걸이의 주인을 찾기 위해 여행을 떠난다.
      강인한 의지와 따뜻한 마음을 지녔다.`,
      video: "https://www.youtube.com/embed/LHD6Ib-5M90?si=Wm2N-HgGKpqkrz2p",
      img: images.karen,
      largeImg: images.karen_large,
    },
    {
      id: "lee",
      name: "리",
      subtitle: "분노의 파계승",
      description: `복수자의 지하 미궁에서 살아남은 전사.
      강인한 생존 본능과 집념으로 에반과 함께 모험을 이어간다.
      분노 속에서도 신념을 지킨다.`,
      img: images.lee,
      largeImg: images.lee_large,
    },
    {
      id: "sniper",
      name: "스니퍼",
      subtitle: "전설의 사냥꾼",
      description: `눈보라 대지의 사냥꾼.
      부모를 잃은 슬픔을 딛고 강인한 사냥꾼으로 성장하여 복수를 꿈꾼다.
      차가운 눈빛 속에 뜨거운 의지가 있다.`,
      img: images.sniper,
      largeImg: images.sniper_large,
    },
    {
      id: "ariel",
      name: "아리엘",
      subtitle: "빛의 축복",
      description: `전쟁 고아 출신의 토끼 수인 소녀.
      순수하고 따뜻한 마음으로 루디를 친오빠처럼 따르며 모험을 함께한다.`,
      img: images.ariel,
      largeImg: images.ariel_large,
    },
    {
      id: "uri",
      name: "유리",
      subtitle: "우두머리 삼미호",
      description: `화염의 사막 오아시스를 지배하는 삼미호 우두머리.
      탁월한 정보망을 구축해 사막의 균형을 유지하고 있다.`,
      img: images.uri,
      largeImg: images.uri_large,
    },
    {
      id: "ui",
      name: "유이",
      subtitle: "마에스트로",
      description: `화염의 사막을 지나 테라 영지로 향하던 악단의 지휘자.
      위기 속에서 에반 일행과 인연을 맺고 함께 모험하게 된다.`,
      img: images.ui,
      largeImg: images.ui_large,
    },
    {
      id: "jupi",
      name: "쥬피",
      subtitle: "꿰뚫는 화살",
      description: `위험에 빠진 이들을 돕는 모험가.
      정의로운 신념으로 에반 일행과 함께 길을 걷는다.`,
      img: images.jupi,
      largeImg: images.jupi_large,
    },
    {
      id: "hebnia",
      name: "헤브니아",
      subtitle: "푸른 유성",
      description: `호기심 많고 정의로운 천상계 발키리.
      언니 헬레니아와 함께 지상에 파견되어 사명을 수행한다.`,
      img: images.hebnia,
      largeImg: images.hebnia_large,
    },
    {
      id: "helenia",
      name: "헬레니아",
      subtitle: "붉은 혜성",
      description: `파괴의 조각을 추적하기 위해 지상에 내려온 발키리.
      냉정하고 침착한 판단력으로 임무를 완수해 나간다.`,
      img: images.helenia,
      largeImg: images.helenia_large,
    },
  ],
  [
    {
      id: "rudy",
      name: "루디",
      subtitle: "절대수호자",
      description: `신비의 숲 영주이자 세븐나이츠 중 하나.
      세상을 지키기 위해 고독한 싸움을 이어가고 있다.`,
      video: "https://www.youtube.com/embed/OonjleriOVI?si=v155eE4Zr9bEHJxU",
      img: images.rudy,
      largeImg: images.rudy_large,
    },
    {
      id: "delon",
      name: "델론즈",
      subtitle: "준음의 군주",
      description: `죽음의 힘을 지닌 세븐나이츠.
      어두운 과거를 딛고 자신만의 길을 걷고자 한다.`,
      img: images.delon,
      largeImg: images.delon_large,
    },
    {
      id: "aileen",
      name: "아일린",
      subtitle: "포디나의 여제",
      description: `포디나를 통치하는 강력한 지휘관.
      냉철한 판단력과 통솔력으로 영토를 확장하려 한다.`,
      video: "https://www.youtube.com/embed/aB5RO_EvRT8?si=JRGJgI6Nqs618AhE",
      img: images.aileen,
      largeImg: images.aileen_large,
    },
    {
      id: "rachel",
      name: "레이첼",
      subtitle: "불멸의 화신",
      description: `화염의 사막을 지배하는 여왕.
      강력한 힘과 카리스마로 세력을 압도하고 있다.`,
      video: "https://www.youtube.com/embed/DLRDjQlZGLA?si=YTC0wwueAJfLp3nI",
      img: images.rachel,
      largeImg: images.rachel_large,
    },
    {
      id: "vanessa",
      name: "바네사",
      subtitle: "시간 목격자",
      description: `시간의 틈을 넘어온 대마법사.
      세월의 무게를 견디며 사명을 다하려 한다.`,
      img: images.vanessa,
      largeImg: images.vanessa_large,
    },
    {
      id: "chris",
      name: "크리스",
      subtitle: "지옥의 군주",
      description: `지옥의 힘을 손에 넣은 세븐나이츠.
      복수를 위해 어둠의 군단을 이끌고 있다.`,
      video: "https://www.youtube.com/embed/uyU-r8nh0sA?si=PMbTpKUjNrhL_Qlt",
      img: images.chris,
      largeImg: images.chris_large,
    },
    {
      id: "spike",
      name: "스파이크",
      subtitle: "혹한의 폭군",
      description: `눈보라 대지를 지배하려는 얼음 전사.
      혹한 속에서도 불굴의 투지를 지닌 강자다.`,
      video: "https://www.youtube.com/embed/9o0NqifUIrI?si=DZQ9-E2a-kvLeJOW",
      img: images.spike,
      largeImg: images.spike_large,
    },
    {
      id: "jaeb",
      name: "제이브",
      subtitle: "수호신",
      description: `드래곤들로부터 인정을 받은 수호자.
      용의 유적지를 지키기 위해 모든 힘을 쏟고 있다.`,
      img: images.jaeb,
      largeImg: images.jaeb_large,
    },
    {
      id: "logi",
      name: "로지",
      subtitle: "은둔한 성기사",
      description: `실버소드 가문 출신의 뛰어난 여기사.
      고요한 수련 속에서 강한 힘을 길러냈다.`,
      img: images.logi,
      largeImg: images.logi_large,
    },
  ],
  [
    {
      id: "yeonhee",
      name: "연희",
      subtitle: "종말의 인도자",
      description: `평화를 원했지만, 운명은 그녀를 전장의 수호자로 만들었다.
      고독 속에서도 싸움을 멈추지 않는다.`,
      img: images.yeonhee,
      largeImg: images.yeonhee_large,
    },
    {
      id: "silvesta",
      name: "실베스타",
      subtitle: "파괴의 정화자",
      description: `빛의 기사였으나, 파괴의 힘을 봉인하기 위해 모험을 떠난 전사.
      자신의 숙명을 묵묵히 받아들인다.`,
      img: images.silvesta,
      largeImg: images.silvesta_large,
    },
    {
      id: "ace",
      name: "에이스",
      subtitle: "총운검의 주인",
      description: `총운검에 선택받아 절대적인 힘을 얻은 검사.
      힘에 굴복하지 않고, 정의를 위해 싸운다.`,
      img: images.ace,
      largeImg: images.ace_large,
    },
  ],
];

const Character = ({ isActive }) => {
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [selectedGroup, setSelectedGroup] = useState(0);

  return (
    <HomeSection className={`character ${isActive ? "active" : ""}`}>
      <video autoPlay muted playsInline loop className="video" src={bg_2} />
      <div className="content">
        <h4 className="title main-color">캐릭터</h4>
        <div className="tabs">
          {["에반 원정대", "세븐나이츠", "그외"].map((label, index) => (
            <button
              key={index}
              onClick={() => setSelectedGroup(index)}
              className={`tab-btn${selectedGroup === index ? " active" : ""}`}
            >
              {label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.ul
            key={selectedGroup}
            className="character-list"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
          >
            {characterGroups[selectedGroup].map((char) => (
              <li
                key={char.id}
                className="character-item"
                onClick={() => setSelectedCharacter(char)}
              >
                <img
                  src={char.img}
                  alt={char.name}
                  className="character-image"
                />
              </li>
            ))}
          </motion.ul>
        </AnimatePresence>
      </div>

      {selectedCharacter && (
        <Modal
          isOpen={!!selectedCharacter}
          onRequestClose={() => setSelectedCharacter(null)}
          className="modal"
          overlayClassName="modal-overlay"
        >
          <div className="modal-content">
            <img
              src={selectedCharacter.largeImg}
              alt={selectedCharacter.name}
              className="modal-image"
            />
            <div className="modal-description">
              <h4 className="modal-title">
                <div className="before" />
                {selectedCharacter.name}
                <div className="after" />
              </h4>
              <h2 className="modal-subtitle">{selectedCharacter.subtitle}</h2>
              <div className="modal-text">
                {selectedCharacter.description
                  .split("\n")
                  .map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
              </div>
              {selectedCharacter.video && (
                <div className="movie">
                  <div className="movie-text">스킬영상</div>
                  <div className="movie-video">
                    <iframe
                      width="560"
                      height="315"
                      src={selectedCharacter.video}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              )}
            </div>
            <div className="close" onClick={() => setSelectedCharacter(null)} />
          </div>
        </Modal>
      )}
    </HomeSection>
  );
};

export default Character;
