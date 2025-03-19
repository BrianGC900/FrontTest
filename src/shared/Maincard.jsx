import { Card, CardContent, CardHeader, Divider, Typography, useTheme } from '@mui/material';
import { forwardRef } from 'react';

import Highlighter from '../third-party/Highlighter';
import { ThemeMode } from '../utils/config';

const headerSX = {
  p: 2.5,
  '& .MuiCardHeader-action': { m: '0px auto', alignSelf: 'center' }
};

const MainCard = forwardRef(function MainCard(
  {
    border = true,
    boxShadow,
    children,
    subheader,
    content = true,
    contentSX = {},
    darkTitle,
    divider = true,
    elevation,
    secondary,
    shadow,
    sx = {},
    title,
    codeHighlight = false,
    codeString,
    modal = false,
    ...others
  },
  ref
) {
  const theme = useTheme();
  const mode = theme.palette.mode;
  boxShadow = mode === ThemeMode.DARK ? boxShadow || true : boxShadow;

  return (
    <Card
      elevation={elevation || 0}
      sx={{
        position: 'relative',
        border: border ? '1px solid' : 'none',
        borderRadius: 1,
        borderColor: mode === ThemeMode.DARK ? 'divider' : 'grey.A800',
        boxShadow: boxShadow && (!border || mode === ThemeMode.DARK) ? shadow || theme.customShadows.z1 : 'inherit',
        ':hover': {
          boxShadow: boxShadow ? shadow || theme.customShadows.z1 : 'inherit'
        },
        ...(mode === ThemeMode.DARK && {
          backgroundImage: 'none'
        }),
        ...(codeHighlight && {
          '& pre': {
            margin: 0,
            padding: '12px !important',
            fontFamily: theme.typography.fontFamily,
            fontSize: '0.75rem'
          }
        }),
        ...(modal && {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: { xs: `calc( 100% - 50px)`, sm: 'auto' },
          '& .MuiCardContent-root': {
            overflowY: 'auto',
            minHeight: 'auto',
            maxHeight: `calc(100vh - 200px)`
          }
        }),
        ...sx
      }}
      ref={ref}
      {...others}
    >
      {/* card header and action */}
      {!darkTitle && title && (
        <CardHeader sx={headerSX} titleTypographyProps={{ variant: 'subtitle1' }} title={title} action={secondary} subheader={subheader} />
      )}
      {darkTitle && title && <CardHeader sx={headerSX} title={<Typography variant="h4">{title}</Typography>} action={secondary} />}

      {/* content & header divider */}
      {title && divider && <Divider />}

      {/* card content */}
      {content && <CardContent sx={contentSX}>{children}</CardContent>}
      {!content && children}

      {/* card footer - clipboard & highlighter  */}
      {codeString && (
        <>
          <Divider sx={{ borderStyle: 'dashed' }} />
          <Highlighter codeString={codeString} codeHighlight={codeHighlight} />
        </>
      )}
    </Card>
  );
});

export default MainCard;
