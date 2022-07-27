import React from "react";
import ContentLoader from "react-content-loader";

type PizzaSkeletonProps = object;

const PizzaSkeleton: React.FC<PizzaSkeletonProps> = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={491}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="135" cy="135" r="125" />
    <rect x="0" y="279" rx="10" ry="10" width="280" height="23" />
    <rect x="0" y="315" rx="10" ry="10" width="280" height="88" />
    <rect x="0" y="415" rx="10" ry="10" width="95" height="30" />
    <rect x="125" y="410" rx="24" ry="24" width="152" height="45" />
  </ContentLoader>
);

export default PizzaSkeleton;
