import React, { useState } from "react";
import Child from "./Child";
function App() {
  // <---- 자바스크립트 영역 ---->
const handleClick = () => {
  alert("클릭!");
};
  //화면리턴구역//////////////////////////////////////
  return (
    /* <---- HTML/JSX 영역  ---->*/
    <>
      <div
        style={{
          height: '100vh',
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {/* 이곳에 퀴즈를 위한 html 코드를 작성해 주세요 */}
        <p>이것은 내가 만든 App컴포넌트 입니다</p>
        <button
          onClick={()=>{handleClick()}}
        >
          클릭
        </button>
      </div>
    </>
  );
}

export default App;
