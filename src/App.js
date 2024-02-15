import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "./store/users/userActions";


const App = () => {
  const users = useSelector(state => state.users)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(fetchUsers())
  }, [])


  return <>
    {users.error && <h2>Error</h2>}
    {

      users.data && <div>
        <h1>Users: </h1>
        {users.data.map(user => <h2 key={user.id}>{user.name}</h2>)}
      </div>
    }
  </>
};

export default App;
