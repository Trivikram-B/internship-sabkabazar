import React from "react";
import Heading from "../../molecules/Headings/Heading";
import InputItem from "../../molecules/InputItems/InputItem";
import RectangleButton from "../../atoms/Buttons/RectangleButton/RectangleButton";
import useForm from "../../../utils/UseFormLogin";
import "./LoginBody.scss"
const LoginBody=()=>{
    const { formValues, setFormValues, handleSubmit, formErrors} = useForm();
    return(
        <div className="login-body">

            <Heading  heading="Login" className="login-heading login-child" children="Get access to your Orders, Wishlist and Recommendations"/>
            
            <form onSubmit={handleSubmit} className="login-form login-child" autoComplete="off">
                <InputItem type="email" id="user-email" name="email" label="Email" className="" onChange={(event) =>
                setFormValues({ ...formValues, email: event.target.value })} values={formValues.email} errors={formErrors.email}/>
                <InputItem type="password" id="user-password" name="password" label="Password" className="" onChange={(event) =>
                setFormValues({ ...formValues, password: event.target.value })} values={formValues.password} errors={formErrors.password}/>
                <div className="login-btn"><RectangleButton children="Login"/></div>
                
            </form>
        </div>
    )
}
export default LoginBody;