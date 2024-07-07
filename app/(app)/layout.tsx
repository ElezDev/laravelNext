'use client'

import { ReactNode } from 'react'
import { useAuth } from '../hooks/auth'
import Navigation from './Navigation'
import Loading from '@/app/(app)/Loading'

interface AppLayoutProps {
    children: ReactNode
}

const AppLayout = ({ children }: AppLayoutProps) => {
    const { user } = useAuth({ middleware: 'auth', redirectIfAuthenticated: false })

    if (!user) {
        return <Loading />
    }

    return (
        <div className="min-h-screen bg-gray-100">
            <Navigation user={user} />

            <main>{children}</main>
        </div>
    )
}

export default AppLayout
