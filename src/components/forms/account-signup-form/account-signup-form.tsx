import  './account-signup-form.css';

export const AccountSignupForm = () => {

    return (
    <div>
        <form className="form-style">
                <input name="email" type="email"/>
                <input name="userName" type="text"/>
                <input name="password" type="password"/>
                <input name="confirmPassword" type="password"/>
                <button type="submit"> Submit </button> 
        </form>
    </div>)
}