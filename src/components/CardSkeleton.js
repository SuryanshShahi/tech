import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function CardSkeleton() {
  return (
    <div>
      <div className="row gx-0 ml-3">
        <div className="col-lg-3 col-md-4 col-6 mb-4">
          <Skeleton height={300} width={300} />
          <Skeleton height={40} width={300} />
          <Skeleton height={40} width={300} />
        </div>
        <div className="col-lg-3 col-md-4 col-6 mb-4">
          <Skeleton height={300} width={300} />
          <Skeleton height={40} width={300} />
          <Skeleton height={40} width={300} />
        </div>
        <div className="col-lg-3 col-md-4 col-6 mb-4">
          <Skeleton height={300} width={300} />
          <Skeleton height={40} width={300} />
          <Skeleton height={40} width={300} />
        </div>
        <div className="col-lg-3 col-md-4 col-6 mb-4">
          <Skeleton height={300} width={300} />
          <Skeleton height={40} width={300} />
          <Skeleton height={40} width={300} />
        </div>
      </div>
    </div>
  );
}

export default CardSkeleton;
