import React from 'react';
import '../styles/project.css';
import Project from './project';
import pineapple from '../util/pineapple.png';
import quiz from '../util/musicQuiz.png';
import quiz2 from '../util/quiz.png';

const pineappleMotive = {
    title: 'Pineapple Motivator',
    url: 'https://diangigrich.github.io/PineappleMotivator/pages/userForm.html',
    summary: 'A task completing website, rewarding the user a youtube search.',
    alt: 'Pineappple Motivator screenshot',
    img: pineapple,
}

const musicQuiz = {
    title: 'Music Quiz Game',
    url: 'https://github.com/itsDavidK/music-quiz-game',
    summary: "A game of higher or lower from YouTube's music section.",
    alt: 'Music Quiz Game screenshot',
    img: quiz
}

const quizShort = {
    title: 'Quiz Challenge',
    url: 'https://itsdavidk.github.io/quiz-challenge',
    summary: 'A short quirky quiz',
    alt: 'Quiz Challenge screenshot',
    img: quiz2
}

function Projects() {
    return (
        <div className={'allProj'}>

            <Project title={pineappleMotive.title} url={pineappleMotive.url} summary={pineappleMotive.summary} img={pineappleMotive.img} alt={pineappleMotive.alt} />
            <Project title={musicQuiz.title} url={musicQuiz.url} summary={musicQuiz.summary} img={musicQuiz.img} alt={musicQuiz.alt} />
            <Project title={quizShort.title} url={quizShort.url} summary={quizShort.summary} img={quizShort.img} alt={quizShort.alt} />

        </div>
    )
}

export default Projects;