import React from "react";
import logo from "./Images/Solid_lines.png";
import bgLogo from "./Images/wobot-logo_blue 1.png";

function Home() {
  return (
    <section>
      <div className="w-25 position-absolute">
        <img
          src={bgLogo}
          className="img-fluid"
          style={{ margin: "30px 100px" }}
        ></img>
      </div>
      <div className="justify-content-center d-flex align-items-center">
        <div
          className="container px-5 bg-white py-4"
          style={{
            width: "560px",
            marginTop: "95px",
            boxShadow: "0px 0px 6px -1px #9D9D9D",
            borderRadius: "10px",
          }}
        >
          <div className="text-center py-3">
            <img src={logo} className="img-fluid"></img>
          </div>
          <h4 className="text-center">
            It's a delight to have you <br></br>onboard
          </h4>
          <div className="text-center" style={{ fontSize: "14px" }}>
            Help us know you better.<br></br>(This is how we optimize Wobot as
            per your business needs)
          </div>
          <form>
            <div className="form-group py-3">
              <label
                className="pb-1"
                style={{ fontWeight: "500", fontSize: "14px" }}
                for="company"
              >
                Company Name
              </label>
              <input
                type="text"
                className="form-control"
                id="company"
                placeholder="e.g. Example Inc"
                required
              />
            </div>
            <div className="form-group ">
              <label
                className="pb-1"
                style={{ fontWeight: "500", fontSize: "14px" }}
                for="Industry"
              >
                Industry
              </label>
              <select
                className="w-100 rounded px-2"
                style={{
                  cursor:"pointer",
                  outline: "none",
                  border: "1px solid #ced4da",
                  height: "36px",
                }}
                id="Industry"
                required
              >
                <option>Select</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>

            <div className="py-3">
              <label style={{ fontWeight: "500", fontSize: "14px" }}>
                Company size
              </label>
              <ul className="nav nav-tabs">
                <li className="">
                  <a
                    className="mx-1 active font-weight-bolder px-2 py-1 tab rounded-0 text-decoration-none"
                    type="button"
                    data-toggle="tab"
                  >
                    1-20
                  </a>
                </li>
                <li>
                  <a
                    className="mx-1 font-weight-bolder px-2 py-1 tab rounded-0 text-decoration-none"
                    type="button"
                    data-toggle="tab"
                  >
                    21-50
                  </a>
                </li>
                <li>
                  <a
                    className="mx-1 font-weight-bolder px-2 py-1 tab rounded-0 text-decoration-none"
                    type="button"
                    data-toggle="tab"
                  >
                    51-200
                  </a>
                </li>
                <li>
                  <a
                    className="mx-1 font-weight-bolder px-2 py-1 tab rounded-0 text-decoration-none"
                    type="button"
                    data-toggle="tab"
                  >
                    201-500
                  </a>
                </li>
                <li>
                  <a
                    className="mx-1 font-weight-bolder px-2 py-1 tab rounded-0 text-decoration-none"
                    type="button"
                    data-toggle="tab"
                  >
                    500+
                  </a>
                </li>
              </ul>
            </div>
            <button
              className="border-0 py-1 rounded text-white w-100 my-3"
              style={{
                background: "#3766E8",
                fontWeight: "500",
                outline: "none",
              }}
              type="submit"
            >
              Get Started
            </button>
          </form>
        </div>
      </div>

      <footer className="text-center mt-5">
        Terms of use | Privacy policy{" "}
      </footer>
    </section>
  );
}

export default Home;
