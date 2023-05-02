import { createContext } from "react";
const userContext = createContext({
  user: {
    name: "dummy name",
    email: "dummy@gmail.com",
  },
});
userContext.displayName = "myusercontext";
export default userContext;
