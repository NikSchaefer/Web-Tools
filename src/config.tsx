import express from './Images/backend/express.svg'
import next from './Images/backend/nextjs.svg'
import django from './Images/backend/django.svg'
import flask from './Images/backend/flask.svg'

import react from './Images/frontend/react.svg'
import vue from './Images/frontend/vue.svg'
import angular from './Images/frontend/angular.svg'

import bootstrap from './Images/css/bootstrap.svg'
import tailwind from './Images/css/tailwind.svg'
import sass from './Images/css/sass.svg'

import firebase from './Images/Auth/firebase.svg'
import auth0 from './Images/Auth/auth0.svg'

import vercel from './Images/Hosting/vercel.svg'
import aws from './Images/Hosting/aws.svg'
import azure from './Images/Hosting/azure.svg'
import heroku from './Images/Hosting/heroku.svg'
import googleCloud from './Images/Hosting/google-cloud.svg'

import googleAnalytics from './Images/Analytics/google-analytics.svg'
import plausible from './Images/Analytics/plausible.jpg'

import free from './Images/Free/check.svg'
import notFree from './Images/Free/low.svg'

import fauna from './Images/Database/fauna.png'
import mongo from './Images/Database/mongodb.svg'

export interface meta {
    product: string,
    columns: string[],
    path: string,
}
export interface content {
    name: string,
    img: any,
    link: string,
    type: string,
    free?: any,
    freeLimit?: string,
}
export interface tool {
    meta: meta,
    content: content[]
}

export interface configType {
    homeInfo: string[][],
    tools: tool[]
}



export const config: configType = {
    homeInfo: [
        ['Analytics', 'analytics'],
        ['Authentication', 'auth'],
        ['Database', 'database'],
        ['Front End', 'frontend'],
        ['Back End', 'backend'],
        ['CSS Framework', 'css'],
        ['Hosting', 'hosting'],
    ],
    tools: [
        {
            meta: {
                product: 'Analytics',
                columns: ['Product', '', "Free Tier", 'Free Limit'],
                path: 'analytics'
            },
            content: [
                {
                    name: 'Google Analytics',
                    img: googleAnalytics,
                    link: 'https://analytics.google.com/',
                    type: '',
                    free: free,
                    freeLimit: '100 Sites',
                },
                {
                    name: 'Plausible',
                    img: plausible,
                    link: 'https://plausible.io/',
                    type: '',
                    free: notFree,
                    freeLimit: 'N/A',
                },
            ]
        },
        {
            meta: {
                product: 'Authentication',
                columns: ['Product', 'Type', "Free Tier", 'Free Limit'],
                path: 'auth'
            },
            content: [
                {
                    name: 'Firebase Auth',
                    img: firebase,
                    link: 'https://firebase.google.com/',
                    type: 'Email/Password',
                    free: free,
                    freeLimit: 'No Limit',
                },
                {
                    name: 'Auth 0',
                    img: auth0,
                    link: 'https://auth0.com/',
                    type: 'Email/Password',
                    free: free,
                    freeLimit: '7000',
                },
            ]
        },
        {
            meta: {
                product: 'Backend Frameworks',
                columns: ['Product', 'Type'],
                path: 'backend'
            },
            content: [
                {
                    name: '',
                    img: express,
                    link: 'https://expressjs.com/',
                    type: 'Node.js',
                },
                {
                    name: 'Next JS',
                    img: next,
                    link: 'https://nextjs.org/',
                    type: 'React'
                },
                {
                    name: 'Flask',
                    img: flask,
                    link: 'https://flask.palletsprojects.com/en/1.1.x/',
                    type: 'Python'
                },
                {
                    name: 'Django',
                    img: django,
                    link: 'https://www.djangoproject.com/',
                    type: 'Python'
                },
            ]
        },
        {
            meta: {
                product: 'Frontend Frameworks',
                columns: ['Product', 'Size'],
                path: 'frontend'
            },
            content: [
                {
                    name: 'React',
                    img: react,
                    link: 'https://reactjs.org/',
                    type: '42 kB'
                },
                {
                    name: 'Vue',
                    img: vue,
                    link: 'https://vuejs.org/',
                    type: '20 kB'
                },
                {
                    name: 'Angular',
                    img: angular,
                    link: 'https://angular.io/',
                    type: 'Depends'
                },
            ]
        },
        {
            meta: {
                product: 'Database',
                columns: ['Product', 'Type', "Free Tier", 'Free Limit'],
                path: 'database'
            },
            content: [
                {
                    name: 'Cloud Firestore',
                    img: firebase,
                    link: 'https://firebase.google.com/',
                    type: 'NoSQL',
                    free: free,
                    freeLimit: '1 GiB',
                },
                {
                    name: 'MongoDB',
                    img: mongo,
                    link: 'https://www.mongodb.com/',
                    type: 'NoSQL',
                    free: free,
                    freeLimit: '512 MB',
                },
                {
                    name: 'Fauna',
                    img: fauna,
                    link: 'https://fauna.com/',
                    type: 'NoSQL',
                    free: free,
                    freeLimit: '100 MB',
                },
                {
                    name: 'Heroku',
                    img: heroku,
                    link: 'https://heroku.com/',
                    type: 'SQL',
                    free: free,
                    freeLimit: '10k Rows',
                },
                {
                    name: 'AWS',
                    img: aws,
                    link: 'https://aws.amazon.com/',
                    type: 'Depends on Service',
                    free: free,
                    freeLimit: 'Depends on Service',
                },
                {
                    name: 'Google Cloud SQL',
                    img: googleCloud,
                    link: 'https://cloud.google.com/',
                    type: 'SQL',
                    free: notFree,
                    freeLimit: 'N/A',
                },
                {
                    name: 'Microsoft Azure SQL',
                    img: azure,
                    link: 'https://azure.microsoft.com/',
                    type: 'SQL',
                    free: notFree,
                    freeLimit: 'N/A',
                },
            ]
        },
        {
            meta: {
                product: 'CSS Frameworks',
                columns: ['Framework', 'JS'],
                path: 'css'
            },
            content: [
                {
                    name: 'Bootstrap',
                    img: bootstrap,
                    link: 'https://getbootstrap.com/',
                    type: 'JS included'
                },
                {
                    name: 'Tailwind CSS',
                    img: tailwind,
                    link: 'https://tailwindcss.com/',
                    type: 'JS Included'
                },
                {
                    name: 'Sass',
                    img: sass,
                    link: 'https://sass-lang.com/',
                    type: 'JS Included'
                },
            ]
        },
        {
            meta: {
                product: 'Hosting',
                columns: ['Product', 'Type', "Free Tier", 'Free Limit'],
                path: 'hosting'
            },
            content: [
                {
                    name: 'Vercel',
                    img: vercel,
                    link: 'https://vercel.com/dashboard',
                    type: 'Jamstack',
                    free: free,
                    freeLimit: '100 GB',
                },
                {
                    name: 'Heroku',
                    img: heroku,
                    link: 'https://heroku.com',
                    type: 'Full Server',
                    free: free,
                    freeLimit: 'Low performance',
                },
                {
                    name: 'AWS',
                    img: aws,
                    link: 'https://aws.amazon.com/',
                    type: 'Full Cloud',
                    free: free,
                    freeLimit: 'Low performance',
                },
                {
                    name: 'Google Cloud',
                    img: googleCloud,
                    link: 'https://cloud.google.com/',
                    type: 'Full Cloud',
                    free: free,
                    freeLimit: 'Low performance',
                },
                {
                    name: 'Microsoft Azure',
                    img: azure,
                    link: 'https://azure.microsoft.com/',
                    type: 'Full Cloud',
                    free: free,
                    freeLimit: 'Low performance',
                },
            ]
        },
    ]
}