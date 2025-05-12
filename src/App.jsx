import { useState } from 'react'
import Editer from './Components/Editer';

function App() {
  const [username, setUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    if (username.trim()) {
      setIsLoggedIn(true);
    }
  };

  return (
    <div className="h-screen flex items-center  justify-center bg-slate-900">
      {!isLoggedIn ? (
        <div className="p-6 bg-green-200 rounded flex flex-col items-center shadow-2xl gap-4">
          <h1 className="text-2xl font-bold">Enter your username</h1>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border p-2 rounded w-64"
            placeholder="Username"
          />
          <button
            onClick={handleLogin}
            className="bg-blue-500 hover:bg-slate-700 text-white px-4 py-2 rounded"
          >
            Join Editor
          </button>
        </div>
      ) : (
        <Editer username={username} />
      )}
    </div>
  );
}

export default App
