import { Grid, Modal, Typography, Trigger } from '@arco-design/web-react';
import { useState } from 'react';
import { useBoxStore } from '../../store';
import Features from '../../features';
import RightMenu from './RightMenu';
import './style.scss';
import type { CardProps } from './types';

const Row = Grid.Row;
const Col = Grid.Col;

export default function Card({ index, dataIndex, id }: CardProps) {
  const featureProp = useBoxStore().data[dataIndex].list[index];
  const { title, name, logo } = featureProp;
  // const [visible, setVisible] = useState(false);

  const openModal = () => {
    console.log(`[${id}]: ${name}`);
    Modal.info({
      icon: null,
      title: null,
      footer: null,
      closable: true,
      style: {
        height: '100vh',
        width: '100vw',
        borderRadius: 0
      },
      content: getFeatureComp('Glassmorphism')
    });
  };

  const getFeatureComp = (id: string) => {
    const Comp = Features[id] || null;
    return <Comp {...featureProp} />;
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
      <div className='toolbox-card' onClick={openModal}>
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
