import {AppRoute} from '../../const';
import {useNavigate} from 'react-router-dom';
import {BaseSyntheticEvent, useState, FormEvent} from 'react';
import {store} from '../../store';
import {loginAction} from '../../store/api-actions';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';

function SignInScreen(): JSX.Element {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    userEmail: '',
    userPassword: ''
  });

  const handleFieldChange = (evt: BaseSyntheticEvent) => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value});
  };

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();

    if (formData.userEmail !== '' && formData.userPassword !== '') {
      store.dispatch(loginAction({email: formData.userEmail, password: formData.userPassword}));
      navigate(AppRoute.Root);
    } else {
      //handleError('Login and password cannot be empty!');
    }
  };

  return (
    <div className="user-page">

      <Header className='user-page__head' noUserBlock>
        <h1 className="page-title user-page__title">Sign in</h1>
      </Header>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={handleSubmit}>
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input className="sign-in__input" type="email" placeholder="Email address" name="userEmail" id="user-email" onChange={handleFieldChange} value={formData.userEmail} />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input className="sign-in__input" type="password" placeholder="Password" name="userPassword" id="user-password" onChange={handleFieldChange} value={formData.userPassword}/>
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default SignInScreen;
