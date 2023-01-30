import UserDisplay from "./components/UserDisplay";
import { useQuery } from "@apollo/client";
import { GetUsersDocument } from "./graphql/generated";

function App() {
  const { loading, error, data } = useQuery(GetUsersDocument);

  console.log(data?.users)


  return (
    <div className="bg-zinc-800 flex-col h-screen w-full flex items-center justify-center p-4 gap-y-12 overflow-scroll">
      {loading && <p>Loading...</p>}
      {error && `Error!${error.message}`}
      {data?.users.map((user, index) => (
        <UserDisplay user={user} key={index} />
      ))}
    </div>
  );
}

export default App;
