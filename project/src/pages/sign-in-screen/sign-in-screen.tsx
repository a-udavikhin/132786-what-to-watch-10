import {AppRoute} from '../../const';
import {useNavigate} from 'react-router-dom';
import {BaseSyntheticEvent, useState, FormEvent} from 'react';
import {loginAction} from '../../store/api-actions';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import {userProcess} from '../../store/user-process/user-process';
import {useAppDispatch} from '../../hooks/redux';

function SignInScreen(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState({
    userEmail: '',
    userPassword: ''
  });

  const handleFieldChange = (evt: BaseSyntheticEvent) => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value});
  };

  const passwordRequirements = new RegExp('(?=.*?[0-9])(?=.*?[A-Za-z]).+');

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();

    if (formData.userEmail !== '' && formData.userPassword !== '') {
      if (passwordRequirements.test(formData.userPassword)) {
        dispatch(loginAction({email: formData.userEmail, password: formData.userPassword}));
        navigate(AppRoute.Root);
      } else {
        dispatch(userProcess.actions.setError('Password should contain at least one letter and at least one digit'));
      }

    } else {
      dispatch(userProcess.actions.setError('Login and password cannot be empty!'));
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
