'use client';

import { FC } from 'react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';

export const ThemeToggle: FC = () => {
	const { setTheme, theme } = useTheme();

	return (
		<Button
			size='icon'
			variant='outline'
			className='text-primary'
			onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
		>
			<SunIcon className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
			<MoonIcon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
		</Button>
	);
};
