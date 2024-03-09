a=[0];
        var lander=document.getElementById("leo")
        var alltime=document.getElementById("as")
        var cs=document.getElementById("cs")
        var nosound=document.getElementById("nosound")
        var sound=document.getElementById("sound")
        var leo=document.getElementById("leo")
        var main=document.getElementById("main")
        var darkmode=document.getElementById("dark")
        var number=document.getElementById("num")
        var totalscore=10
        var s=document.getElementById("score")
        var reaction=document.getElementById("revid")
        var lost=document.getElementById("lost")
        var randnum=Math.ceil(Math.random()*10)
        var currentscore=0;
        var play=0
        var win=0
        lander.src="leo.mp4"
        lander.play()
        console.log(randnum)
        function reload(){
            if(play==0){
                main.style.boxShadow="inset 0px 0px 0px black"
                lost.textContent="Ratata!"
                a.push(currentscore)
                lander.style.opacity="100%"
                reaction.src="none"
                c=Math.max(...a)
                cs.textContent=""
                currentscore=0
                sound.setAttribute("class","unmute")
                nosound.setAttribute("class","unmute")
                leo.muted=false
                totalscore=10
                s.textContent="Chances Left:"+totalscore
            }
            else{
                main.style.boxShadow="inset 0px 0px 0px black"
                lost.textContent="Ratata!"
                a.push(currentscore)
                lander.style.opacity="100%"
                reaction.src="none"
                c=Math.max(...a)
                alltime.textContent="All Time Highest Score:"+c
                cs.textContent=""
                currentscore=0
                sound.setAttribute("class","unmute")
                nosound.setAttribute("class","unmute")
                leo.muted=false
                totalscore=10
                s.textContent="Chances Left:"+totalscore
            }
        }
        function winner(){
            currentscore=currentscore+100
            cs.textContent="Current Score:"+currentscore
            win=1
            play=1
        }
        function losser(){
            if (win==0){
                cs.textContent="Current Score:0"
            }
            else{
                cs.textContent="Current Score:"+currentscore
            }


        }
        function mute(){
            leo.muted=true
        }
        function unmute(){
            leo.muted=false
        }
        function dark(){
            darkmode.setAttribute("class","darkmode")
        }
        function light(){
            darkmode.setAttribute("class","lightmode")

        }
        function check(){
            if(randnum==number.value){
                lander.style.opacity="0%"
                winner()
                sound.setAttribute("class","mute")
                nosound.setAttribute("class","mute")
                light()
                leo.muted=true
                main.style.boxShadow="0px 0px 0px black"
                lost.textContent="Leo Dass uh ma!"
                reaction.src="leo won.mp4"
                reaction.loop=false
                s.textContent="Chances Left:"+totalscore
                randnum=Math.ceil(Math.random()*10)
                console.log(randnum)


                if(totalscore<10){
                    totalscore=totalscore+1
                    s.textContent="Chances Left:"+totalscore
                }


                if(totalscore==0){
                    lander.style.opacity="0%"
                    leo.muted=true
                    main.style.boxShadow="0px 0px 0px black"
                    reaction.loop=false
                    reaction.src="gabar.mp4"
                    totalscore=10
                    s.textContent="Chances Left:"+totalscore
                    light()
                    cs.textContent=""
                }
            }
            else{
                lander.style.opacity="0%"
                losser()
                sound.setAttribute("class","mute")
                nosound.setAttribute("class","mute")
                leo.muted=true
                dark()
                totalscore=totalscore-1
                s.textContent="Chances left:"+totalscore
                reaction.src="leo lost.mp4"
                reaction.loop=false
                lost.textContent="You lost."
                if(totalscore==0){
                    lander.style.opacity="0%"
                    main.style.boxShadow="0px 0px 0px black"
                    lost.textContent="gabar it's over."
                    reaction.src="gabar.mp4"
                    reaction.loop=false
                    totalscore=10
                    s.textContent="Chances Left:"+totalscore
                    light()
                    a.push(currentscore)
                    currentscore=0
                    console.log(a)
                    b=Math.max(...a)
                    alltime.textContent="All Time Highest Score:"+b
                    cs.textContent=""
                    
                    
                }
            }
        }