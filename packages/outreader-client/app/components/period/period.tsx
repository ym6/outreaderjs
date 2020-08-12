import { Descriptions, Table } from 'antd';
import React from 'react';
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  ZAxis,
  Tooltip,
  Legend,
  Label,
} from 'recharts';
import { IPeriodFE } from '@outreader/core';

export function PeriodComponent(period: IPeriodFE) {
  const modeColumns = [
    {
      title: '振型',
      dataIndex: 'modeID',
    },
    {
      title: '周期',
      dataIndex: 'period',
    },
    {
      title: '转角',
      dataIndex: 'angle',
    },
    {
      title: '平动系数X',
      dataIndex: 'factorX',
    },
    {
      title: '平动系数Y',
      dataIndex: 'factorY',
    },
    {
      title: '扭转系数Z',
      dataIndex: 'factorZ',
    },
  ];
  const periodModeTableData = [];
  for (let i = 0; i < period.modeCoupling.modeID.length; i++) {
    periodModeTableData.push({
      modeID: period.modeCoupling.modeID[i],
      period: period.modeCoupling.period[i],
      angle: period.modeCoupling.angle[i],
      factorX: period.modeCoupling.factorX[i],
      factorY: period.modeCoupling.factorY[i],
      factorZ: period.modeCoupling.factorZ[i],
    });
  }

  const periodSeismicTableData = [];
  for (let i = 0; i < period.modeSeismic.modeID.length; i++) {
    periodSeismicTableData.push({
      modeID: period.modeSeismic.modeID[i],
      period: period.modeSeismic.period[i],
      angle: period.modeSeismic.angle[i],
      factorX: period.modeSeismic.factorX[i],
      factorY: period.modeSeismic.factorY[i],
      factorZ: period.modeSeismic.factorZ[i],
    });
  }

  const periodMassColumns = [
    {
      title: '振型',
      dataIndex: 'modeID',
    },
    {
      title: 'X',
      dataIndex: 'factorX',
    },
    {
      title: 'Y',
      dataIndex: 'factorY',
    },
    {
      title: 'Z',
      dataIndex: 'factorZ',
    },
  ];

  const periodMassTableData = [];
  const modeMassX = [];
  const modeMassY = [];
  const modeMassZ = [];
  let sumX: number = 0;
  let sumY: number = 0;
  let sumZ: number = 0;
  for (let i = 0; i < period.modeMass.modeID.length; i++) {
    periodMassTableData.push({
      modeID: period.modeMass.modeID[i],
      factorX: period.modeMass.factorX[i],
      factorY: period.modeMass.factorY[i],
      factorZ: period.modeMass.factorZ[i],
    });
    sumX += period.modeMass.factorX[i];
    sumY += period.modeMass.factorY[i];
    sumZ += period.modeMass.factorZ[i];
    modeMassX.push({
      x: period.modeMass.modeID[i],
      y: Math.round(sumX * 100) / 100,
    });
    modeMassY.push({
      x: period.modeMass.modeID[i],
      y: Math.round(sumY * 100) / 100,
    });
    modeMassZ.push({
      x: period.modeMass.modeID[i],
      y: Math.round(sumZ * 100) / 100,
    });
  }

  const Period = (
    <div>
      <Descriptions title="考虑扭转耦联时的动力特性"></Descriptions>
      <Table
        columns={modeColumns}
        dataSource={periodModeTableData}
        bordered
        size="small"
        pagination={false}
        style={{ marginBottom: 20 }}
      />
      <Descriptions title="地震最大作用方向的动力特性"></Descriptions>
      <Table
        columns={modeColumns}
        dataSource={periodSeismicTableData}
        bordered
        size="small"
        pagination={false}
        style={{ marginBottom: 20 }}
      />
      <Descriptions
        title="质量参与系数"
        bordered
        size="small"
        column={{ xs: 1, sm: 3 }}
        style={{ marginBottom: 20 }}
      >
        <Descriptions.Item label="sumX">
          {Math.round(period.modeMass.sumX * 100) / 100}
        </Descriptions.Item>
        <Descriptions.Item label="sumY">
          {Math.round(period.modeMass.sumY * 100) / 100}
        </Descriptions.Item>
        <Descriptions.Item label="sumZ">
          {Math.round(period.modeMass.sumZ * 100) / 100}
        </Descriptions.Item>
      </Descriptions>
      <ScatterChart
        width={600}
        height={400}
        margin={{
          top: 10,
          right: 10,
          bottom: 30,
          left: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          type="number"
          dataKey="x"
          name=""
          unit=""
          domain={[0, (dataMax) => Math.ceil(dataMax / 5) * 5]}
        >
          <Label value="振型" offset={0} position="bottom" />
        </XAxis>
        <YAxis type="number" dataKey="y" name="" unit="">
          <Label
            value="质量参与系数"
            angle={-90}
            offset={10}
            position="insideLeft"
          />
        </YAxis>
        <ZAxis type="number" range={[25]} />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Legend
          align="right"
          verticalAlign="top"
          iconSize={20}
          iconType="line"
        />
        <Scatter
          name="X向"
          data={modeMassX}
          fill="#8884d8"
          line={{ strokeWidth: 2 }}
          shape="cross"
        />
        <Scatter
          name="Y向"
          data={modeMassY}
          fill="#82ca9d"
          line={{ strokeWidth: 2 }}
          shape="cicle"
        />
        <Scatter
          name="Z向"
          data={modeMassZ}
          fill="#ffc658"
          line={{ strokeWidth: 2 }}
          shape="diamond"
        />
      </ScatterChart>
      <Table
        columns={periodMassColumns}
        dataSource={periodMassTableData}
        bordered
        size="small"
        pagination={false}
        style={{ marginBottom: 20 }}
      />
    </div>
  );

  return Period;
}
