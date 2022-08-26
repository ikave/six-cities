import { NameSpace } from '../../constants';
import { State } from '../../types/state';

export const getAuthStatus = (state: State) => state[NameSpace.User].authStatus;
export const getUser = (state: State) => state[NameSpace.User].user;
