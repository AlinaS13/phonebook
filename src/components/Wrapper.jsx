import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Navigaion from './navigation/Navigation';

export const Wrapper = () => {
  return (
    <>
      <Navigaion />
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Wrapper;
