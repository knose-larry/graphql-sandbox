# Use a Node.js base image
FROM node:18

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Copy the rest of the application code
COPY . .

# Install dependencies
RUN npm install

# Install ts-node globally (if needed)
RUN npm install -g ts-node

# Expose the port
EXPOSE 4000

# Command to run the application
CMD ["npm", "run", "start-graphql"]
