import styles from "./header.module.scss";
import React from "react";

export const HeaderSection = () => {
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
        Sadly, we don't know yet.<sup>[1]</sup>
      </h5>
    </div>
  );
};
