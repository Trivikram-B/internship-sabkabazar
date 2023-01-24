import "./Input.scss";
const Input = ({type,id, className, onChange, values, onBlur}) =>{
        return (
                        <input
                            type={type}
                            id={id}
                            className={className}  
                            value={values}
                            onChange={onChange}
                            onBlur={onBlur}
                        />
        )
     }
export default Input

