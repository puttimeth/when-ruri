import styles from "./want-more.module.scss";
import IsRuriBackProfile from "images/want-more/is-ruri-back-profile.jpg";
import LatestUpdateProfile from "images/want-more/latest-update-profile.jpg";
import OneshotProfile from "images/want-more/oneshot-profile.jpg";
import VoiceComicProfile from "images/want-more/voice-comic-profile.png";
import React from "react";

const Card = ({ href, profile, title, content, ...rest }) => {
  return (
    <a
      className="card text-start text-decoration-none"
      style={{ maxWidth: "500px" }}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      {...rest}
    >
      <div className="row g-0">
        <div className="col-md-4">
          <img src={profile} className="img-fluid rounded-start" alt="" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{content}</p>
          </div>
        </div>
      </div>
    </a>
  );
};

export const WantMoreSection = () => {
  return (
    <div className={styles.container}>
      <h4>Want More of Rurium?</h4>
      <Card
        href="https://twitter.com/SHINDO_MASAOKI/status/1734860731374543309"
        id="latest-update"
        profile={LatestUpdateProfile}
        title="Latest Update"
        content={
          <>
            <div>
              Author confirm that he is fine right now and will try his best for
              the next year. (Post on 13/12/2023)
            </div>
            <a
              href="https://twitter.com/Josuke8B/status/1734876309497471464"
              rel="noopener noreferrer"
              target="_blank"
            >
              In case you want translation.
            </a>
          </>
        }
      />
      <Card
        href="https://mangadex.org/title/0a2fd70d-e4de-49fb-8e81-89311d46b329/ruri-dragon"
        profile={OneshotProfile}
        title={
          <>
            Oneshot<sup>[2]</sup>
          </>
        }
        content="The content is similar to chapter 1 but has some differences in
          the details and the ending."
      />
      <Card
        href="https://youtu.be/yJ5Q9hgawLI?si=-mbC1MfdKsOfJIn7"
        profile={VoiceComicProfile}
        title="Voice Comic"
        content="The official voice comic by Shonen Jump (Japanese) currently features voiced adaptation of the oneshot and chapter 1-3"
      />
      <Card
        href="https://twitter.com/DragonRuri"
        profile={IsRuriBackProfile}
        title="Is Ruri Dragon Back?"
        content="Twitter account that posts a frame of Ruri Dragon every day, patiently waiting for Ruri Dragon's return. Respect."
      />
    </div>
  );
};
