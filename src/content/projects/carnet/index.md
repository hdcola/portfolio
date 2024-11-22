---
title: "CarNet"
summary: "This project is a mini exercise designed for classroom learning. It is an online two-player dice game where players take turns to roll a dice. "
date: "Aug 28 2024"
draft: false
tags:
- Java
- Spring Boot
- AWS S3
- AWS RDS
- MySQL
- CI/CD
- Docker
repoUrl: https://github.com/hdcola/autotrader
---

This is a two-week project. I was mainly responsible for the backend, testing, and CI/CD. Another classmate was in charge of the frontend. The goal of the project is to develop a car sales platform for car dealers. The platform features include:
- User registration and login
- Users can post car information
- Users can search for car information
- Users can send inquiries to dealers

Technologies and libraries used:
- Spring Boot & Thymeleaf
- Multi-role User Register & Logoin (Spring Security)
- Google Login (OAuth2 Client)
- Email Notifaction (Java Mail Sender)
- Telegram Notifaction (WebClient)
- AJAX (HTMX & htmx-spring-boot-thymeleaf)
- Testing (JUnit, WebMvcTest, Mockito), Backend test coverage: [52.77%](https://app.codecov.io/gh/hdcola/autotrader) 
- Object Storage (Amazon S3)
- CI/CD (GitHub Actions)
- Docker