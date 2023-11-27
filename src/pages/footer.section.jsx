import styles from "./footer.module.scss";
import React from "react";

export const FooterSection = () => {
  return (
    <>
      <div className={styles.divLine} />
      <div className={styles.container}>
        <p>
          <span>[1] According to </span>
          <a
            href="https://twitter.com/SHINDO_MASAOKI"
            rel="noopener noreferrer"
            target="_blank"
          >
            @SHINDO_MASAOKI twitter
          </a>
          <span>
            , there has been no announcement regarding the continuation yet.
          </span>
        </p>
        <p>[2] Count from midnight on July 25, 2022, Japan time</p>
      </div>
    </>
  );
};
