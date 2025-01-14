import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { LoadingSpinner } from './components/LoadingSpinner';

const HomePage = React.lazy(() => import('./pages/HomePage'));
const DishDetailPage = React.lazy(() => import('./pages/DishDetailPage'));

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu/:dishId" element={<DishDetailPage />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;