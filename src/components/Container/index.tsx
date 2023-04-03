import { useEffect } from 'react';
import { Grid } from '@arco-design/web-react';
import Card from '../Card';
import './style.scss';

const Row = Grid.Row;
const Col = Grid.Col;

export default function Container() {
  const lists = [
    {
      name: 'CodePen',
      title: '开源的前端效果站',
      img: 'https://cdn.jsdelivr.net/gh/Yafine/cdn@3.2.1/source/box/images/logo/codingame.png'
    },
    {
      name: 'CodePen42',
      title: '开源的前端效果站',
      img: 'https://cdn.jsdelivr.net/gh/Yafine/cdn@3.2.1/source/box/images/logo/codingame.png'
    },
    {
      name: 'CodePen22',
      title: '开源的前端效果站',
      img: 'https://cdn.jsdelivr.net/gh/Yafine/cdn@3.2.1/source/box/images/logo/codingame.png'
    },
    {
      name: 'CodePen5',
      title: '开源的前端效果站',
      img: 'https://cdn.jsdelivr.net/gh/Yafine/cdn@3.2.1/source/box/images/logo/codingame.png'
    },
    {
      name: 'CodePen34',
      title: '开源的前端效果站',
      img: 'https://cdn.jsdelivr.net/gh/Yafine/cdn@3.2.1/source/box/images/logo/codingame.png'
    },
    {
      name: 'CodePen12',
      title: '开源的前端效果站',
      img: 'https://cdn.jsdelivr.net/gh/Yafine/cdn@3.2.1/source/box/images/logo/codingame.png'
    },
    {
      name: 'CodePen3',
      title: '开源的前端效果站',
      img: 'https://cdn.jsdelivr.net/gh/Yafine/cdn@3.2.1/source/box/images/logo/codingame.png'
    },
    {
      name: 'CodePen324',
      title: '开源的前端效果站',
      img: 'https://cdn.jsdelivr.net/gh/Yafine/cdn@3.2.1/source/box/images/logo/codingame.png'
    },
    {
      name: 'CodePen142',
      title: '开源的前端效果站',
      img: 'https://cdn.jsdelivr.net/gh/Yafine/cdn@3.2.1/source/box/images/logo/codingame.png'
    },
    {
      name: 'CodePen53',
      title: '开源的前端效果站',
      img: 'https://cdn.jsdelivr.net/gh/Yafine/cdn@3.2.1/source/box/images/logo/codingame.png'
    }
  ];
  return (
    <div className='box-content'>
      <div id='Basic'>
        <h2>Basic</h2>
        <Row style={{ justifyContent: 'space-evenly' }}>
          {lists.map(({ name, title, img }) => (
            <Col key={name + 1} flex='none'>
              <Card name={name} title={title} img={img} />
            </Col>
          ))}
        </Row>
      </div>
      <div id='Static'>
        Static
        <Row justify='center'>
          {lists.map(({ name, title, img }, i) => (
            <Col key={name + 1} flex='none'>
              <Card name={name} title={title} img={img} />
            </Col>
          ))}
        </Row>
      </div>
      <div id='Lineless'>
        Lineless
        <Row justify='center'>
          {lists.map(({ name, title, img }, i) => (
            <Col key={name + 1} flex='auto'>
              <Card name={name} title={title} img={img} />
            </Col>
          ))}
        </Row>
      </div>
      <div id='Affix'>
        <h2>Affix</h2>
        <Row justify='center'>
          {lists.map(({ name, title, img }, i) => (
            <Col key={name + 1} flex='auto'>
              <Card name={name} title={title} img={img} />
            </Col>
          ))}
        </Row>
      </div>
      <div id='Hash'>
        <h2>Hash</h2>
      </div>
    </div>
  );
}
