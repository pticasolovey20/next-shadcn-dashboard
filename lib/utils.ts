import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const getInitials = (fullName: string): string => {
	return fullName
		.split(' ')
		.map((name) => name.charAt(0))
		.join('');
};
