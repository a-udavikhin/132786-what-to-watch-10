import {AuthorizationStatus, NameSpace} from '../../const';
import {State} from '../../types/state';
import { UserData } from '../../types/user';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;

export const getUserProcessError = (state: State): (string | null) => state[NameSpace.User].error;

export const getIsAuthCheckProcessing = (state: State): boolean => state[NameSpace.User].isAuthCheckProcessing;

export const getUserData = (state: State): (UserData | null) => state[NameSpace.User].userData;
