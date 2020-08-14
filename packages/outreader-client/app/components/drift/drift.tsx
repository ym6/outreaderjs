import { Descriptions, Table, Row, Col, Collapse } from 'antd';
import React from 'react';
import { IDriftFE } from '@outreader/core';
import { StoreyChart } from './../storey-chart';

export function DriftComponent(drift: IDriftFE) {
  const driftDispColumns = [
    {
      title: '层号',
      dataIndex: 'storeyID',
    },
    {
      title: '塔号',
      dataIndex: 'towerID',
    },
    {
      title: '风荷载X',
      dataIndex: 'windX',
    },
    {
      title: '风荷载Y',
      dataIndex: 'windY',
    },
    {
      title: '地震X',
      dataIndex: 'seismicX',
    },
    {
      title: '地震Y',
      dataIndex: 'seismicY',
    },
  ];

  const dispTableData = [];
  const driftTableData = [];
  const dispChartWindX = [];
  const dispChartWindY = [];
  const dispChartSeismicX = [];
  const dispChartSeismicY = [];
  const driftChartWindX = [];
  const driftChartWindY = [];
  const driftChartSeismicX = [];
  const driftChartSeismicY = [];
  for (let i = 0; i < drift.driftWindXP.storeyID.length; i++) {
    dispTableData.push({
      storeyID: drift.driftWindXP.storeyID[i],
      towerID: drift.driftWindXP.towerID[i],
      windX: drift.driftWindXP.displacement[i].toFixed(2),
      windY: drift.driftWindYP.displacement[i].toFixed(2),
      seismicX: drift.driftSeismicX.displacement[i].toFixed(2),
      seismicY: drift.driftSeismicY.displacement[i].toFixed(2),
    });
    driftTableData.push({
      storeyID: drift.driftWindXP.storeyID[i],
      towerID: drift.driftWindXP.towerID[i],
      windX: drift.driftWindXP.drift[i],
      windY: drift.driftWindYP.drift[i],
      seismicX: drift.driftSeismicX.drift[i],
      seismicY: drift.driftSeismicY.drift[i],
    });
    dispChartWindX.push({
      x: drift.driftWindXP.displacement[i],
      y: drift.driftWindXP.storeyID[i],
    });
    dispChartWindY.push({
      x: drift.driftWindYP.displacement[i],
      y: drift.driftWindYP.storeyID[i],
    });
    dispChartSeismicX.push({
      x: drift.driftSeismicX.displacement[i],
      y: drift.driftSeismicX.storeyID[i],
    });
    dispChartSeismicY.push({
      x: drift.driftSeismicY.displacement[i],
      y: drift.driftSeismicY.storeyID[i],
    });
    driftChartWindX.push({
      x: 1 / drift.driftWindXP.drift[i],
      y: drift.driftWindXP.storeyID[i],
    });
    driftChartWindY.push({
      x: 1 / drift.driftWindYP.drift[i],
      y: drift.driftWindYP.storeyID[i],
    });
    driftChartSeismicX.push({
      x: 1 / drift.driftSeismicX.drift[i],
      y: drift.driftSeismicX.storeyID[i],
    });
    driftChartSeismicY.push({
      x: 1 / drift.driftSeismicY.drift[i],
      y: drift.driftSeismicY.storeyID[i],
    });
  }

  const dispRatioColumns = [
    {
      title: '层号',
      dataIndex: 'storeyID',
    },
    {
      title: '塔号',
      dataIndex: 'towerID',
    },
    {
      title: '+X偏心',
      dataIndex: 'eccXP',
    },
    {
      title: '-X偏心',
      dataIndex: 'eccXN',
    },
    {
      title: '+Y偏心',
      dataIndex: 'eccYP',
    },
    {
      title: '-Y偏心',
      dataIndex: 'eccYN',
    },
  ];

  const dispRatioTableData = [];
  const dispRatioStoreyTableData = [];
  const ratioChartEXP = [];
  const ratioChartEXN = [];
  const ratioChartEYP = [];
  const ratioChartEYN = [];
  const ratioDChartEXP = [];
  const ratioDChartEXN = [];
  const ratioDChartEYP = [];
  const ratioDChartEYN = [];
  for (let i = 0; i < drift.ratioSeismicXEccP.storeyID.length; i++) {
    dispRatioTableData.push({
      storeyID: drift.ratioSeismicXEccP.storeyID[i],
      towerID: drift.ratioSeismicXEccP.towerID[i],
      eccXP: drift.ratioSeismicXEccP.ratio[i].toFixed(2),
      eccXN: drift.ratioSeismicXEccN.ratio[i].toFixed(2),
      eccYP: drift.ratioSeismicYEccP.ratio[i].toFixed(2),
      eccYN: drift.ratioSeismicYEccN.ratio[i].toFixed(2),
    });
    dispRatioStoreyTableData.push({
      storeyID: drift.ratioSeismicXEccP.storeyID[i],
      towerID: drift.ratioSeismicXEccP.towerID[i],
      eccXP: drift.ratioSeismicXEccP.ratioD[i].toFixed(2),
      eccXN: drift.ratioSeismicXEccN.ratioD[i].toFixed(2),
      eccYP: drift.ratioSeismicYEccP.ratioD[i].toFixed(2),
      eccYN: drift.ratioSeismicYEccN.ratioD[i].toFixed(2),
    });
    ratioChartEXP.push({
      x: drift.ratioSeismicXEccP.ratio[i],
      y: drift.ratioSeismicXEccP.storeyID[i],
    });
    ratioChartEXN.push({
      x: drift.ratioSeismicXEccN.ratio[i],
      y: drift.ratioSeismicXEccN.storeyID[i],
    });
    ratioChartEYP.push({
      x: drift.ratioSeismicYEccP.ratio[i],
      y: drift.ratioSeismicYEccP.storeyID[i],
    });
    ratioChartEYN.push({
      x: drift.ratioSeismicYEccN.ratio[i],
      y: drift.ratioSeismicYEccN.storeyID[i],
    });
    ratioDChartEXP.push({
      x: drift.ratioSeismicXEccP.ratioD[i],
      y: drift.ratioSeismicXEccP.storeyID[i],
    });
    ratioDChartEXN.push({
      x: drift.ratioSeismicXEccN.ratioD[i],
      y: drift.ratioSeismicXEccN.storeyID[i],
    });
    ratioDChartEYP.push({
      x: drift.ratioSeismicYEccP.ratioD[i],
      y: drift.ratioSeismicYEccP.storeyID[i],
    });
    ratioDChartEYN.push({
      x: drift.ratioSeismicYEccN.ratioD[i],
      y: drift.ratioSeismicYEccN.storeyID[i],
    });
  }

  const { Panel } = Collapse;
  const Drift = (
    <div>
      <Descriptions title="位移(mm)"></Descriptions>
      <Row>
        <Col span={12}>
          <StoreyChart
            data1={dispChartWindX}
            data2={dispChartWindY}
            xLabel="风荷载"
          />
        </Col>
        <Col span={12}>
          <StoreyChart
            data1={dispChartSeismicX}
            data2={dispChartSeismicY}
            xLabel="地震作用"
          />
        </Col>
      </Row>
      <Collapse ghost>
        <Panel header="详细数据" key="1">
          <Table
            columns={driftDispColumns}
            dataSource={dispTableData}
            bordered
            size="small"
            pagination={false}
            style={{ marginBottom: 20 }}
          />
        </Panel>
      </Collapse>
      <Descriptions title="层间位移角"></Descriptions>
      <Row>
        <Col span={12}>
          <StoreyChart
            data1={driftChartWindX}
            data2={driftChartWindY}
            xLabel="风荷载"
          />
        </Col>
        <Col span={12}>
          <StoreyChart
            data1={driftChartSeismicX}
            data2={driftChartSeismicY}
            xLabel="地震作用"
          />
        </Col>
      </Row>
      <Collapse ghost>
        <Panel header="详细数据" key="1">
          <Table
            columns={driftDispColumns}
            dataSource={driftTableData}
            bordered
            size="small"
            pagination={false}
            style={{ marginBottom: 20 }}
          />
        </Panel>
      </Collapse>
      <Descriptions title="位移比"></Descriptions>
      <Row>
        <Col span={12}>
          <StoreyChart
            data1={ratioChartEXP}
            data2={ratioChartEYP}
            xLabel="+偏心"
          />
        </Col>
        <Col span={12}>
          <StoreyChart
            data1={ratioChartEXN}
            data2={ratioChartEYN}
            xLabel="-偏心"
          />
        </Col>
      </Row>
      <Collapse ghost>
        <Panel header="详细数据" key="1">
          <Table
            columns={dispRatioColumns}
            dataSource={dispRatioTableData}
            bordered
            size="small"
            pagination={false}
            style={{ marginBottom: 20 }}
          />
        </Panel>
      </Collapse>
      <Descriptions title="层间位移比"></Descriptions>
      <Row>
        <Col span={12}>
          <StoreyChart
            data1={ratioDChartEXP}
            data2={ratioDChartEYP}
            xLabel="+偏心"
          />
        </Col>
        <Col span={12}>
          <StoreyChart
            data1={ratioDChartEXN}
            data2={ratioDChartEYN}
            xLabel="-偏心"
          />
        </Col>
      </Row>
      <Collapse ghost>
        <Panel header="详细数据" key="1">
          <Table
            columns={dispRatioColumns}
            dataSource={dispRatioStoreyTableData}
            bordered
            size="small"
            pagination={false}
            style={{ marginBottom: 20 }}
          />
        </Panel>
      </Collapse>
    </div>
  );

  return Drift;
}
