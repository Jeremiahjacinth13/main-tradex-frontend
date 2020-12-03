import { combineReducers } from "redux";
import profileReducer from "./profile.reducer";
import userReducer from './user.reducer';
import sideBarReducer from './sidebar.reducer';
import productReducer from './products.reducer';
import postReducer from './posts.reducer';
import messageReducer from './messages.reducer'

const isdevmode = (state= true, action) => state;
const rootReducer = combineReducers({
  isdevmode,
  posts: postReducer,
  userProfile: profileReducer,
  userDetails: userReducer,
  sideBar: sideBarReducer,
  products: productReducer,
  messages: messageReducer
});

export default rootReducer;
