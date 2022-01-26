import type { RequestHandler } from '@sveltejs/kit';

export const post: RequestHandler<DailyInfo> = async (event) => {
	const data = await event.request.formData();
	const dailyInfo = <DailyInfo>{};
	data.forEach((value, key) => {
		dailyInfo[key] = value;
	});
	console.dir(dailyInfo);
	return {
		status: 200,
		body: `The request body returned ${JSON.stringify(dailyInfo)} total cases.`
	};
};

// POST /todos.json
/* export const post: RequestHandler<Locals> = async (event) => {
	const data = await event.request.formData();

	const response = await api(event, `todos/${event.locals.userid}`, {
		// because index.svelte posts a FormData object,
		// request.body is _also_ a (readonly) FormData
		// object, which allows us to get form data
		// with the `body.get(key)` method
		text: data.get('text')
	});

	return response;
}; */
