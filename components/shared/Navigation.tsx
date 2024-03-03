import Link from 'next/link';

import { FC, HTMLAttributes } from 'react';
import { navigationList } from '@/constants';
import { cn } from '@/lib/utils';

export const Navigation: FC<HTMLAttributes<HTMLElement>> = ({ className, ...props }) => {
	return (
		<nav className={cn('flex items-center gap-4', className)} {...props}>
			{navigationList.map(({ id, route, label }) => (
				<Link key={id} href={route} className='text-sm font-medium text-primary'>
					{label}
				</Link>
			))}
		</nav>
	);
};
