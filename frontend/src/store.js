import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { allUsersReducer, userReducer } from "./reducers/userReducer";
import { currConvoReducer } from "./reducers/ConversationsReducer";

const reducer = combineReducers({
    user: userReducer,
    allUsers: allUsersReducer,
    currentConversation: currConvoReducer
})


const middleware = [thunk];
const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)));
export default store;