import React from 'react';
import {Container, ChartContainer} from './Style';
import BarHorizontal from './BarHorizontal';
import BarVertical from './BarVertical';
import Doughnut from './Doughnut';
import Pie from './Pie';

export default function Index() {
  return (
    <Container>
      <ChartContainer>
        <Pie></Pie>
        <BarVertical></BarVertical>
      </ChartContainer>
      <ChartContainer>
        <Doughnut></Doughnut>
        <BarHorizontal></BarHorizontal>
      </ChartContainer>
    </Container>
  );
}
