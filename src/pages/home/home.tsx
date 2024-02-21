import React from 'react';
import { BasicBanner } from '../../sections/BasicBanner/BasicBanner';

export const Home = (): React.ReactElement => {
  const blankFunction = () => {};

  const roadmapBanner = {
    id: 'roadmap-banner',
    justifyText: 'flex-start',
    backgroundImage: '/img/pages/home/roadmap-bg.png',
    backgroundPosition: 'right',
    backgroundSize: 'contain',
    overlayImage: '',
    overlayPosition: '',
    overlaySize: '',
    bannerTypeTitle: 'Upcoming Features',
    bannerTitle: 'Roadmap',
    bannerText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sagittis lectus eget nisi molestie, non porta augue.. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sagittis lectus eget nisi molestie, non porta augue..',
    buttonTitle: 'Create a Custom Table',
    buttonAction: blankFunction,
  };

  return (
    <>
      <BasicBanner data={roadmapBanner} />
    </>
  );
};
