import { ProgressBar } from 'react-loader-spinner';

export function Loader() {
  return (
    <ProgressBar
      height="150"
      width="150"
      ariaLabel="progress-bar-loading"
      wrapperStyle={{
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
      wrapperClass="progress-bar-wrapper"
      borderColor="#d6d6d6"
      barColor="#ff6f00"
    />
  );
}
