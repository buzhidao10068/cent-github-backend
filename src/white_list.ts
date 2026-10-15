export default [
	"http://localhost", // localhost
	"http://127.0.0.1", // localhost
	"http://localhost:5173", // localhost
	"http://127.0.0.1:5173", // localhost
	"https://glink25.github.io",
	"https://oncent.github.io",
	"https://cent.linkai.work",
	"https://cent.link-ai.workers.dev",
	"dailycent://",
	"dailycent-auth://",
];
export function getWhiteList(env: Env): string[] {
    const allowedDomains = env.ALLOWED_DOMAINS;
    if (!allowedDomains) {
        return defaultWhiteList;
    }
    return allowedDomains.split(',').map(domain => domain.trim());
}
