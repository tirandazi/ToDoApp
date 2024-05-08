export default function ({ name, onBtnClick }) {
  return (
    <div className="BtnEmpty">
      <button onClick={onBtnClick}>{name}</button>
    </div>
  );
}
