import { Audio, LineWave } from 'react-loader-spinner';
function CustomLoader() {
  return (
    <LineWave
      visible={true}
      height="100"
      width="100"
      color="primary"
      ariaLabel="line-wave-loading"
      wrapperStyle={{}}
      wrapperClass=""
      firstLineColor=""
      middleLineColor=""
      lastLineColor=""
    />
  );
}

export default CustomLoader;
