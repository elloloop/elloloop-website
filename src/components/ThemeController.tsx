import React from 'react';
import { ThemeProvider, ThemeToggle } from '@refraction-ui/react';

export default function ThemeController() {
  return (
    <ThemeProvider>
      <ThemeToggle variant="dropdown" />
    </ThemeProvider>
  );
}
