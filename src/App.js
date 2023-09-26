import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminRoute from "./components/AdminRoute";
import CartItems from "./components/Cart/CartItems";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import PageNotFound from "./pages/404";
import AdminLogin from "./pages/Admin/AdminLogin";
import SAdminLogin from "./pages/SuperAdmin/SAdminLogin";
import AdminProperty from "./pages/Admin/AdminProperty";
import Cart from "./pages/Cart";
import CheckoutPayment from "./pages/CheckoutPayment";
import Dashboard from "./pages/Dashboard";
import EmailAuth from "./pages/EmailAuth";
import Estate from "./pages/Estate";
import ForgotPassword from "./pages/ForgotPassword";
import Investment from "./pages/Investment";
import ItemDetail from "./pages/ItemDetail";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import NewItems from "./pages/NewItems";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Sales from "./pages/Sales";
import Shop from "./pages/Shop";
import Signup from "./pages/Signup";
import Wallet from "./pages/Wallet";
import Sellers_hub from "./pages/Sellers_hub";
import PropertyAuth from "./pages/Admin/PropertyAuth";
import MaterialAuth from "./pages/Admin/MaterialAuth";
import PropertyList from "./pages/Admin/PropertyList";
import SupplierList from "./pages/Admin/SupplierList";
import SupplierAuth from "./pages/Admin/SupplierAuth";
import SupplierProduct from "./pages/Admin/SupplierProduct";
import EstateList from "./pages/Admin/EstateList";
import ProductList from "./pages/Admin/ProductList";
import ProductTransactions from "./pages/Admin/ProductTransactions";
import AgentAuth from "./pages/Admin/AgentAuth";
import AgentList from "./pages/Admin/AgentList";
import AgentProduct from "./pages/Admin/AgentProduct";
import Supplier from "./pages/Supplier";

import SAdminProperty from "./pages/SuperAdmin/SAdminProperty";
import SPropertyAuth from "./pages/SuperAdmin/SPropertyAuth";
import SMaterialAuth from "./pages/SuperAdmin/SMaterialAuth";
import SPropertyList from "./pages/SuperAdmin/SPropertyList";
import SSupplierList from "./pages/SuperAdmin/SSupplierList";
import SSupplierAuth from "./pages/SuperAdmin/SSupplierAuth";
import SSupplierProduct from "./pages/SuperAdmin/SSupplierProduct";
import SEstateList from "./pages/SuperAdmin/SEstateList";
import SProductList from "./pages/SuperAdmin/SProductList";
import SProductTransactions from "./pages/SuperAdmin/SProductTransactions";
import SAgentAuth from "./pages/SuperAdmin/SAgentAuth";
import SAgentList from "./pages/SuperAdmin/SAgentList";
import SAgentProduct from "./pages/SuperAdmin/SAgentProduct";
import SUsersList from "./pages/SuperAdmin/SUsersList";
import SAdminList from "./pages/SuperAdmin/SAdminList";
import Material from "./pages/Materials";
import PropertyDetails from "./pages/PropertyDetail";
import AddProperty from "./components/PropertAgent/AddProperty";
import Sidebar from "./components/Sidenav/Sidebar"
import SideModal from "./components/SideModal/SideModal"


// import "bootstrap/dist/css/bootstrap.min.css";
import MapContainer from "./components/MapContainer";

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route element={<PublicRoute />}>
              <Route path="/" element={<Landing />} />
              <Route path="/email-auth" element={<EmailAuth />} />

              <Route path="/forgot" element={<ForgotPassword />} />
              <Route path="/admin/login" element={<AdminLogin />} />

              <Route path="/signup" element={<Signup />} />
              <Route path="/map" element={<MapContainer />} />
              <Route path="/sidebar" element={<Sidebar />} />
              <Route path="/sidemodal" element={<SideModal />} />

              {/* THE ABOVE ARE PRIVATE ROUTES  */}
            </Route>

            <Route element={<PrivateRoute />}>
              {/* THE BELOW ROUTES ARE PRIVATE ROUTES  */}
              <Route path="/property" element={<Estate />} />
              <Route path="/material" element={<Material />} />
              <Route path="/supplier" element={<Sellers_hub />} />
              <Route path="/add-property" element={<AddProperty />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/item_detail/:id" element={<ItemDetail />} />
              <Route path="/property/:id" element={<PropertyDetails />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/wallet" element={<Wallet />} />
              <Route path="/investment" element={<Investment />} />
           
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<CheckoutPayment />} />
              <Route path="/supplier" element={<Supplier />} />
            </Route>

            <Route element={<AdminRoute />} path={"/admin"}>
              <Route path="supplier/product" element={<SSupplierProduct />} />
              <Route
                path="super/transactions"
                element={<SProductTransactions />}
              />
              <Route path="super/material/auth" element={<SMaterialAuth />} />
              <Route path="super/property" element={<SAdminProperty />} />
              <Route path="super/property/auth" element={<SPropertyAuth />} />
              <Route path="super/property/list" element={<SPropertyList />} />
              <Route path="super/agent/auth" element={<SAgentAuth />} />
              <Route path="super/agent/list" element={<SAgentList />} />
              <Route path="super/agent/product" element={<SAgentProduct />} />
              <Route path="super/estate/list" element={<SEstateList />} />
              <Route path="super/product/list" element={<SProductList />} />
              <Route path="super/supplier/auth" element={<SSupplierAuth />} />
              <Route path="supplier/list" element={<SSupplierList />} />
              <Route path="super/users/list" element={<SUsersList />} />
              <Route path="super/admin/list" element={<SAdminList />} />
            </Route>

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
