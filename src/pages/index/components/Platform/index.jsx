import React from 'react';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import { Carousel as AntCarousel, Row, Col } from 'antd';
import { getChildrenToRender } from '@/components/utils';
import './style.less'

const dataSource = {
  wrapper: { className: 'home-page-wrapper feature8-wrapper' },
  page: { className: 'home-page feature8' },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: 'feature8-title-wrapper',
    children: [
      {
        name: 'title',
        className: 'feature8-title-h1',
        children: (
          <span>
            <p>通融平台</p>
          </span>
        ),
      },
      {
        name: 'content',
        className: 'feature8-title-content',
        children: (
          <span>
            <p>
              “中央企业工业互联网融通平台”是由国务院国资委领导，中国航天科工联合中国石油、国家电网、中国联通等共计28家中央企业共同建设的平台，于2019年6月15日正式启动。
            </p>
          </span>
        ),
      },
    ],
  },
  childWrapper: {
    className: 'feature8-button-wrapper',
    children: [
      {
        name: 'button',
        className: 'feature8-button',
        children: { href: '#', children: '立即体验' },
      },
    ],
  },
  Carousel: {
    dots: false,
    className: 'feature8-carousel',
    wrapper: { className: 'feature8-block-wrapper' },
    children: {
      className: 'feature8-block',
      titleWrapper: {
        className: 'feature8-carousel-title-wrapper',
        title: { className: 'feature8-carousel-title' },
      },
      children: [
        {
          name: 'block0',
          className: 'feature8-block-row',
          gutter: 120,
          title: {
            className: 'feature8-carousel-title-block',
            children: (
              <span>
                <p>技术优势</p>
              </span>
            ),
          },
          children: [
            {
              className: 'feature8-block-col',
              md: 8,
              xs: 24,
              name: 'child0',
              // arrow: {
              //   className: 'feature8-block-arrow',
              //   children:
              //     'https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg',
              // },
              children: {
                className: 'feature8-block-child',
                children: [
                  {
                    name: 'image',
                    className: 'feature8-block-image',
                    children:
                      'https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg',
                  },
                  {
                    name: 'title',
                    className: 'feature8-block-title',
                    children: (
                      <span>
                        <p>基于博世理念的解决方案体系</p>
                      </span>
                    ),
                  },
                  {
                    name: 'content',
                    className: 'feature8-block-content',
                    children: (
                      <span>
                        <span>
                          <p>生产体系的诊断平台</p>
                          <p>培训平台</p>
                          <p>
                            <span>生产及物流模块化解决方案</span>
                          </p>
                          <p>纵深行业平台（机加，模具，能源）</p>
                          <p>工业数据分析平台</p>
                          <p>生产资源协同管理及交易平台</p>
                        </span>
                      </span>
                    ),
                  },
                ],
              },
            },
            {
              className: 'feature8-block-col',
              md: 8,
              xs: 24,
              name: 'child1',
              // arrow: {
              //   className: 'feature8-block-arrow',
              //   children:
              //     'https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg',
              // },
              children: {
                className: 'feature8-block-child',
                children: [
                  {
                    name: 'image',
                    className: 'feature8-block-image',
                    children:
                      'https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg',
                  },
                  {
                    name: 'title',
                    className: 'feature8-block-title',
                    children: (
                      <span>
                        <p>高校和科研院所的技术转化</p>
                      </span>
                    ),
                  },
                  {
                    name: 'content',
                    className: 'feature8-block-content',
                    children: (
                      <span>
                        <p>知识产权产品化</p>
                        <p>产学研生态体系</p>
                        <p>工业设备数字建模和算法研究</p>
                        <p>人工智能的前沿创新</p>
                        <p>工业大数据技术</p>
                      </span>
                    ),
                  },
                ],
              },
            },
            {
              className: 'feature8-block-col',
              md: 8,
              xs: 24,
              name: 'child2',
              // arrow: {
              //   className: 'feature8-block-arrow',
              //   children:
              //     'https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg',
              // },
              children: {
                className: 'feature8-block-child',
                children: [
                  {
                    name: 'image',
                    className: 'feature8-block-image',
                    children:
                      'https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg',
                  },
                  {
                    name: 'title',
                    className: 'feature8-block-title',
                    children: (
                      <span>
                        <p>行业认知</p>
                      </span>
                    ),
                  },
                  {
                    name: 'content',
                    className: 'feature8-block-content',
                    children: (
                      <span>
                        <p>深耕工控行业10多年的专业团队</p>
                        <p>
                          来自罗克韦尔自动化，施耐德，ABB，西门子的销售高管和技术高管
                        </p>
                        <p>丰富的项目案例和客户集群</p>
                      </span>
                    ),
                  },
                ],
              },
            },
          ],
        },
        {
          name: 'block1',
          className: 'feature8-block-row',
          gutter: 120,
          title: {
            children: (
              <span>
                <p>服务对象</p>
              </span>
            ),
            className: 'feature8-carousel-title-block',
          },
          children: [
            {
              className: 'feature8-block-col',
              md: 8,
              xs: 24,
              name: 'child0',
              // arrow: {
              //   className: 'feature8-block-arrow',
              //   children:
              //     'https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg',
              // },
              children: {
                className: 'feature8-block-child',
                children: [
                  {
                    name: 'image',
                    className: 'feature8-block-image',
                    children:
                      'https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg',
                  },
                  {
                    name: 'title',
                    className: 'feature8-block-title',
                    children: (
                      <span>
                        <p>面向企业客户</p>
                      </span>
                    ),
                  },
                  {
                    name: 'content',
                    className: 'feature8-block-content',
                    children: (
                      <span>
                        <p>政策云速查，远程云运维</p>
                        <p>生产云诊断，业务云管理</p>
                        <p>产品云营销，原料云保供</p>
                      </span>
                    ),
                  },
                ],
              },
            },
            {
              className: 'feature8-block-col',
              md: 8,
              xs: 24,
              name: 'child1',
              // arrow: {
              //   className: 'feature8-block-arrow',
              //   children:
              //     'https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg',
              // },
              children: {
                className: 'feature8-block-child',
                children: [
                  {
                    name: 'image',
                    className: 'feature8-block-image',
                    children:
                      'https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg',
                  },
                  {
                    name: 'title',
                    className: 'feature8-block-title',
                    children: (
                      <span>
                        <p>政府服务平台</p>
                      </span>
                    ),
                  },
                  {
                    name: 'content',
                    className: 'feature8-block-content',
                    children: (
                      <span>
                        <p>产业监测，企业服务</p>
                        <p>园区管理，应急保障</p>
                        <p>安全运维，防疫物资产能态势</p>
                      </span>
                    ),
                  },
                ],
              },
            },
            {
              className: 'feature8-block-col',
              md: 8,
              xs: 24,
              name: 'child2',
              // arrow: {
              //   className: 'feature8-block-arrow',
              //   children:
              //     'https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg',
              // },
              children: {
                className: 'feature8-block-child',
                children: [
                  {
                    name: 'image',
                    className: 'feature8-block-image',
                    children:
                      'https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg',
                  },
                  {
                    name: 'title',
                    className: 'feature8-block-title',
                    children: (
                      <span>
                        <span>
                          <span>
                            <p>金融服务</p>
                          </span>
                        </span>
                      </span>
                    ),
                  },
                  {
                    name: 'content',
                    className: 'feature8-block-content',
                    children: (
                      <span>
                        <p>产业基金服务</p>
                        <p>生产资料融资租赁</p>
                        <p>企业融资授信</p>
                      </span>
                    ),
                  },
                ],
              },
            },
          ],
        },
      ],
    },
  },
};

class Feature8 extends React.PureComponent {
  constructor(props) {
    super(props);
    this.carouselRef = React.createRef();
    this.state = {
      current: 0,
    };
  }

  onTitleClick = (_, i) => {
    const carouselRef = this.carouselRef.current.childRefs.carousel;
    carouselRef.goTo(i);
  };

  onBeforeChange = (_, newIndex) => {
    this.setState({
      current: newIndex,
    });
  };

  getChildrenToRender = (dataSource) => {
    const { current } = this.state;
    const { Carousel, childWrapper: buttonWrapper } = dataSource;
    const { children: carouselChild, wrapper, ...carouselProps } = Carousel;
    const {
      titleWrapper,
      children: childWrapper,
      ...childrenProps
    } = carouselChild;

    const {
      barWrapper,
      title: titleChild,
      ...titleWrapperProps
    } = titleWrapper;
    const titleToRender = [];

    const childrenToRender = childWrapper.map((item, ii) => {
      const { title, children: childRow, ...rowProps } = item;
      if (childWrapper.length > 1) {
        titleToRender.push(
          <div
            {...title}
            key={ii.toString()}
            onClick={(e) => {
              this.onTitleClick(e, ii);
            }}
            className={
              ii === current
                ? `${title.className || ''} active`
                : title.className
            }
          >
            {title.children}
          </div>
        );
      }
      const childrenItem = childRow.map(($item, i) => {
        const { children: colChild, arrow, ...colProps } = $item;
        const { ...childProps } = colChild;
        return (
          <Col {...colProps} key={i.toString()}>
            <div {...childProps}>
              {colChild.children.map(getChildrenToRender)}
            </div>
            {arrow && (
              <div {...arrow}>
                <img src={arrow.children} alt="img" />
              </div>
            )}
          </Col>
        );
      });

      return (
        <div key={ii.toString()}>
          <QueueAnim
            component={Row}
            type="bottom"
            componentProps={{ type: 'flex' }}
            {...rowProps}
          >
            {childrenItem}
          </QueueAnim>
        </div>
      );
    });

    return (
      <QueueAnim
        key="queue"
        type="bottom"
        ref={this.carouselRef}
        {...childrenProps}
      >
        {childWrapper.length > 1 && (
          <div {...titleWrapperProps} key="title">
            <div {...titleChild}>{titleToRender}</div>
          </div>
        )}
        <AntCarousel
          key="carousel"
          {...carouselProps}
          infinite={false}
          beforeChange={this.onBeforeChange}
        >
          {childrenToRender}
        </AntCarousel>
        <div key="button" {...buttonWrapper}>
          {buttonWrapper.children.map(getChildrenToRender)}
        </div>
      </QueueAnim>
    );
  };

  render() {
    const { isMobile, ...props } = this.props;
    const { titleWrapper } = dataSource;
    return (
      <div {...props} {...dataSource.wrapper}>
        <div {...dataSource.page}>
          <div {...dataSource.titleWrapper}>
            {titleWrapper.children.map(getChildrenToRender)}
          </div>
          <OverPack {...dataSource.OverPack}>
            {this.getChildrenToRender(dataSource)}
          </OverPack>
        </div>
      </div>
    );
  }
}
export default Feature8;
