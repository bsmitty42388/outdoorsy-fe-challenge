FROM node:18-alpine
RUN mkdir -p /app
WORKDIR /app
COPY . .
ENV NEXT_TELEMETRY_DISABLED 1
RUN npm install
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]