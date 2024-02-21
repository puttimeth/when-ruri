import styles from "./header.module.scss";
import React from "react";

export const HeaderSection = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView?.();
  };

  return (
    <div className={styles.container}>
      <h1>
        <span>When </span>
        <a
          href="https://mangaplus.shueisha.co.jp/titles/100196"
          rel="noopener noreferrer"
          target="_blank"
        >
          Ruri Dragon
        </a>
        <span> Is Back?</span>
      </h1>
      <h5>
        <a
          href="#"
          onClick={() => {
            scrollTo("latest-update");
          }}
        >
          Ruri will be back in March 4, 2024!!!
        </a>
      </h5>
    </div>
  );
};
