import { useRef, useState } from "react";

const DiaryEditor = ({ onCreate }) => {
  const authorInput = useRef();
  const contentInput = useRef();

  const [state, setState] = useState({
    author: "",
    content: "",
    score: "5",
  });

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (state.author.length < 1) {
      // focus textbox when it's saved without any contents in textbox
      authorInput.current.focus();

      return;
    }

    if (state.content.length < 5) {
      // focus textbox when it's saved without any contents in textbox
      contentInput.current.focus();
      return;
    }

    onCreate(state.author, state.content, state.score);
    alert("저장 성공");

    setState({
      author: "",
      content: "",
      score: 5,
    });
  };

  return (
    <div className="DiaryEditor">
      <h2>Today I Learned</h2>

      <div>
        <input ref={authorInput} name="author" value={state.author} onChange={handleChangeState} />
      </div>

      <div>
        <textarea ref={contentInput} name="content" value={state.content} onChange={handleChangeState}></textarea>
      </div>

      <div>
        집중 점수 :
        <select name="score" value={state.score} onChange={handleChangeState}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>

      <div>
        <button onClick={handleSubmit}>TIL 저장하기</button>
      </div>
    </div>
  );
};

export default DiaryEditor;
