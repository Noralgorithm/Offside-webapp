import React from "react";

const VISIT_URL = 'http://localhost:3000/ads/watch-detailed/'

const Ad = ({ imgSource, id }) => {
  return (
    <div>
      <a target="_blank" rel="noreferrer" href={VISIT_URL + id}>
        <img src={imgSource} alt="an add :p" />
      </a>
    </div>
  );
};

export default Ad;
