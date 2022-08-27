import {AuthorizationStatus, NameSpace} from '../../const';
import {State} from '../../types/state';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;

export const getUserProcessError = (state: State): (string | null) => state[NameSpace.User].error;

export const getIsAuthCheckProcessing = (state: State): boolean => state[NameSpace.User].isAuthCheckProcessing;
