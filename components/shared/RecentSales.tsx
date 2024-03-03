import { FC } from 'react';
import { recentSales } from '@/constants';
import { getInitials } from '@/lib/utils';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export const RecentSales: FC = () => {
	return (
		<Card className='w-full lg:w-[40%]'>
			<CardHeader>
				<CardTitle>Recent Sales</CardTitle>
				<CardDescription>You made 265 sales this month.</CardDescription>
			</CardHeader>

			<CardContent>
				<div className='space-y-8'>
					{recentSales.map(({ id, imageSource, name, email, amount }) => (
						<div key={id} className='flex flex-col sm:flex-row items-start sm:items-center gap-2'>
							<div className='flex items-center grow gap-2'>
								<Avatar className='h-9 w-9'>
									<AvatarImage src={imageSource} alt='avatar' />
									<AvatarFallback>{getInitials(name)}</AvatarFallback>
								</Avatar>

								<div>
									<p className='text-sm font-medium'>{name}</p>
									<p className='text-sm text-muted-foreground'>{email}</p>
								</div>
							</div>

							<div className='font-medium'>{amount}</div>
						</div>
					))}
				</div>
			</CardContent>
		</Card>
	);
};
