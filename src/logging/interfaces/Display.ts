export interface Display {
    loggingProfile: [{ 
            class: string,
            logTypes: string[]
        }],
    logProperites: (className: string, name: string, value: any) => null,
    logFunctions: (className: string, name: string, start: Date, end: Date, args: any, ret: any) => null
}