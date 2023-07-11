// "seed files" simple put lots of data into a database (usually at the start)

// connect to MongoDB
require('dotenv').config()
require('../config/database.js');


const Course = require('../models/Course.js');
// use our Models
const Department = require("../models/Department.js");

const populateDatabase = async () => {
    const departmentsData = [
    {name: 'Data Science', sortOrder: 10},
    {name: 'Web Development', sortOrder: 20},
    {name: 'Network Administration', sortOrder: 30},
    {name: 'Cloud Computing', sortOrder: 40},
    {name: 'Database Manaement', sortOrder: 50},
    {name: 'Software Engineering', sortOrder: 60},
    {name: 'Cyber Security', sortOrder: 70},
    {name: 'IT Support', sortOrder: 80},
    {name: 'Machine learning', sortOrder: 90},
    {name: 'Artificial Intelligence', sortOrder: 100}
      ]
      await Department.deleteMany()

    //   put departments in the database
      const departments= await Department.insertMany(departmentsData);
      console.log(departments);

      const items = [ 
      {name: 'Introduction to Data Science', department: departments[1].name},
      {name: 'Data Visualization', department: departments[1].name},
      {name: 'Statistical Analysis with Python', department: departments[1].name},
      {name: 'Machine Learning Algorithms', department: departments[1].name},
      {name: 'Big Data Analytics', department: departments[1].name},
      {name: 'Deep Learning', department: departments[1].name},
      {name: 'Natural Language Processing', department: departments[1].name},
      {name: 'Time Series Analysis', department: departments[1].name},
      {name: 'Data Engineering', department: departments[1].name},
      {name: 'Data Ethics and Privacy', department: departments[1].name},
      {name: 'Data Science Capstone Project', department: departments[1].name},
      {name: 'Applied Data Science', department: departments[2].name },
      
      
      {name:' HTML and CSS Fundamentals', department: departments[2].name },
      {name: 'JavaScript Basics', department: departments[2].name },
      {name: 'Responsive Web Design', department: departments[2].name },
      {name: 'Front-end Frameworks ( React, Angular, Vue.js)', department: departments[2].name },
      {name: 'Back-end Development with Node.js', department: departments[2].name },
      {name: 'Database Integration and SQL', department: departments[2].name },
      {name:' Web Security and Authentication', department: departments[2].name },
      {name: 'RESTful API Development', department: departments[2].name },
      {name: 'Web Performance Optimization', department: departments[2].name },
      {name: 'Web Accessibility', department: departments[2].name },
      {name: 'E-commerce Website Development', department: departments[2].name },
      {name: 'Mobile App Development with Web Technologies', department: departments[2].name },
      {name: 'Network Administration', department: departments[2].name },
      
      {name: 'Introduction to Networking', department: departments[3].name}, 
      {name: 'Network Protocols and Architecture', department: departments[3].name },
      {name:' Routing and Switching', department: departments[3].name },
      {name: 'Network Security', department: departments[3].name },
      {name: 'Wireless Networking', department: departments[3].name },
      {name: 'Network Troubleshooting and Diagnostics', department: departments[3].name },
      {name: 'Network Administration Tools and Automation', department: departments[3].name },
      {name: 'Virtualization and Network Virtualization', department: departments[3].name },
      {name: 'Cloud Networking', department: departments[3].name },
      {name:' Network Design and Implementation', department: departments[3].name },
      {name:'Network Monitoring and Management', department: departments[3].name },
      {name:' Cyber Threat Intelligence and Defense',department: departments[3].name },
      {name: 'Cloud Computing', department: departments[3].name },
      
      {name:' Introduction to Cloud Computing', department: departments[4].name },
      {name: 'Cloud Infrastructure and Services', department: departments[4].name },
      {name:' Cloud Security and Compliance', department: departments[4].name },
      {name: 'Cloud Deployment Models', department: departments[4].name}, 
      {name: 'Serverless Computing', department: departments[4].name },
      {name: 'Cloud Storage and Database Solutions', department: departments[4].name },
      {name: 'DevOps in the Cloud', department: departments[4].name },
      {name:' Cloud Cost Management and Optimization', department: departments[4].name },
      {name: 'Cloud Networking and Connectivity', department: departments[4].name },
      {name: 'Containerization and Orchestration', department: departments[4].name },
      {name: 'Cloud Governance and Best Practices', department: departments[4].name },
      {name: 'Cloud Migration Strategies and Techniques', department: departments[4].name },
      {name: 'Database Management', department: departments[4].name },
      
      {name:' Introduction to Databases', department: departments[5].name },
      {name: 'Relational Database Management Systems', department: departments[5].name },
      {name: 'SQL Fundamentals', department: departments[5].name },
      {name: 'Database Design and Normalization', department: departments[5].name },
      {name: 'Database Administration and Performance Tuning', department: departments[5].name },
      {name:' Data Warehousing and Business Intelligence', department: departments[5].name}, 
      {name: 'NoSQL Databases', department: departments[5].name },
      {name: 'Big Data Management and Analytics', department: departments[5].name },
      {name: 'Data Integration and ETL' , department: departments[5].name },
      {name:' Data Privacy and Compliance', department: departments[5].name },
      {name: 'Data Governance and Master Data Management', department: departments[5].name },
      {name: 'Advanced Database Topics' , department: departments[5].name },
      {name: 'Software Engineering', department: departments[5].name },
      
      {name: 'Introduction to Software Engineering', department: departments[6].name },
      {name: 'Object-Oriented Programming', department: departments[6].name },
      {name: 'Software Development Life Cycle', department: departments[6].name },
      {name: 'Agile Software Development', department: departments[6].name },
      {name: 'Test-Driven Development', department: departments[6].name },
      {name: 'Software Design Patterns', department: departments[6].name },
      {name: 'Software Quality Assurance and Testing', department: departments[6].name },
      {name:' Version Control with Git', department: departments[6].name },
      {name: 'Continuous Integration and Deployment', department: departments[6].name },
      {name: 'Software Project Management', department: departments[6].name },
      {name: 'Software Requirements Engineering', department: departments[6].name },
      {name: 'Software Maintenance and Evolution', department: departments[6].name },
      
      
      {name: 'Introduction to Cyber Security', department: departments[7].name },
      {name: 'Network Security Fundamentals', department: departments[7].name },
      {name: 'Secure Coding Practices', department: departments[7].name },
      {name: 'Ethical Hacking and Penetration Testing', department: departments[7].name },
      {name: 'Cryptography and Encryption', department: departments[7].name}, 
      {name: 'Incident Response and Threat Hunting', department: departments[7].name },
      {name: 'Security Operations and SIEM', department: departments[7].name },
      {name: 'Web Application Security', department: departments[7].name },
      {name:' Mobile Security', department: departments[7].name },
      {name: 'Cloud Security', department: departments[7].name },
      {name:' Security Risk Management', department: departments[7].name },
      {name:' Cybersecurity Governance and Compliance', department: departments[7].name },
                  
      {name: 'Operating Systems and Troubleshooting', department: departments[8].name },
      {name: 'Hardware and Software Installation and Configuration', department: departments[8].name}, 
      {name: 'Networking Fundamentals', department: departments[8].name },
      {name: 'Help Desk and Customer Support Skills', department: departments[8].name },
      {name: 'Active Directory and User Management', department: departments[8].name },
      {name: 'Troubleshooting Mobile Devices', department: departments[8].name}, 
      {name: 'Data Backup and Recovery', department: departments[8].name },
      {name:' IT Service Management ', department: departments[8].name },
      {name: 'Information Technology Infrastructure Library', department: departments[8].name },
      {name: 'Remote Support and Desktop Sharing', department: departments[8].name },
      {name: 'IT Support Ticketing Systems and Incident Management', department: departments[8].name },
      
      
      {name: 'Introduction to Machine Learning', department: departments[9].name },
      {name: 'Supervised Learning Algorithms', department: departments[9].name },
      {name: 'Unsupervised Learning Algorithms' , department: departments[9].name },
      {name: 'Deep Learning and Neural Networks', department: departments[9].name },
      {name:' Reinforcement Learning', department: departments[9].name}, 
      {name: 'Feature Engineering and Selection', department: departments[9].name },
      {name: 'Model Evaluation and Validation', department: departments[9].name}, 
      {name: 'Machine Learning with Python', department: departments[9].name },
      {name:' Natural Language Processing and Text Analytics', department: departments[9].name}, 
      {name: 'Time Series Forecasting', department: departments[9].name },
      {name: 'Machine Learning Deployment and Scalability', department: departments[9].name },
      {name: 'Ethical Considerations in Machine Learning', department: departments[9].name },
      
      
      {name: 'Introduction to Artificial Intelligence', department: departments[0].name },
      {name: 'Knowledge Representation and Reasoning', department: departments[0].name}, 
      {name: 'Expert Systems', department: departments[0].name}, 
      {name: 'Planning and Scheduling', department: departments[0].name}, 
      {name: 'Computer Vision', department: departments[0].name },
      {name: 'Natural Language Processing and Understanding', department: departments[0].name },
      {name: 'Robotics and Autonomous Systems', department: departments[0].name },
      {name: 'Machine Learning for AI', department: departments[0].name },
      {name: 'Deep Learning for AI', department: departments[0].name}, 
      {name: 'Ethics in AI', department: departments[0].name },
      {name: 'AI and Human-Computer Interaction', department: departments[0].name },
      {name: 'AI Applications', department: departments[0].name}
    
      ]
    await Course.deleteMany()
      const itemsFromDB = await Course.insertMany(items)
}
populateDatabase()
