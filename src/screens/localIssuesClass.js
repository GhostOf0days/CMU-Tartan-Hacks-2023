import * as React from 'react';

class Local_Issues {
	constructor(dateUpdate, mostRecentStatus, date, summary, description) {
		this.summary = summary;
		this.dateUpdate = dateUpdate;
		this.date = date;
		this.mostRecentStatus = mostRecentStatus;
		this.description = description;
	}

	get summary() {
		return this.summary;
	}

	get description() {
		return this.description;
	}

	get mostRecentStatus() {
		return this.mostRecentStatus;
	}

	get date() {
		return this.date;
	}

	get dateUpdate() {
		return this.dateUpdate;
	}

	set summary(x) {
		this.summary = x;
	}

	set description(x) {
		this.description = x;
	}

	set mostRecentStatus(x) {
		this.mostRecentStatus = x;
	}

	set date(x) {
		this.date = x;
	}

	set dateUpdate(x) {
		this.dateUpdate = x;
	}
}

const scottishTerrierBan = new Local_Issues(
	'2/4/2023',
	'Protests are currently underway acrposs CMU campus.',
	'2/3/2023',
	'Scottish Terriers Banned',
	'Scottish Terriers were recently banned on CMU campus after Scotty caused havoc across campus.',
);
