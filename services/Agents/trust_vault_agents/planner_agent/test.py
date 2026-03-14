import requests

prompt = """
Job Brief
We are seeking a talented and motivated Web Developer to join our growing team. You will be responsible for translating design wireframes into high-quality code, building interactive web applications, and maintaining our digital products. The ideal candidate has a passion for clean code, user-centric design, and staying up-to-date with emerging technologies.
Responsibilities
Website Development: Build, maintain, and scale responsive websites and web applications from concept to completion.
Frontend Coding: Translate UI/UX design wireframes into functional, interactive, and visually appealing code using HTML5, CSS3, and JavaScript.
Backend Integration: Develop server-side logic, integrate APIs, and manage databases to ensure data flow between the server and users.
Performance Optimization: Optimize applications for maximum speed, scalability, and cross-browser compatibility.
Collaboration: Work closely with designers, product managers, and other developers to define and deploy new features.
Maintenance & Security: Implement security measures, conduct site audits, and fix bugs to ensure optimal performance and data protection.
Documentation: Create and maintain technical documentation for developed code and processes.

"""
res = requests.post("http://localhost:8000", json={"messages": prompt})
print(res.text)