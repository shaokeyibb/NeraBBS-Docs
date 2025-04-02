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

### 部署步骤

1. 转到 `/kubernetes-manifests`，然后顺次部署 `namespace`, `configmap`, `middleware`, `service`, `ingress` 即可。

## 手动部署

此部署方式推荐于本地部署开发环境的使用者。

### 先决条件

- 安装 Docker Desktop 或 Docker Engine 或 Podman（需要配置启用 Podman Compose 并登录到 Docker Registry）
- 安装 Java 21
- 安装 Node 22 并启用 corepack（或手动安装 pnpm）

### 部署步骤

1. 转到 `/dev`，然后执行 `./run-dev.sh`
2. 遵照 [此文档](/guide/troubleshooting/browser-your-connection-is-not-private) 安装 Caddy 根证书
3. 转到 [https://localhost](https://localhost)

此时中间件由容器服务托管，业务服务由本地托管。注意使用此模式部署时，Caddy 将不再直接连接到应用网关（Spring Cloud Gateway），而是先连接到 Vite Dev Server，随后由后者转发前往 `/api` 端点的请求至应用网关。