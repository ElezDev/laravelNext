import React, { HTMLAttributes } from 'react';

interface AuthSessionStatusProps extends HTMLAttributes<HTMLDivElement> {
    status?: string;
    className?: string;
}

const AuthSessionStatus: React.FC<AuthSessionStatusProps> = ({ status, className, ...props }) => (
    <>
        {status && (
            <div
                className={`${className} font-medium text-sm text-green-600`}
                {...props}>
                {status}
            </div>
        )}
    </>
);

export default AuthSessionStatus;
