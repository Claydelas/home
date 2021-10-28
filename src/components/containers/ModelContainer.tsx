import { forwardRef, ReactNode } from 'react';

export const ModelContainer = forwardRef<
  HTMLDivElement,
  { children?: ReactNode }
>(function container({ children }, ref) {
  return (
    <div className='w-64 h-64 mx-auto mb-5' ref={ref}>
      {children}
    </div>
  );
});

export default ModelContainer;
