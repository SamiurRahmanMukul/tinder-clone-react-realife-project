import React from "react";
import Style from "./SwipeButtons.module.css";

// material-ui icon import
import IconButton from "@material-ui/core/IconButton";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";

const SwipeButtons = () => {
  const swiped = () => {};

  return (
    <div className={Style.SwipeButtons}>
      <IconButton onClick={swiped} className={Style.SwipeButtons__Repeat}>
        <ReplayIcon fontSize="large" />
      </IconButton>

      <IconButton onClick={swiped} className={Style.SwipeButtons__Left}>
        <CloseIcon fontSize="large" />
      </IconButton>

      <IconButton onClick={swiped} className={Style.SwipeButtons__Star}>
        <StarRateIcon fontSize="large" />
      </IconButton>

      <IconButton onClick={swiped} className={Style.SwipeButtons__Right}>
        <FavoriteIcon fontSize="large" />
      </IconButton>

      <IconButton onClick={swiped} className={Style.SwipeButtons__Lightning}>
        <FlashOnIcon fontSize="large" />
      </IconButton>
    </div>
  );
};

export default SwipeButtons;
