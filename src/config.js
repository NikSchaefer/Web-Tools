
import express from './Images/backend/express.svg'
import next from './Images/backend/nextjs.svg'
import django from './Images/backend/django.svg'
import flask from './Images/backend/flask.svg'

import react from './Images/frontend/react.svg'
import vue from './Images/frontend/vue.svg'
import angular from './Images/frontend/angular.svg'

import bootstrap from './Images/css/bootstrap.svg'

import firebase from './Images/Auth/firebase.svg'

import aws from './Images/Hosting/aws.svg'
import azure from './Images/Hosting/azure.svg'
import heroku from './Images/Hosting/heroku.svg'
import googleCloud from './Images/Hosting/google-cloud.svg'


export const config = {
    homeInfo:
        [
            ['Analytics', 'analytics'],
            ['Authentication', 'auth'],
            ['Back End', 'backend'],
            ['Front End', 'frontend'],
            ['CSS Framework', 'css'],
            ['Hosting', 'hosting']
        ],

    tools: {
        analytics: {
            meta: {
                product: 'Analytics',
                columns: ['Product', 'Type'],
                path: 'analytics'
            },
            content: [
                {
                    name: 'Google Analytics',
                    img: firebase,
                    link: 'https://analytics.google.com/',
                    type: 'type'
                },
                {
                    name: 'Plausible',
                    img: firebase,
                    link: '#',
                    type: 'type'
                },
            ]
        },
        auth: {
            meta: {
                product: 'Authentication',
                columns: ['Product', 'Type'],
                path: 'auth'
            },
            content: [
                {
                    name: 'Firebase Auth',
                    img: firebase,
                    link: 'https://firebase.google.com/',
                    type: 'type',
                    free: true,
                    freeLimit:'No Limit',
                },
                {
                    name: 'Auth 0',
                    img: firebase,
                    link: 'https://auth0.com/',
                    type: 'type',
                    free: true,
                    freeLimit:'7000',
                },
            ]
        },
        backEnd: {
            meta: {
                product: 'Backend Frameworkds',
                columns: ['Product', 'Type'],
                path: 'backend'
            },
            content: [
                {
                    name: '',
                    img: express,
                    link: 'https://expressjs.com/',
                    type: 'Node.js'
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
        frontEnd: {
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
        css: {
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
            ]
        },
        hosting: {
            meta: {
                product: 'Hosting',
                columns: ['Product', 'Type'],
                path: 'hosting'
            },
            content: [
                {
                    name: 'Vercel',
                    img: firebase,
                    link: 'https://vercel.com/dashboard',
                    type: 'Jamstack',
                    free: true,
                    freeLimit: '100 GB',
                },
                {
                    name: 'Heroku',
                    img: heroku,
                    link: 'https://heroku.com',
                    type: 'Full Server',
                    free: true,
                    freeLimit: 'Low performance',
                },
                {
                    name: 'AWS',
                    img: aws,
                    link: 'https://aws.amazon.com/',
                    type: 'Full Cloud',
                    free: true,
                    freeLimit: 'Low performance',
                },
                {
                    name: 'Google Cloud',
                    img: googleCloud,
                    link: 'https://cloud.google.com/',
                    type: 'Full Cloud',
                    free: true,
                    freeLimit: 'Low performance',
                },
                {
                    name: 'Azure',
                    img: azure,
                    link: 'https://azure.microsoft.com/',
                    type: 'Full Cloud',
                    free: true,
                    freeLimit: 'Low performance',
                },
            ]
        },
    }
}