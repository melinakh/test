import React from "react";
import { Link } from "react-router-dom";
import "./admin.css";
import Button from "@mui/material/Button";
const Admin = () => {
  return (
    <main>
      <div className="admin-login-form">
        <h1>ورود به پنل مدیریت فروشگاه سلین</h1>
        <label>نام کاربری:</label>
        <input type="text" name="admin-name" className="admin-name" />
        <label>رمز ورود:</label>
        <input
          type="password"
          name="admin-password"
          className="admin-password"
        />
        <Button className="button" variant="contained">
          ورود
        </Button>
      </div>

      <br />

      <Link className="link-to-site" to="/">
        بازگشت به سایت
      </Link>
    </main>
  );
};

export default Admin;
