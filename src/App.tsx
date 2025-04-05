import UsersList from "./Pages/UsersList";
import './App.css'

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      <header className="p-6 bg-indigo-700 text-white shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-tight">🚀 User Directory</h1>
          <span className="text-sm text-indigo-200 italic">Powered by JSONPlaceholder</span>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <UsersList />
      </main>

      <footer className="p-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Bestie Inc. — Built with ❤️ + ⚛️
      </footer>
    </div>
  );
};

export default App;
