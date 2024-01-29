import { configureStore } from "@reduxjs/toolkit";
import counterState from "../State/counterState";

export default configureStore(
      {
            reducer: {counter: counterState}
      }
)