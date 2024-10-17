'use client';

import Loader from 'nextjs-toploader';
import { usePathname } from 'next/navigation';
import NProgress from 'nprogress';
import { useEffect } from 'react';

export const NextTopLoader = () => {
  const pathname = usePathname();

  useEffect(() => {
    NProgress.done();
  }, [pathname]);

  return (
    <Loader color='#f97970'/>
  )
}

export default NextTopLoader