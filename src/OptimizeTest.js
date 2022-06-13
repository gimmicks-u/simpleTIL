import React, { useEffect, useState } from "react";

const CounterA = React.memo(({ count }) => {
  useEffect(() => {
    console.log(`CounterA update - count: ${count}`);
  });
  return <div>{count}</div>;
});

// prop인 obj가 객체(얕은 비교 - 주소에 의한 비교)
const CounterB = ({ obj }) => {
  useEffect(() => {
    console.log(`CounterB update - obj: ${obj.count}`);
  });
  return <div>{obj.count}</div>;
};

// 얕은비교를 하지 않도록하여 최적화
const areEqual = (preProps, nextProps) => {
  if (preProps.obj.count === nextProps.obj.count) {
    return true; // 이전 Props와 현재 Props가 같다 => 리렌더링 일으키지 않게 한다
  }
  return false; // 이전 Props와 현재 Props가 다르다 => 리렌더링 일으킨다

  // return preProps.obj.count === nextProps.obj.count // 간단하게 이렇게 작성할 수 있음.
};

// areEqual의 판단에 따라서 렌더링 결정
const MemoizedCounterB = React.memo(CounterB, areEqual);

const OptimizeTest = () => {
  const [count, setCount] = useState(1);
  const [obj, setObj] = useState({
    count: 1,
  });

  return (
    <div style={{ padding: 50 }}>
      <div>
        <h2>Counter A</h2>
        <CounterA count={count} />
        <button onClick={() => setCount(count)}>A button</button>
      </div>

      <div>
        <h2>Counter B</h2>
        <MemoizedCounterB obj={obj} />
        <button onClick={() => setObj({ count: obj.count })}>B button</button>
      </div>
    </div>
  );
};

export default OptimizeTest;
