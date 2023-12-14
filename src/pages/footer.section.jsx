import styles from "./footer.module.scss";
import React from "react";

export const FooterSection = () => {
  return (
    <div className={styles.container}>
      <p>[1] Count from midnight on July 25, 2022, Japan time</p>
      <p>
        [2] I couldn't locate the official oneshot release, so I'm providing the
        link from Mangadex instead.
      </p>
      <p>
        <small>
          I created this website as a hobby while waiting for the new drop of
          Ruri Dragon. The purpose of this website is purely for entertainment,
          and I dind't make any revenue from any part of the site. All images
          credit goes to{" "}
          <a
            href="https://mangaplus.shueisha.co.jp/titles/100196"
            rel="noopener noreferrer"
            target="_blank"
          >
            Ruri Dragon by Masaoki Shindo.
          </a>
        </small>
      </p>
      <p>
        <small>
          In case you interested in the source code, I have open public for this
          website on my{" "}
          <a
            href="https://github.com/puttimeth/when-ruri"
            rel="noopener noreferrer"
            target="_blank"
          >
            Github repo
          </a>
        </small>
      </p>
    </div>
  );
};
