/// <reference types="@sveltejs/kit" />

interface DailyInfo {
	tests: number;
	positives: number;
	recoveries: number;
	positivity: float;
	deaths: number;
}
