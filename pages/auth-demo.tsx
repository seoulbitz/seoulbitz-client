import React, { useEffect, useRef, useState } from 'react';
import firebase from '@/services/firebase';
import {
  ResendVerificationEmailResult,
  LogInResult,
  SignUpResult
} from '@/services/firebase/auth';

const CurrentUser = () => {
  const [user, setUser] = useState({ email: '', username: '' });
  useEffect(() => {
    const fetch = async () => {
      const user = await firebase.auth.getVerifiedUser();
      console.log(user);
      if (user) {
        setUser({ email: user.email, username: user.displayName });
      }
    };

    fetch();
  }, []);
  return (
    <div>
      <h1>current user</h1>
      <ul>
        <li>email: {user.email}</li>
        <li>username: {user.username}</li>
      </ul>
      <form
        onSubmit={async (ev) => {
          ev.preventDefault();
          await firebase.auth.logOut();
          window.location.reload();
        }}>
        <button>logout</button>
      </form>
    </div>
  );
};

const SignUp = () => {
  const usernameRef = useRef<HTMLInputElement>();
  const emailRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();

  const [message, setMessage] = useState('');
  const [checkEmailModal, setCheckEmailModal] = useState(false);

  return (
    <div>
      <h1>sign up</h1>
      <form
        onSubmit={async (ev) => {
          ev.preventDefault();
          const username = usernameRef.current.value;
          const email = emailRef.current.value;
          const password = passwordRef.current.value;

          const signUpResult = await firebase.auth.signUp(
            username,
            email,
            password
          );

          switch (signUpResult) {
            case SignUpResult.success: {
              alert('success!');
              setMessage('');
              setCheckEmailModal(true);
              break;
            }
            case SignUpResult.emailAlreadyInUse: {
              setMessage('This email is taken. Please try another one.');
              break;
            }
          }
        }}>
        <input ref={usernameRef} placeholder="username" type="username" />
        <input ref={emailRef} placeholder="email" type="email" />
        <input ref={passwordRef} placeholder="password" type="password" />
        <input value="submit" type="submit" />
      </form>
      <div>{message}</div>
      {checkEmailModal && <CheckEmailModal />}
    </div>
  );
};

const LogIn = () => {
  const emailRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();

  const [message, setMessage] = useState('');
  const [checkEmailModal, setCheckEmailModal] = useState(false);

  return (
    <div>
      <h1>log in</h1>
      <form
        onSubmit={async (ev) => {
          ev.preventDefault();
          const email = emailRef.current.value;
          const password = passwordRef.current.value;

          const logInResult = await firebase.auth.logIn(email, password);

          switch (logInResult) {
            case LogInResult.userNotFound: {
              setMessage(
                'the user corresponding to the given email has been disabled.'
              );
              break;
            }
            case LogInResult.wrongPassword: {
              setMessage(
                'The password is invalid for the given email, or the account corresponding to the email does not have a password set.'
              );
              break;
            }
            case LogInResult.userEmailNotVerified: {
              const result = await firebase.auth.resendVerificationEmail();
              switch (result) {
                case ResendVerificationEmailResult.tooManyRequests: {
                  break;
                }
                default: {
                  setMessage('');
                  setCheckEmailModal(true);
                }
              }

              break;
            }
            case LogInResult.success: {
              window.location.reload();
              break;
            }
          }
        }}>
        <input ref={emailRef} placeholder="email" type="email" />
        <input ref={passwordRef} placeholder="password" type="password" />
        <input value="submit" type="submit" />
      </form>
      <div>{message}</div>
      {checkEmailModal && <CheckEmailModal />}
    </div>
  );
};

const CheckEmailModal = () => {
  const [email, setEmail] = useState('');
  useEffect(() => {
    const fetch = async () => {
      const user = await firebase.auth.getCurrentUser();
      if (user) {
        setEmail(user.email);
      }
    };
    fetch();
  }, []);
  return (
    <div>
      <h3>Check your inbox</h3>
      <div>
        We sent an email to {email}. Verify your email address and complete
        signing up.
      </div>
      <form
        onSubmit={async (ev) => {
          ev.preventDefault();
          const result = await firebase.auth.resendVerificationEmail();
          switch (result) {
            case ResendVerificationEmailResult.tooManyRequests: {
              alert(
                "The email can't be send right now. Please wait for a moment."
              );
              break;
            }
            default: {
              const user = result;
              alert(`We sent an email to ${user.email}.`);
              console.log('hi');
            }
          }
        }}>
        <button>RESEND EMAIL</button>
      </form>
    </div>
  );
};

const AuthDemo = () => {
  return (
    <div>
      <CurrentUser />
      <SignUp />
      <LogIn />
    </div>
  );
};

export default AuthDemo;
