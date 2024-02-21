import { Button } from '@metrostar/comet-uswds';
import React from 'react';
import './BasicBanner.scss';

export const BasicBanner = ({ data }): React.ReactElement => {
  return (
    <div
      className="basic-banner basic-banner-background"
      style={{
        backgroundImage: `url(${data.backgroundImage})`,
        backgroundPosition: data.backgroundPosition,
        backgroundSize: data.backgroundSize,
      }}
    >
      <div className="grid-container">
        <div className="grid-row">
          <div
            className="grid-col overlay-image"
            style={{
              backgroundImage: `url(${data.overlayImage})`,
              backgroundPosition: data.overlayPosition,
              backgroundSize: data.overlaySize,
              justifyContent: data.justifyText,
            }}
          >
            <div className="banner-content">
              <h4 className="primary-color">{data.bannerTypeTitle}</h4>
              <h1>{data.bannerTitle}</h1>
              <p>{data.bannerText}</p>
              <Button
                id="agid-button"
                className="agid-button"
                onClick={data.buttonAction}
              >
                {data.buttonTitle}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
