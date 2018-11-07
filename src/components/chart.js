import React from 'react';

import { Sparklines, SparklinesLine } from 'react-sparklines';

export default ({ data, color }) => {
  return (
    <Sparklines width={120} height={120} data={data}>
      <SparklinesLine color={color} />
    </Sparklines>
  )
}