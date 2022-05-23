import DiaryItem from "./DiaryItem";

const DiaryList = ({ onRemove, diaryList, onEdit }) => {
  return (
    <div className="DiaryList">
      <h2>TIL 리스트</h2>
      <h4>{diaryList.length}개의 일기가 있습니다.</h4>

      <div>
        {diaryList.map((it) => (
          <DiaryItem key={it.id} {...it} onRemove={onRemove} onEdit={onEdit} />
        ))}
      </div>
    </div>
  );
};

// In case props is sent like 'undefined' or 'null'
DiaryList.defaultProps = {
  diaryList: [],
};
export default DiaryList;
