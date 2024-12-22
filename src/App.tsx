import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HotelsList from './pages/HotelList';
import HotelDetails from './pages/HotelDetail';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import ErrorHandler from './components/ErrorHandler';

const App = () => {

  const renderFallback = ({ error }: FallbackProps) => (
    <ErrorHandler errorMessage={error?.message || 'Something went wrong'} />
  );
  return (
    <Router>
      <ErrorBoundary fallbackRender={renderFallback}>
      <Routes>
        <Route path="/hotels" element={<HotelsList />} />
        <Route path="/hotels/:id" element={<HotelDetails/>} />
        <Route path="*" element={<Navigate to="/hotels" />} />
      </Routes>
      </ErrorBoundary>
    </Router>
  );
};

export default App;
