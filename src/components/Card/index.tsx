import { Grid, Typography } from '@arco-design/web-react';
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
        <Row className='toolbox-card__body' align='center' div>
          <Col className='toolbox-card__img'>
            <img src={img} />
          </Col>
          <Col className='toolbox-card__des'>
            <Typography.Paragraph
              ellipsis={{
                cssEllipsis: true
              }}
              className='toolbox-card__des-name'
              style={{ marginBottom: 0 }}
            >
              <strong>
                {name} {title}
              </strong>
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
              {title} {title}
            </Typography.Paragraph>
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
