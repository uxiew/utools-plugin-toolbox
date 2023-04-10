import { Grid, Typography, Trigger } from '@arco-design/web-react';
import useFeature from '../../hooks/feature';
import { useKitStore } from '../../store';
import RightMenu from './RightMenu';
import './style.scss';
import type { FeatureProps } from './types';

const Row = Grid.Row;
const Col = Grid.Col;

export default function Card(props: FeatureProps) {
  // const [visible, setVisible] = useState(false);

  const { cardInfo, openModal } = useFeature(props);

  return (
    <Trigger
      trigger='contextMenu'
      alignPoint
      position='bl'
      popupAlign={{
        bottom: 8,
        left: 8
      }}
      popup={() => <RightMenu {...props} />}
    >
      <div className='toolkit-card' onClick={openModal}>
        <a
          rel='noopener'
          className='toolkit-card__a'
          href='https://codepen.io/'
          title={cardInfo.description}
        >
          <Row className='toolkit-card__body' align='center' div>
            <Col className='toolkit-card__img'>
              <img src={cardInfo.logo} />
            </Col>
            <Col className='toolkit-card__des'>
              <Typography.Paragraph
                ellipsis={{
                  cssEllipsis: true
                }}
                className='toolkit-card__des-name'
                style={{ marginBottom: 0 }}
              >
                <strong>{cardInfo.title}</strong>
              </Typography.Paragraph>
              <Typography.Paragraph
                ellipsis={{
                  cssEllipsis: true,
                  showTooltip: {
                    type: 'tooltip',
                    props: { style: { borderRadius: '10px' } }
                  }
                }}
                className='toolkit-card__des-title'
                style={{ marginBottom: 0 }}
              >
                {cardInfo.description}
              </Typography.Paragraph>
            </Col>
          </Row>
        </a>
      </div>
    </Trigger>
  );
}
