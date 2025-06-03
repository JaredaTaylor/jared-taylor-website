# frontend/Dockerfile

FROM node:20

# Create app directory
WORKDIR /app

# Install dependencies based on package.json and package-lock.json
COPY package*.json ./
RUN npm install @tailwindcss/typography react-markdown && npm install

# Copy the full project into the container
COPY . .

# Expose port 3000
EXPOSE 3000

# Start Vite dev server
CMD ["npm", "run", "dev"]