import Label from "../../atoms/Labels/Label";
import Input from "../../atoms/Inputs/Input";
import { FaExclamationCircle } from "react-icons/fa";
import "./Inputitem.scss";
const InputItem = ({ type, id, label, onChange, values, errors, name, onBlur }) => {
  return (
    <div className="input-item">
      <Label id={id} label={label} className="label" />
      <Input
        type={type}
        id={id}
        name={name}
        className="input"
        value={values}
        onChange={onChange}
        onBlur={onBlur}
      />
      {errors && (
        <p className="form-error">
          <i className="error-icon">
            <FaExclamationCircle />
          </i>&nbsp;{errors}
        </p>
      )}
    </div>
  );
};
export default InputItem;
