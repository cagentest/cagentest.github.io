import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import { getChildrenToRender } from '@/components/utils';
import './style.less'

const dataSource = {
  wrapper: { className: 'home-page-wrapper banner5' },
  page: { className: 'home-page banner5-page' },
  childWrapper: {
    className: 'banner5-title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <span>
              <p>博思工业数智云平台</p>
            </span>
          </span>
        ),
        className: 'banner5-title',
      },
      {
        name: 'explain',
        className: 'banner5-explain',
        children: (
          <span>
            专注研发工业互联网智能诊断的云平台<br />
          </span>
        ),
      },
      {
        name: 'content',
        className: 'banner5-content',
        children: (
          <span>
            <span>
              <p>
                <br />
              </p>
            </span>
          </span>
        ),
      },
      {
        name: 'button',
        className: 'banner5-button-wrapper',
        children: {
          href: '#',
          className: 'banner5-button',
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
    className: 'banner5-image',
    children:
      'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*-wAhRYnWQscAAAAAAAAAAABkARQnAQ',
  },
};

class Banner5 extends React.PureComponent {
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
export default Banner5;
