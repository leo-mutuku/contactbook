import { useEffect, useState } from "react";
import "./App.css";
import ListHeader from "./components/ListHeader";
import ListItem from "./components/ListItem";
import Auth from "./components/Auth";
import { useCookies } from "react-cookie";

function App() {
  const [cookies, setCookie, removeCookie] = useCookies(null)
  const authToken = cookies.AuthToken
  const [mode, setMode] = useState(null);
  const [contacts, setContacts] = useState(null);
  const user_email = cookies.user_email
  console.log(authToken)

  const getData = async () => {
    try {
      const response = await fetch(`http://localhost:8000/contacts/${user_email}`);
      const json = await response.json();
      setContacts(json);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(contacts)
  useEffect(() => {
    if(authToken){
      getData()
    }
  }, []);

  const sortedTasks = contacts?.sort((a, b) => a.date < b.date? 1 : -1);

  return (
    <div className="app">
      {!authToken && <Auth />}
      {authToken && (
        <>
          <ListHeader
            getData={getData}
            setMode={setMode}
            mode={mode}
            listName={"My Contact Book"}
          />
          <p className="user-email"> Welcome back {user_email}!</p>
          {sortedTasks?.map((contact) => (
            <ListItem
              key={contact.id}
              setMode={setMode}
              contact={contact}
              getData={getData}
            />
          ))}
        </>
      )}
      <p className="copyright"> Code with Leonard M. Crafted on 15/10/2023 </p>
    </div>
  );
}

export default App;
