import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { cn } from '@/lib/utils';

import './globals.css';

const font = Poppins({
	subsets: ['latin'],
	weight: ['500'],
});

export const metadata: Metadata = {
	title: 'ShadCN-UI Themes Next JS 14',
	description: 'See the source code - https://github.com/pticasolovey20',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang='en'>
			<body
				className={cn(font.className, 'min-h-screen w-full flex bg-background')}
				suppressHydrationWarning={false}
			>
				<ThemeProvider
					attribute='class'
					defaultTheme='dark'
					enableSystem={false}
					disableTransitionOnChange
					themes={['dark', 'light']}
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
};

export default RootLayout;
