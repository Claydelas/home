import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import dynamic from 'next/dynamic';

const ModelLoader = dynamic(import('@/components/Model'), {
  ssr: false,
  loading: () => <Loader />,
});

function Loader() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className='absolute left-1/2 top-1/2'>
      {mounted && (
        <ClimbingBoxLoader
          color={`${theme === 'dark' ? '#f0e7db' : '#202023'}`}
        />
      )}
    </div>
  );
}

export default function ModelContainer() {
  return (
    <div className='w-64 h-64 mx-auto mb-5 relative'>
      <ModelLoader />
    </div>
  );
}
