**Mern Stack Assignment**
>Required stack: 
>Mongo/Mongoose
>Express
>React js
>Node js

<h3>Front End packages</h3>
<h4>"axios": "^0.18.0"</h4>
A request based library used to perform http requests. It takes care of the data transformation to JSON. It is a promise based, offers better error handling and has cross site forgery protection.

<h4>"react": "^16.7.0"</h4>
A flexible library that build user interface based on components set on how and what to render. Using a virtual DOM to run data that gets display on your page without refreshing.



    <h4>"react-dom": "^16.7.0"</h4>
    <h4>"react-router-dom": "^4.3.1"</h4>
    <h4>"react-scripts": "2.1.3"</h4>

***
<h3>Back End packages</h3>
<h4>"bcrypt": "^3.0.3"</h4>
A program that hashes passwords by incorporating "salt", data used as part of the hashing resulting in a stronger, more complex hash to protect the password<br/>

<h4>"cloudinary": "^1.13.2"</h4>
A package developed by Cloudinary integrating access between API to its cloud server. Cloudinary is a platform that hosts media files.

<h4>"concurrently": "^4.1.0"</h4>
A package that lets you run multiple scripts concurrently.

<h4>"cookie-session": "^2.0.0-beta.3"</h4>
A package that allows you to create a cookie that stores user credentials in a cookie and store in temporary local storage with the ability to set time to auto destroy, or when browser is closed.

<h4>"cors": "^2.8.5"</h4>
Cross-Origin Resource Sharing, a package that allows it's user to set up access control to allow communication between 2 or more domains into your API.

<h4>"dotenv": "^6.2.0"</h4>
a stand alone module that loads environment variables, allowing user to set password and other sensitive information on a separate file, that can be hidden away from the code. This flow is based on the twelve factor app methodology.

<h4>"express": "^4.16.4"</h4>
A light-weight framework that preps your app with MVC architecture.

<h4>"mongoose": "^5.4.5"</h4>
A MongoDB relationship manager between data, runs a schema validation.

<h4>"multer": "^1.4.1"</h4>
A middleware that helps upload files.

<h4>"passport": "^0.4.0"</h4>
An authentication middleware

<h4>"passport-local": "^1.0.0"</h4>
A local authentication middleware


<!-- not required!, but will double check with Gretch -->
TODO:<h1>Project Charter</h1>

    Date of Project Charter creation
    Date of Revision
    Project Manager’s Name
    Project Name
    Type or Commodity (product or service)
    Project Statement (why we are doing this project)
    Current State
    Desired State (what success looks like)
    Contract Expiration (if applicable)
    Diversity Supplier Potential Opportunity (what an interesting thing to point out!)
    Stakeholders (list who are negatively and positively affected by the project)
    Saving Opportunity (quantify it)
    Describe Current Process or Metrics (what’s going wrong)
    Describe Future Process or Metrics (what the goal is, mention numbers)
    Customers (list who the customers are, internal, external, all of them)
    Customer Requirements (what do they expect, remember we do this for them)
    Risks (every project has a risk, quantifiable or not)
    Estimated Project Expense (travelling expenses, subcontracting, etc)
    Team Members
    Executive Sponsors (who will approve the charter and modifications to the charter)
    Steering Committee Members (some names may cross the stakeholder’s list)
    Project Timeline: milestone (phase 0, phase 1, etc), deliverable (example: prepare contract), status (on time, past due, etc) and due date
    Approval signatures by phase


  TODO:*Compose a summary of your application including problem definition and solution*
  ><h3>Project:</h3> 
  >Building a working website to show for a Professional photographer Dave Sumner to show his Portfolio.
  >The application required a Dashboard page with access control for client to update and maintain his data.

FIXME:><h3>Problem definition:</h3>
>Data Schema

FIXME:><h3>Solutions</h3>


   
  TODO:*Review the conceptual design with the client and edit based on their feedback<strong>User stories</strong> for the whole application*

  *A workflow diagram of the user journey/s*
  **Done!**


  TODO:*Wireframes for all main pages of your app*
  
  *MongoDB Object Data Modeling Diagram* DONE!
  ```json
userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: String
});
```
***


```json
imageSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  },
  album: [{
      type: String,
      required: true
    }],
  tags: [{
      type: String,
      required: true
  }]
});
  ```
  ***

    Project plan and effort estimation


  *Data Flow Diagram*
  **Done!**

    OO design documentation

**Tools**
Trello, Github, Agile methodologies, Code Review
Demonstrate your project management skills, Client meeting minutes, and other communication tools


TODO:<h1>Requirements - Short Answer Questions</h1>

<h2>What are the most important aspects of quality software?</h2>
>There are no one most important aspect. A quality software or application rely on their interconnecting functions, architectural side of the application, and performance of the application that allows the software itself to be maintained, scaled, and improved over time. This allow a healthy relationship where users and development team bond a connection in keeping the software at optimum level.


<h2>What libraries are being used in the app and why?</h2>

<h2>A team is about to engage in a project, developing a website for a small business. What knowledge and skills would they need in order to develop the project?</h2>
>Understanding client "User Stories". and good understanding on what client is currently using, versus expectations with allowed time frame and budget.
>Adopting Agile methodology in aiding the team to complete the project in timely and healthy manner.
>Task assignment within the team to allow function separation in accordance to the project priority to allow completion within time frame.


<h2>Within your own project what knowledge or skills were required to complete your project, and overcome challenges?</h2>
Standups -
This allow focus and direction within the team.<br/>
Planning, wireframing, design in figma, and updates in trello.<br/>
Go outside your comfort zone. Ask colleaques, teachers or even rubber ducking when facing road blocks.


<h2>Evaluate how effective your knowledge and skills were this project, using examples, and suggest changes or improvements for future projects of a similar nature?</h2>
>Having to complete the first 6 months within Coder Academy, this time round as a team, we felt that we are more prepared conceptually, and able to have a better understanding on how to approach certain task on hand. The course has also made us become a better "googler".<br/> 
>Agile methodology is a powerful tool that everyone should be holding on to. It is definitely a tool that is worth looking deeper into to understand how it can be applied once we are in the workforce.

***







TODO:
**ZENFOLIO**
<h3>Starter Plan features:</h3>
$60/yearly, $5 monthly.
    Beautiful Homepage & Gallery Templates
    Unlimited Photo & Video Uploads
    Use Your Domain Name
    Social Media Integration
    Easy Drag & Drop Organization
    Order Prints & Gifts at Base Prices
    Access anytime, anywhere on any device
    Discounted listing on Photographer Central
    24/7/365 Customer Support

<h3>Pro Plan features:</h3>
$240/yearly, $20 monthly.
EVERYTHING IN STARTER PLAN, PLUS:
    Free Priority Shipping on Mpix Orders over $35
    Added Site Customization Options
    Online Pre-order for Clients
    Custom Watermarks
    Photo Sharing & Client Proofing
    Built-in Shopping Cart + Credit Card and Paypal® Processing
    Sell Digital Downloads
    Sell & Buy products from leading Labs
    Offer Custom Packages
    FREE Full-service Marketing Campaigns
    Full Suite of Marketing Tools
    Offer Self-fulfilled Products
    FREE single listing on Photographer Central
    Dedicated Live Chat Support 