import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { getUserAuthData, getUserRoles, UserRole } from '@/entities/User';

interface RequireAuthProps {
    children: JSX.Element;
    roles?: UserRole[];
}

export function RequireAuth(pros: RequireAuthProps) {
    const {
        children,
        roles,
    } = pros;

    const auth = useSelector(getUserAuthData);
    const location = useLocation();
    const userRoles = useSelector(getUserRoles);

    const hasRequiredRoles = useMemo(() => {
        if (!roles) {
            return true;
        }

        return roles.some((requiredRole) => {
            const hasRole = userRoles?.includes(requiredRole);
            return hasRole;
        });
    }, [roles, userRoles]);

    if (!auth) {
        return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
    }

    if (!hasRequiredRoles) {
        return <Navigate to={RoutePath.forbidden} state={{ from: location }} replace />;
    }

    return children;
}
