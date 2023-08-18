/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const Authcontext = createContext(null);
const Authprovider = ({ children }) => {
  const [formData, setFormData] = useState({});
  const data = { formData, setFormData };
  return <Authcontext.Provider value={data}>{children}</Authcontext.Provider>;
};

export default Authprovider;
