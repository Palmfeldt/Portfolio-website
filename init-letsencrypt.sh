#!/bin/bash
# This script obtains a certificate for mytestwebsite.com using Certbot and the webroot method

docker-compose run --rm certbot certbot certonly --webroot --webroot-path=/var/www/certbot \
  --email your-email@example.com \
  --agree-tos \
  --no-eff-email \
  -d mytestwebsite.com
