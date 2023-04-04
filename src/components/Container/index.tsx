import { useEffect } from 'react';
import { Grid, Typography } from '@arco-design/web-react';
import Card from '../Card';
import './style.scss';

const { GridItem } = Grid;

export default function Container() {
  const lists = [
    {
      name: 'CodePen',
      title: '开源的前端效果站',
      img: 'https://nankart.cn/img/gitee.png'
    },
    {
      name: 'CodePen42',
      title: '开源的前端效果站',
      img: 'https://nankart.cn/img/gitee.png'
    },
    {
      name: 'CodePen22',
      title: '开源的前端效果站',
      img: 'https://nankart.cn/img/gitee.png'
    },
    {
      name: 'CodePen5',
      title: '开源的前端效果站',
      img: 'https://nankart.cn/img/gitee.png'
    },
    {
      name: 'CodePen34',
      title: '开源的前端效果站',
      img: 'https://nankart.cn/img/gitee.png'
    },
    {
      name: 'CodePen12',
      title: '开源的前端效果站',
      img: 'https://nankart.cn/img/gitee.png'
    },
    {
      name: 'CodePen3',
      title: '开源的前端效果站',
      img: 'https://nankart.cn/img/gitee.png'
    },
    {
      name: 'CodePen324',
      title: '开源的前端效果站',
      img: 'https://nankart.cn/img/gitee.png'
    },
    {
      name: 'CodePen142',
      title: '开源的前端效果站',
      img: 'https://nankart.cn/img/gitee.png'
    },
    {
      name: 'CodePen53',
      title: '开源的前端效果站',
      img: 'https://nankart.cn/img/gitee.png'
    }
  ];
  return (
    <div className='box-container'>
      <div id='Basic'>
        <Typography.Title heading={2} ellipsis>
          Basic
        </Typography.Title>
        <Grid cols={{ sm: 2, md: 3, lg: 4 }} colGap={10}>
          {lists.map(({ name, title, img }, i) => (
            <GridItem index={i} key={name + 1}>
              <Card name={name} title={title} img={img} />
            </GridItem>
          ))}
        </Grid>
      </div>
      <div id='Static'>
        <Typography.Title heading={2} ellipsis>
          Static
        </Typography.Title>
        <Grid cols={{ sm: 2, md: 3, lg: 4 }} colGap={10}>
          {lists.map(({ name, title, img }, i) => (
            <GridItem index={i} key={name + 1}>
              <Card name={name} title={title} img={img} />
            </GridItem>
          ))}
        </Grid>
      </div>
      <div id='Lineless'>
        <Typography.Title heading={2} ellipsis>
          Lineless
        </Typography.Title>
        <Grid cols={{ sm: 2, md: 3, lg: 4 }} colGap={10}>
          {lists.map(({ name, title, img }, i) => (
            <GridItem index={i} key={name + 1}>
              <Card name={name} title={title} img={img} />
            </GridItem>
          ))}
        </Grid>
      </div>
      <div id='Affix'>
        <Typography.Title heading={2} ellipsis>
          Affix
        </Typography.Title>
        <Grid cols={{ sm: 2, md: 3, lg: 4 }} colGap={10}>
          {lists.map(({ name, title, img }, i) => (
            <GridItem index={i} key={name + 1}>
              <Card name={name} title={title} img={img} />
            </GridItem>
          ))}
        </Grid>
      </div>
      <div id='Hash'>
        <h2>Hash</h2>
      </div>
    </div>
  );
}
