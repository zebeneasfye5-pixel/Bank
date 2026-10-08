export type Language = 'am' | 'en';

export interface Account {
  id: string;
  name: string;
  nameAm: string;
  bankName: string;
  accountNumber: string;
  balance: number;
  currency: string;
  cardColor: string;
  type: 'checking' | 'savings' | 'wallet' | 'cash';
}

export type TransactionType = 'transfer' | 'expense' | 'income' | 'bill';

export interface Transaction {
  id: string;
  type: TransactionType;
  title: string;
  titleAm: string;
  amount: number;
  currency: string;
  date: string;
  category: string;
  categoryAm: string;
  fromAccountId: string;
  toAccountId?: string;
  recipientName?: string;
  recipientAccount?: string;
  recipientBank?: string;
  status: 'completed' | 'pending';
  referenceNo: string;
  note?: string;
}

export interface BudgetCategory {
  id: string;
  category: string;
  categoryAm: string;
  allocated: number;
  spent: number;
  color: string;
}

export interface Contact {
  id: string;
  name: string;
  bank: string;
  accountNumber: string;
  avatar: string;
}

export interface BankSyncStatus {
  isConnected: boolean;
  lastSynced: string;
  syncIntervalSec: number;
  mode: 'realtime' | 'manual';
}
