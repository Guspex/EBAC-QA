FROM cypress/base:latest

WORKDIR /home/cypress/

RUN apt-get clean all

RUN dpkg --configure -a

RUN apt-get install -f

RUN apt-get update

COPY . /home/cypress/

VOLUME [ "/home/cypress/allure-report" ]

RUN npm install

CMD ["npm", "run", "test:allure"]