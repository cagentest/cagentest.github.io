import React from 'react';
import TweenOne from 'rc-tween-one';
import { Row, Col } from 'antd';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { getChildrenToRender } from '@/components/utils';
import relation from './relation.png';
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
              <p>合作伙伴</p>
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
    children: relation,
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
        title: { className: 'content6-title', children: '核心技术研发支持' },
        content: {
          className: 'content6-content',
          children:
            '由陈斌博士负责研发和研究设计，负责博思工业数智云平台的技术落地，建立工业互联网智库和服务生态圈',
        },
      },
      {
        name: 'block0',
        img: {
          children:
            'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png',
          className: 'content6-icon',
        },
        title: { className: 'content6-title', children: '德国博世授权运营' },
        content: {
          className: 'content6-content',
          children:
            '授权负责工业4.0创新中心运营，引进博世智能制造最新技术，建立专家组，为企业线下z诊断和云平台诊断的融合',
        },
      },
      {
        name: 'block1',
        img: {
          className: 'content6-icon',
          children:
            'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png',
        },
        title: { className: 'content6-title', children: '政府扶持计划' },
        content: {
          className: 'content6-content',
          children:
            '顺义区政府牵头建立，引入300余家待诊企业客户，召开政府峰会',
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
          <TweenOne
            key="img"
            animation={imgAnim}
            resetStyle
            {...dataSource.img}
            component={Col}
          >
            <img src={dataSource.img.children} width="100%" alt="img" />
          </TweenOne>
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
        </OverPack>
      </div>
    );
  }
}

export default Content7;
