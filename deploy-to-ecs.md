# ECS 服务器部署指南 - 智航云一

## 服务器信息
- **实例名称**: 智航科技 AI BIM 管理平台
- **实例ID**: i-2vchr04xv14ab3z9hbhz
- **公网IP**: 8.156.79.250
- **登录账号**: root
- **登录密码**: zhihangyun@123

---

## 第一步：SSH 连接到服务器

打开 PowerShell 或 CMD，执行：

```bash
ssh root@8.156.79.250
```

输入密码: `zhihangyun@123`

---

## 第二步：在服务器上安装 Nginx（如果没有安装）

```bash
# 检查是否已安装
nginx -v

# 如果没有安装，执行以下命令
yum install -y epel-release
yum install -y nginx

# 启动 Nginx 并设置开机自启
systemctl start nginx
systemctl enable nginx

# 检查状态
systemctl status nginx
```

---

## 第三步：创建网站目录

```bash
# 创建网站目录
mkdir -p /var/www/web_cn_invoratec

# 设置权限
chown -R nginx:nginx /var/www/web_cn_invoratec
chmod -R 755 /var/www/web_cn_invoratec
```

---

## 第四步：配置 Nginx

创建配置文件：

```bash
cat > /etc/nginx/conf.d/web_cn_invoratec.conf << 'EOF'
server {
    listen 80;
    server_name 8.156.79.250;  # 后续可改为域名

    root /var/www/web_cn_invoratec;
    index index.html;

    # 启用 gzip 压缩
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
    gzip_min_length 1000;

    # SPA 路由支持
    location / {
        try_files $uri $uri/ /index.html;
    }

    # 静态资源缓存
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|webp|avif|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # 视频文件
    location ~* \.(mp4|webm)$ {
        expires 1y;
        add_header Cache-Control "public";
    }

    # HTML 不缓存
    location ~* \.html$ {
        expires -1;
        add_header Cache-Control "no-cache, no-store, must-revalidate";
    }
}
EOF
```

测试配置并重启：

```bash
# 测试配置
nginx -t

# 重新加载配置
systemctl reload nginx
```

---

## 第五步：上传文件到服务器

**回到你本地电脑的 PowerShell**，执行：

```powershell
# 进入项目目录
cd "c:\Users\servi\source\repos\InvoratecAI.Website_CN"

# 使用 scp 上传 dist 文件夹
scp -r dist/* root@8.156.79.250:/var/www/web_cn_invoratec/
```

输入密码: `zhihangyun@123`

---

## 第六步：开放防火墙端口（如果需要）

SSH 到服务器执行：

```bash
# 检查防火墙状态
firewall-cmd --state

# 如果防火墙运行中，开放 80 端口
firewall-cmd --permanent --add-service=http
firewall-cmd --reload

# 或者直接关闭防火墙（不推荐生产环境）
# systemctl stop firewalld
```

**阿里云安全组**: 确保在阿里云控制台的安全组规则中允许入站 80 端口。

---

## 第七步：验证部署

在浏览器访问：

```
http://8.156.79.250
```

---

## 快速命令汇总

### 本地执行（上传文件）
```powershell
cd "c:\Users\servi\source\repos\InvoratecAI.Website_CN"
scp -r dist/* root@8.156.79.250:/var/www/web_cn_invoratec/
```

### 服务器执行（完整安装）
```bash
# 一键安装脚本
yum install -y epel-release nginx && \
mkdir -p /var/www/web_cn_invoratec && \
chown -R nginx:nginx /var/www/web_cn_invoratec && \
chmod -R 755 /var/www/web_cn_invoratec && \
cat > /etc/nginx/conf.d/web_cn_invoratec.conf << 'EOF'
server {
    listen 80;
    server_name 8.156.79.250;
    root /var/www/web_cn_invoratec;
    index index.html;
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
    location / {
        try_files $uri $uri/ /index.html;
    }
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|webp|avif|woff|woff2|ttf|eot|mp4|webm)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    location ~* \.html$ {
        expires -1;
        add_header Cache-Control "no-cache, no-store, must-revalidate";
    }
}
EOF
systemctl start nginx && \
systemctl enable nginx && \
nginx -t && \
systemctl reload nginx
```

---

## 注意事项

1. **关于 AccessKey**: 你提供的新 AccessKey 和当前 upload-to-oss.cjs 中的是**相同的**，没有冲突。

2. **关于 web_cn_invoratec 文件夹**: 是的，我建议创建新的 `/var/www/web_cn_invoratec` 目录，这样：
   - 与其他项目隔离
   - 方便管理和维护
   - 后续可以绑定独立域名

3. **后续域名绑定**: 如果有域名，修改 Nginx 配置中的 `server_name` 为你的域名即可。