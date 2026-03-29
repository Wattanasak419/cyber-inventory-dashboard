import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import { useInventory } from "./hooks/useInventory";

function App() {
  const inventory = useInventory();

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100 flex">

        {/* Sidebar */}
        <aside className="w-64 bg-gray-900 text-white flex flex-col">
          <div className="p-6 text-2xl font-bold border-b border-gray-700">
            Inventory Pro
          </div>

          <nav className="flex flex-col gap-2 p-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `p-3 rounded-lg transition ${
                  isActive
                    ? "bg-blue-600"
                    : "hover:bg-gray-700"
                }`
              }
            >
              Dashboard
            </NavLink>

            <NavLink
              to="/products"
              className={({ isActive }) =>
                `p-3 rounded-lg transition ${
                  isActive
                    ? "bg-blue-600"
                    : "hover:bg-gray-700"
                }`
              }
            >
              Products
            </NavLink>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <Routes>
            <Route path="/" element={<Dashboard {...inventory} />} />
            <Route path="/products" element={<Products {...inventory} />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;