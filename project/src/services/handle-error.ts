import {store} from '../store';
import {filmsProcess} from '../store/films-process/films-process';


export const handleError = (message: string): void => {
  store.dispatch(filmsProcess.actions.setError(message));
  store.dispatch(filmsProcess.actions.clearError());
};
