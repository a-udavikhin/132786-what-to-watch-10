import {NameSpace} from '../../const';
import {State} from '../../types/state';

export const getGenre = (state: State): string => state[NameSpace.Films].genre;

export const getError = (state: State): (string | null) => state[NameSpace.Films].error;

export const getFilmsToDisplay = (state: State): number => state[NameSpace.Films].filmsToDisplay;

