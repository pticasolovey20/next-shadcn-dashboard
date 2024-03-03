import { Navigation } from '@/components/shared/Navigation';
import { Search } from '@/components/shared/Search';
import { ThemeToggle } from '@/components/shared/ThemeToggle';
import { ProfileNavigation } from '@/components/shared/ProfileNavigation';
import { DateRangePicker } from '@/components/shared/DateRangePicker';
import { Dashboard } from '@/components/shared/dashboard/Dashboard';

const DashboardPage = () => {
	return (
		<main className='flex-1 w-full flex justify-center'>
			<div className='w-full max-w-[1400px]'>
				<section className='w-full flex border-b'>
					<div className='w-full flex h-16 items-center justify-between px-4'>
						<Navigation className='hidden md:flex' />

						<div className='ml-auto flex items-center space-x-4'>
							<Search />
							<ThemeToggle />
							<ProfileNavigation />
						</div>
					</div>
				</section>

				<section className='w-full flex flex-col gap-2 p-4'>
					<div className='flex flex-col md:flex-row md:justify-between items-start gap-2'>
						<h2 className='w-full truncate text-3xl font-bold tracking-tight text-primary'>
							Dashboard
						</h2>
						<DateRangePicker className='max-w-[250px] w-full' />
					</div>

					<Dashboard />
				</section>
			</div>
		</main>
	);
};

export default DashboardPage;
