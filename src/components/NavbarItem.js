import "../styles/NavbarItem.css";

function NavbarItem(props) {
  return (
    <div
      onClick={props.onClick}
      className={
        props.active === props.index
          ? "NavbarItem NavbarItem--active"
          : "NavbarItem"
      }
    >
      <div className="NavbarItem__left">
        <img src={props.icon} className="NavbarItem__img" alt="" />
        <h3 className="NavbarItem__title">{props.title}</h3>
      </div>
      <h3 className="NavbarItem__amount">{props.amount}</h3>
    </div>
  );
}

export default NavbarItem;
