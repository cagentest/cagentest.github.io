import React from 'react';
import styled from 'styled-components';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
// import VideoPlay from 'react-sublime-video';
import { getChildrenToRender } from '@/components/utils';
import banner from './banner.png';

const dataSource = {
  wrapper: { className: 'home-page-wrapper content4-wrapper' },
  page: { className: 'home-page content4' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: '关于博思智科',
        className: 'title-h1',
      },
      {
        name: 'content',
        className: 'title-content content4-title-content',
        children: '建立博世工业4.0创新中心',
      },
    ],
  },
  video: {
    className: 'content4-video',
    children: {
      video: 'https://os.alipayobjects.com/rmsportal/EejaUGsyExkXyXr.mp4',
      image: 'https://zos.alipayobjects.com/rmsportal/HZgzhugQZkqUwBVeNyfz.jpg',
    },
  },
};

function Banner(props) {
  const { ...tagProps } = props;
  const { isMobile } = tagProps;
  delete tagProps.dataSource;
  delete tagProps.isMobile;
  const animation = {
    y: '+=30',
    opacity: 0,
    type: 'from',
    ease: 'easeOutQuad',
  };
  const videoChildren = dataSource.video.children.video;
  const videoNameArray = videoChildren.split('.');
  const type = videoNameArray[videoNameArray.length - 1];
  return (
    <div {...tagProps} {...dataSource.wrapper}>
      <div {...dataSource.page}>
        <div key="title" {...dataSource.titleWrapper}>
          {dataSource.titleWrapper.children.map(getChildrenToRender)}
        </div>
        <OverPack {...dataSource.OverPack}>
          <TweenOne
            key="video"
            animation={{ ...animation, delay: 300 }}
            {...dataSource.video}
          >
            <StyledContainer>
              <img src={banner} width="80%" />
            </StyledContainer>
            {/* {isMobile ? (
              <video
                width="100%"
                loop
                controls
                poster={dataSource.video.children.image}
              >
                <source src={videoChildren} type={`video/${type}`} />
                <track kind="captions" />
              </video>
            ) : (
              <VideoPlay
                loop
                width="100%"
                poster={dataSource.video.children.image}
              >
                <source src={videoChildren} type={`video/${type}`} />
              </VideoPlay>
            )} */}
          </TweenOne>
        </OverPack>
      </div>
    </div>
  );
}

export default Banner;

const StyledContainer = styled.div`
  text-align: center;
`;