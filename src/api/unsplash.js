import axios from "axios";

//Creamos unha instancia de axios, un patrón personalizado de axios para as nosas requests
export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID jPKt0eNaMazgp0Td0TGdlkmDmKIFveXjQAHwUAqIAqs",
  },
});
