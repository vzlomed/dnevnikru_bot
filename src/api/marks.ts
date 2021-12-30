import { TAvgGroupMark, TFinalMarks, TRecentMarks, TThematicMark, TWeightedMarks } from "../core/typings/response";
import { constants } from "../core/constants";
import { DnevnikRuRequest } from "../core/services/dnevnikru_request.service";
import { Response } from "got";
import { TCachedResponse } from "../core/typings/cached_response.type";

export class Marks extends DnevnikRuRequest {
	constructor(accessToken: string) {
		super(accessToken);
	}
	public async mark(markId: string | number): Promise<{ response: TCachedResponse; body: TThematicMark }> {
		const req = await this.sendCached({
			method: "GET",
			url: constants.apiUrl + `/marks/${markId}`,
		});
		return {
			response: req,
			body: JSON.parse(req.body),
		};
	}

	public async recent(
		personId: string | number,
		eduGroup: string | number,
		from: string,
		subjectId: string | number,
		limit: string | number
	): Promise<{ response: TCachedResponse; body: TRecentMarks }> {
		const req = await this.sendCached({
			method: "GET",
			url: constants.apiUrl + `/persons/${personId}/group/${eduGroup}/recentmarks?fromDate=${from}&subject=${subjectId}&limit=${limit}`,
		});
		return {
			response: req,
			body: JSON.parse(req.body),
		};
	}

	public async wAvgMarks(eduGroup: string | number, from: string, to: string): Promise<{ response: TCachedResponse; body: TWeightedMarks }> {
		const req = await this.sendCached({
			method: "GET",
			url: constants.apiUrl + `/edu-groups/${eduGroup}/wa-marks/${from}/${to}`,
		});
		return {
			response: req,
			body: JSON.parse(req.body),
		};
	}

	public async finalMarksGroup(eduGroup: string | number): Promise<{ response: TCachedResponse; body: TFinalMarks }> {
		const req = await this.sendCached({
			method: "GET",
			url: constants.apiUrl + `/edu-groups/${eduGroup}/final-marks`,
		});
		return {
			response: req,
			body: JSON.parse(req.body),
		};
	}

	public async finalMarksPerson(eduGroup: string | number, personId: string | number): Promise<{ response: TCachedResponse; body: TFinalMarks }> {
		const req = await this.sendCached({
			method: "GET",
			url: constants.apiUrl + `/persons/${personId}/edu-groups/${eduGroup}/final-marks`,
		});
		return {
			response: req,
			body: JSON.parse(req.body),
		};
	}

	public async fullFinalMarksPerson(eduGroup: string | number, personId: string | number): Promise<{ response: TCachedResponse; body: TFinalMarks }> {
		const req = await this.sendCached({
			method: "GET",
			url: constants.apiUrl + `/persons/${personId}/edu-groups/${eduGroup}/allfinalmarks`,
		});
		return {
			response: req,
			body: JSON.parse(req.body),
		};
	}

	public async avgMark(periodId: string | number, personId: string | number): Promise<{ response: TCachedResponse; body: string }> {
		const req = await this.sendCached({
			method: "GET",
			url: constants.apiUrl + `/persons/${personId}/reporting-periods/${periodId}/avg-mark`,
		});
		return {
			response: req,
			body: JSON.parse(req.body),
		};
	}

	public async avgMarkSubject(periodId: string | number, personId: string | number, subjectId: string | number): Promise<{ response: TCachedResponse; body: string }> {
		const req = await this.sendCached({
			method: "GET",
			url: constants.apiUrl + `/persons/${personId}/reporting-periods/${periodId}/subjects/${subjectId}/avg-mark`,
		});
		return {
			response: req,
			body: JSON.parse(req.body),
		};
	}

	public async avgMarksGroup(eduGroup: string | number, periodId: string | number, to: string): Promise<{ response: TCachedResponse; body: TAvgGroupMark[] }> {
		const req = await this.sendCached({
			method: "GET",
			url: constants.apiUrl + `/edu-groups/${eduGroup}/reporting-periods/${periodId}/avg-marks/${to}`,
		});
		return {
			response: req,
			body: JSON.parse(req.body),
		};
	}

	public async avgMarksPeriod(eduGroup: string | number, periodId: string | number, from: string, to: string): Promise<{ response: TCachedResponse; body: TAvgGroupMark[] }> {
		const req = await this.sendCached({
			method: "GET",
			url: constants.apiUrl + `/edu-groups/${eduGroup}/avg-marks/${from}/${to}`,
		});
		return {
			response: req,
			body: JSON.parse(req.body),
		};
	}
}
