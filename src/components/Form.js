import "../styles/Form.css";
import FieldContainer from "./FieldContainer";
import { formFields } from "../helpers/helpers";

function Form() {
  return (
    <div className="Form">
      {formFields.map((item, index) => {
        return (
          <FieldContainer key={index} date={item.date} fields={item.fields} />
        );
      })}
    </div>
  );
}

export default Form;
