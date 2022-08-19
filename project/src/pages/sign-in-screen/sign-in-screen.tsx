import {AppRoute} from '../../const';
import {Link, useNavigate} from 'react-router-dom';
import {BaseSyntheticEvent, useState, FormEvent} from 'react';
import {store} from '../../store';
import {loginAction} from '../../store/api-actions';
import { handleError } from '../../services/handle-error';

function SignInScreen(): JSX.Element {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    userEmail: '',
    userPassword: ''
  });

  const fieldChangeHandle = (evt: BaseSyntheticEvent) => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value});
  };

  const submitHandle = (evt: FormEvent) => {
    evt.preventDefault();

    try {
      if (formData.userEmail !== '' && formData.userPassword !== '') {
        store.dispatch(loginAction({email: formData.userEmail, password: formData.userPassword}));
        navigate(AppRoute.Root);
      } else {
        throw new Error('Login or password cannot be empty!');
      }
    } catch(err) {
      handleError((err as Error).message);
    }
  };

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link to={AppRoute.Root} className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={submitHandle}>
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input className="sign-in__input" type="email" placeholder="Email address" name="userEmail" id="user-email" onChange={fieldChangeHandle} value={formData.userEmail} />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input className="sign-in__input" type="password" placeholder="Password" name="userPassword" id="user-password" onChange={fieldChangeHandle} value={formData.userPassword}/>
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <footer className="page-footer">
        <div className="logo">
          <Link to={AppRoute.Root} className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

export default SignInScreen;
