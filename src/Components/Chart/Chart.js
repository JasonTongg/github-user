import React from 'react';
import {Container, ChartContainer} from './Style';
import BarHorizontal from './BarHorizontal/BarHorizontal';
import BarVertical from './BarVertical/BarVertical';
import Doughnut from './Doughnut/BarHorizontal';
import Pie from './Pie/Pie';

export default function Chart() {
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
