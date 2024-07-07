export default function TabButton(props) {
  function handleClick() {
    console.log("Hello world");
  }
  return (
    <li>
      <button
        className={props.isSelected ? "active" : undefined}
        onClick={props.onSelect}
      >
        {props.children}
      </button>
    </li>
  );
}
