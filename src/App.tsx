import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import './App.css';

function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div className="app-container">
          <div className="welcome-card">
            <h1>Welcome</h1>
            <p className="user-email">{user?.signInDetails?.loginId}</p>
            <p className="user-id">User ID: {user?.userId}</p>
            <button className="sign-out-btn" onClick={signOut}>
              Sign out
            </button>
          </div>
        </div>
      )}
    </Authenticator>
  );
}

export default App;
