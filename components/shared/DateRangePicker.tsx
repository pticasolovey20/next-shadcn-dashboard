'use client';

import { FC, HTMLAttributes, useState } from 'react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

import { CalendarIcon } from '@radix-ui/react-icons';
import { DateRange } from 'react-day-picker';

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';

export const DateRangePicker: FC<HTMLAttributes<HTMLDivElement>> = ({ className }) => {
	const [date, setDate] = useState<DateRange | undefined>({
		from: undefined,
		to: undefined,
	});

	return (
		<div className={cn(className)}>
			<Popover>
				<PopoverTrigger asChild>
					<Button
						id='date'
						variant={'outline'}
						className={cn(
							'w-full flex justify-start text-left font-normal overflow-hidden',
							!date ? 'text-muted-foreground' : 'text-primary'
						)}
					>
						<CalendarIcon className='mr-2 h-4 w-4' />
						{date?.from ? (
							date.to ? (
								<>
									{format(date.from, 'LLL dd, y')} - {format(date.to, 'LLL dd, y')}
								</>
							) : (
								format(date.from, 'LLL dd, y')
							)
						) : (
							<span>Pick a date</span>
						)}
					</Button>
				</PopoverTrigger>

				<PopoverContent className='w-full flex p-0' align='end'>
					<Calendar
						initialFocus
						mode='range'
						defaultMonth={date?.from}
						selected={date}
						onSelect={setDate}
						numberOfMonths={2}
					/>
				</PopoverContent>
			</Popover>
		</div>
	);
};
