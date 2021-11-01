import { ReactNode, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@material-ui/core/CssBaseline'
import Header from '../modules/Header';
import Footer from '../modules/Footer';
import Container from '@mui/material/Container';

export interface IHeaderFooterLayout {
	children?: ReactNode | null,
	hideFooter?: boolean,
	hideHeader?: boolean
}

const qoverTheme = createTheme();

const HeaderFooterLayout = ({ children, hideFooter, hideHeader }: IHeaderFooterLayout) => {
	useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    jssStyles?.parentElement?.removeChild(jssStyles);
  }, []);
	return (
		<>
			<ThemeProvider theme={qoverTheme}>
				<CssBaseline />
				{!hideHeader && <Header />}
				<Container sx={{ flex: 1, height: '100vh', display: 'flex' }} maxWidth={false}>
				{children}
				</Container>
				{!hideFooter && <Footer />}
				<style jsx global>{`
        #__next {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          background-image: linear-gradient(122deg, #317bda -6%, #33c3c8);
        }
      `}</style>	
			</ThemeProvider>
		</>
	);
}

export default HeaderFooterLayout;
