import { createContext, useContext } from 'react';

interface FlyOutContextType {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export const FlyoutContext = createContext<FlyOutContextType | undefined>(undefined);

export function useFlyoutContext() {
  const context = useContext(FlyoutContext);
  if (!context) {
    throw new Error('Menu compound components must be used within Menu component');
  }
  return context;
}
