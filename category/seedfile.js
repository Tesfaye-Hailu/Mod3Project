// "seed files" simple put lots of data into a database (usually at the start)

// connect to MongoDB
require('dotenv').config()
require('../config/database.js');

// use our Models
const Category = require("../models/Category.js");

const populateDatabase = async () => {
    const categories = [
    {name: 'Data Science ', sortOrder: 10},
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
      await Category.deleteMany()

    //   put categories in the database
      const categoriesFromDB = await Category.insertMany(categories);
      console.log(categoriesFromDB);

      const items = [ 
      {name: 'Introduction to Data Science', category: categories[1].name},
      {name: 'Data Visualization', category: categories[1].name},
      {name: 'Statistical Analysis with Python', category: categories[1].name},
      {name: 'Machine Learning Algorithms', category: categories[1].name},
      {name: 'Big Data Analytics', category: categories[1].name},
      {name: 'Deep Learning', category: categories[1].name},
      {name: 'Natural Language Processing', category: categories[1].name},
      {name: 'Time Series Analysis', category: categories[1].name},
      {name: 'Data Engineering', category: categories[1].name},
      {name: 'Data Ethics and Privacy', category: categories[1].name},
      {name: 'Data Science Capstone Project', category: categories[1].name},
      {name: 'Applied Data Science', category: categories[2].name },
      
      
      {name:' HTML and CSS Fundamentals', category: categories[2].name },
      {name: 'JavaScript Basics', category: categories[2].name },
      {name: 'Responsive Web Design', category: categories[2].name },
      {name: 'Front-end Frameworks ( React, Angular, Vue.js)', category: categories[2].name },
      {name: 'Back-end Development with Node.js', category: categories[2].name },
      {name: 'Database Integration and SQL', category: categories[2].name },
      {name:' Web Security and Authentication', category: categories[2].name },
      {name: 'RESTful API Development', category: categories[2].name },
      {name: 'Web Performance Optimization', category: categories[2].name },
      {name: 'Web Accessibility', category: categories[2].name },
      {name: 'E-commerce Website Development', category: categories[2].name },
      {name: 'Mobile App Development with Web Technologies', category: categories[2].name },
      {name: 'Network Administration', category: categories[2].name },
      
      {name: 'Introduction to Networking', category: categories[3].name}, 
      {name: 'Network Protocols and Architecture', category: categories[3].name },
      {name:' Routing and Switching', category: categories[3].name },
      {name: 'Network Security', category: categories[3].name },
      {name: 'Wireless Networking', category: categories[3].name },
      {name: 'Network Troubleshooting and Diagnostics', category: categories[3].name },
      {name: 'Network Administration Tools and Automation', category: categories[3].name },
      {name: 'Virtualization and Network Virtualization', category: categories[3].name },
      {name: 'Cloud Networking', category: categories[3].name },
      {name:' Network Design and Implementation', category: categories[3].name },
      {name:'Network Monitoring and Management', category: categories[3].name },
      {name:' Cyber Threat Intelligence and Defense',category: categories[3].name },
      {name: 'Cloud Computing', category: categories[3].name },
      
      {name:' Introduction to Cloud Computing', category: categories[4].name },
      {name: 'Cloud Infrastructure and Services', category: categories[4].name },
      {name:' Cloud Security and Compliance', category: categories[4].name },
      {name: 'Cloud Deployment Models', category: categories[4].name}, 
      {name: 'Serverless Computing', category: categories[4].name },
      {name: 'Cloud Storage and Database Solutions', category: categories[4].name },
      {name: 'DevOps in the Cloud', category: categories[4].name },
      {name:' Cloud Cost Management and Optimization', category: categories[4].name },
      {name: 'Cloud Networking and Connectivity', category: categories[4].name },
      {name: 'Containerization and Orchestration', category: categories[4].name },
      {name: 'Cloud Governance and Best Practices', category: categories[4].name },
      {name: 'Cloud Migration Strategies and Techniques', category: categories[4].name },
      {name: 'Database Management', category: categories[4].name },
      
      {name:' Introduction to Databases', category: categories[5].name },
      {name: 'Relational Database Management Systems', category: categories[5].name },
      {name: 'SQL Fundamentals', category: categories[5].name },
      {name: 'Database Design and Normalization', category: categories[5].name },
      {name: 'Database Administration and Performance Tuning', category: categories[5].name },
      {name:' Data Warehousing and Business Intelligence', category: categories[5].name}, 
      {name: 'NoSQL Databases', category: categories[5].name },
      {name: 'Big Data Management and Analytics', category: categories[5].name },
      {name: 'Data Integration and ETL' , category: categories[5].name },
      {name:' Data Privacy and Compliance', category: categories[5].name },
      {name: 'Data Governance and Master Data Management', category: categories[5].name },
      {name: 'Advanced Database Topics' , category: categories[5].name },
      {name: 'Software Engineering', category: categories[5].name },
      
      {name: 'Introduction to Software Engineering', category: categories[6].name },
      {name: 'Object-Oriented Programming', category: categories[6].name },
      {name: 'Software Development Life Cycle', category: categories[6].name },
      {name: 'Agile Software Development', category: categories[6].name },
      {name: 'Test-Driven Development', category: categories[6].name },
      {name: 'Software Design Patterns', category: categories[6].name },
      {name: 'Software Quality Assurance and Testing', category: categories[6].name },
      {name:' Version Control with Git', category: categories[6].name },
      {name: 'Continuous Integration and Deployment', category: categories[6].name },
      {name: 'Software Project Management', category: categories[6].name },
      {name: 'Software Requirements Engineering', category: categories[6].name },
      {name: 'Software Maintenance and Evolution', category: categories[6].name },
      
      
      {name: 'Introduction to Cyber Security', category: categories[7].name },
      {name: 'Network Security Fundamentals', category: categories[7].name },
      {name: 'Secure Coding Practices', category: categories[7].name },
      {name: 'Ethical Hacking and Penetration Testing', category: categories[7].name },
      {name: 'Cryptography and Encryption', category: categories[7].name}, 
      {name: 'Incident Response and Threat Hunting', category: categories[7].name },
      {name: 'Security Operations and SIEM', category: categories[7].name },
      {name: 'Web Application Security', category: categories[7].name },
      {name:' Mobile Security', category: categories[7].name },
      {name: 'Cloud Security', category: categories[7].name },
      {name:' Security Risk Management', category: categories[7].name },
      {name:' Cybersecurity Governance and Compliance', category: categories[7].name },
                  
      {name: 'Operating Systems and Troubleshooting', category: categories[8].name },
      {name: 'Hardware and Software Installation and Configuration', category: categories[8].name}, 
      {name: 'Networking Fundamentals', category: categories[8].name },
      {name: 'Help Desk and Customer Support Skills', category: categories[8].name },
      {name: 'Active Directory and User Management', category: categories[8].name },
      {name: 'Troubleshooting Mobile Devices', category: categories[8].name}, 
      {name: 'Data Backup and Recovery', category: categories[8].name },
      {name:' IT Service Management ', category: categories[8].name },
      {name: 'Information Technology Infrastructure Library', category: categories[8].name },
      {name: 'Remote Support and Desktop Sharing', category: categories[8].name },
      {name: 'IT Support Ticketing Systems and Incident Management', category: categories[8].name },
      
      
      {name: 'Introduction to Machine Learning', category: categories[9].name },
      {name: 'Supervised Learning Algorithms', category: categories[9].name },
      {name: 'Unsupervised Learning Algorithms' , category: categories[9].name },
      {name: 'Deep Learning and Neural Networks', category: categories[9].name },
      {name:' Reinforcement Learning', category: categories[9].name}, 
      {name: 'Feature Engineering and Selection', category: categories[9].name },
      {name: 'Model Evaluation and Validation', category: categories[9].name}, 
      {name: 'Machine Learning with Python', category: categories[9].name },
      {name:' Natural Language Processing and Text Analytics', category: categories[9].name}, 
      {name: 'Time Series Forecasting', category: categories[9].name },
      {name: 'Machine Learning Deployment and Scalability', category: categories[9].name },
      {name: 'Ethical Considerations in Machine Learning', category: categories[9].name },
      
      
      {name: 'Introduction to Artificial Intelligence', category: categories[10].name },
      {name: 'Knowledge Representation and Reasoning', category: categories[10].name}, 
      {name: 'Expert Systems', category: categories[10].name}, 
      {name: 'Planning and Scheduling', category: categories[10].name}, 
      {name: 'Computer Vision', category: categories[10].name },
      {name: 'Natural Language Processing and Understanding', category: categories[10].name },
      {name: 'Robotics and Autonomous Systems', category: categories[10].name },
      {name: 'Machine Learning for AI', category: categories[10].name },
      {name: 'Deep Learning for AI', category: categories[10].name}, 
      {name: 'Ethics in AI', category: categories[10].name },
      {name: 'AI and Human-Computer Interaction', category: categories[10].name },
      {name: 'AI Applications', category: categories[10].name}
    
      ]
    await Item.deleteMany()
      const itemsFromDB = await Item.insertMany(items)
}
populateDatabase()
