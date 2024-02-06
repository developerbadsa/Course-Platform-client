
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, logoutUser, register } from './Redux/State/userAuth';


const App = () => {

      const currentUser = useSelector(state => state.user.currentUser);
  const loading = useSelector(state => state.user.loading);
  const error = useSelector(state => state.user.error);
  const dispatch = useDispatch();


console.log(currentUser)

  const handleLogin = (e) => {
      e.preventDefault()

      const email = e.target.email.value
      const password = e.target.password.value


      // console.log('going to login', email, password)
    dispatch(loginUser(email, password))
  };

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {currentUser ? (
        <div>
          <p>Welcome, {currentUser.email}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Email"  name='email'/>
          <input type="password" placeholder="Password" name='password'/>
          <button type='submit'>login</button>
        </form>
      )}
    </div>
  );
};

export default App;