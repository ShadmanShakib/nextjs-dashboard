import { AreaChart, Card, Title } from "@tremor/react";

const chartdata = [
  {
    date: "Jan 22",
    mrr: 890,
  },
  {
    date: "Feb 22",
    mrr: 956,
  },
  {
    date: "Mar 22",
    mrr: 1022,
  },
  {
    date: "Apr 22",
    mrr: 1170,
  },
  {
    date: "May 22",
    mrr: 1275,
  },
  {
    date: "Jun 22",
    mrr: 1429,
  },
];

const valueFormatter = function (number: number) {
  return "$ " + new Intl.NumberFormat("us").format(number).toString();
};

const SalesChart = () => (
  <Card>
    <Title>Monthly Recurring Revenue(USD)</Title>
    <AreaChart
      className="h-72 mt-4 "
      data={chartdata}
      index="date"
      categories={["mrr"]}
      colors={["indigo"]}
      valueFormatter={valueFormatter}
    />
  </Card>
);

export default SalesChart;
