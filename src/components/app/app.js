import { GlobalStyle } from "./styles";
import PageWrapper from "./../layout/page-wrapper/page-wrapper";
import starList from "../../mocks/starList";
import gallery from "../../mocks/gallery";
import buyOptions from './../../mocks/buyOptions';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AppRoute } from './../../const';
import MainPage from "../pages/main-page/main-page";
import BuyPage from "../pages/buy-page/buy-page";
import ScrollTop from './../ui/scroll-top/scroll-top';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <ScrollTop />
        <Switch>
          <Route exact path={AppRoute.MAIN}>
            <PageWrapper pageUrl={AppRoute.MAIN}>
              <MainPage stars={starList} />
            </PageWrapper>
          </Route>
          <Route exact path={AppRoute.BUY}>
            <PageWrapper pageUrl={AppRoute.BUY}>
              <BuyPage gallery={gallery} buyOptions={buyOptions} />
            </PageWrapper>
          </Route>
        </Switch>
      </Router>
      
    </>
  );
}

export default App;
