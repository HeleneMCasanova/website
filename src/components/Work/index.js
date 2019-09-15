import React , { Component } from 'react';
import LeftPanel from '../Home/LeftPanel.js';
import Fade from 'react-reveal/Fade';

import './work.css';
import knightwriter from '../../images/kw.PNG';
import escape from '../../images/escape.png';
import enigmamachine from '../../images/enigma.jpg';
import pianosimulator from '../../images/piano_sim.png';
import bookcover from '../../images/book_cover.jpg';


class Work extends Component {
    render = () => {
        return (
            <div>
                <LeftPanel />
                <br></br><br></br>

                <div className = "right-panel">
                    <p id = "programming-title">Programming</p>
                    <div style = {{padding:"2%"}}>
                        <Fade left>
                            <div id = "work-1">
                                <p className = "work-title">Knight Writer</p>

                                <img src = {knightwriter} alt ="something went wrong." id = "kw-image"/>

                                <p className = "work-text">Knight Writer’s inception came out of a desire to build a tool for novel writing and for those who do not know where to begin when it comes to this daunting task. The issue with the existing programs, such as Scrivener, is that there are no online tools that encompass everything that one would need to plot a novel. Knight Writer solves this problem by combining all the tools that one would use to plot out a novel, such as character mapping or “the index card method” and is all be accessible online rather than as a downloadable program.</p>

                                <p className = "work-link"><a href = "https://knight-writer.web.app/" style = {{float:'right'}}>Go to the website here</a></p>

                            </div>
                        </Fade>
                    
                        <Fade right>
                            <div id = "work-2">
                                <p className = "work-title">Escape</p>
                                
                                <img src = {escape} alt ="something went wrong." id = "escape-image"/>

                                <p className = "work-text">This is a little text based adventure game that uses the users previous choices to influence the outcome of the game. This was created for a game jam.</p>

                                <p className = "work-link"><a href = "https://github.com/HeleneMCasanova/Escape" style = {{float:'right'}}>Learn More</a></p>
                            </div>
                        </Fade>

                        <Fade left>
                            <div id = "work-3">
                                <p className = "work-title">Enigma Machine</p>

                                <img src = {enigmamachine} alt ="something went wrong." id = "enigma-image"/>

                                <p className = "work-text">This is a basic implementation of an Enigma Machine in Java. You can download the executable or look at the actual source code of the project. This project was created for my Network Programming course.</p>

                                <p className = "work-link"><a href = "https://github.com/HeleneMCasanova/Enigma-Machine" style = {{float:'right'}}>Learn More</a></p>
                            </div>
                        </Fade>

                        <Fade right>
                            <div id = "work-2">
                                <p className = "work-title">Piano Simulator</p>
                                
                                <img src = {pianosimulator} alt ="something went wrong." id = "piano-image"/>

                                <p className = "work-text">This was the final project for my Computer Science II class. This was the largest project of my freshman year and one I am still really proud of. This was written in Java using Javafx.</p>

                                <p className = "work-link"><a href = "https://github.com/HeleneMCasanova/PianoSimulator" style = {{float:'right'}}>Learn More</a></p>
                            </div>
                        </Fade>
                    </div>

                    <p id = "programming-title">Writing</p>

                    <div style = {{padding:"2%"}}>
                        <Fade left>
                            <div id = "work-1">
                                <p className = "work-title">Journal 1: Belle</p>

                                <img src = {bookcover} alt ="something went wrong." id = "book-image"/>

                                <p className = "work-text">They write journals, it's what their family does. Belin is introduced to a family she never knew she had and finds out the family secret her mother has kept hidden from her for her entire life. She recounts her journey of self-discovery and frustrations as well. Although she was hesitant at first, Belin realized that keep a journal is a way to honor her families legacy and keep the tradition alive through her. When she realizes who she really is, there is nothing but trouble around every corner.</p>

                                <p className = "work-link"><a href = "https://amzn.to/2PXB3bN" style = {{float:'right'}}>Buy My Book!</a></p>

                            </div>
                        </Fade>
                    </div>

                </div>
                
            </div>
        );
    }
}

export default Work;