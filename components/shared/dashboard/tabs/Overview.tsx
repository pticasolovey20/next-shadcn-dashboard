import { CardsList } from '@/components/shared/cards/CardsList';
import { OverviewChart } from '@/components/shared/chart/OverviewChart';
import { RecentSales } from '@/components/shared/RecentSales';

export const Overview = () => {
	return (
		<div className='flex flex-col gap-4'>
			<CardsList />

			<div className='w-full flex flex-col lg:flex-row gap-4'>
				<OverviewChart />
				<RecentSales />
			</div>
		</div>
	);
};
