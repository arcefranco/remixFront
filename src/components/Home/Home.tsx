import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { reset } from "../../reducers/auth/authSlice";
import { RootState } from "../../store";

function Home() {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);
  React.useEffect(() => {
    dispatch(reset());
  });

  return (
    <div>
      <h1>Home</h1>
      {user && (
        <div>
          <p>{user.username}</p>
          <p>{user.imgUrl}</p>
        </div>
      )}
    </div>
  );
}

export default Home;
