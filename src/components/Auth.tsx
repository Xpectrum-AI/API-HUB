import { withAuthInfo, useRedirectFunctions, useLogoutFunction, WithAuthInfoProps } from '@propelauth/react'
import { Button } from "@/components/ui/button"

const Auth = withAuthInfo((props: WithAuthInfoProps) => {
    const logoutFunction = useLogoutFunction()
    const { redirectToLoginPage, redirectToSignupPage, redirectToAccountPage } = useRedirectFunctions()

    if (props.isLoggedIn) {
        return (
            <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600">Logged in as {props.user.email}</span>
                <Button variant="outline" onClick={() => redirectToAccountPage()}>
                    Account
                </Button>
                <Button variant="destructive" onClick={() => logoutFunction(true)}>
                    Logout
                </Button>
            </div>
        )
    } else {
        return (
            <div className="flex items-center gap-4">
                <Button variant="outline" onClick={() => redirectToLoginPage()}>
                    Login
                </Button>
                <Button onClick={() => redirectToSignupPage()}>
                    Signup
                </Button>
            </div>
        )
    }
})

export default Auth 