# asa368Journal<br>


## Resources<br>

https://stackoverflow.com/questions/927358/how-do-i-undo-the-most-recent-local-commits-in-git/44790317<br>

https://stackoverflow.com/questions/61086835/nodejs-error-listen-eaddrnotavail-address-not-available<br>

https://www.namecheap.com/support/knowledgebase/article.aspx/9705/33/installing-an-ssl-certificate-on-nodejs#prereq<br>

metaltoad.com/blog/angular-2-using-http-service-write-data-api<br>

https://webdva.github.io/how-to-force-express-https-tutorial/<br>

https://nodejs.dev/learn/get-http-request-body-data-using-nodejs<br>

https://expressjs.com/en/starter/static-files.html<br>

https://stackoverflow.com/questions/7450940/automatic-https-connection-redirect-with-node-js-express<br>

https://stackoverflow.com/questions/11744975/enabling-https-on-express-js<br>

https://malcoded.com/posts/angular-backend-express/<br>


## Link to running code<br>
https://adrianatanasov.com<br>


## Discussing the individual components
addreview component - this component creates and fills in the form that would be for creating a new review and submits the form once the submit button is clicked which fires off the post request.<br>

reviews component- This component communicates with the ReviewModelService and gets all of the data from the json file and pushes it to the view. The majority of the served data is modified before reaching the reviews component which makes it easy to play with.<br>

business component- This component communicates with the BusinessModelService which in turn communicates with the json to create a list of all the businesses in a certain city. This also communicates with the ReviewModelService in order to get data to fille out some of the requirements on the cards such as average rating.<br>

cities component = this component communicated with the CitiesModelService which in turn communicates with the json file to create a list of all the cities available. This also communicates with the ReviewModelService which lets the cities component know how many total reviews have been made.<br>

## MVC Breakdown Angular vs Regular<br><br>

### Angular MVC<br>
Interface -> Service -> Component -> HTML<br>

Interface - Defines the criteria needed to prevent errors for the data.<br>

Service - Provides the api/logic and responses when requesting Interface data.<br>

Component - Middleware that ensures Data from the service properly gets implemented to the view. A translator of sorts.<br>

HTML - UI and Front End.<br><br>


### Regular MVC<br>

Model -> Controller -> View<br>

Model -> sets data standard, fetches data, formats it, performs logic on it and passes data to the controller. <br>

Controller -> manages view updates and ensures the proper data is making it to the right location from the model. <br><br>


## Reactive Forms Vs Template Driven forms<br>
Personally I believe that from experience during this project, reactive forms are much easier to setup than template driven forms and they also allow for more flexability. Another thing is that it is read as a string which is then passed to the html doc. This can lead to errors due to readability. Validation cannot be generalized and has to be customized for the template. They also have a lot of issues with causing bugs due to two-way data binding which often breaks the one-way data flow.<br><br>

## Issues
I had a lot of issues getting my api to work, it actually still does not work, I am just struggling with how to point my api to the json files and I could not get it to function in the traditional sense. I was able to successfully get it working with the json-server backend locally which can be seen in my screenshots as well as reviewData.json where there is a bunch of junk data, they give away is that the id's for those i created manually are much shorter than the ones created through the application. <br>

Another issue I had was with ionic, it took a couple hours to figure out why it would not display any of the css that ionic contains but it was a dependency that was missing. Ionic currently functions about 75%, there are still things that are not behaving the way they are supposed too. but it works well enough to create a decent UI which is all I could ask for.<br>

A third issue I had/have, is with the production application. Like i stated previously, the api doesnt work as it should. I tried and failed, but Node was causing me a lot of issues, but not as much as apache. Apache did not make sense to use with this app, atleast I could not figure out how to update the json file while using apache and I spent maybe 10-12 hours on saturday researching this.<br>


All in all, i learned a lot from this project and I gotta say, things make a lot more sense now. If I could, I would redo the whole project in a completely different way. There are still things I do not understand but I honestly am not a fan of web development myself. Its just not how my brain works when it comes to making requests and responding to them. but slowly Im hoping to learn more and understand it better. I can say that I have spent probably over 30 hours on the app in the last 4 days and Its still no where near satisfactory in my opinion but I gave it all I got.







