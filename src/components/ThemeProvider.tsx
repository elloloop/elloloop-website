import React from 'react';
import { ThemeProvider as RefractionThemeProvider } from '@refraction-ui/react';

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <RefractionThemeProvider>{children}</RefractionThemeProvider>;
}
