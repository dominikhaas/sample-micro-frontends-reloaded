const version = 1;


export function logWarn(module, message) {
    console.warn(`log_v${version} - ${module} - ${message}`);
}
export function logInfo(module, message) {
    console.info(`log_v${version} - ${module} - ${message}`);
}

