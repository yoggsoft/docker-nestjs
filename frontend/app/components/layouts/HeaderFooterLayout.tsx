import { ReactNode, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@material-ui/core/CssBaseline'
import Head from 'next/head'
import Header from '../modules/Header';
import Footer from '../modules/Footer';
import Container from '@mui/material/Container';
import { ClassNameMap, makeStyles } from '@mui/styles';
import classNames from 'classnames';

const useStyles = makeStyles({
	root: {
		minHeight: '100vh',
		display: 'flex',
		flexDirection: 'column',
		backgroundColor: 'rgba(72, 72, 72, 0.05)',
		backgroundImage: 'linear-gradient(122deg, #317bda -6%, #33c3c8)'
	}
});

export interface IHeaderFooterLayout {
	children?: ReactNode | null,
	showFooter?: boolean,
	showHeader?: boolean,
	bgColor?:string | undefined,
	bgImage?: string | undefined
	backgroundProps?: {}
}

const qoverTheme = createTheme();

const HeaderFooterLayout = ({
	children,
	showFooter,
	showHeader,
	backgroundProps
}: IHeaderFooterLayout) => {
	const classes = useStyles();
	useEffect(() => {
		const jssStyles = document.querySelector('#jss-server-side');
    jssStyles?.parentElement?.removeChild(jssStyles);
  }, []);
	return (
		<>
			<ThemeProvider theme={qoverTheme}>
				<CssBaseline />
				<Head>
					<title>Qover Test</title>
					<link rel='icon' href='/favicon.png' />
				</Head>
				<div
					className={classes.root}
					{...backgroundProps}
				>
				{showHeader && <Header />}
				<Container
					sx={{ flex: 1, height: '100vh', display: 'flex' }}
					maxWidth={false}
					component='main'
					>
				{children}
				</Container>
				{showFooter && <Footer />}
				</div>
			</ThemeProvider>
		</>
	);
}

export default HeaderFooterLayout;
