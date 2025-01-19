# 快速开始

## 通过 Docker-Compose 部署

此部署方式推荐于单机部署生产环境，或本地部署尝鲜的使用者。

### 先决条件

- 安装 Docker Desktop 或 Docker Engine 或 Podman（需要配置启用 Podman Compose 并登录到 Docker Registry）

### 部署步骤

1. 执行 `docker compose up -d`，等待构建镜像完成
2. 遵照 [此文档](/guide/troubleshooting/browser-your-connection-is-not-private) 安装 Caddy 根证书，或前往 `/Caddyfile` 目录将 `localhost` 修改为您的业务域名
3. 转到 [https://localhost](https://localhost) 或您的业务域名

此时项目模块全部由容器服务托管。

## 通过 Kubernetes 部署

此部署方式推荐于多节点部署生产环境的使用者。

## （部分）手动部署

此部署方式推荐于本地部署开发环境的使用者。

### 先决条件

- 安装 Docker Desktop 或 Docker Engine 或 Podman（需要配置启用 Podman Compose 并登录到 Docker Registry）
- 安装 Java 21
- 安装 Node 22 并启用 corepack（或手动安装 pnpm）
- 安装 Caddy

### 部署步骤

1. 移除 `/docker-compose.yml` 文件的 `services.caddy.ports` 部分
2. 执行 `docker compose up -d`，等待构建镜像完成
3. 转到 `/frontend` 目录，执行 `pnpm dev`
4. 以 `/dev/Caddyfile` 配置运行 Caddy
5. 转到 [https://localhost](https://localhost) 或您的业务域名

此时前端服务由用户自行启动的 Vite Dev Server 和 Caddy 托管，其余服务仍由容器服务托管。
