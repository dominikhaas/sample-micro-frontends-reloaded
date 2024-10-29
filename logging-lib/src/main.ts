
const currentVersion = 1.0

export function logWarn(frontendId: string, message: string): void {
    console.log(`Logging v${currentVersion}: ${frontendId} - ${message}`);
}