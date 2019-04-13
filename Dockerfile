FROM node:10.15.3
LABEL maintainer="deva.kumar@sas.com"
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080

ENV APPNAME graphqlapp
ENV APPLOC ./public
ENV APPHOST 0.0.0.0
ENV APPPORT 8080
ENV VIYASERVER http://xxxxxx
#
# Clientid and ClientSecret
# You need to obtain it either thru your admin or by using ways described in the Viya Admin doc.
# Ignored if PROXYSERVER is NO
# samples shown below
#
ENV AUTHFLOW server
ENV CLIENTID graphqlapp
ENV CLIENTSECRET secret

#
# additional Viya Services to initialize
# defaults are: casManagement(for cas actions), compute, jobExecution, files, reports, reportImages
# restaf will initialize these using addServices.

#
ENV SERVICES casManagement,compute,jobExecution,files,reports,reportImages

# To keep the code together the sas and casl sample programs are stored 
# in a directory on this server.
# In real world situation you will store the programs on github, another web server, 
# jobdefinition on Viya, files service in Viya, S3 etc...
ENV PROGRAMURI ./programs


CMD [ "npm", "run", "indocker"]