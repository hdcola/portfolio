---
title: "Notes on Setting Up a Local HTTPS Server"
summary: "This article introduces how to use the mkcert tool on a Mac to generate local HTTPS certificates and start a simple HTTPS server using Python for debugging applications that require HTTPS."
date: "Feb 21 2024"
draft: false
tags:
- HTTPS
- Python
- mkcert
---

Recently, I wanted to try out a Telegram mini app, which requires using HTTPS services during debugging. After several attempts, I found that setting up a simple HTTPS server on a Mac requires some unusual tools. But overall, it's quite simple.

### Preparing the Certificates

We will mainly use mkcert to create certificates. First, install mkcert.

```plaintext
brew install mkcert
brew install nss # if use Firefox
```

Add mkcert to the local root CA.

```plaintext
mkcert -install
```

### Generating Certificates

For local debugging, you can use localhost or 127.0.0.1, and these are actually two domain names, requiring two sets of certificates.

```plaintext
mkcert localhost
mkcert 127.0.0.1
```

This will generate two files, one is the key, and the other is the cert.

### Starting the Web Server

I use Python to start a simple server

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

Now you can access the development server via https://127.0.0.1/