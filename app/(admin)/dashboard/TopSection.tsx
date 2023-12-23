import React from "react";
import {
  Card,
  Grid,
  Flex,
  Text,
  BadgeDelta,
  Metric,
  ProgressBar,
} from "@tremor/react";

type Props = {};

const TopSection = (props: Props) => {
  return (
    <div>
      <Grid numItemsMd={2} numItemsLg={3} className="gap-6 mt-6">
        <Card className="max-w-sm">
          <Flex justifyContent="between" alignItems="center">
            <Text>Sales</Text>
            <BadgeDelta
              deltaType="moderateIncrease"
              isIncreasePositive={true}
              size="xs"
            >
              +12.3%
            </BadgeDelta>
          </Flex>
          <Metric>$ 23,456</Metric>
        </Card>
        <Card className="max-w-sm">
          <Flex justifyContent="between" alignItems="center">
            <Text>New customers</Text>
            <BadgeDelta
              deltaType="moderateIncrease"
              isIncreasePositive={true}
              size="xs"
            >
              +56.3%
            </BadgeDelta>
          </Flex>
          <Metric>345</Metric>
        </Card>
        <Card className="max-w-sm">
          <Flex justifyContent="between" alignItems="center">
            <Text>Profits</Text>
            <BadgeDelta
              deltaType="moderateIncrease"
              isIncreasePositive={true}
              size="xs"
            >
              +32.3%
            </BadgeDelta>
          </Flex>
          <Metric>$ 5,456</Metric>
        </Card>
      </Grid>
    </div>
  );
};

export default TopSection;
