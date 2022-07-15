import React, { useState } from "react";

function Techno() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const showPassword = () => {
    var x = document.getElementById("password");

    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  };

  // const regex = ^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$
  const regex =
    /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:. [a-zA-Z0-9-]+)*$/;
  const regex1 = /^(?=.*\d).{8,}$/;
  const handleChange = (e) => {
    setPassword(e.target.value);
     if (password.match(/[0-9]/) !== false) {
      setError(
        "should have at least 10 characters"
        // "should have at least one uppercase and one lowercase character",
        // "should have at least 1 special character"
      );
    }
    else if (password.match(/[A-Z]/) !== false) {
      setError(
        // "should have at least 8 characters"
        "should have at least one uppercase and one lowercase character",
        // "should have at least 1 special character"
      );
    }
    
    else if (password.match(/[!@#$%^&*]/) !== false) {
      setError(
        // "should have at least 10 characters"
        // "should have at least one uppercase and one lowercase character",
        "should have at least 1 special character"
      );
    }
     else {
      setError("");
      return true;
    }
  };

  return (
    <div>
      <div
        className="container bg-white px-5"
        style={{
          width: "500px",
          height: "500px",
          boxShadow: "0px 0px 2px 1px gray",
          marginTop: "120px",
        }}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="row">
            <h2 className="text-center py-5">User Login</h2>
            <div className="col-12 pb-3">
              <label className="font-weight-bold">Username:</label>
              <input
                type="email"
                className="d-flex w-100 form-control"
                required
              />
            </div>
            <div className="col-12 py-3">
              <label className="font-weight-bold">Password:</label>
              <input
                type="password"
                id="password"
                className="d-flex w-100 form-control"
                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                required
                onChange={handleChange}
              />
              <div className="text-danger">{error}</div>
            </div>
            <div className="d-flex">
              <input
                className="mr-2 mt-1"
                type="checkbox"
                onClick={showPassword}
              />
              <h6 style={{ fontSize: "14px" }}>Show Password</h6>
            </div>
            <div className="col-12">
              <button className="mt-3 w-100 border-0 button py-2" type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Techno;
