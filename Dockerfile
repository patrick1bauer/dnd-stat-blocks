FROM nginx:latest

# Copy website files
COPY . /usr/share/nginx/html

# Expose port 80 (Default nginx http port)
EXPOSE 80