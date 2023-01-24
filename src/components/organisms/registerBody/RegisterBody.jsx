import React from "react";
import Heading from "../../molecules/Headings/Heading";
import InputItem from "../../molecules/InputItems/InputItem";
import RectangleButton from "../../atoms/Buttons/RectangleButton/RectangleButton";
import useForm from "../../../utils/UseFormRegister";
import "./RegisterBody.scss";
const RegisterBody=()=>{
    const { formValues, setFormValues, handleSubmit, formErrors } = useForm();
    return(
        <div className="register-body">
           
            <Heading  heading="Signup" className="register-heading register-child" children="We do not share your personal details wiith anyone."/>
            
            <form onSubmit={handleSubmit} className="register-form register-child" autoComplete="off" >
                <InputItem type="text" id="fname" label="First Name" className="" onChange={(event) =>
                setFormValues({ ...formValues, firstName: event.target.value })
                } values={formValues.firstName} errors={formErrors.firstName}/>
                <InputItem type="text" id="lname" label="Last Name" className="" onChange={(event) =>
                setFormValues({ ...formValues, lastName: event.target.value })} values={formValues.lastName} errors={formErrors.lastName}/>
                <InputItem type="email" id="email" label="Email" className="" onChange={(event) =>
                setFormValues({ ...formValues, email: event.target.value })} values={formValues.email} errors={formErrors.email} />
                <InputItem type="password" id="password" label="Password" className="" onChange={(event) =>
                setFormValues({ ...formValues, password: event.target.value })} values={formValues.password} errors={formErrors.password}/>
                <InputItem type="password" id="cpassword" label="Confirm Password" className="" onChange={(event) =>
                setFormValues({ ...formValues, confirmPassword: event.target.value })} values={formValues.confirmPassword} errors={formErrors.confirmPassword}/>
                <div className="register-btn"><RectangleButton children="Signup"/></div>
                
            </form>
        </div>
    )
}
export default RegisterBody;