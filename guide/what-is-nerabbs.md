# 什么是 NeraBBS？

NeraBBS 是一款基于 Java 21 和 Vue 3 构建的，采用 Material 3 页面风格的云原生微服务轻论坛程序。
> [!TIP]
> 迫不及待想部署试试了？请转到[快速开始](./getting-started)。

## 项目结构

- **/binary-tools** 工具文件集
- **/common** 通用逻辑模块
- **/config** 后端配置文件
- **/dev** 开发环境配置
- **/frontend** 前端模块
- **/gateway** 应用程序网关模块
- **/kubernetes-manifests** Kubernetes 清单文件
- **/lib-grpc** grpc protobuf 定义模块
- **/middleware-config** 分布式配置中心服务模块
- **/service-auth** 用户鉴权服务模块
- **/service-comment** 评论服务模块
- **/service-oss** 对象存储服务模块
- **/service-post** 论坛主题服务模块
- **/service-search** 搜索、热度排行榜、点击量统计服务模块
- **/service-user-profile** 用户个人资料服务模块
- **/service-user** 用户服务模块
- **/service-webauthn** Webauthn（Passkey）服务模块
