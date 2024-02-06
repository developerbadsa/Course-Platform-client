import { configureStore } from "@reduxjs/toolkit";
import counterState from "../State/counterState";
import userAuth from "../State/userAuth";

export default configureStore(
      {
            reducer: { counter: counterState, user: userAuth}
      }
)