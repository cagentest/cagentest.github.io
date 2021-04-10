import React from 'react';
import TweenOne from 'rc-tween-one';
import { Row, Col } from 'antd';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { getChildrenToRender } from '@/components/utils';
import './style.less';

const dataSource = {
  wrapper: { className: 'home-page-wrapper content6-wrapper' },
  OverPack: { className: 'home-page content6' },
  textWrapper: { className: 'content6-text', xs: 24, md: 10 },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <span>
              <p>公司概况</p>
            </span>
          </span>
        ),
        className: 'title-h1',
      },
      // {
      //   name: 'content',
      //   className: 'title-content',
      //   children: '打通生产数据和市场数据',
      // },
    ],
  },
  img: {
    children: 'https://zos.alipayobjects.com/rmsportal/VHGOVdYyBwuyqCx.png',
    className: 'content6-img',
    xs: 24,
    md: 14,
  },
  block: {
    children: [
      {
        name: 'block2',
        img: {
          className: 'content6-icon',
          children:
            'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png',
        },
        title: { className: 'content6-title', children: '与德国博世紧密合作' },
        content: {
          className: 'content6-content',
          children:
            '是国内首家专注于研发工业互联网智能诊断RPA+AI+IBDT平台的高科技公司',
        },
      },
      {
        name: 'block0',
        img: {
          children:
            'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png',
          className: 'content6-icon',
        },
        title: { className: 'content6-title', children: '线上诊断与线下服务' },
        content: {
          className: 'content6-content',
          children:
            '识别被诊断企业从研发、接单、计划、下料、生产到发货运输全制造过程的体系差距，通过价值流分析，找出生产瓶颈，分析根源，提升行业运营效率，为企业降本增效，加快数字化变革。 ',
        },
      },
      {
        name: 'block1',
        img: {
          className: 'content6-icon',
          children:
            'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png',
        },
        title: { className: 'content6-title', children: '覆盖广泛的行业类型' },
        content: {
          className: 'content6-content',
          children:
            '智能系统平台服务用户来自汽车、半导体、能源、制造、物流等多个行业的数百家企业',
        },
      },
    ],
  },
};

class Content7 extends React.Component {
  getBlockChildren = (data) =>
    data.map(($item) => {
      const { ...item } = $item;
      const { title, img, content } = item;
      ['title', 'img', 'content'].forEach((key) => delete item[key]);
      return (
        <li key={item.name} {...item}>
          <span {...img}>
            <img src={img.children} width="100%" alt="img" />
          </span>
          <h2 {...title}>{title.children}</h2>
          <div {...content}>{content.children}</div>
        </li>
      );
    });

  render() {
    const { ...props } = this.props;
    const { isMobile } = props;
    delete props.dataSource;
    delete props.isMobile;
    const ulChildren = this.getBlockChildren(dataSource.block.children);
    const queue = isMobile ? 'bottom' : 'left';
    const imgAnim = isMobile
      ? {
          y: 30,
          opacity: 0,
          delay: 600,
          type: 'from',
          ease: 'easeOutQuad',
        }
      : {
          x: 30,
          opacity: 0,
          type: 'from',
          ease: 'easeOutQuad',
        };
    return (
      <div {...props} {...dataSource.wrapper}>
        <OverPack {...dataSource.OverPack} component={Row}>
          <QueueAnim
            key="text"
            type={queue}
            leaveReverse
            ease={['easeOutQuad', 'easeInQuad']}
            {...dataSource.textWrapper}
            component={Col}
          >
            <div key="title" {...dataSource.titleWrapper}>
              {dataSource.titleWrapper.children.map(getChildrenToRender)}
            </div>
            <QueueAnim
              component="ul"
              key="ul"
              type={queue}
              ease="easeOutQuad"
              {...dataSource.block}
            >
              {ulChildren}
            </QueueAnim>
          </QueueAnim>
          <TweenOne
            key="img"
            animation={imgAnim}
            resetStyle
            {...dataSource.img}
            component={Col}
          >
            <img src={dataSource.img.children} width="100%" alt="img" />
          </TweenOne>
        </OverPack>
      </div>
    );
  }
}

export default Content7;
