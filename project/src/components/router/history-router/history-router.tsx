import type { BrowserHistory } from 'history';
import { ReactNode, useLayoutEffect, useState } from 'react';
import { Router } from 'react-router-dom';

type PropsType = {
  history: BrowserHistory;
  basename?: string;
  children?: ReactNode;
};

const HistoryRouter = ({ history, basename, children }: PropsType) => {
  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  });

  useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <Router
      navigationType={state.action}
      navigator={history}
      basename={basename}
      location={state.location}
    >
      {children}
    </Router>
  );
};

export default HistoryRouter;
