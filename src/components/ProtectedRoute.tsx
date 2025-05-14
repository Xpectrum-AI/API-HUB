import { withAuthInfo, WithAuthInfoProps } from '@propelauth/react'
import { Navigate } from 'react-router-dom'

type ProtectedRouteProps = {
    children: React.ReactNode
} & WithAuthInfoProps

const ProtectedRoute = withAuthInfo((props: ProtectedRouteProps) => {
    if (!props.isLoggedIn) {
        return <Navigate to="/" replace />
    }

    return <>{props.children}</>
})

export default ProtectedRoute 