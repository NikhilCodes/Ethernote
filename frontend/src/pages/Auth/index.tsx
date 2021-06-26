import './styles.scss';
import NoteLogo from '../../assets/images/notebook.png';
import { Button, Text, TextInput } from 'grommet';
import { useState } from 'react';
import { login, register } from '../../apis/auth.api';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { authenticateUser } from '../../redux/actions/authActions';
import { withRouter } from 'react-router';

function AuthPage(props: any) {
  const [isRegistering, setIsRegistering] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  return (
    <div className={'login-root'}>
      <div className={'login-container'}>
        <div style={{
          flex: 1,
          marginRight: 60,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
        }}>
          <div
            style={{
              width: 100,
              height: 100,
              position: 'absolute',
              background: 'linear-gradient(#6069d4, cyan)',
              borderRadius: '50%',
              top: 10,
              left: 10,
            }}
          />
          <div
            style={{
              width: 40,
              height: 40,
              position: 'absolute',
              background: 'linear-gradient(#6069d4, cyan)',
              borderRadius: '50%',
              right: 10,
              top: 20,
            }}
          />
          <div
            style={{
              width: 20,
              height: 20,
              position: 'absolute',
              background: 'linear-gradient(#6069d4, cyan)',
              borderRadius: '50%',
              right: 70,
              top: -20,
            }}
          />
          <div style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            background: 'linear-gradient(#6069d4, cyan)',
            borderRadius: '50%',
            overflow: 'hidden',
            height: 260,
            width: 260,
          }}>
            <img src={NoteLogo} height={'200px'} alt={'logo'} />
          </div>
        </div>
        <div style={{
          width: '2px',
          height: '320px',
          backgroundColor: 'gray',
        }} />
        <div style={{
          flex: 1,
          marginLeft: 60,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          color: 'white',
        }}>
          <div style={{
            fontFamily: 'Modulus',
            fontSize: 42,
            fontWeight: 'bolder',
            marginBottom: 30,
          }}>
            <span style={{ color: 'cyan' }}>Ether</span>note
          </div>
          <div style={{
            position: 'relative',
          }}>
            <TextInput
              onChange={(event) => setName(event.target.value)}
              value={name}
              placeholder="Your Name"
              style={{
                position: 'absolute',
                borderColor: 'cyan',
                borderWidth: 2,
                borderRadius: 10,
                opacity: isRegistering ? 1 : 0,
                transitionDuration: '200ms',
              }}
            />
            <div
              style={{
                height: isRegistering ? 44 : 0, // Height + (padding * 2) + (Border * 2)
                transitionDuration: '200ms',
              }}
            />
          </div>
          <TextInput
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            placeholder="someone@email.com"
            type={'email'}
            style={{
              borderColor: 'cyan',
              borderWidth: 2,
              borderRadius: 10,
              marginTop: 20,
              transitionDuration: '200ms',
            }}
          />
          <TextInput
            onChange={(event) => setPassword(event.target.value)}
            value={password}
            placeholder="********"
            type={'password'}
            style={{
              borderColor: 'cyan',
              borderWidth: 2,
              borderRadius: 10,
              marginTop: 20,
              transitionDuration: '200ms',
            }}
          />
          <Button
            primary
            label={isRegistering ? 'Sign Up' : 'Sign In'}
            style={{
              borderRadius: 10,
              marginTop: 20,
            }}
            onClick={async () => {
              if (isRegistering) {
                if (name.length && email.length && password.length) {
                  await register(name, email, password);
                } else {
                  toast.dark('Enter all details');
                }
              } else {
                await login(email, password);
              }

              await dispatch(authenticateUser());
              props.history.replace('/app');
            }}
          />
          <Text
            style={{ alignSelf: 'flex-end', marginTop: 20, color: 'cyan', cursor: 'pointer' }}
            onClick={() => {
              setIsRegistering(!isRegistering);
            }}
          >
            {isRegistering ? 'Sign In instead' : 'New here? Register'}
          </Text>
        </div>
      </div>
    </div>
  );
}

export default withRouter(AuthPage);
