import './App.css';
import { HashRouter } from "react-router-dom";
import AppContainer from './components/layouts/appcontainer';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import 'bootstrap/dist/css/bootstrap.min.css';

const queryClient = new QueryClient();


function App() {
  return (
      <QueryClientProvider client={queryClient}>
        <HashRouter>
          <AppContainer />
        </HashRouter>
      </QueryClientProvider>
  );
}

export default App;