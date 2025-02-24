# Base image
FROM node:22-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json ./
# COPY pnpm-lock.yaml ./

# Install dependencies using PNPM
RUN npm install -g pnpm && pnpm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the Next.js application
RUN pnpm build

# Expose the port on which the application will run (if applicable)
EXPOSE 3004

# Start the application
CMD ["pnpm", "start"]



### HOW TO BUILD AND RUN??
### Step 1: Build
### docker build -t dashboard .
### Step 2: Run
### docker run -p 3000:3004 dashboard

### I want to change port
### docker run -p 4000:3004 dashboard
