import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Overview } from '@/components/shared/dashboard/tabs/Overview';
import { tabsList } from '@/constants';

export const Dashboard = () => {
	return (
		<Tabs defaultValue='overview' className='space-y-4'>
			<TabsList className='max-w-[375px] w-full'>
				{tabsList.map(({ id, value, label }) => (
					<TabsTrigger
						key={id}
						value={value}
						disabled={value !== 'overview'}
						className='block w-full truncate'
					>
						{label}
					</TabsTrigger>
				))}
			</TabsList>

			<TabsContent value='overview'>
				<Overview />
			</TabsContent>
		</Tabs>
	);
};
