import React, { Component } from 'react';

class RightPanel extends Component {
    render = () => {
        return(
            <div className = "right-panel">
                <p className = "title-about">Helene Casanova</p>

                <p style={{color:'gray'}}>writer && programmer && author</p>
                <p>I am a student, a programming enthusiest, a writer, an innovator and mostly a self-starter. This is my work, programming is my life and writing is my passion (a very time consuming one). Overall, I wanted a place to display what I work so hard on everyday and what I continue to work on, whether it be book I write, the programs I've written or the new hobby I've started.</p>

                <p>I'm always working on something new. My passion is computer security, cryptography and penetration testing. Everyday, I do something to further my knowledge on these subjects through books, online courses, writing the actual programs and testing.</p>

                <p className = "title-about">a quick q && a</p>

                <p  style={{color:'gray'}}>What am I doing right now?</p>
                <p>I just graduated college! I am currently studying for some cybersecurity certificates and jobhunting as well. I also just start a blog so, head on over there when you finish up here.</p>

                <p  style={{color:'gray'}}>Any programming projects in the works?</p>
                <p>Yes! During my senior year, I had the opportunity to work on two projects which incorporate many of my interests. The first is Knight Writer, which is an online tool to help aspiring short story writers and novelists to plan out their next writing project. </p>

                <p  style={{color:'gray'}}>Any writing projects?</p>
                <p>I'm currently planning for NaNoWriMo 2019. It's a piece I've been planning for about 2 years and I can't wait to see my plans finally come to fruition. I keeping the details of it on the low right now, but I've named it <i>Project Purple</i>. I'll be sure to update once it gets closer to November.</p>
                
            </div>
        )
    };
}

export default RightPanel;