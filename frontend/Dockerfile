FROM node AS build
WORKDIR /home/frontend
COPY package*.json /home/frontend
RUN npm install
COPY . .
RUN npm install -g @angular/cli 
EXPOSE 4200
CMD ng serve --host 0.0.0.0