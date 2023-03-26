import { useMediaQuery } from '@chakra-ui/react';
import { useDebounce } from 'use-debounce';
import Spline from '@splinetool/react-spline';
import { useState } from 'react';

export default function SplineAnimation() {
  const [isLargerthan668] = useMediaQuery('(min-width: 668px)');
  const [loading, setLoading] = useState(true);
  const onLoad = () => {
    setLoading(false);
  };
  // workarouond to avoid the blinking effect when Spline loads
  const [opacity] = useDebounce(loading ? 0 : 1, 200);

  return (
    <>
      {
        isLargerthan668 ? (
          <Spline
            onLoad={onLoad}
            scene="https://prod.spline.design/7cURyV575C6gPenr/scene.splinecode"
            style={{
              height: '500px',
              marginRight: 'auto',
              marginLeft: 'auto',
              opacity: opacity,
            }}
          />
        ) : null
        // <div className="absolute inset-x-0 bottom-0 mx-0 h-[60vh]">
        //   <Spline scene="https://prod.spline.design/WWzUIC5QmE1ufvus/scene.splinecode" />
        // </div>
      }
    </>
  );
}
