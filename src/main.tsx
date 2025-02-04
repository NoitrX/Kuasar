import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { AuthProvider } from "./components/Auth/AuthContext.tsx";
import { ApolloProvider } from "@apollo/client";
import client from "./utils/apollo.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ApolloProvider>
  </StrictMode>
);
