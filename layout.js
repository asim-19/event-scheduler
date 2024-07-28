"use client";
// app/layout.js
import './globals.css';  // Import global CSS
import { store } from './store/store';
import { Provider } from 'react-redux';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Event Scheduler</title>
      </head>
      <body>
        <Provider store={store}>
          <div className="container">
            {children}
          </div>
        </Provider>
      </body>
    </html>
  );
}

