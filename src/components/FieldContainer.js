import "../styles/FieldContainer.css";
import Field from "./Field";

function FieldContainer(props) {
  return (
    <div className="FieldContainer">
      <p className="FieldContainer__label">{props.date}</p>
      {props.fields.map((item, index) => {
        return <Field key={index} text={item.text} star={item.star} />;
      })}
    </div>
  );
}

export default FieldContainer;
