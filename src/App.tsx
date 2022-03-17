import { useState } from "react"; 
import Modal from 'react-modal';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header/index";
import {NewTransactionModal} from './components/NewTransactionModal';
import { TransactionsProvider } from "./hooks/useTransactions";

import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root');

export function App() {
  const [ isNewTransactionModalOpen, setNewTransactionModal] = useState(false);

  function handleNewTransactionModalOpen() { 
    setNewTransactionModal(true);
  }

  function handleNewTransactionModalClose() {
    setNewTransactionModal(false);
  }
  return (
    <TransactionsProvider>
      <Header onOpenTransactionModal={handleNewTransactionModalOpen}  />

      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleNewTransactionModalClose}
      />

      
      <GlobalStyle />
      
    </TransactionsProvider>
  );
}

