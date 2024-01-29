import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import SignIn from './pages/SignIn';
import ProductDetails from './components/ProductDetails';
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Policy } from "@mui/icons-material";
import Pagenotfound from "./pages/PageNotFound";
import { useEffect } from "react";
import { useStateValues } from "./Utils/Provider";
import ProductForm from "./pages/ProductForm";
import Cart from "./pages/Cart";

function App() {
  const [{user,token} ,dispatch] =useStateValues();

  useEffect( ( () => {
    const data = localStorage.getItem("user");
   if(data)
    {
      dispatch({
        type: "SET_USER",
        user:(JSON.parse(data).user),
    });
    dispatch({
        type: "SET_TOKEN",
        token:(JSON.parse(data).token),
    });

    }
  }) ,[user,token,dispatch])

  useEffect((
    () => {
      dispatch({
        type: "SET_COUNT",
        count: 0,
      })
    }
  ), [])

  return (
    <div className='overflow-x-hidden' >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/product' element={<ProductDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/product-form" element={<ProductForm/>} />
        <Route path="/product-details" element={<ProductDetails/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="*" element={<Pagenotfound />} />
       

        {/*    <Route path="/product/:slug" element={<ProductDetails />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/category/:slug" element={<CategoryProduct />} />
        <Route path="/search" element={<Search />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/orders" element={<Orders />} />
          <Route path="user/profile" element={<Profile />} />
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
      </Routes>
    </div>
  );
}

export default App;
