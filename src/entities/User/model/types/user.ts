import { UserRole } from '../consts/consts';
import { FeatureFlags } from '@/shared/types/featureFlags';

export interface User {
    id: string;
    username: string;
    roles?: UserRole[];
    avatar?: string;
    features?: FeatureFlags;
}

export interface UserSchema {
    authData?: User;
    _inited: boolean;
}
