"use client";

import {
  Card,
  Grid,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  Text,
  Title,
} from "@tremor/react";
import SalesChart from "./SalesChart";
import NewCustomer from "./NewCustomers";
import TopSection from "./TopSection";
import CostChart from "./CostChart";

export default function DashboardExample() {
  return (
    <main className="p-5">
      <Title>Dashboard</Title>
      <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</Text>

      <TabGroup className="mt-6">
        <TabList>
          <Tab>Overview</Tab>
          <Tab>Detail</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <TopSection />
            <div className="mt-6">
              <SalesChart />
              <div className="mt-6 flex space-x-6">
                <NewCustomer />
                <CostChart />
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="mt-6">
              <Card>
                <div className="h-96" />
              </Card>
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </main>
  );
}
