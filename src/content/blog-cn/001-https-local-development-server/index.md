---
title: "本地 HTTPS 服务器小纸条"
summary: "这篇文章介绍了如何在 Mac 上使用 mkcert 工具生成本地 HTTPS 证书，并通过 Python 启动一个简单的 HTTPS 服务器，以便在调试需要 HTTPS 的应用程序时使用。"
date: "Feb 21 2024"
draft: false
tags:
- Tutorial
- Astro
- Astro Sphere
---

最近想尝试一下 Telegram mini app，在调试时需要使用 HTTPS 服务。尝试了几次，发现在 Mac 下搭建一个简单的 HTTPS 服务器还是需要一些奇怪的工具。但总体来说非常简单。

### 准备证书

主要会使用 mkcert 来创建证书。首先安装 mkcert。

```plaintext
brew install mkcert
brew install nss # if use Firefox
```

将 mkcert 加入到本地 root CA。

```plaintext
mkcert -install
```

### 生成证书

本地调试可以使用 localhost 或 127.0.0.1，而这两个其实是两个域名，需要两套证书。

```plaintext
mkcert localhost
mkcert 127.0.0.1
```

这样它就会生成两个文件，一个是 key，一个是 cert。

### 启动 Web 服务器

我使用 python 来启动一个简单的服务器

```python
from http.server import HTTPServer, SimpleHTTPRequestHandler
import ssl

keyfile = "../127.0.0.1-key.pem"
certfile = '../127.0.0.1.pem'
hostname = '127.0.0.1'

context = ssl.create_default_context(ssl.Purpose.CLIENT_AUTH)
context.load_cert_chain(certfile=certfile, keyfile=keyfile)

httpd = HTTPServer((hostname, 4443), SimpleHTTPRequestHandler)
httpd.socket = context.wrap_socket(httpd.socket, server_side=True)
httpd.serve_forever()
```

这样你就可以通过 https://127.0.0.1/ 来访问开发服务器了