# Base image
FROM node:22-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (or pnpm-lock.yaml if you’re using pnpm)
COPY package.json ./
# COPY pnpm-lock.yaml ./

# Install dependencies (this includes Next.js)
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the port on which the application will run (if applicable)
EXPOSE 3004

# Start the application
CMD ["npm", "start"]
