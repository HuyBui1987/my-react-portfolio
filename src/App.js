import { lazy, Suspense } from 'react';
import Pre from './components/UIElements/Pre';
const PortfolioContainer = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('./components/PortfolioContainer')), 1500);
  });
});

const App = () => {
  return (
    <div className="App">
      <Suspense fallback={<Pre />}>
        <PortfolioContainer />
      </Suspense>
    </div>
  );
};

export default App;
