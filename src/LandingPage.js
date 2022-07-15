import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import CardSkeleton from "./CardSkeleton";
import { Carousel } from "react-bootstrap";
export const Banner = [
  { id: 1, image: "/carousel/Activewear.webp" },
  { id: 2, image: "/carousel/Dresses.webp" },
  { id: 3, image: "/carousel/Handbags.webp" },
  { id: 4, image: "/carousel/Innerwear.webp" },
  { id: 5, image: "/carousel/Kurtas.webp" },
  { id: 6, image: "/carousel/Navyasa.webp" },
  { id: 7, image: "/carousel/Roadster.webp" },
  { id: 8, image: "/carousel/Shoes.webp" },
];

function LandingPage() {
  const [items, setItems] = useState([]);
  const [data, setData] = useState(items);
  const [isActive, setActive] = useState(false);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    setItems(await res.json());
    setTimeout(() => {
      document.getElementById("click").click();
    }, 100);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  const filterData = (categ) => {
    const updatedItems = items.filter((e) => {
      return e.category === categ;
    });
    console.log(updatedItems);
    setData(updatedItems);
  };

  return (
    <div id="LandingPage" style={{ marginTop: "150px" }}>
      <div className="my-5">
        <Carousel>
          {Banner.map((e) => (
            <Carousel.Item interval="2000" key={e.id}>
              <NavLink to="/products">
                <img src={e.image} className="img-fluid d-block w-100"></img>
              </NavLink>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div
        className="pt-3 sidebar1"
        style={{ borderRight: "1px solid rgb(105 110 121 / 33%)" }}
      >
        <div
          className="text-center"
          style={{ fontWeight: "500", fontSize: "30px" }}
        >
          Search By Category
        </div>
        <div
          // style={{ top: "0", position: "sticky" }}
          className="justify-content-center d-flex py-5"
        >
          <div className="nav nav-tabs justify-content-center d-flex" style={{boxShadow:"0px 5px 7px -3px #80808075"}}>
            <div
              className="btn btn-danger mb-lg-0 mb-4 active mx-2 filterbtn"
              id="click"
              type="button"
              data-toggle="tab"
              onClick={() => setData(items)}
            >
              All
            </div>
            <div
              className="btn btn-danger mb-lg-0 mb-4 mx-2 filterbtn"
              type="button"
              data-toggle="tab"
              onClick={() => filterData("men's clothing")}
            >
              Men's Clothing
            </div>
            <div
              className="btn btn-danger mb-lg-0 mb-4 mx-2 filterbtn"
              type="button"
              data-toggle="tab"
              onClick={() => filterData("women's clothing")}
            >
              Women's Clothing
            </div>
            <div
              className="btn btn-danger mb-lg-0 mb-4 mx-2 filterbtn"
              type="button"
              data-toggle="tab"
              onClick={() => filterData("jewelery")}
            >
              Jwellery
            </div>
            <div
              className="btn btn-danger mb-lg-0 mb-4 mx-2 filterbtn"
              type="button"
              data-toggle="tab"
              onClick={() => filterData("electronics")}
            >
              Electronic Gadgets
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid pb-5">
        <div
          className="container"
          style={{ overflowY: "scroll", height: "100vh" }}
        >
          {loading ? (
            <div>
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
            </div>
          ) : (
            <div className="row gx-0">
              {data.map((e) => {
                return (
                  <div className="col-lg-3 col-md-4 col-6" key={e.id}>
                    <div
                      className="card carscard text-decoration-none mx-3"
                      data-bs-toggle="tooltip"
                      title={e.title}
                    >
                      <NavLink
                        target="_blank"
                        to={`/products/${e.id}`}
                        className="justify-content-center d-flex"
                      >
                        <div>
                          <img
                            src={e.image}
                            alt="menuPic"
                            height="250px"
                            className="card-img-top p-3"
                          />
                        </div>
                      </NavLink>

                      <div className="details text-dark bg-white py-2 pt-3 px-2">
                        <div className="justify-content-center d-flex align-items-center wishlist">
                          <div
                            className={
                              !isActive
                                ? "fa fa-heart-o py-2"
                                : "fa fa-heart text-danger py-2"
                            }
                            onClick={() => setActive(true)}
                          >
                            &nbsp;&nbsp;WISHLIST
                          </div>
                        </div>
                        <div
                          className="pt-2"
                          style={{ fontWeight: "lighter", fontSize: "14px" }}
                        >
                          Sizes:&nbsp;
                          <span
                            style={{
                              fontSize: "14px",
                              fontWeight: "lighter",
                              color: "grey",
                            }}
                          >
                            38, 40, 42, 44, 46
                          </span>
                        </div>
                        <div className="pt-1">
                          <span
                            style={{
                              fontWeight: "500",
                            }}
                          >
                            $ {e.price}
                          </span>
                          <span
                            style={{
                              fontSize: "12px",
                              fontWeight: "lighter",
                              color: "grey",
                            }}
                          >
                            &nbsp;&nbsp;Rs. 1849
                          </span>
                          <span
                            style={{
                              fontSize: "12px",
                              fontWeight: "lighter",
                              color: "orange",
                            }}
                          >
                            &nbsp;&nbsp;(Rs. 1150 OFF)
                          </span>
                        </div>
                      </div>
                      <div className="px-2">
                        <div className="font-weight-bolder my-2">
                          <span style={{ fontWeight: "500" }}>{e.title}</span>
                          <div
                            style={{
                              fontSize: "14px",
                              fontWeight: "lighter",
                              color: "grey",
                            }}
                          >
                            {e.category}
                          </div>
                          <div className="pt-1">
                            <span
                              style={{
                                fontWeight: "500",
                              }}
                            >
                              $ {e.price}
                            </span>
                            <span
                              style={{
                                fontSize: "12px",
                                fontWeight: "lighter",
                                color: "grey",
                              }}
                            >
                              &nbsp;&nbsp;Rs. 1849
                            </span>
                            <span
                              style={{
                                fontSize: "12px",
                                fontWeight: "lighter",
                                color: "orange",
                              }}
                            >
                              &nbsp;&nbsp;(Rs. 1150 OFF)
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
