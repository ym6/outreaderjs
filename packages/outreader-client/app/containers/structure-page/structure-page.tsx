import { Breadcrumb, Descriptions, Layout, Menu, message, Table } from 'antd';
import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { convertStructure } from '@outreader/yjk';
import { initDb } from '../../database';
import { IStyles } from '../../interfaces';

const styles: IStyles = {
  container: {
    background: '#fff',
    padding: '2rem',
  },
  content: {
    minHeight: 'calc(100vh - 4rem)',
    padding: '2rem',
  },
};

export function StructurePage() {
  const { hash } = useParams();
  const history = useHistory();
  const [activeItemKey, setActvieItemKey] = useState('summary');
  const structureData = initDb(hash);
  const structure = structureData.value();
  const structureFE = convertStructure(structure);
  const summaryData = structureFE.summary;
  const summaryQuantityData = structureFE.summaryQuantity;
  console.log(structure);
  if (!structure.hash) {
    message.error('找不到模型');
    history.replace('/');
  }

  const summaryColumns = [
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

  const summaryTableData = [];
  for (let i = 0; i < 6; i++) {
    summaryTableData.push({
      modeID: summaryData.mode.modeID[i],
      period: Math.round(summaryData.mode.period[i] * 100) / 100,
      angle: Math.round(summaryData.mode.angle[i]),
      factorX: Math.round(summaryData.mode.factorX[i]),
      factorY: Math.round(summaryData.mode.factorY[i]),
      factorZ: Math.round(summaryData.mode.factorZ[i]),
    });
  }

  const Summary = (
    <div>
      <Descriptions
        title="工程信息"
        bordered
        size="small"
        column={{ xs: 1, sm: 2 }}
        style={{ marginBottom: 20 }}
      >
        <Descriptions.Item label="工程路径" span={2}>
          {summaryData.project.dir}
        </Descriptions.Item>
        <Descriptions.Item label="工程名称">
          {summaryData.project.engineering}
        </Descriptions.Item>
        <Descriptions.Item label="计算日期">
          {summaryData.project.calDate}
        </Descriptions.Item>
        <Descriptions.Item label="软件名称">
          {summaryData.project.software}
        </Descriptions.Item>
        <Descriptions.Item label="软件版本">
          {summaryData.project.softwareVersion}
        </Descriptions.Item>
      </Descriptions>
      <Descriptions
        title="结构信息"
        bordered
        size="small"
        column={{ xs: 1, sm: 2 }}
        style={{ marginBottom: 20 }}
      >
        <Descriptions.Item label="结构体系">
          {summaryData.structures.system}
        </Descriptions.Item>
        <Descriptions.Item label="结构材料">
          {summaryData.structures.material}
        </Descriptions.Item>
        <Descriptions.Item label="楼层数">
          {summaryData.structures.storeys}
        </Descriptions.Item>
        <Descriptions.Item label="结构高度">
          {Math.round(summaryData.structures.height * 10) / 10}
        </Descriptions.Item>
        <Descriptions.Item label="地下室层数">
          {summaryData.structures.basement}
        </Descriptions.Item>
        <Descriptions.Item label="嵌固层">
          {summaryData.structures.constraintFloor}
        </Descriptions.Item>
        <Descriptions.Item label="地震烈度">
          {summaryData.structures.intensity}
        </Descriptions.Item>
        <Descriptions.Item label="修正后基本风压">
          {summaryData.structures.pressureModified}
        </Descriptions.Item>
        <Descriptions.Item label="刚性楼板假定">
          {summaryData.structures.rigidFloorAssumption}
        </Descriptions.Item>
        <Descriptions.Item label="周期折减系数">
          {summaryData.structures.periodReductionFactor}
        </Descriptions.Item>
      </Descriptions>
      <Descriptions
        title="质量"
        bordered
        size="small"
        column={{ xs: 1, sm: 2 }}
        style={{ marginBottom: 20 }}
      >
        <Descriptions.Item label="活载质量">
          {Math.round(summaryData.weight.live)}
        </Descriptions.Item>
        <Descriptions.Item label="附加质量">
          {Math.round(summaryData.weight.super)}
        </Descriptions.Item>
        <Descriptions.Item label="恒载质量">
          {Math.round(summaryData.weight.dead)}
        </Descriptions.Item>
        <Descriptions.Item label="总质量">
          {Math.round(summaryData.weight.sum)}
        </Descriptions.Item>
      </Descriptions>
      <Descriptions
        title="层间位移角"
        bordered
        size="small"
        column={{ xs: 1, sm: 2 }}
        style={{ marginBottom: 20 }}
      >
        <Descriptions.Item label="风荷载" span={2}>
          {}
        </Descriptions.Item>
        <Descriptions.Item label="X向">
          1 / {summaryData.drift.windX[0]}
        </Descriptions.Item>
        <Descriptions.Item label="楼层">
          {summaryData.drift.windX[1]}
        </Descriptions.Item>
        <Descriptions.Item label="Y向">
          1 / {summaryData.drift.windY[0]}
        </Descriptions.Item>
        <Descriptions.Item label="楼层">
          {summaryData.drift.windY[1]}
        </Descriptions.Item>
        <Descriptions.Item label="地震" span={2}>
          {}
        </Descriptions.Item>
        <Descriptions.Item label="X向">
          1 / {summaryData.drift.seismicX[0]}
        </Descriptions.Item>
        <Descriptions.Item label="楼层">
          {summaryData.drift.seismicX[1]}
        </Descriptions.Item>
        <Descriptions.Item label="Y向">
          1 / {summaryData.drift.seismicY[0]}
        </Descriptions.Item>
        <Descriptions.Item label="楼层">
          {summaryData.drift.seismicY[1]}
        </Descriptions.Item>
        <Descriptions.Item label="限值" span={2}>
          1 / {summaryData.drift.limit}
        </Descriptions.Item>
      </Descriptions>
      <Descriptions
        title="位移比"
        bordered
        size="small"
        column={{ xs: 1, sm: 2 }}
        style={{ marginBottom: 20 }}
      >
        <Descriptions.Item label="+偏心" span={2}>
          {}
        </Descriptions.Item>
        <Descriptions.Item label="X向">
          {summaryData.dispRatio.eccPX[0]}
        </Descriptions.Item>
        <Descriptions.Item label="楼层">
          {summaryData.dispRatio.eccPX[1]}
        </Descriptions.Item>
        <Descriptions.Item label="Y向">
          {summaryData.dispRatio.eccPY[0]}
        </Descriptions.Item>
        <Descriptions.Item label="楼层">
          {summaryData.dispRatio.eccPY[1]}
        </Descriptions.Item>
        <Descriptions.Item label="-偏心" span={2}>
          {}
        </Descriptions.Item>
        <Descriptions.Item label="X向">
          {summaryData.dispRatio.eccNX[0]}
        </Descriptions.Item>
        <Descriptions.Item label="楼层">
          {summaryData.dispRatio.eccNX[1]}
        </Descriptions.Item>
        <Descriptions.Item label="Y向">
          {summaryData.dispRatio.eccNY[0]}
        </Descriptions.Item>
        <Descriptions.Item label="楼层">
          {summaryData.dispRatio.eccNY[1]}
        </Descriptions.Item>
        <Descriptions.Item label="限值" span={2}>
          {summaryData.dispRatio.limit}
        </Descriptions.Item>
      </Descriptions>
      <Descriptions
        title="层间位移比"
        bordered
        size="small"
        column={{ xs: 1, sm: 2 }}
        style={{ marginBottom: 20 }}
      >
        <Descriptions.Item label="+偏心" span={2}>
          {}
        </Descriptions.Item>
        <Descriptions.Item label="X向">
          {summaryData.dispRatioStorey.eccPX[0]}
        </Descriptions.Item>
        <Descriptions.Item label="楼层">
          {summaryData.dispRatioStorey.eccPX[1]}
        </Descriptions.Item>
        <Descriptions.Item label="Y向">
          {summaryData.dispRatioStorey.eccPY[0]}
        </Descriptions.Item>
        <Descriptions.Item label="楼层">
          {summaryData.dispRatioStorey.eccPY[1]}
        </Descriptions.Item>
        <Descriptions.Item label="-偏心" span={2}>
          {}
        </Descriptions.Item>
        <Descriptions.Item label="X向">
          {summaryData.dispRatioStorey.eccNX[0]}
        </Descriptions.Item>
        <Descriptions.Item label="楼层">
          {summaryData.dispRatioStorey.eccNX[1]}
        </Descriptions.Item>
        <Descriptions.Item label="Y向">
          {summaryData.dispRatioStorey.eccNY[0]}
        </Descriptions.Item>
        <Descriptions.Item label="楼层">
          {summaryData.dispRatioStorey.eccNY[1]}
        </Descriptions.Item>
        <Descriptions.Item label="限值" span={2}>
          {summaryData.dispRatioStorey.limit}
        </Descriptions.Item>
      </Descriptions>
      <Descriptions
        title="剪重比"
        bordered
        size="small"
        column={{ xs: 1, sm: 2 }}
        style={{ marginBottom: 20 }}
      >
        <Descriptions.Item label="X向">
          {summaryData.shearWeightRatio.x}
        </Descriptions.Item>
        <Descriptions.Item label="限值">
          {summaryData.shearWeightRatio.xLimit}
        </Descriptions.Item>
        <Descriptions.Item label="Y向">
          {summaryData.shearWeightRatio.y}
        </Descriptions.Item>
        <Descriptions.Item label="限值">
          {summaryData.shearWeightRatio.yLimit}
        </Descriptions.Item>
      </Descriptions>
      <Descriptions
        title="刚重比"
        bordered
        size="small"
        column={{ xs: 1, sm: 2 }}
        style={{ marginBottom: 20 }}
      >
        <Descriptions.Item label="风荷载" span={2}>
          {}
        </Descriptions.Item>
        <Descriptions.Item label="X向">
          {summaryData.stiffWeightRatio.windX}
        </Descriptions.Item>
        <Descriptions.Item label="判断">
          {summaryData.stiffWeightRatio.windXCheck}
        </Descriptions.Item>
        <Descriptions.Item label="Y向">
          {summaryData.stiffWeightRatio.windY}
        </Descriptions.Item>
        <Descriptions.Item label="判断">
          {summaryData.stiffWeightRatio.windYCheck}
        </Descriptions.Item>
        <Descriptions.Item label="地震" span={2}>
          {}
        </Descriptions.Item>
        <Descriptions.Item label="X向">
          {summaryData.stiffWeightRatio.seismicX}
        </Descriptions.Item>
        <Descriptions.Item label="判断">
          {summaryData.stiffWeightRatio.seismicXCheck}
        </Descriptions.Item>
        <Descriptions.Item label="Y向">
          {summaryData.stiffWeightRatio.seismicY}
        </Descriptions.Item>
        <Descriptions.Item label="判断">
          {summaryData.stiffWeightRatio.seismicYCheck}
        </Descriptions.Item>
      </Descriptions>
      <Descriptions
        title="刚度比"
        bordered
        size="small"
        column={{ xs: 1, sm: 2 }}
        style={{ marginBottom: 20 }}
      >
        <Descriptions.Item label="X向">
          {summaryData.stiffRatio.x[0]}
        </Descriptions.Item>
        <Descriptions.Item label="楼层">
          {summaryData.stiffRatio.x[1]}
        </Descriptions.Item>
        <Descriptions.Item label="Y向">
          {summaryData.stiffRatio.y[0]}
        </Descriptions.Item>
        <Descriptions.Item label="楼层">
          {summaryData.stiffRatio.y[1]}
        </Descriptions.Item>
      </Descriptions>
      <Descriptions
        title="受剪承载力比"
        bordered
        size="small"
        column={{ xs: 1, sm: 2 }}
        style={{ marginBottom: 20 }}
      >
        <Descriptions.Item label="X向">
          {summaryData.shearCapacityRatio.x[0]}
        </Descriptions.Item>
        <Descriptions.Item label="楼层">
          {summaryData.shearCapacityRatio.x[1]}
        </Descriptions.Item>
        <Descriptions.Item label="Y向">
          {summaryData.shearCapacityRatio.y[0]}
        </Descriptions.Item>
        <Descriptions.Item label="楼层">
          {summaryData.shearCapacityRatio.y[1]}
        </Descriptions.Item>
      </Descriptions>
      <Descriptions title="动力特性" bordered size="small"></Descriptions>
      <Table
        columns={summaryColumns}
        dataSource={summaryTableData}
        bordered
        pagination={false}
        style={{ marginBottom: 20 }}
      />
      <Descriptions
        bordered
        size="small"
        column={{ xs: 1, sm: 3 }}
        style={{ marginBottom: 20 }}
      >
        <Descriptions.Item label="周期" span={3}>
          {}
        </Descriptions.Item>
        <Descriptions.Item label="周期比">
          {Math.round(summaryData.mode.periodRatio * 100) / 100}
        </Descriptions.Item>
        <Descriptions.Item label="判断">
          {summaryData.mode.periodRatioCheck}
        </Descriptions.Item>
        <Descriptions.Item label="振型数">
          {summaryData.mode.count}
        </Descriptions.Item>
        <Descriptions.Item label="振型质量参与系数" span={3}>
          {}
        </Descriptions.Item>
        <Descriptions.Item label="X向">
          {Math.round(summaryData.mode.sumX * 10) / 10}
        </Descriptions.Item>
        <Descriptions.Item label="Y向">
          {Math.round(summaryData.mode.sumY * 10) / 10}
        </Descriptions.Item>
        <Descriptions.Item label="Z向">
          {Math.round(summaryData.mode.sumZ * 10) / 10}
        </Descriptions.Item>
      </Descriptions>
      <Descriptions
        title="基底剪力"
        bordered
        size="small"
        column={{ xs: 1, sm: 2 }}
        style={{ marginBottom: 20 }}
      >
        <Descriptions.Item label="风荷载" span={2}>
          {}
        </Descriptions.Item>
        <Descriptions.Item label="X向">
          {Math.round(summaryData.baseShear.windX)}
        </Descriptions.Item>
        <Descriptions.Item label="Y向">
          {Math.round(summaryData.baseShear.windY)}
        </Descriptions.Item>
        <Descriptions.Item label="地震" span={2}>
          {}
        </Descriptions.Item>
        <Descriptions.Item label="X向">
          {Math.round(summaryData.baseShear.seismicX)}
        </Descriptions.Item>
        <Descriptions.Item label="Y向">
          {Math.round(summaryData.baseShear.seismicY)}
        </Descriptions.Item>
      </Descriptions>
      <Descriptions
        title="基底倾覆力矩"
        bordered
        size="small"
        column={{ xs: 1, sm: 2 }}
        style={{ marginBottom: 20 }}
      >
        <Descriptions.Item label="风荷载" span={2}>
          {}
        </Descriptions.Item>
        <Descriptions.Item label="X向">
          {Math.round(summaryData.baseMoment.windX)}
        </Descriptions.Item>
        <Descriptions.Item label="Y向">
          {Math.round(summaryData.baseMoment.windY)}
        </Descriptions.Item>
        <Descriptions.Item label="地震" span={2}>
          {}
        </Descriptions.Item>
        <Descriptions.Item label="X向">
          {Math.round(summaryData.baseMoment.seismicX)}
        </Descriptions.Item>
        <Descriptions.Item label="Y向">
          {Math.round(summaryData.baseMoment.seismicY)}
        </Descriptions.Item>
      </Descriptions>
    </div>
  );

  const summaryQuantityColumns = [
    {
      title: '分项',
      dataIndex: 'part',
    },
    {
      title: '墙',
      dataIndex: 'wall',
    },
    {
      title: '柱',
      dataIndex: 'column',
    },
    {
      title: '梁',
      dataIndex: 'beam',
    },
    {
      title: '板',
      dataIndex: 'floor',
    },
    {
      title: '合计',
      dataIndex: 'total',
    },
  ];

  const summaryQuantityTableData = [];
  summaryQuantityTableData.push(
    {
      part: '钢筋含量(kg/m^2)',
      wall: Math.round(summaryQuantityData.unitRebar.wall * 100) / 100,
      column: Math.round(summaryQuantityData.unitRebar.column * 100) / 100,
      beam: Math.round(summaryQuantityData.unitRebar.beam * 100) / 100,
      floor: Math.round(summaryQuantityData.unitRebar.floor * 100) / 100,
      total: Math.round(summaryQuantityData.unitRebar.total * 100) / 100,
    },
    {
      part: '砼含量(m^3/m^2)',
      wall: Math.round(summaryQuantityData.unitConcrete.wall * 100) / 100,
      column: Math.round(summaryQuantityData.unitConcrete.column * 100) / 100,
      beam: Math.round(summaryQuantityData.unitConcrete.beam * 100) / 100,
      floor: Math.round(summaryQuantityData.unitConcrete.floor * 100) / 100,
      total: Math.round(summaryQuantityData.unitConcrete.total * 100) / 100,
    },
    {
      part: '型钢含量(kg/m^2)',
      wall: Math.round(summaryQuantityData.unitSteel.wall * 100) / 100,
      column: Math.round(summaryQuantityData.unitSteel.column * 100) / 100,
      beam: Math.round(summaryQuantityData.unitSteel.beam * 100) / 100,
      floor: Math.round(summaryQuantityData.unitSteel.floor * 100) / 100,
      total: Math.round(summaryQuantityData.unitSteel.total * 100) / 100,
    },
    {
      part: '钢筋总量(t)',
      wall: Math.round(summaryQuantityData.rebar.wall / 1000),
      column: Math.round(summaryQuantityData.rebar.column / 1000),
      beam: Math.round(summaryQuantityData.rebar.beam / 1000),
      floor: Math.round(summaryQuantityData.rebar.floor / 1000),
      total: Math.round(summaryQuantityData.rebar.total / 1000),
    },
    {
      part: '砼总量(m^3)',
      wall: Math.round(summaryQuantityData.concrete.wall),
      column: Math.round(summaryQuantityData.concrete.column),
      beam: Math.round(summaryQuantityData.concrete.beam),
      floor: Math.round(summaryQuantityData.concrete.floor),
      total: Math.round(summaryQuantityData.concrete.total),
    },
    {
      part: '型钢总量(t)',
      wall: Math.round(summaryQuantityData.steel.wall),
      column: Math.round(summaryQuantityData.steel.column),
      beam: Math.round(summaryQuantityData.steel.beam),
      floor: Math.round(summaryQuantityData.steel.floor),
      total: Math.round(summaryQuantityData.steel.total),
    }
  );

  const SummaryQuantity = (
    <div>
      <Descriptions
        title="含钢量汇总"
        bordered
        size="small"
        column={{ xs: 1, sm: 1 }}
        style={{ marginBottom: 20 }}
      >
        <Descriptions.Item label="工程名称">
          {summaryQuantityData.structure.engineering}
        </Descriptions.Item>
        <Descriptions.Item label="结构高度(m)">
          {Math.round(summaryQuantityData.structure.height * 10) / 10}
        </Descriptions.Item>
        <Descriptions.Item label="结构面积(m^2)">
          {Math.round(summaryQuantityData.structure.area)}
        </Descriptions.Item>
        <Descriptions.Item label="结构周期(T1/T2/T3)">
          {summaryQuantityData.structure.period}
        </Descriptions.Item>
        <Descriptions.Item label="层间位移角(风/地震)">
          {summaryQuantityData.structure.drift}
        </Descriptions.Item>
        <Descriptions.Item label="底层墙厚(X/Y mm)">{}</Descriptions.Item>
        <Descriptions.Item label="底层柱截面(mm)">{}</Descriptions.Item>
      </Descriptions>
      <Table
        columns={summaryQuantityColumns}
        dataSource={summaryQuantityTableData}
        bordered
        pagination={false}
        style={{ marginBottom: 20 }}
      />
      <Descriptions
        title="材料价格参考"
        bordered
        size="small"
        column={{ xs: 1, sm: 1 }}
        style={{ marginBottom: 20 }}
      >
        <Descriptions.Item label="钢筋(元/t)">{6500}</Descriptions.Item>
        <Descriptions.Item label="砼(元/m^3)">{750}</Descriptions.Item>
        <Descriptions.Item label="钢材(元/t)">{13500}</Descriptions.Item>
        <Descriptions.Item label="型钢(元/t)">{10000}</Descriptions.Item>
        <Descriptions.Item label="压型钢板(元/m^2)">{65.7}</Descriptions.Item>
      </Descriptions>
    </div>
  );

  const dataMapping = {
    summary: () => {
      return Summary;
    },
    summaryQuantity: () => {
      return SummaryQuantity;
    },
  };

  return (
    <React.Fragment>
      <Layout>
        <Layout.Sider>
          <Menu
            mode="inline"
            defaultSelectedKeys={[activeItemKey]}
            style={{ height: '100%' }}
            onSelect={({ _, key }) => {
              setActvieItemKey(key as string);
            }}
          >
            <Menu.Item key="summary">汇总信息</Menu.Item>
            <Menu.Item key="summaryQuantity">含钢量汇总</Menu.Item>
            <Menu.Item key="parameters">计算参数</Menu.Item>
            <Menu.Item key="period">周期</Menu.Item>
            <Menu.Item key="force">内力</Menu.Item>
            <Menu.Item key="drift">位移角</Menu.Item>
            <Menu.Item key="generalResult">整体验算结果</Menu.Item>
            <Menu.Item key="distributeResult">楼层分布数据</Menu.Item>
            <Menu.Item key="factor">调整系数</Menu.Item>
            <Menu.Item key="quantity">工程量</Menu.Item>
          </Menu>
        </Layout.Sider>
        <Layout.Content style={styles.content}>
          <Breadcrumb style={{ marginBottom: '1rem' }}>
            <Breadcrumb.Item>
              <a onClick={() => history.replace('/structures')}>我的结构</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>{hash.slice(0, 7)}</Breadcrumb.Item>
          </Breadcrumb>
          <div style={styles.container}>{dataMapping[activeItemKey]()}</div>
        </Layout.Content>
      </Layout>
    </React.Fragment>
  );
}
