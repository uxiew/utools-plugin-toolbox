import { Grid, Typography, Trigger } from '@arco-design/web-react';
import React from 'react';
import { useBoxStore } from '../../store';
import RightMenu from './RightMenu';
import './style.scss';
import type { CardProps } from './types';

const Row = Grid.Row;
const Col = Grid.Col;

export default function Card(props: CardProps) {
  const { index, dataIndex, id } = props;
  const { title, name, logo } = useBoxStore().data[dataIndex].list[index];

  const open = () => {
    console.log(props);
  };

  return (
    <Trigger
      trigger='contextMenu'
      alignPoint
      position='bl'
      popupAlign={{
        bottom: 8,
        left: 8
      }}
      popup={() => <RightMenu />}
    >
      <div className='toolbox-card' onClick={open}>
        <a
          rel='noopener'
          className='toolbox-card__a'
          href='https://codepen.io/'
          title={title}
        >
          <Row className='toolbox-card__body' align='center' div>
            <Col className='toolbox-card__img'>
              <img src={logo} />
            </Col>
            <Col className='toolbox-card__des'>
              <Typography.Paragraph
                ellipsis={{
                  cssEllipsis: true
                }}
                className='toolbox-card__des-name'
                style={{ marginBottom: 0 }}
              >
                <strong>{name}</strong>
              </Typography.Paragraph>
              <Typography.Paragraph
                ellipsis={{
                  cssEllipsis: true,
                  showTooltip: {
                    type: 'tooltip',
                    props: { style: { borderRadius: '10px' } }
                  }
                }}
                className='toolbox-card__des-title'
                style={{ marginBottom: 0 }}
              >
                {title}
              </Typography.Paragraph>
            </Col>
          </Row>
        </a>
      </div>
    </Trigger>
  );
}
