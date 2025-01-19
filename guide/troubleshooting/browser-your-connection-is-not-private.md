# 浏览器提示 “您的连接不是私密连接”

如果您在通过 localhost 访问 NeraBBS 页面时浏览器提示 “您的连接不是私密连接”，且符合以下情况：

1. 错误代码为 `net::ERR_CERT_AUTHORITY_INVALID`
2. 错误详细为：*此服务器无法证明它是localhost；您计算机的操作系统不信任其安全证书。出现此问题的原因可能是配置有误或您的连接被拦截了。*

则这是因为您没有安装（或正确安装）Caddy 为本地域名创建的根证书（Caddy Local Authority - 2025 ECC Root），要解决此问题，请：

1. 转到项目运行目录，查找 `data/caddy/pki/authorities/local/root.crt` 文件；
2. 安装此证书，Windows 用户请并确保其作为“受信任的根证书颁发机构”被安装；
3. 重新启动您的浏览器。