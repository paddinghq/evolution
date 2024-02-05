import LandingPage from './LandingPage'
import { Provider } from "react-redux";
import store from './Redux/store';

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
