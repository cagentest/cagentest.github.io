import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import { getChildrenToRender } from '@/components/utils';
import './style.less'

const dataSource = {
  wrapper: { className: 'home-page-wrapper banner4' },
  page: { className: 'home-page banner4-page' },
  childWrapper: {
    className: 'banner4-title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <p>生产数据管理系统</p>
          </span>
        ),
        className: 'banner4-title',
      },
      {
        name: 'content',
        className: 'banner4-content',
        children: '开箱即用的中台前端/设计解决方案',
      },
      {
        name: 'button',
        children: {
          href: '#',
          type: 'primary',
          children: (
            <>
              了解更多
            </>
          ),
        },
      },
    ],
  },
  image: {
    className: 'banner4-image',
    children:
      'https://gw.alipayobjects.com/mdn/rms/afts/img/A*k3InRLiZDk4AAAAAAAAAAABjARQnAQ',
  },
};

class Banner4 extends React.PureComponent {
  render() {
    const { ...tagProps } = this.props;
    delete tagProps.dataSource;
    delete tagProps.isMobile;
    const animType = {
      queue: 'bottom',
      one: {
        y: '+=30',
        opacity: 0,
        type: 'from',
        ease: 'easeOutQuad',
      },
    };
    return (
      <div {...tagProps} {...dataSource.wrapper}>
        <div {...dataSource.page}>
          <QueueAnim
            key="text"
            type={animType.queue}
            leaveReverse
            ease={['easeOutQuad', 'easeInQuad']}
            {...dataSource.childWrapper}
            componentProps={{
              md: dataSource.childWrapper.md,
              xs: dataSource.childWrapper.xs,
            }}
          >
            {dataSource.childWrapper.children.map(getChildrenToRender)}
          </QueueAnim>
          <TweenOne animation={animType.one} key="title" {...dataSource.image}>
            <img src={dataSource.image.children} width="100%" alt="img" />
          </TweenOne>
        </div>
      </div>
    );
  }
}
export default Banner4;
