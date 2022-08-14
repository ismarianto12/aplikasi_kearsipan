import logo from './logo.svg';
import { Suspense } from 'react';
import Skeleton from 'react-loading-skeleton';
import { Container, Public } from './components/container';
import { getItem } from './components/helpers';

function App() {
  const isAuthenticated = getItem('nama')
  console.log(isAuthenticated.length)
  return (
    <>
      <Suspense fallback={<Skeleton width={'100%'} height={'100%'} />} >
        {isAuthenticated.length !== 0 ?
          <Container /> : <Public />}
      </Suspense>
    </>
  );
}

export default App;
