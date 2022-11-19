import { AccountSignupForm } from "../components";


type OnboardingProps = {
    step: number;
}

export const Onboarding = (props: OnboardingProps) => {
    const { step } = props;
    return (
        <div>
            <AccountSignupForm />
        </div>
    )
}