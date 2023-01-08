import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'hello hello',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
       这个是用docusaurus做的一个个人博客我觉得docusaurus的主题我很喜欢，加上他本来就是一个偏文档类型
       所以我用这个选择做自己的个人博客。
      </>
    ),
  },
  {
    title: '关于我自己',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>我的名字大家可以叫我N1conns(尼寇尼斯)，我在B站上的名字叫做呃呃Kennyz，目前是大二，寒假在学习一些后端知识和算法
      这几天刚刚才学会几个基础排序和KMP 回溯 递归 等待这些算法，
      不得不说算法还是很精巧的，大家可以在<code>bilibili</code> B站来联系我，一起交流.
      </>
    ),
  },
  {
    title: '我的目标',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
      打算寒假leetcode刷到150题，把计组，算法和数据库给摸清楚，
      然后学习java一些框架。写几个项目，贯彻前端和后端的，目前我写的项目都是前后端分离的那种，所以打算做一个前后端在一起的项目
            </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
