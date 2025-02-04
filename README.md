1. Project Overview
   This project is called NatifoAI(Nation Info AI) created using React JS + typescript. This website contains general information about countries starting from the name of the country, capital city, currency and also language. Apart from that, this website has integrated authentication features using Github and Google (currently), this website also has an AI-based chatbox that can be used to ask for general information about the country

2.Setup Instructions

- Clone This Repository
- git clone https://github.com/NoitrX/Kuasar.git
- npm install
- npm run dev for run this web application

3. Available Features
   a. Authentication OAUTH with Github and Google ( For Now )
   b. Providing Information about Countries
   c. Responsive Web Design
   d. AI Chatbox For Explaining about detail Countries.

4. Architecture
   a. SPA (Single Page Application)
   SPA with Frontend : React + Typescript + Vite
   Firebase For Providing Authentication
   Routing: React Router DOM

Technical Decision

1. Why i Use React Typescript and Vite
   a. Typescript give a type safety, and minimize a Bug
   b. Reusable Component, and make a developer easy to maintain the code
   c. Vite is more faster and light .
   d. Effective Code and implement DRY

2. Why i use Firebase For Authentication ?
   a. Supporting OAuth 2.0 for Google and Github
   b. Firebase Auth providing base security like hashing and session

3. Why i use React Router?
   a. I need because i want to make a protected route (Middleware) for my web application to ensure privacy and the URL is secure.

4. Why i use styled Component ?
   a. Easy to implement
   b. Can be used for reusable Component with props. (Easy to Manipulate)

---

5. Future Improvements
   a. I want to implement a backend for this web application for save user data.
   b. Verification Email or Two Factor auth
   c. I want to enchance User Experience in this web app with Interactive Animation
   d. add more features such as Information About the Country Like All of destination or iconic place from that country, Cultural.
   e. Add Voice Recorder to asking AI.
   f. Enable features login using email and password
   g. Registration
   h. Provide Information with Image.

NOTE :
For AI CHATBOX, I implement backend for calling the API. Its because i always get CORS if i just using fetch for ask to Model. so i took initiative or another way for implementing AI in this Web App ^\_^ Thank You.
https://github.com/NoitrX/KuasarBackend.git

Installation :
- npm install

- node index.js
