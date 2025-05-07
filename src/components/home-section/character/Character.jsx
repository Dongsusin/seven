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
      description: `테라왕국을 수호하던 장군의 손자이다.
      할아버지의 유언으로 신비한 목걸이의 주인을 찾기 위해
      카린과 함께 모험을 떠난다.`,
      video: "https://www.youtube.com/embed/RrRM7rW_Oho?si=alMu9tD81xQR3urg",
      img: images.evan,
      largeImg: images.evan_large,
    },
    {
      id: "karen",
      name: "카린",
      subtitle: "마법사",
      description: `고블린 무리의 습격으로 가족을 잃은 카린은
      에반의 도움으로 홀로 살아남았다.
      이후 에반과 함께 목걸이의 주인을 찾는 모험을 떠난다.`,
      video: "https://www.youtube.com/embed/LHD6Ib-5M90?si=Wm2N-HgGKpqkrz2p",
      img: images.karen,
      largeImg: images.karen_large,
    },
    {
      id: "lee",
      name: "리",
      subtitle: "분노의 파계승",
      description: `모험가들과 함께 복수자의 지옥 지하에 복잡하게 얽혀있는 미궁을 탐험하던 도중,
       견디지 못한 모험가들은 떨어져 나갔고, 결국 리 혼자 미궁 공략에 성공하여 지도를 완성했다.
      미궁에서 나온 직후 에반을 만나 전쟁을 막으려는 그의 의협심에 감화되어 함께 여행하기로 한다.`,
      img: images.lee,
      largeImg: images.lee_large,
    },
    {
      id: "sniper",
      name: "스니퍼",
      subtitle: "전설의 사냥꾼",
      description: `눈보라 대지의 사냥꾼 마을에서 태어났으나,
      샤벨타이거들의 습격으로 부모와 마을 사람들을 잃었다.
      이후 여러 곳을 떠돌며 사냥꾼으로서의 실력을 키워
      자신의 부모를 죽인 샤벨타이거 카이에게 복수할 준비를 한다.`,
      img: images.sniper,
      largeImg: images.sniper_large,
    },
    {
      id: "ariel",
      name: "아리엘",
      subtitle: "빛의 축복",
      description: `정의롭고 친절한 토끼과 수인.
      루디와 같은 전쟁고아이며, 같은 보육원 출신이라 루디를 친오빠처럼 따른다.
      빛의 기사인 오빠를 동경하여 자신도 빛의 마법을 공부하였기 때문에
      빛의 심판, 눈부신 빛, 신의 은총 등 빛 관련 스킬을 사용한다.`,
      img: images.ariel,
      largeImg: images.ariel_large,
    },
    {
      id: "uri",
      name: "유리",
      subtitle: "우두머리 삼미호",
      description: `화염의 사막에서 삼미호의 오아시스를 근거지로 삼는 삼미호들의 우두머리.
      유리는 한때 그림자단에 몸을 담았었는데, 이때의 경험과 지혜를 살려서 삼미호의 오아시스를
      정보를 사고파는 곳으로 만들었다.`,
      img: images.uri,
      largeImg: images.uri_large,
    },
    {
      id: "ui",
      name: "유이",
      subtitle: "마에스트로",
      description: `화염의 사막을 거쳐 테라 영지로 향하던 중 오크들의 습격을 받아 위험에 처했을 때에
      침묵의 광산에서 빠져나온 에반 일행을 만나 도움을 받았다.  
      그때는 잠시 스쳐 가는 듯했으나 이후, 용의 대지에서 에반에게 도움을 받은 후,
      에반 원정대에 합류했다.`,
      img: images.ui,
      largeImg: images.ui_large,
    },
    {
      id: "jupi",
      name: "쥬피",
      subtitle: "꿰뚫는 화살",
      description: `세상을 돌아다니며 위험에 빠진 사람들을 구해주는,
      진정한 의미의 모험가이자 의인이다.
      에반 일행과는 끝자락 마을에서 만난 이후,
      에반 일행의 여행 목적에 감동해 행동을 같이 하고 있다.
      자신의 정의를 추구할 정도의 행동력과 실력이 있다.`,
      img: images.jupi,
      largeImg: images.jupi_large,
    },
    {
      id: "hebnia",
      name: "헤브니아",
      subtitle: "푸른 유성",
      description: `천상인들 중에서도 손꼽히는 미모를 자랑하는
      외견과는 달리 상당한 왈가닥 발키리.
      선하고 정의롭지만, 호기심이 많다.
      천상의 이인자 ???에게 비밀 임무를 받고
      언니 헬레니아와 함께 지상으로 파견되었다.`,
      img: images.hebnia,
      largeImg: images.hebnia_large,
    },
    {
      id: "helenia",
      name: "헬레니아",
      subtitle: "붉은 혜성",
      description: `천상계를 수호하는 발키리 중 한 명으로,
      헤브니아의 쌍둥이 언니이다.
      천상계 귀족들 간의 전쟁이나 마수 토벌전에 참전하여
      많은 공을 세웠으며, 현재는 ??? 휘하의 비밀 감찰대 소속이다.
      천상은 파괴의 힘에 관한 것을 금기시하지만,
      ???의 명령으로 파괴의 조각을 품은 자들의 인성을 조사하기 위해 동생 헤브니아와 함께 지상에 내려왔다.
      `,
      img: images.helenia,
      largeImg: images.helenia_large,
    },
  ],
  [
    {
      id: "rudy",
      name: "루디",
      subtitle: "절대수호자",
      description: `신비의 숲 영주이자 세븐나이츠 중 한 명이다.
      빛의 자리를 두고 또 다른 세븐나이츠 크리스와 큰 마찰이 
      있었다. 지금은 크리스의 위협으로부터 테라 영지를 수호한다.`,
      video: "https://www.youtube.com/embed/OonjleriOVI?si=v155eE4Zr9bEHJxU",
      img: images.rudy,
      largeImg: images.rudy_large,
    },
    {
      id: "delon",
      name: "델론즈",
      subtitle: "준음의 군주",
      description: `죽음의 힘을 다루는 세븐나이츠 중 한 명. 교활한 두뇌와
      강력한 힘으로 아스드 대륙에 피바람을 일으킨다. 그가 대륙을 혼란에 빠뜨리는 목적이 무엇인지 밝혀지지 않았다.`,
      video: "https://www.youtube.com/embed/_61N2S7MV30?si=ibkQVW_m_McEGLA5",
      img: images.delon,
      largeImg: images.delon_large,
    },
    {
      id: "aileen",
      name: "아일린",
      subtitle: "포디나의 여제",
      description: `아일린은 뛰어난 지휘 능력과 힘, 그리고 총명함으로
      포디나의 여제가 되었다. 준비를 마친 그녀는 이제 침묵의 광산을 벗어나 영토를 넓히기 위한 모든 준비를 마쳤다.`,
      video: "https://www.youtube.com/embed/aB5RO_EvRT8?si=JRGJgI6Nqs618AhE",
      img: images.aileen,
      largeImg: images.aileen_large,
    },
    {
      id: "rachel",
      name: "레이첼",
      subtitle: "불멸의 화신",
      description: `화염의 사막을 다스리는 여제가 된 레이첼은
      자신을 불멸의 화신이라 칭하였다. 최근 화염의 사막을 
      노리는 세력들이 많아지자, 신경이 곤두서 있다.`,
      video: "https://www.youtube.com/embed/DLRDjQlZGLA?si=YTC0wwueAJfLp3nI",
      img: images.rachel,
      largeImg: images.rachel_large,
    },
    {
      id: "vanessa",
      name: "바네사",
      subtitle: "시간 목격자",
      description: `바네사는 시간의 틈 속에서 마법을 연구한 끝에
      대마법사의 경지에 올랐다. 하지만 본래 시간으로   
      돌아왔을 때는 이미 십수 년이 지난 후였다.`,
      video: "https://www.youtube.com/embed/etB--_9ChFw?si=d7LcOosMRxkhAb2L",
      img: images.vanessa,
      largeImg: images.vanessa_large,
    },
    {
      id: "chris",
      name: "크리스",
      subtitle: "지옥의 군주",
      description: `봉인되어 있던 대악마의 힘을 얻은 크리스는 
      지옥의 군주가 되었다. 수많은 몬스터 군단을 손에 
      넣은 크리스. 이제 그의 복수가 시작되려 한다.`,
      video: "https://www.youtube.com/embed/uyU-r8nh0sA?si=PMbTpKUjNrhL_Qlt",
      img: images.chris,
      largeImg: images.chris_large,
    },
    {
      id: "spike",
      name: "스파이크",
      subtitle: "혹한의 폭군",
      description: `강력한 카리스마로 수많은 얼음 정령을 통솔한 스파이크.
      이제 눈보라의 대지를 손에 넣기 위해 얼음 여왕에게 도전한다.
      혹한의 심장이 녹지 않는 이상 그는 멈추지 않을 것이다.`,
      video: "https://www.youtube.com/embed/9o0NqifUIrI?si=DZQ9-E2a-kvLeJOW",
      img: images.spike,
      largeImg: images.spike_large,
    },
    {
      id: "jaeb",
      name: "제이브",
      subtitle: "수호신",
      description: `드래곤들의 인정을 받은 제이브는 드넓은 
      용의 유적지 전체를 지키는 군주이자 수호신이 되었다.
      막강한 드래곤들이 모여있는 그의 군세는 강력한 힘이 있다.`,
      video: "https://www.youtube.com/embed/xST7BL3NoYM?si=WrTGJBoOn86o41-7",
      img: images.jaeb,
      largeImg: images.jaeb_large,
    },
    {
      id: "logi",
      name: "로지",
      subtitle: "은둔한 성기사",
      description: `로지는 아주 오래전 존재했던 스카이트리아 제국의
      명문가 중 하나였던 실버소드 가문의 장녀이자 여기사였다.
      장남인 레디샌즈보다 훨씬 뛰어난 능력을 가지고 있으나
      앞에 나서는 것을 좋아하지 않아 수련에만 전념했다..`,
      img: images.logi,
      largeImg: images.logi_large,
    },
  ],
  [
    {
      id: "yeonhee",
      name: "연희",
      subtitle: "종말의 인도자",
      description: `파괴의 전쟁 초기, 주변이 너무 시끄러워서 모조리
      제압해 버렸다. 그러자 사람들은 연희를 수호자라 믿으며
      사황이라 불렀다. 단지 조용히 쉬고 싶어 한 일일 뿐이었지만.`,
      img: images.yeonhee,
      largeImg: images.yeonhee_large,
    },
    {
      id: "silvesta",
      name: "실베스타",
      subtitle: "파괴의 정화자",
      description: `실베스타는 한때 뛰어난 전투 능력과 정의감으로 백성들의
      신뢰를 한 몸에 받는 빛의 기사였다. 하지만 파괴의 힘에 대해
      알게 된 후, 그 힘을 봉인하기 위한 모험을 시작했다.`,
      img: images.silvesta,
      largeImg: images.silvesta_large,
    },
    {
      id: "ace",
      name: "에이스",
      subtitle: "총운검의 주인",
      description: `에이스가 총운검의 목소리에 응하자 수많은 적들이 단칼에
      쓰러졌다. 총운검의 목소리를 듣는 자는 그 검에 인정받은
      진정한 주인뿐. 그 주인에게만 무시무시한 힘을 빌려준다.`,
      img: images.ace,
      largeImg: images.ace_large,
    },
    {
      id: "karon",
      name: "카론",
      subtitle: "자연의 주인",
      description: `신비의 숲을 다스리는 루디,
      그리고 에반과도 알고 지내는 사이며, 
      가끔 고블린 같은 몬스터의 습격에 도움을 받기도 한다.`,
      img: images.karon,
      largeImg: images.karon_large,
    },
    {
      id: "pai",
      name: "파이",
      subtitle: "사막의 화염",
      description: `엘프를 중심으로 한 인간 연합과 수인이 
      남부 사막 지역의 패권을 두고 전쟁을 벌이던 고대 시대의 여기사이자 아그니아의 영주. `,
      img: images.pai,
      largeImg: images.pai_large,
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
