// src/white_list.ts

const defaultWhiteList = [
	"http://localhost",
	"http://127.0.0.1",
	"http://localhost:5173",
	"http://127.0.0.1:5173",
	"dailycent://",
	"dailycent-auth://",
];

// 如果代码里还有其他地方还在用默认导入 white_list，就保留这一行
export default defaultWhiteList;

// 供 index.ts 动态读取环境变量使用
export function getWhiteList(env: Record<string, string> | undefined): string[] {
	const allowedDomains = env?.ALLOWED_DOMAINS;
	if (!allowedDomains) {
		return defaultWhiteList;
	}
	return allowedDomains
		.split(",")
		.map((d) => d.trim())
		.filter(Boolean);
}
