import './App.css';
import { HashRouter } from "react-router-dom";
import Container from './components/layouts/container';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();


function App() {
  return (
      <QueryClientProvider client={queryClient}>
        <HashRouter>
          <Container />
        </HashRouter>
      </QueryClientProvider>
  );
}

export default App;