import LandingPage from './LandingPage'
import { Provider } from 'react-redux';
import {store }from './../lib/Store';

export default function Home() {
  return (
    <Provider store={store}>
      <div className="hidden lg:block">
        <LandingPage />
      </div>
      <div className="block lg:hidden">
        mobile & tab design is not ready yet
      </div>
    </Provider>
  )
}
