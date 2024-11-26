import React from 'react';
import { Col, Row } from 'react-bootstrap';
import WidgetSectionTitle from './WidgetSectionTitle';
import StatisticsCards from 'components/dashboards/optistate/stats-cards/StatisticsCards';
import WeeklySales from 'components/dashboards/default/WeeklySales';
import TotalOrder from 'components/dashboards/default/TotalOrder';
import MarketShare from 'components/dashboards/default/MarketShare';

import ProductShare from 'components/dashboards/dash1/ProductShare/ProductShare';
import {
  marketShare,
  totalOrder,
  totalSales,
  weeklySalesData,
  storageStatus,
  topProducts
} from 'data/dashboard/default';
import {
  payment,
  activeUser,
  grossRevenue,
  candleChartData
} from 'data/dashboard/saas';
import { saleItems, totalSale } from 'data/dashboard/ecom';

import {
  audienceChart,
  realTimeUsers,
  sessionByBrowser,
  sessionByCountry
} from 'data/dashboard/analytics';
import {} from 'data/dashboard/projectManagement';
import { countryData } from 'data/countryData';
import StorageStatus from 'components/dashboards/default/StorageStatus';
import SaasActiveUser from 'components/dashboards/optistate/SaasActiveUser';
import SaasRevenue from 'components/dashboards/optistate/SaasRevenue';
import SaasConversion from 'components/dashboards/optistate/SaasConversion';
import EcomStat from 'components/dashboards/dash1/EcomStat';
import LinePayment from 'components/dashboards/optistate/line-payment/LinePayment';
import BandwidthSaved from 'components/dashboards/default/BandwidthSaved';
import RealTimeUsers from 'components/dashboards/dash2/real-time-users/RealTimeUsers';
import TopProducts from 'components/dashboards/default/TopProducts';
import TotalSales from 'components/dashboards/default/TotalSales';
import TotalSalesEcommerce from 'components/dashboards/dash1/totalsales/TotalSales';
import Audience from 'components/dashboards/dash2/audience/Audience';
import SessionByBrowser from 'components/dashboards/dash2/session-by-browser/SessionByBrowser';
import UsersByCountry from 'components/dashboards/dash2/users-by-country/UsersByCountry';
import ActiveUsers from 'components/dashboards/dash2/active-users/ActiveUsers';
import Stats from 'components/dashboards/dash2/stats/Stats';
import BounceRate from 'components/dashboards/dash2/bounce-rate/BounceRate';
import UsersAtTime from 'components/dashboards/dash2/users-at-a-time/UsersAtTime';
import TrafficSource from 'components/dashboards/dash2/traffic-source/TrafficSource';
import ReturningCustomer from 'components/dashboards/dash1/ReturningCustomer/ReturningCustomer';
import SalesPosLocation from 'components/dashboards/dash1/SalesPosLocation/SalesPosLocation';
import ShoppingCart from 'components/dashboards/dash1/ShoppingCart';
import GrossRevenue from 'components/dashboards/optistate/gross-revenue/GrossRevenue';
import CandleChart from 'components/dashboards/optistate/candle-chart/CandleChart';

const NumberStatsAndChart = () => {
  return (
    <>
      <WidgetSectionTitle
        icon="percentage"
        title="Number Stats & Charts"
        subtitle="You can easily show your stats content by using these cards."
        transform="shrink-2"
        className="mb-4 mt-3"
      />
      <StatisticsCards />
      <Row className="g-3 mb-3">
        <Col md={6} lg={4} xl={6} xxl={4}>
          <WeeklySales data={weeklySalesData} />
        </Col>
        <Col md={6} lg={4} xl={6} xxl={4}>
          <TotalOrder data={totalOrder} />
        </Col>
        <Col md={6} lg={4} xl={6} xxl={4}>
          <MarketShare data={marketShare} radius={['100%', '87%']} />
        </Col>
        <Col md={6} lg={4} xl={6} xxl={4}>
          <ProductShare />
        </Col>
        <Col lg={8} xl={12} xxl={8}>
          <StorageStatus className="h-lg-100" data={storageStatus} />
        </Col>
      </Row>
      <Row className="g-3 mb-3">
        <Col md={4}>
          <SaasActiveUser data={activeUser} />
        </Col>
        <Col md={4}>
          <SaasRevenue />
        </Col>
        <Col md={4}>
          <SaasConversion />
        </Col>
      </Row>
      <EcomStat data={saleItems} />
      <Row className="g-3 mb-3">
        <Col xxl={8}>
          <LinePayment data={payment} />
        </Col>
        <Col md={6} xxl={4}>
          <BandwidthSaved bodyClassName="mt-md-8 mt-xxl-0" />
        </Col>
        <Col md={6} xxl={4}>
          <RealTimeUsers data={realTimeUsers} />
        </Col>
        <Col xxl={8}>
          <div className="mb-3">
            <TopProducts data={topProducts} />
          </div>
          <div>
            <TotalSales data={totalSales} />
          </div>
        </Col>
      </Row>
      <Row className="g-3 mb-3">
        <Col xxl={8}>
          <Audience chartData={audienceChart} className="h-100" />
        </Col>
        <Col md={6} xxl={4}>
          <SessionByBrowser data={sessionByBrowser} />
        </Col>
        <Col md={6} xxl={4}>
          <UsersByCountry chartData={sessionByCountry} mapData={countryData} />
        </Col>
        <Col xxl={8}>
          <ActiveUsers className="mb-3" />
          <Stats />
        </Col>
      </Row>
      <Row className="g-3 mb-3">
        <Col xs={12} md={6} xxl={4}>
          <BounceRate className="h-100" />
        </Col>
        <Col xs={12} md={6} xxl={{ span: 4, order: 1 }}>
          <UsersAtTime />
        </Col>
        <Col xs={12} xxl={8}>
          <TrafficSource />
        </Col>
        <Col md={6} xxl={{ span: 4, order: 1 }}>
          <ReturningCustomer />
        </Col>
        <Col md={6} xxl={{ span: 4, order: 1 }}>
          <SalesPosLocation className="h-100" />
        </Col>
      </Row>
      <Row className="g-3 mb-3">
        <Col xxl={8}>
          <TotalSalesEcommerce data={totalSale} />
        </Col>
        <Col xxl={4} md={6}>
          <ShoppingCart />
        </Col>
        <Col xxl={4} md={6}>
          <GrossRevenue data={grossRevenue} />
        </Col>
        <Col xxl={8}>
          <ProjectStatistics
            progressBar={progressBar}
            projectsTable={projectsTable}
            projectUsers={projectUsers}
          />
        </Col>
        <Col>
          <CandleChart data={candleChartData} />
        </Col>
      </Row>
    </>
  );
};

export default NumberStatsAndChart;
