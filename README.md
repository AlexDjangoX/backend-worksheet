# Backend Worksheet

Welcome to the Activity Worksheet! This worksheet contains three exciting activities for you to complete. 
Follow the instructions for each activity, modify this readme file accordingly, and mark the activity as done by placing a tick mark (✅) next to the activity title.

## Instructions 📋

Before you begin, make sure you have forked this repository. To fork the repo, follow these steps:

1. **Fork the Repository**  🚀

   Click on the "Fork" button at the top right corner of this repository's page. This will create a copy of the repository in your GitHub account.
   
2. **Clone the Forked Repo**  📥

   Once the fork is complete, clone the forked repository to your local machine using the following command in your terminal or command prompt:
   ```bash
   git clone <your-forked-repo-url>
   ```
   
3. **Work on the Codebase and Modify the Readme**  💻

   Now, you are free to work on the codebase, make changes, and modify the readme file as instructed in the activities.

4. **Install Dependencies** 📦

   If the project requires any dependencies, make sure to install them using the appropriate package manager (npm or yarn).
   
5. **Commit Changes**  💬

   As you make changes to the code or readme, commit them with meaningful messages to track your progress.
   ```shell
   git add .
   git commit -m "Your commit message here"
   ```
   
6. **Push to Your Forked Repo**  📤

   Once you have completed the activities and are satisfied with your changes, push the changes to your forked repository on GitHub.
   ```bash
   git push origin main
   ```
   
7. **Share Your Forked Repo Link**  🔗

   After accomplishing the activities, share the link of your forked repository with your mentor. They will be able to review your work and provide feedback.


**Note: Please do not modify this original repository directly or create a Pull Request (PR) for it. All your changes should be made in your forked repository only 🛑**

Remember, your forked repository is your personal copy, and you can freely experiment and work on it without affecting the original repository. Happy activiting! 🚀

## Config 🛠️
For each project, find the `.env.example` file in the project's root directory. Duplicate the file and rename it to `.env`. Fill in the required credentials and keys.

- **MongoDB**: Four projects in this repository use MongoDB as the database. You'll need to create your own MongoDB account, get the URI, and replace it in the .env file.
- **Supabase**: For the Supabase project, you'll need to create an account on Supabase, obtain the URL and API keys, and configure the .env file accordingly.
  Additionally, you'll need to set up the required table structure in your Supabase project. Take a look at a few lessons from this [Crash Course](https://youtube.com/playlist?list=PL4cUxeGkcC9hUb6sHthUEwG7r9VDPBMKO) to learn and understand how to do that


## Activity 1 - Exploration ✨ 

Take a close look at the code project given, i.e., 
- [Vanilla Node.js API](/vanilla-nodejs)
- [Express.js API](/expressjs).
- [Next.js API Routes](/nextjs-apiroutes)
- [Next.js Server Actions](/nextjs-serveractions)
- [Supabase](/supabase)

Run the project and try it out to notice we can create APIs or use BaaS (Backend as a Service) differently.
Finally, write down the good and bad points of each method and when you think it's better to use one method over the other. Share your observations below.

```
📝 Share your answer here
```

## Activity 2 - Integration  💻 

Once you've familiarized yourself with all the approaches, attempt to create an API for the Car Rent Project.
Your task is to create a complete CRUD API for at least one model or schema (i.e., Car or User) using any of the above approaches.

🌟 **Bonus Challenge**: Take it a step further and create all versions using all the mentioned approaches. Feel free to explore and build all separate projects to practice 
and compare the functionalities of Vanilla Node.js, Express.js, Next.js API Routes, Next.js Server Actions, and Supabase.

```
🎯 Share the Project link here
```

```
🌟 Share the bonus Project 01 link here
🌟 Share the bonus Project 02 link here
🌟 Share the bonus Project 03 link here
🌟 Share the bonus Project 04 link here
```

**Note**: You can create a new project in the same repository. Set up a fresh folder for this activity project, and you're ready to get started!

## Activity 3 - Reflection 📚 

Let's take a moment to reflect on what you've learned so far through this activity. 
Take your time and conduct thorough research to answer the following questions thoughtfully. These questions are designed to reinforce your foundational knowledge on this topic and help you prepare for interviews. 
Avoid copy-pasting; instead, read, reread, and write each word in your own words. 

1. ❓ **Describe the core differences between the HTTP and HTTPS modules in Node.js. How would you set up an HTTPS server?**

   ```
   📝 Your answer here
   ```


2. ❓ **What is Express.js, and why is it commonly referred to as a "web application framework for Node.js"?
   Highlight the key features and advantages that Express.js brings to the development of web applications.**

   ```
   📝 Your answer here
   ```


3. ❓ **Describe the basic structure of an Express.js application. What are routes and how are they defined?
   How does middleware fit into the request-response cycle, and what purpose does it serve in Express.js?**

   ```
   📝 Your answer here
   ```


4. ❓ **Explain the purpose of serverless functions in the context of Next.js API routes. How do they impact scalability and deployment?**

   ```
   📝 Your answer here
   ```


5. ❓ **Explain the fundamental concept of Next.js Server Actions. How do they differ from standard API routes in Next.js?
   Provide a high-level overview of how Server Actions allow you to handle complex server-side logic efficiently in a Next.js application.**

   ```
   📝 Your answer here
   ```


6. ❓ **Provide an overview of Supabase and its main features.
   How does Supabase differ from traditional relational databases, and what advantages does it offer in terms of real-time functionality, authentication, and API generation?**

   ```
   📝 Your answer here
   ```

7. ❓ **Provide an overview of Supabase and its main features.
   How does Supabase differ from traditional relational databases, and what advantages does it offer in terms of real-time functionality, authentication, and API generation?**

   ```
   📝 Your answer here
   ```
   

8. ❓ **In a Supabase-powered application, how would you structure the database schema to handle different data entities, relationships, and constraints?
   Provide an example of designing a database schema for a blog platform that includes articles, authors, and comments.**

   ```
   📝 Your answer here
   ```


9. ❓ **Your team is developing a social media analytics dashboard that aggregates data from various social media platforms and presents insights to users. The backend needs to handle data processing, storage, and retrieval efficiently. Which backend technology would you use to build the analytics dashboard?
    Explain your decision-making process, highlighting the scalability, data processing capabilities, and data storage solutions provided by the chosen technology.**

   ```
   📝 Your answer here
   ```


11. ❓ **You're building a real-time chat application similar to Slack, where users can send messages, join channels, and receive instant notifications. The backend needs to handle message broadcasting, user presence updates, and message history storage.
    Which backend technology would you use for building the chat application's backend, and what factors make this technology suitable for managing real-time interactions and data storage?**

   ```
   📝 Your answer here
   ```
