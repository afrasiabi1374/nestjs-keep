export declare class DatetimeService {
    private moment;
    constructor(moment: any);
    getTimeStamp(): number;
    toString(format?: string): string;
    toDateTime(dateTime?: string): string | null;
}
