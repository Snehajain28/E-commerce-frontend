import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import SignIn from './pages/SignIn';
import ProductDetails from './components/ProductDetails';
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Policy } from "@mui/icons-material";
import Pagenotfound from "./pages/PageNotFound";
import { useEffect} from "react";
import { useStateValues } from "./Utils/Provider";
import Cart from "./pages/Cart";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Product from "./components/Product/Product";
import Checkout from "./pages/Checkout";
import UserProfile from "./pages/UserProfile";
import UserOrders from "./pages/UserOrder";
import AdminHome from "./pages/Admin/AdminHome";
import CreateProduct from "./pages/Admin/CreateProduct";
import OrderDetails from "./pages/Admin/OrderDetails";
import Order from "./pages/Admin/Order";
import AllProducts from "./pages/Admin/allProduct";
import UserDetails from "./pages/Admin/UserDetails";
import EditProduct from "./pages/Admin/EditProduct";
import OrderSuccess from "./pages/OrderSuccess";


function App() {
  const [{ role }, dispatch] = useStateValues();
  
  useEffect((() => {
    const data = localStorage.getItem("token");
    let cart = localStorage.getItem("cart");
    if (data) {

      dispatch({
        type: "SET_TOKEN",
        token: (JSON.parse(localStorage.token)),
      });

      dispatch({
        type: "SET_USER",
        user: (JSON.parse(localStorage.user)),
      });

    }
    else {
      dispatch({
        type: "SET_USER",
        user: null,
      })
    }

    if (cart) {
      cart = JSON.parse(localStorage.cart)
      dispatch({
        type: "SET_CART_DATA",
        cartData: (cart),

      })
    }
    else if (!cart) {
      dispatch({
        type: "SET_CART_DATA",
        cartData: [],
      })
    }
    dispatch({
      type: "SET_TOTAL_AMOUNT",
      totalAmt: 0,
    })
    dispatch({
      type: "SET_ROLE",
      role: "user",
    })
  }
  ), [dispatch])

  return (
    <div className='overflow-x-hidden' >
      <ToastContainer />

      { role === "admin" &&
        <Routes>
          <Route path='/' element={<AdminHome />} />
          <Route path='/product/add-product' element={<CreateProduct />} />
          <Route path='/orders_details' element={<OrderDetails />} />
          <Route path='/orders_details/:id' element={<Order />} />
          <Route path='/all-products' element={<AllProducts />} />
          <Route path='/users' element={<UserDetails />} />
          <Route path='/edit-product/:id' element={<EditProduct />} />
        </Routes>
      }
      { role === "user" &&
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/product' element={<ProductDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/product-details" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product" element={<Product />} />
          <Route path="/check-out" element={<Checkout />} />
          <Route path="/orders" element={<UserOrders />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/orders/:id" element={<OrderSuccess />} />
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
      }

      {/*    <Route path="/product/:slug" element={<ProductDetails />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/category/:slug" element={<CategoryProduct />} />
        <Route path="/search" element={<Search />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/orders" element={<Orders />} />
            <Route path="user-profile" element={<UserProfile/>} />
       
        </Route>
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
          <Route path="admin/product/:slug" element={<UpdateProduct />} />
          <Route path="admin/products" element={<Products />} />
          <Route path="admin/users" element={<Users />} />
          <Route path="admin/orders" element={<AdminOrders />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPasssword />} />
        <Route path="/login" element={<Login />} />
     */}

    </div>
  );
}

export default App;
