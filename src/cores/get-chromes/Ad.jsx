import React from "react";
import { VISIT_URL } from "../../services/ad.services";

const Ad = ({ imgSource, id }) => {
  return (
    <div>
      {console.log(id)}
      <a target="_blank" rel="noreferrer" href={VISIT_URL + id}>
        <img src={imgSource} alt="an add :p" />
      </a>
    </div>
  );
};

export default Ad;
