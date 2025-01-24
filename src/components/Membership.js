import { useState } from "react";
import { VscChevronRight } from "react-icons/vsc";

const Membership = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [emailError, setEmailError] = useState(false);
  return (
    <div className="membership">
      <p>시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를 입력하세요.</p>
      <div className={`email-box ${isFocused ? "focused":""} ${emailError ? "error":""}`}
      >
        <label>이메일주소</label>
        <input 
          type="email"
          onFocus={ ()=>{ 
            setIsFocused(true);
            setEmailError(false);
          }}
          onBlur={ (event)=>{
            if(event.target.value === "" ) 
              setIsFocused(false);
              setEmailError(true);
          }}
        />
        <button>시작하기<VscChevronRight /></button>
        {
          emailError && <p className="email-error"> ⓧ 이메일 주소는 필수항목 입니다.</p>
        }
      </div>
    </div>
  );
};

export default Membership;