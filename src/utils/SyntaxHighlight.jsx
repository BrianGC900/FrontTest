import { useTheme } from '@mui/material';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark, a11yLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function SyntaxHighlight({ children, ...others }) {
  const theme = useTheme();
  const mode = theme.palette.mode;

  return (
    <SyntaxHighlighter language="javascript" showLineNumbers style={mode === ThemeMode.DARK ? a11yLight : a11yDark} {...others}>
      {children}
    </SyntaxHighlighter>
  );
}
