import './error-message.css';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {NameSpace, TIMEOUT_SHOW_ERROR_MS} from '../../const';
import {filmsData} from '../../store/films-data/films-data';
import {userProcess} from '../../store/user-process/user-process';
import {getFilmsDataError} from '../../store/films-data/selectors';
import {getUserProcessError} from '../../store/user-process/selectors';
import {ActionCreatorWithoutPayload} from '@reduxjs/toolkit';
import {useEffect} from 'react';

type Error = {
  namespace: NameSpace,
  error: string | null,
  handler: ActionCreatorWithoutPayload<string>,
  timeoutIndex: number | null
}

function ErrorMessage(): JSX.Element | null {
  const dispatch = useAppDispatch();

  const errors: Error[] = [
    {
      namespace: NameSpace.Data,
      error: useAppSelector(getFilmsDataError),
      handler: filmsData.actions.clearError,
      timeoutIndex: null
    },
    {
      namespace: NameSpace.User,
      error: useAppSelector(getUserProcessError),
      handler: userProcess.actions.clearError,
      timeoutIndex: null
    }
  ];

  useEffect(() => {
    for (const entry of errors) {

      if (entry.error && !entry.timeoutIndex) {
        entry.timeoutIndex = Number(setTimeout(
          () => {
            dispatch(entry.handler());
          },
          TIMEOUT_SHOW_ERROR_MS
        ));
      }

    }

    return () => {
      for (const entry of errors) {
        if (entry.timeoutIndex)
        {
          clearTimeout(entry.timeoutIndex);
          entry.timeoutIndex = null;
        }
      }
    };

  }, [errors]);

  return (errors)
    ?
    <ul className="error-message">{errors.map(({namespace, error, handler}, index) =>
      error
        ? (
          <li key={`error - ${index * error.length}`}>
            <p>❗ {error}</p>
            <button onClick={() => dispatch(handler())}>&#x2716;</button>
          </li>
        )
        :
        null
    )}
    </ul>
    :
    null;
}

export default ErrorMessage;
