import { useState } from 'react';

interface useMailerLiteSubscriptionOptions {
  groupId?: string;
  signup_source?: string;
}

interface SubscriptionState {
  status: 'idle' | 'loading' | 'success' | 'error';
  message: string;
  isLoading: boolean;
  errorType?: string;
}

export function useMailerLiteSubscription({
  groupId,
  signup_source,
}: useMailerLiteSubscriptionOptions) {
  const [state, setState] = useState<SubscriptionState>({
    status: 'idle',
    message: '',
    isLoading: false,
  });

  const subscribe = async (email: string) => {
    if (!email.trim()) {
      setState({
        status: 'error',
        message: 'Email is required',
        isLoading: false,
        errorType: 'VALIDATION_ERROR',
      });
      return false;
    }

    setState({
      status: 'loading',
      message: '',
      isLoading: true,
    });

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), groupId, signup_source }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setState({
          status: 'success',
          message: data.message || 'Successfully subscribed!',
          isLoading: false,
        });
        return true;
      } else {
        setState({
          status: 'error',
          message: data.message || 'Failed to subscribe',
          isLoading: false,
          errorType: data.error,
        });
        return false;
      }
    } catch {
      setState({
        status: 'error',
        message: 'Network error. Please check your connection.',
        errorType: 'NETWORK_ERROR',
        isLoading: false,
      });
      return false;
    }
  };

  const reset = () => {
    setState({
      status: 'idle',
      message: '',
      isLoading: false,
    });
  };

  return {
    ...state,
    subscribe,
    reset,
  };
}
