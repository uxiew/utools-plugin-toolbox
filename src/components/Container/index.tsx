import { Grid, Typography } from '@arco-design/web-react';
import { FCNews } from '@icongo/fc';
import { useKitStore } from '../../store';
import Card from '../Card';
import './style.scss';

const { GridItem } = Grid;

export default function Container() {
  const { data } = useKitStore();

  return (
    <div className='kit-container'>
      {data.map((cate, index) => (
        <div id={cate.id} key={cate.id + index}>
          <Typography.Title heading={5}>
            <FCNews />
            <span>{cate.name}</span>
          </Typography.Title>

          <Grid cols={{ sm: 2, md: 3, lg: 4 }} colGap={10}>
            {cate.features.map((feature, i) => (
              <GridItem index={i} key={feature.title + feature.id + i}>
                <Card cateIndex={index} index={i} {...feature} />
              </GridItem>
            ))}
          </Grid>
        </div>
      ))}
    </div>
  );
}
