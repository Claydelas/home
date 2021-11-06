import { useTheme } from 'next-themes';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';

const ModelLoader = dynamic(import('@/components/Model'), {
  ssr: false,
});

function Loader() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className='absolute left-1/2 top-1/2'>
      {mounted && (
        <ClimbingBoxLoader
          color={`${resolvedTheme === 'dark' ? '#f0e7db' : '#202023'}`}
        />
      )}
    </div>
  );
}

export default function ModelContainer() {
  const [loading, setLoading] = useState(true);
  return (
    <div className='w-64 h-64 mx-auto my-5 relative'>
      {loading && <Loader />}
      <ModelLoader setLoading={setLoading} />
    </div>
  );
}
