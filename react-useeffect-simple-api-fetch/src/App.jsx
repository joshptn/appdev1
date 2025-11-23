import UserFetch from "./UserFetch";
import PostsFetchAsync from "./PostsFetchAsync";
import TodosFetchAxios from "./TodosFetchAxios";

function App() {
  return (
    <>
      <UserFetch />
      <PostsFetchAsync />
      <TodosFetchAxios />
    </>
  );
}

export default App;