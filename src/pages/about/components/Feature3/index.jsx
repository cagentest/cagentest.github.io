import React from 'react';
import TweenOne from 'rc-tween-one';
import { Row, Col } from 'antd';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { getChildrenToRender } from '@/components/utils';
import support from './support.png';
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
              <p>技术交流与深度合作</p>
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
    children: support,
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
        title: { className: 'content6-title', children: '研究方向' },
        content: {
          className: 'content6-content',
          children:
            '实验室长期致力于工业互联网的设备健康智能诊断、大数据分析技术与应用开发，积累了丰富的工业大数据处理、算法设计与软件开发经验',
        },
      },
      {
        name: 'block0',
        img: {
          children:
            'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png',
          className: 'content6-icon',
        },
        title: { className: 'content6-title', children: '业内翘楚' },
        content: {
          className: 'content6-content',
          children:
            '承担了国家自然基金项目，承担了国家自然基金项目、航天五院总体部、国电联合动力，中科院声学所等国家级纵向、企事业横向委托项目20余项',
        },
      },
      {
        name: 'block1',
        img: {
          className: 'content6-icon',
          children:
            'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png',
        },
        title: { className: 'content6-title', children: '成功案例' },
        content: {
          className: 'content6-content',
          children:
            '面向风电、军工等行业需求开发了设备健康智能监测系统',
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
