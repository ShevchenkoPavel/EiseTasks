How to run app:

1. sudo apt install maven
2. sudo apt install postgresql
3. sudo -u postgres psql
create user eisetasks with password 'eisetasks'; (Don't forget about semicolon!)
create database db owner admin;
4. sudo apt install nginx
5. Add to /etc/nginx/available-sites/nginx.conf
(html { ... }) server { listen 80; server_name localhost; location / { proxy_pass http://localhost:3000/; } location /api/ { proxy_pass http://localhost:8080/; proxy_set_header Host $host; proxy_set_header X-Real-IP $remote_addr; } }
6. cd project_folder
7. mvn package
8. java -jar target/EiseTasksRestAPI-.jar ( is version number)
9. service nginx restart
