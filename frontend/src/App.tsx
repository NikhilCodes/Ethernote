import React, { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import AuthPage from './pages/Auth';
import DashboardPage from './pages/Dashboard';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './redux/store';
import Loader from './pages/Loader';
import './App.css';
import { loadAuth } from './redux/actions/authActions';
import { AuthType } from './redux/types/authTypes';
import { loadScratchPad } from './redux/actions/scratchActions';

const ProtectedRoute = ({ children, ...rest }: Partial<{ children: any, path: string }>) => {
  const auth = useSelector((state: RootState) => state.auth);
  const isLoggedIn = auth.status === AuthType.AUTHENTICATED;
  return (
    <Route {...rest} render={() => {
      return isLoggedIn
        ? children
        : <Redirect to="/login" />;
    }} />
  );
};

function App() {
  const auth = useSelector((state: RootState) => state.auth);
  const scratch = useSelector((state: RootState) => state.scratch);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadScratchPad());
    dispatch(loadAuth());
  }, []);

  if (auth.isLoading || scratch.isLoading) return <Loader />;

  return (
    <Switch>
      <Route exact path={'/login'}>
        <AuthPage />
      </Route>
      <ProtectedRoute path={'/app'}>
        <DashboardPage />
      </ProtectedRoute>
    </Switch>
  );
}

export default App;
