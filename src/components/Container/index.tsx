import { Grid, Typography } from '@arco-design/web-react';
import { FCNews } from '@icongo/fc';
import { useBoxStore } from '../../store';
import Card from '../Card';
import './style.scss';

const { GridItem } = Grid;

export default function Container() {
  const { data } = useBoxStore();

  return (
    <div className='box-container'>
      {data.map((cate, index) => (
        <div id={cate.id} key={cate.id + index}>
          <Typography.Title heading={5}>
            <FCNews />
            <span>{cate.name}</span>
          </Typography.Title>

          <Grid cols={{ sm: 2, md: 3, lg: 4 }} colGap={10}>
            {cate.list.map(({ id, name }, i) => (
              <GridItem index={i} key={name + id + i}>
                <Card dataIndex={index} id={id} index={i} />
              </GridItem>
            ))}
          </Grid>
        </div>
      ))}
    </div>
  );
}
