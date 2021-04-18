import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import ServiceDetail from './components/Home/ServiceDetail/ServiceDetail';
import Book from './components/Dashboard/Book/Book';
import { createContext, useState } from 'react';
import PrivetRoute from './components/Login/PrivetRoute/PrivetRoute';
import BookingList from './components/Dashboard/BookingList/BookingList';
import Review from './components/Dashboard/Review/Review';
export const UserContext = createContext()
function App() {
const [loginUser,setLoginUser] = useState({})
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
     <PrivetRoute path="/dashboard/review">
      <Review></Review>
     </PrivetRoute>
   </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
