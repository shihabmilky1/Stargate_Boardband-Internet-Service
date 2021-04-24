import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import ServiceDetail from './components/Home/ServiceDetail/ServiceDetail';
import { createContext, useEffect, useState } from 'react';
import PrivetRoute from './components/Login/PrivetRoute/PrivetRoute';
import BookingList from './components/Dashboard/User/BookingList/BookingList';
import Review from './components/Dashboard/User/Review/Review';
import Book from './components/Dashboard/User/Book/Book'
import OrderList from './components/Dashboard/Admin/OrderList/OrderList';
import AddService from './components/Dashboard/Admin/AddService/AddService';
import MakeAdmin from './components/Dashboard/Admin/MakeAdmin/MakeAdmin';
import ManageService from './components/Dashboard/Admin/ManageService/ManageService';
import firebase from "firebase/app";
import "firebase/auth";
export const UserContext = createContext()
function App() {
const [loginUser,setLoginUser] = useState({});

useEffect(()=>{
  firebase.auth().onAuthStateChanged(myUser=>{
    const user = myUser;
    if(myUser){
      setLoginUser({name:user.displayName,email:user.email})
     }
     else{
         console.log('hi')
     }
     
  })
},[])
  return (
    <UserContext.Provider value={[loginUser,setLoginUser]}>
    <Router>
   <Switch>
     <Route exact path="/">
      <Home></Home>
     </Route>
     <Route path="/home">
      <Home></Home>
     </Route>
     <Route path="/login">
      <Login></Login>
     </Route>
     <PrivetRoute path="/service/:name">
      <ServiceDetail></ServiceDetail>
     </PrivetRoute>
     <PrivetRoute path="/dashboard/book/:serviceName">
      <Book></Book>
     </PrivetRoute>
     <PrivetRoute path="/dashboard/bookingList">
      <BookingList></BookingList>
     </PrivetRoute>
     <PrivetRoute path="/dashboard/admin/orderList">
      <OrderList></OrderList>
     </PrivetRoute>
     <PrivetRoute path="/dashboard/review">
      <Review></Review>
     </PrivetRoute>
     <PrivetRoute path="/dashboard/admin/addService">
       <AddService></AddService>
     </PrivetRoute>
     <PrivetRoute path="/dashboard/admin/makeAdmin">
       <MakeAdmin></MakeAdmin>
     </PrivetRoute>
     <PrivetRoute path="/dashboard/admin/manageService">
       <ManageService></ManageService>
     </PrivetRoute>
   </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
