'use client';

import { FC } from 'react';
import { data } from '@/components/shared/chart/data';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bar, BarChart, ResponsiveContainer } from 'recharts';

export const OverviewChart: FC = () => {
	return (
		<Card className='w-full lg:w-[60%]'>
			<CardHeader>
				<CardTitle>Overview</CardTitle>
			</CardHeader>

			<CardContent>
				<ResponsiveContainer width='100%' height={350}>
					<BarChart data={data}>
						<Bar
							dataKey='total'
							fill='currentColor'
							radius={[4, 4, 0, 0]}
							className='fill-primary'
						/>
					</BarChart>
				</ResponsiveContainer>
			</CardContent>
		</Card>
	);
};
