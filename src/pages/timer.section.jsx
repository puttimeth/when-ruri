import styles from "./timer.module.scss";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import ItHappenedImg from "images/it-happened.png";
import React, { useEffect, useState } from "react";

dayjs.extend(duration);

const newUpdatedTime = dayjs("2024-03-04T00:00:00+09:00");

const imagesUrl = [ItHappenedImg];

export const TimerSection = () => {
  const [duration, setDuration] = useState();
  const [imagesUrlIdx, setImagesUrlIdx] = useState(
    Math.floor(Math.random() * imagesUrl.length),
  );

  useEffect(() => {
    const updateTimer = setInterval(() => {
      const currentTime = dayjs();
      const dur = dayjs.duration(newUpdatedTime.diff(currentTime));
      setDuration(dur);
    }, 1000);

    return () => clearInterval(updateTimer);
  }, []);

  return (
    <>
      <div className={styles.container}>
        <img src={imagesUrl[imagesUrlIdx]} alt="" />
        {!duration && <span>...calculating</span>}
        {duration && (
          <>
            <div className={styles.timeContainer1}>
              <div>
                <span>{duration.get("years")}</span>
                <span>years</span>
              </div>
              <div>
                <span>{duration.get("months")}</span>
                <span>months</span>
              </div>
              <div>
                <span>{duration.get("days")}</span>
                <span>days</span>
              </div>
            </div>
            <div className={styles.timeContainer2}>
              <div>
                <span>{duration.get("hours")}</span>
                <span>hours</span>
              </div>
              <div>
                <span>{duration.get("minutes")}</span>
                <span>minutes</span>
              </div>
              <div>
                <span>{duration.get("seconds")}</span>
                <span>seconds</span>
              </div>
            </div>
            <h6>
              Until Ruri landing<sup>[1]</sup>
            </h6>
          </>
        )}
      </div>
    </>
  );
};
