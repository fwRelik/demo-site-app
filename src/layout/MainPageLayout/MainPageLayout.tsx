import { FunctionComponent } from 'react';
import { MainPageLayoutProps } from './MainPageLayout.props';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const MainPageLayout = ({ children }: MainPageLayoutProps): JSX.Element => {
	return (
		<>
			<Header />

			{children}

			<Footer />
		</>
	);
};

export const withMainPageLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
	return function withLayoutComponent(props: T): JSX.Element {
		return (
			<MainPageLayout>
				<Component {...props} />
			</MainPageLayout>
		);
	};
};
