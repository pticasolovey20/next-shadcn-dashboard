import { FC } from 'react';
import { cardsList } from '@/constants';

import { CardItem } from '@/components/shared/cards/CardItem';

export const CardsList: FC = () => {
	return (
		<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
			{cardsList.map((card) => (
				<CardItem key={card.id} {...card} />
			))}
		</div>
	);
};
