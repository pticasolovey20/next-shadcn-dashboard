import { FC } from 'react';
import { Input } from '@/components/ui/input';

export const Search: FC = () => {
	return (
		<div>
			<Input type='search' placeholder='Search...' className='max-w-[w00px] w-full text-primary' />
		</div>
	);
};
