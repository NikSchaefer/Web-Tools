
import express from './Images/backend/express.svg'
import next from './Images/backend/nextjs.svg'
import django from './Images/backend/django.svg'
import flask from './Images/backend/flask.svg'

import react from './Images/frontend/react.svg'
import vue from './Images/frontend/vue.svg'
import angular from './Images/frontend/angular.svg'

import bootstrap from './Images/css/bootstrap.svg'

import firebase from './Images/Auth/firebase.svg'


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
                product: 'Title',
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
                    name: 'Next JS',
                    img: firebase,
                    link: '#',
                    type: 'type'
                },
                {
                    name: 'Next JS',
                    img: firebase,
                    link: '#',
                    type: 'type'
                },
            ]
        },
        auth: {
            meta: {
                product: 'Title',
                columns: ['Product', 'Type'],
                path: 'auth'
            },
            content: [
                {
                    name: 'Express',
                    img: firebase,
                    link: '#',
                    type: 'type'
                },
                {
                    name: 'Next JS',
                    img: firebase,
                    link: '#',
                    type: 'type'
                },
                {
                    name: 'Next JS',
                    img: firebase,
                    link: '#',
                    type: 'type'
                },
            ]
        },
        backEnd: {
            meta: {
                product: 'Title',
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
                product: 'Title',
                columns: ['Product', 'Size'],
                path: 'frontend'
            },
            content: [
                {
                    name: 'React',
                    img: react,
                    link: '#',
                    type: '42 kB'
                },
                {
                    name: 'Vue',
                    img: vue,
                    link: '#',
                    type: '20 kB'
                },
                {
                    name: 'Angular',
                    img: angular,
                    link: '#',
                    type: 'Depends'
                },
            ]
        },
        css: {
            meta: {
                product: 'Title',
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
                product: 'Title',
                columns: ['Product', 'Size'],
                path: 'hosting'
            },
            content: [
                {
                    name: 'Vercel',
                    img: firebase,
                    link: '#',
                    type: '42 kB'
                },
                {
                    name: 'AWS',
                    img: firebase,
                    link: '#',
                    type: '20 kB'
                },
                {
                    name: 'Google Cloud',
                    img: firebase,
                    link: '#',
                    type: 'Depends'
                },
                {
                    name: 'Azure',
                    img: firebase,
                    link: '#',
                    type: 'Depends'
                },
            ]
        },
    }
}