// hooks/useDialogReload.ts

import * as Linking from 'expo-linking';
import { useDialogContext } from '../store/dialogContext'; // Use context for state

export const useDialogReload = () => {
  const { balance, setBalance } = useDialogContext(); // Now you can use balance and setBalance from context

  const reloadDialog = (mobileNumber: string, amount: string, pin: string) => {
    const ussdCode = `tel:*369*1*${mobileNumber}*${amount}*${pin}%23`;
    Linking.openURL(ussdCode)
      .then(() => {
        // Parse amount and ensure it's a valid number
        const parsedAmount = parseFloat(amount);
        if (!isNaN(parsedAmount)) {
          // Update balance by adding the parsedAmount to the current balance
          setBalance(balance + parsedAmount); // Update balance
        } else {
          console.error('Invalid amount, unable to update balance.');
        }
      })
      .catch((err) => {
        console.error('Error initiating USSD call:', err);
      });
  };

  return { reloadDialog };
};
