import { Skeleton } from "antd";

function SkeletonLoader() {
  return <Skeleton active paragraph={{ rows: 10, width: '100%' }}/>;
}
export default SkeletonLoader;
