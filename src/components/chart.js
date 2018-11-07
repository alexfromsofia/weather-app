import _ from 'lodash';
import React from 'react';

import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

export function average(data) {
  return _.round(_.sum(data) / data.length);
}

export default ({ data, color, units }) => {
  return (
    <div>
      <Sparklines width={120} height={120} data={data}>
        <SparklinesLine color={color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>Average: {average(data)}{units}</div>
      <div>Current: {data[0]}{units}</div>
    </div>
  )
}