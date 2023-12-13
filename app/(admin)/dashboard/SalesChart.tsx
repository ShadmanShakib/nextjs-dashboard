import { AreaChart, Card, Title } from "@tremor/react";

const chartdata = [
  {
    date: "Jan 22",
    SemiAnalysis: 2890,
  },
  {
    date: "Feb 22",
    SemiAnalysis: 2756,
  },
  {
    date: "Mar 22",
    SemiAnalysis: 3322,
  },
  {
    date: "Apr 22",
    SemiAnalysis: 3470,
  },
  {
    date: "May 22",
    SemiAnalysis: 3475,
  },
  {
    date: "Jun 22",
    SemiAnalysis: 3129,
  },
];

const valueFormatter = function (number: number) {
  return "$ " + new Intl.NumberFormat("us").format(number).toString();
};

const SalesChart = () => (
  <Card>
    <Title>Sales Revenuse over time (USD)</Title>
    <AreaChart
      className="h-72 mt-4"
      data={chartdata}
      index="date"
      categories={["SemiAnalysis"]}
      colors={["indigo", "cyan"]}
      valueFormatter={valueFormatter}
    />
  </Card>
);

export default SalesChart;
