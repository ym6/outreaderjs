import { Table, Collapse, Row } from 'antd';
import { ColumnsType } from 'antd/es/table';
import React from 'react';
import { IFactorFE } from '@outreader/core';
import { StoreyChart } from '../../chart-tools';

export function FactorComponent(factor: IFactorFE) {
  const weakColumns: ColumnsType<Object> = [
    {
      title: '层号',
      dataIndex: 'storeyID',
      align: 'right',
    },
    {
      title: '塔号',
      dataIndex: 'towerID',
      align: 'right',
    },
    {
      title: '放大系数',
      dataIndex: 'factor',
      align: 'right',
    },
  ];

  const weakTableData = [];
  const weakChartData = [];
  for (let i = 0; i < factor.stiffness.storeyID.length; i++) {
    weakTableData.push({
      key: i,
      storeyID: factor.stiffness.storeyID[i],
      towerID: factor.stiffness.towerID[i],
      factor: factor.stiffness.weakStoreyFactor[i].toFixed(2),
    });
    weakChartData.push({
      x: factor.stiffness.weakStoreyFactor[i],
      y: factor.stiffness.storeyID[i],
    });
  }

  const factorColumns: ColumnsType<Object> = [
    {
      title: '层号',
      dataIndex: 'storeyID',
      align: 'right',
    },
    {
      title: '塔号',
      dataIndex: 'towerID',
      align: 'right',
    },
    {
      title: 'X向',
      dataIndex: 'factorX',
      align: 'right',
    },
    {
      title: 'Y向',
      dataIndex: 'factorY',
      align: 'right',
    },
  ];

  const shearTableData = [];
  const shearXChartData = [];
  const shearYChartData = [];
  for (let i = 0; i < factor.shearWeightRatioModify.storeyID.length; i++) {
    shearTableData.push({
      key: i,
      storeyID: factor.shearWeightRatioModify.storeyID[i],
      towerID: factor.shearWeightRatioModify.towerID[i],
      factorX: factor.shearWeightRatioModify.factorX[i].toFixed(3),
      factorY: factor.shearWeightRatioModify.factorY[i].toFixed(3),
    });
    shearXChartData.push({
      x: factor.shearWeightRatioModify.factorX[i],
      y: factor.shearWeightRatioModify.storeyID[i],
    });
    shearYChartData.push({
      x: factor.shearWeightRatioModify.factorY[i],
      y: factor.shearWeightRatioModify.storeyID[i],
    });
  }

  const v02qTableData = [];
  const v02qXChartData = [];
  const v02qYChartData = [];
  for (let i = 0; i < factor.v02qFactor.storeyID.length; i++) {
    v02qTableData.push({
      key: i,
      storeyID: factor.v02qFactor.storeyID[i],
      towerID: factor.v02qFactor.towerID[i],
      factorX: factor.v02qFactor.factorX[i].toFixed(3),
      factorY: factor.v02qFactor.factorY[i].toFixed(3),
    });
    v02qXChartData.push({
      x: factor.v02qFactor.factorX[i],
      y: factor.v02qFactor.storeyID[i],
    });
    v02qYChartData.push({
      x: factor.v02qFactor.factorY[i],
      y: factor.v02qFactor.storeyID[i],
    });
  }

  const { Panel } = Collapse;
  const Factor = (
    <React.Fragment>
      <h3>薄弱层剪力放大系数</h3>
      <Row justify="space-around">
        <StoreyChart
          labels={{
            xLabel: '薄弱层剪力放大系数',
          }}
          describes={[
            {
              name: '系数',
              fill: '#8884d8',
              shape: 'cross',
            },
          ]}
          datas={[weakChartData]}
        />
      </Row>
      <Collapse ghost>
        <Panel header="详细数据" key="1">
          <Table
            columns={weakColumns}
            dataSource={weakTableData}
            bordered
            size="small"
            pagination={false}
            style={{ marginBottom: 20 }}
            scroll={{ y: 'calc(100vh - 12.5rem)' }}
          />
        </Panel>
      </Collapse>
      <h3>剪重比调整系数</h3>
      <Row justify="space-around">
        <StoreyChart
          labels={{
            xLabel: '剪重比调整系数',
          }}
          describes={[
            {
              name: 'X向',
              fill: '#8884d8',
              shape: 'cross',
            },
            {
              name: 'Y向',
              fill: '#82ca9d',
              shape: 'circle',
            },
          ]}
          datas={[shearXChartData, shearYChartData]}
        />
      </Row>
      <Collapse ghost>
        <Panel header="详细数据" key="1">
          <Table
            columns={factorColumns}
            dataSource={shearTableData}
            bordered
            size="small"
            pagination={false}
            style={{ marginBottom: 20 }}
            scroll={{ y: 'calc(100vh - 12.5rem)' }}
          />
        </Panel>
      </Collapse>
      <h3>0.2V0调整系数</h3>
      <Row justify="space-around">
        <StoreyChart
          labels={{
            xLabel: '0.2V0调整系数',
          }}
          describes={[
            {
              name: 'X向',
              fill: '#8884d8',
              shape: 'cross',
            },
            {
              name: 'Y向',
              fill: '#82ca9d',
              shape: 'circle',
            },
          ]}
          datas={[v02qXChartData, v02qYChartData]}
        />
      </Row>
      <Collapse ghost>
        <Panel header="详细数据" key="1">
          <Table
            columns={factorColumns}
            dataSource={v02qTableData}
            bordered
            size="small"
            pagination={false}
            style={{ marginBottom: 20 }}
            scroll={{ y: 'calc(100vh - 12.5rem)' }}
          />
        </Panel>
      </Collapse>
    </React.Fragment>
  );

  return Factor;
}
