import { useEffect, useState } from "react";

export default function UseAuth() {
  const [auth, setAuth] = useState(true);

  useEffect(() => {
    async function LoggedUser() {
      const url = "http://localhost:5000/api/userInfo";
      const req = await fetch(url, {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      });
      const data = await req.json();
      if (data.status === "ok") {
        // console.log('auth data', data);
        setAuth(true);
      } else {
        setAuth(false);
      }
    }
    LoggedUser();
  }, [auth]);

  return auth;
}
