import { useState } from "react";

const FAQList = [
  {id:1,
    Q:"넷플릭스에서는 어떤 콘텐츠를 시청할 수 있나요?",
    A:"넷플릭스는 장편영화, 다큐멘터리, 시리즈, 애니메이션, 각종 상을 수상한 넷플릭스"},
  {id:2,
    Q:"넷플릭스란 무엇인가요?",
    A:"넷플릭스는 각종 수상경력에 빛나는 시리즈, 영화, 애니메이션, 다큐멘터리등 다양한 수상을 수상한 넷플릭스"},
  {id:3,
    Q:"넷플릭스에서는 어떤 콘텐츠를 시청할 수 있나요?",
    A:"마음에 드는 콘텐츠를 원하는 시간에 원하는 만큼 시청하실 수 있습니다."}
  ];
const FAQ = () => {
  const [openIdx, setOpenIdx] = useState(null);
  const handleClick = (idx) =>{
    // setOpenIdx(idx);
    setOpenIdx( openIdx === idx ?  null : idx );
  }
  return (
    <div className="faq">
      <h2>자주 묻는 질문</h2>
      <ul className="fap-list">
        {
          FAQList.map((list,idx)=>{
            return <li key={list.id}>
              <button onClick={handleClick}>{list.Q}</button>
              {openIdx === idx && <p>{list.A}</p>}
              </li>
            })
          }
      </ul>
    </div>
  );
};

export default FAQ;