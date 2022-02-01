import type { RequestHandler } from '@sveltejs/kit';
import supabase from '../../lib/db';

export const post: RequestHandler = async (event) => {
	const data = await event.request.formData();
	const today = <DailyInfo>{};
	let yesterday = <DailyInfo>{};
	data.forEach((value, key) => {
		if (key === 'yesterday') {
			yesterday = JSON.parse(value.toString());
		} else {
			today[key] = Number(value);
		}
	});

	async function sendData() {
		const { data, error } = await supabase.from('covid_figures').insert([today]);
		if (error) throw new Error(error.message);
		return data;
	}

	await sendData();

	const positives: number = Number(today.positives) - Number(yesterday.positives);
	const tests: number = Number(today.tests) - Number(yesterday.tests);
	const testsString = tests === 1 ? 'test' : 'tests';
	const deaths: number = Number(today.deaths) - Number(yesterday.deaths);
	const deathString = deaths === 1 ? 'death' : 'deaths';
	const recoveries: number = Number(today.recoveries) - Number(yesterday.recoveries);
	const recoveryString = recoveries === 1 ? 'recovery' : 'recoveries';
	const currentCases: number =
		Number(today.positives) - Number(today.deaths) - Number(today.recoveries);
	const casesString = currentCases === 1 ? 'case' : 'cases';
	const message = `Samaná: *${positives} +* of *${tests}* new ${testsString}.\n*${deaths}* ${deathString} (${today.deaths} total).\n*${currentCases}* current ${casesString} (*${recoveries}* ${recoveryString}).\n*${today.positivity}*% positivity in the last four weeks.`;
	return {
		status: 200,
		body: message
	};
};
