import React, { useEffect, useState } from "react";

const Lifecycle = () => {
  // const [count, setCount] = useState(0);
  // const [text, setText] = useState("");

  // useEffect(() => {
  //   console.log("Mount!");
  // }, []);

  // useEffect(() => {
  //   console.log("Update!");
  // });

  // useEffect(() => {
  //   console.log(`count is updated: ${count}`);
  //   if (count > 5) {
  //     alert("count가 5를 넘었습니다. 1로 초기화합니다.");
  //     setCount(1);
  //   }
  // }, [count]);

  // useEffect(() => {
  //   console.log(`text is updated: ${text}`);
  // }, [text]);

  const UnmountTest = () => {
    useEffect(() => {
      console.log("Mount!");
      return () => {
        //Unmount 시점에 실행
        console.log("Unmount!");
      };
    }, []);

    return <div>Unmount Tesitng Component</div>;
  };

  const [isVisible, setIsVisible] = useState(false);
  const toggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div style={{ padding: 20 }}>
      <button onClick={toggle}>ON/OFF</button>
      {isVisible && <UnmountTest />}
    </div>
  );
};

export default Lifecycle;
