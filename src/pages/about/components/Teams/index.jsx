import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { Row, Col } from 'antd';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { getChildrenToRender, isImg } from '@/components/utils';
import './style.less'
import p1 from './p1.png';
import p2 from './p2.png';
import p3 from './p3.png';

const dataSource = {
  wrapper: { className: 'home-page-wrapper teams1-wrapper' },
  page: { className: 'home-page teams1' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [{ name: 'title', children: '团队成员' }],
  },
  block: {
    className: 'block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: 'image',
              className: 'teams1-image',
              children: <img src={p1} />,
            },
            { name: 'title', className: 'teams1-title', children: '马勇 硕士' },
            {
              name: 'content',
              className: 'teams1-job',
              children: 'CEO',
            },
            {
              name: 'content1',
              className: 'teams1-content',
              children: (
                <>
                  前励迅集团安迅思咨询商务总监<br />
                  前施耐德电气区域销售负责人<br />
                  前美国康耐视公司区域渠道经理<br />
                  前罗克韦尔自动化区域销售经理<br />
                </>
              ),
            },
          ],
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: 'image',
              className: 'teams1-image',
              children: <img src={p2} />,
            },
            { name: 'title', className: 'teams1-title', children: '陈斌 博士' },
            {
              name: 'content',
              className: 'teams1-job',
              children: '首席科学家',
            },
            {
              name: 'content1',
              className: 'teams1-content',
              children: (
                <>
                  中科院声学所博士后<br />
                  北京邮电大学 博士生导师<br />
                  设备健康智能监测实验室负责人<br />
                </>
              ),
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: 'image',
              className: 'teams1-image',
              children: <img src={p3} />,
            },
            { name: 'title', className: 'teams1-title', children: '亓卫峰 硕士' },
            {
              name: 'content',
              className: 'teams1-job',
              children: 'COO',
            },
            {
              name: 'content1',
              className: 'teams1-content',
              children: (
                <>
                  前广嘉集团资深COO<br />
                  前西门子项目部负责人<br />
                </>
              ),
            },
          ],
        },
      },
    ],
  },
};

class Teams extends React.PureComponent {
  getBlockChildren = (data) =>
    data.map((item, i) => {
      const { titleWrapper, ...$item } = item;
      return (
        <Col key={i.toString()} {...$item}>
          {titleWrapper.children.map(getChildrenToRender)}
        </Col>
      );
    });

  render() {
    const { ...props } = this.props;
    delete props.isMobile;
    const listChildren = this.getBlockChildren(dataSource.block.children);
    return (
      <div {...props} {...dataSource.wrapper}>
        <div {...dataSource.page}>
          <div {...dataSource.titleWrapper}>
            {dataSource.titleWrapper.children.map(getChildrenToRender)}
          </div>
          <OverPack {...dataSource.OverPack}>
            <QueueAnim
              type="bottom"
              key="block"
              leaveReverse
              {...dataSource.block}
              component={Row}
            >
              {listChildren}
            </QueueAnim>
          </OverPack>
        </div>
      </div>
    );
  }
}

export default Teams;
