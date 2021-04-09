import React from 'react'
import {VictoryPie} from "victory";

const ChartTemplateComponent = ({renderData, renderColors}) => {

  return (
    <>
      <VictoryPie
        data={renderData}
        animate={{duration: 2000}}
        colorScale={renderColors}
      />
    </>
  )
}

export default ChartTemplateComponent