// dialogService.ts

const BASE_API_URL = 'https://api.dialog.lk'; // Example API base URL

export const reloadSIM = async (mobileNumber: string, amount: string, pin: string) => {
  try {
    const response = await fetch(`${BASE_API_URL}/reload`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        mobileNumber,
        amount,
        pin,
      }),
    });

    if (!response.ok) {
      throw new Error('Error reloading SIM');
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};
