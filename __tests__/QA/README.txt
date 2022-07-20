Due to the nested nature of the components and already having committed multiple hours to working on 
QuestionList and QA sections I have opted to use ENZYME, this however requires a seperate NPM and jest config, all of which
are included, however enzyme is a DEAD API, and should not be used, this did not become apparent until later

In order to use Enzyme in this project you must run jest from this __Tests__/QA/ folder;

Steps:

1) navigate to __Tests__/QA/

2) npm install

3) npm test QA/QA.test.js


all other files should be included.