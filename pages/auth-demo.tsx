import React, { FC, useEffect, useRef, useState } from 'react';
import firebase from '@/services/firebase';
import {
  ResendVerificationEmailResult,
  LogInResult,
  SignUpResult,
  SendResetPasswordLinkEmail,
  LogInWithGoogleResult
} from '@/services/firebase/auth';
import Div from '@/components/styled-system/div/div';
import Button from '@/components/styled-system/button/button';

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
    <Div border="1px solid #000" padding="32px" margin="32px">
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
    </Div>
  );
};

const SignUp = () => {
  const usernameRef = useRef<HTMLInputElement>();
  const emailRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();

  const [message, setMessage] = useState('');
  const [checkEmailModal, setCheckEmailModal] = useState(false);

  return (
    <Div border="1px solid #000" padding="32px" margin="32px">
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
        <br />
        <input ref={emailRef} placeholder="email" type="email" />
        <br />
        <input ref={passwordRef} placeholder="password" type="password" />
        <br />
        <input value="submit" type="submit" />
      </form>
      <br />
      <div>
        <button
          onClick={async () => {
            const result = await firebase.auth.logInWithGoogle();

            switch (result) {
              case LogInWithGoogleResult.success: {
                window.location.reload();
              }
            }
          }}>
          Continue with google
        </button>
        <br />
      </div>
      <div>{message}</div>
      {checkEmailModal && (
        <CheckEmailModal
          onClose={() => {
            setCheckEmailModal(false);
          }}
        />
      )}
    </Div>
  );
};

const ForgotPassword = () => {
  const emailRef = useRef<HTMLInputElement>();

  const [message, setMessage] = useState('');
  const [resetPasswordLinkSentModal, setResetPasswordLinkSentModal] = useState(
    false
  );

  return (
    <Div border="1px solid #000" padding="32px" margin="32px">
      <h1>Forgot password</h1>
      <form
        onSubmit={async (ev) => {
          ev.preventDefault();
          const email = emailRef.current.value;
          const result = await firebase.auth.sendResetPasswordLinkEmail(email);

          switch (result) {
            case SendResetPasswordLinkEmail.userNotFound: {
              setMessage('Email address not found.');
              break;
            }
            case SendResetPasswordLinkEmail.success: {
              setResetPasswordLinkSentModal(true);
              setMessage('');
              break;
            }
          }
        }}>
        <input ref={emailRef} placeholder="email" type="email" />
        <br />
        <input value="submit" type="submit" />
      </form>
      <div>{message}</div>
      {resetPasswordLinkSentModal && (
        <ResetPasswordLinkSentModal
          email={emailRef.current.value}
          onClose={() => {
            setResetPasswordLinkSentModal(false);
          }}
        />
      )}
    </Div>
  );
};

const LogIn = () => {
  const emailRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();

  const [message, setMessage] = useState('');
  const [checkEmailModal, setCheckEmailModal] = useState(false);

  return (
    <Div border="1px solid #000" padding="32px" margin="32px">
      <h1>log in</h1>
      <form
        onSubmit={async (ev) => {
          ev.preventDefault();
          const email = emailRef.current.value;
          const password = passwordRef.current.value;

          const logInResult = await firebase.auth.logIn(email, password);

          switch (logInResult) {
            case LogInResult.userNotFound: {
              setMessage('Email address not found.');
              break;
            }
            case LogInResult.wrongPassword: {
              setMessage('Incorrect password.');
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
        <br />
        <input ref={passwordRef} placeholder="password" type="password" />
        <br />
        <input value="submit" type="submit" />
      </form>
      <br />
      <div>
        <button
          onClick={async () => {
            const result = await firebase.auth.logInWithGoogle();

            switch (result) {
              case LogInWithGoogleResult.success: {
                window.location.reload();
              }
            }
          }}>
          Continue with google
        </button>
      </div>
      <div>{message}</div>
      {checkEmailModal && (
        <CheckEmailModal
          onClose={() => {
            setCheckEmailModal(false);
          }}
        />
      )}
    </Div>
  );
};

const CheckEmailModal: FC<any> = ({ onClose }) => {
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
    <Div
      border="1px solid #000"
      padding="32px"
      margin="32px"
      position="fixed"
      left="50%"
      top="50%"
      transform="translate(-50%, -50%)"
      minWidth="300px"
      background="#ffffff">
      <Div position="relative">
        <Button onClick={onClose} position="absolute" top="0" right="0">
          X
        </Button>
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
                  "The email can't be sent right now. Please wait for a moment and try again."
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
      </Div>
    </Div>
  );
};

const ResetPasswordLinkSentModal: FC<any> = ({ email, onClose }) => {
  console.log(email);
  return (
    <Div
      border="1px solid #000"
      padding="32px"
      margin="32px"
      position="fixed"
      left="50%"
      top="50%"
      transform="translate(-50%, -50%)"
      minWidth="300px"
      background="#ffffff">
      <Div position="relative">
        <Button onClick={onClose} position="absolute" top="0" right="0">
          X
        </Button>
        <h3>Reset password link sent</h3>
        <div>
          We just sent you an email with a link to reset your password to the
          following email address. Please check your inbox.
        </div>
        <form
          onSubmit={async (ev) => {
            ev.preventDefault();
            const result = await firebase.auth.sendResetPasswordLinkEmail(
              email
            );

            switch (result) {
              case SendResetPasswordLinkEmail.success: {
                alert(`We sent an email to ${email}.`);
                break;
              }
            }
          }}>
          <button>RESEND EMAIL</button>
        </form>
      </Div>
    </Div>
  );
};

const AuthDemo = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      const user = await firebase.auth.getVerifiedUser();
      console.log(user);
      if (user) {
        setLoggedIn(true);
      }
    };

    fetch();
  }, []);

  return (
    <div>
      {loggedIn ? (
        <CurrentUser />
      ) : (
        <>
          <SignUp />
          <LogIn />
          <ForgotPassword />
        </>
      )}
    </div>
  );
};

export default AuthDemo;
