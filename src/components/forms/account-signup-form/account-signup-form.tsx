import { css } from "@emotion/css";
import { Input } from "../../atoms";

export const AccountSignupForm = () => {
    const formStyle = css `
        display: flex;
        flex-direction: column;
        align-items: center
    `
    return (
    <div>
        <form className={formStyle}>
                <Input name="email" type="email" labelText="email" placeholder="Email goes here"/>
                <Input name="userName" type="text"/>
                <Input name="password" type="password"/>
                <Input name="confirmPassword" type="password"/>
                <button type="submit"> Submit </button> 
        </form>
    </div>)
}