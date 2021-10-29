import { useMediaQuery } from "react-responsive";
import { device } from "../common/deviceSizes";

const useDeviceSizes = () => {
  //CONDITIONS

  const isMobileDevice = useMediaQuery({
    query: device.mobile,
  });

  const isTabletDevice = useMediaQuery({
    query: device.tablet,
  });

  const isdescDevice = useMediaQuery({
    query: device.desc,
  });

  return { isMobileDevice, isTabletDevice, isdescDevice };
};

export default useDeviceSizes;
