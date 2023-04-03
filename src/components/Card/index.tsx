import { Grid } from '@arco-design/web-react';
const Row = Grid.Row;
const Col = Grid.Col;

import './style.scss';

type Props = {
  name: string;
  title: string;
  img: string;
};

export default function Card(props: Props) {
  const { name, title, img } = props;
  return (
    <div className='toolbox-card'>
      <a
        rel='noopener'
        className='toolbox-card__a'
        href='https://codepen.io/'
        title={title}
      >
        <Row className='toolbox-card__body' align='center'>
          <Col className='toolbox-card__img' flex='auto'>
            <img src={img} />
          </Col>
          <Col className='toolbox-card__des' flex='auto'>
            <div className='toolbox-card__des-name'>
              <strong>{name}</strong>
            </div>
            <p className='toolbox-card__des-title'>{title}</p>
          </Col>
        </Row>
      </a>
      {/* <a
        title=''
        rel='noopener nofollow'
        href='https://codepen.io/'
        className='togo text-center text-muted is-views'
        target='_blank'
      >
        <i className='iconfont icon-goto'></i>
      </a> */}
    </div>
  );
}
