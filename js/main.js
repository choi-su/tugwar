const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 677;
canvas.height = 438;
let state = 0;
let leftSideHash = 0;
let rightSideHash = 0;
let ropeXposition = -338;
let ropeYposition = 304;
let setTimer = -1;
let leftHash = 90;
let rightHash = 100;
let matchHashArr = [];
let prevX = 0;
let prevDirection = 0;
const hash = {
    leftHash:[],
    rightHash:[]
}
const gapArr = {
    left: 0,
    right: 0
}
    let time = Math.floor(new Date().getTime() / 1000);
    let time2 = Math.floor(new Date().getTime() / 1001);
    let inputText = `${time}`;
    let inputText2 = `${time2}`;

    // console.log("< hash 암호화 >");
    let hashNumber = `${CryptoJS.MD5(inputText)}`; // 원하는 알고리즘으로 선택
    let hashNumber2 = `${CryptoJS.MD5(inputText2)}`; // 원하는 알고리즘으로 선택
    let hashNumberArr = [...hashNumber];
    let hashNumberArr2 = [...hashNumber2];
    // console.log(hashNumberArr);
    // console.log(hashNumberArr2);
const pushHash = () => {
    hashNumberArr.forEach(arr => {
        if (arr == 'a') {
            arr = '10'

        } else if (arr == 'b') {
            arr = '11'
            
        } else if (arr == 'c') {
            arr = '12'
            
        } else if (arr == 'd') {
            arr = '13'
            
        } else if (arr == 'e') {
            arr = '14'
            
        } else if (arr == 'f') {
            arr = '15'
            
        } else {
            arr = arr 
        }
        hash.leftHash.push(parseInt(arr));
    })
    hashNumberArr2.forEach(arr => {
        if (arr == 'a') {
            arr = '10'

        } else if (arr == 'b') {
            arr = '11'
            
        } else if (arr == 'c') {
            arr = '12'
            
        } else if (arr == 'd') {
            arr = '13'
            
        } else if (arr == 'e') {
            arr = '14'
            
        } else if (arr == 'f') {
            arr = '15'
            
        } else {
            arr = arr 
        }
        hash.rightHash.push(parseInt(arr));
    })
}

const matchHash = () => {
    //32개의 값을 서로 매칭후 그 값의 차를 다른 배열에 넣어 준다 그리고 그 배열의 렝스만큼 게임 액트
    hashNumberArr.forEach((arr, i) => {
        if (hash.leftHash[i] > hash.rightHash[i]) {
            let res = hash.leftHash[i] - hash.rightHash[i]
            let fps = hash.leftHash[i] - hash.rightHash[i]
            if ( fps == 15) {
                fps = 1
            } else if ( fps == 14) {
                fps = 1
            } else if ( fps == 13) {
                fps = 1
            } else if ( fps == 12) {
                fps = 1
            } else if ( fps == 11) {
                fps = 2
            } else if ( fps == 10) {
                fps = 2
            } else if ( fps == 9) {
                fps = 2
            } else if ( fps == 8) {
                fps = 2
            } else if ( fps == 7) {
                fps = 3
            } else if ( fps == 6) {
                fps = 3
            } else if ( fps == 5) {
                fps = 3
            } else if ( fps == 4) {
                fps = 3
            } else if ( fps == 3) {
                fps = 4
            } else if ( fps == 2) {
                fps = 4
            } else if ( fps == 1) {
                fps = 4
            }
            matchHashArr.push({ direction: 'left', position: res ,fps:fps });
            gapArr.left = gapArr.left + res;
            //만약 왼쪽수가 더 크다면 왼쪽 빼기 오른쪽 값
        } else if (hash.rightHash[i] > hash.leftHash[i]) {
            let res = hash.rightHash[i] - hash.leftHash[i]
            let fps = hash.rightHash[i] - hash.leftHash[i]
            if ( fps == 15) {
                fps = 1
            } else if ( fps == 14) {
                fps = 1
            } else if ( fps == 13) {
                fps = 1
            } else if ( fps == 12) {
                fps = 1
            } else if ( fps == 11) {
                fps = 2
            } else if ( fps == 10) {
                fps = 2
            } else if ( fps == 9) {
                fps = 2
            } else if ( fps == 8) {
                fps = 2
            } else if ( fps == 7) {
                fps = 3
            } else if ( fps == 6) {
                fps = 3
            } else if ( fps == 5) {
                fps = 3
            } else if ( fps == 4) {
                fps = 3
            } else if ( fps == 3) {
                fps = 4
            } else if ( fps == 2) {
                fps = 4
            } else if ( fps == 1) {
                fps = 4
            }
            matchHashArr.push({ direction: 'right', position: res ,fps:fps});
            gapArr.right = gapArr.right + res;
            //만약 오른쪽수가 더 크다면 오른쪽 빼기 왼쪽 값   
        } else {
            matchHashArr.push(0);
        }
    })
    console.log(matchHashArr);
    console.log(gapArr);
}
pushHash()
matchHash()
// -100 ~ 22  밧줄 1차 포지션

const timer = setInterval(() => {
    if (state == 0) {
        // cover = '';
        cover.image.src='./img/cover.png'
    }
    if (state == 1) {
        // cover = '';
        cover.image.src=''
    }
    if (state == 32) {
        //초기화 시킨다
        state = 0
        rope1 = ''
        p1Arm = ''
        p2Arm = ''
        p3Arm = ''
        p4Arm = ''
        p1 = ''
        p2 = ''
        p3 = ''
        p4 = ''
        ropeXposition = -338
        ropeYposition = 304
        increaseTime = 0
        clearInterval(setTimer);
        init();
    }
    state++;
    console.log(state);
}, 1000);
let ropeX = 1;
let increaseTime = 0;
const renderGame = () => {
    const fps = 60;
    // cover.draw(0,0)

    setTimer = setTimeout(() => {

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        //밧줄의 위치는 전의 밧줄위치 더하기 현재 밧줄 위치이다
        // 전 다이렉션 값을 저장해서 현재와 다음의 다이렉션 방향이 같다면 액션을 유지 시켜야함
        if (state >= 0 && state < 32) {
                ctx.font = 'Bold 16px noto Sans ';
                ctx.textAlign = 'center';
                ctx.fillStyle = '#fff';
                ctx.fillText(` ${state+1} / 32`, canvas.width / 2, 16);  
                p1Arm.motionPull();
                p2Arm.motionPull();
                p3Arm.motionPull();
                p4Arm.motionPull();
                ropeShadow.draw(ropeXposition , 340);
                rope1.draw(ropeXposition , ropeYposition);
                p1.motionPull();
                p2.motionPull();
                p3.motionPull();
                p4.motionPull();
            if (matchHashArr[state].direction == 'left') {
                ctx.font = 'Bold 32px noto Sans ';
                ctx.textAlign = 'center';
                ctx.fillStyle = '#fff';
                ctx.fillText(`left : ${matchHashArr[state].position}`, canvas.width / 2, canvas.height / 2 - 40);                
                ropeXposition = ropeXposition - (matchHashArr[state].position/12)             
                p1.framesHold = matchHashArr[state].fps
                p1Arm.framesHold = matchHashArr[state].fps
                p2.framesHold = matchHashArr[state].fps
                p2Arm.framesHold = matchHashArr[state].fps
                p3.framesHold = 10
                p3Arm.framesHold = 10
                p4.framesHold = 10
                p4Arm.framesHold = 10
            } else if ((matchHashArr[state].direction == 'right')) {
                ctx.font = 'Bold 32px noto Sans ';
                ctx.textAlign = 'center';
                ctx.fillStyle = '#fff';
                ctx.fillText(`right : ${matchHashArr[state].position}`, canvas.width / 2, canvas.height / 2 -40);                
                ropeXposition = ropeXposition + (matchHashArr[state].position/12)          
                p1.framesHold =10
                p1Arm.framesHold =10
                p2.framesHold =10
                p2Arm.framesHold =10
                p3.framesHold = matchHashArr[state].fps
                p3Arm.framesHold = matchHashArr[state].fps
                p4.framesHold = matchHashArr[state].fps
                p4Arm.framesHold = matchHashArr[state].fps
            } else {
                ctx.font = 'Bold 32px noto Sans ';
                ctx.textAlign = 'center';
                ctx.fillStyle = '#fff';
                ctx.fillText(`0`, canvas.width / 2, canvas.height / 2 -40);
                p1.framesHold = 10
                p1Arm.framesHold = 10
                p2.framesHold = 10
                p2Arm.framesHold = 10
                p3.framesHold = 10
                p3Arm.framesHold = 10
                p4.framesHold = 10
                p4Arm.framesHold = 10
            }
        }
        else if (state == 32) {
            rope1.draw(ropeXposition , ropeYposition);
            p1.image.src=''
            p2.image.src=''
            p3.image.src=''
            p4.image.src = ''
            p1Arm.image.src=''
            p2Arm.image.src=''
            p3Arm.image.src=''
            p4Arm.image.src = ''
            if (gapArr.left > gapArr.right) {
                p1.framesHold =20
                p1Arm.framesHold =20
                p2.framesHold =20
                p2Arm.framesHold =20
                p3.framesHold =20
                p3Arm.framesHold =20
                p4.framesHold =20
                p4Arm.framesHold = 20
                // ropeXposition = ropeXposition - 1
                ropeYposition = 340 
                p1WinArm.motionFinishLose();
                p2WinArm.motionFinishLose();
                p3LoseArm.motionFinishLose();
                p4LoseArm.motionFinishLose();
                p1Win.motionFinishLose();
                p2Win.motionFinishLose();
                p3Lose.motionFinishLose();
                p4Lose.motionFinishLose();
                ctx.font = 'Bold 32px noto Sans ';
                ctx.textAlign = 'center';
                ctx.fillStyle = '#fff';
                ctx.fillText('LEFT WIN', canvas.width / 2, canvas.height / 2 -40);
            } else if (gapArr.left < gapArr.right) {
                p1.framesHold =20
                p1Arm.framesHold =20
                p2.framesHold =20
                p2Arm.framesHold =20
                p3.framesHold =20
                p3Arm.framesHold =20
                p4.framesHold =20
                p4Arm.framesHold = 20
                // ropeXposition = ropeXposition + 1
                ropeYposition = 340 
                p1LoseArm.motionFinishLose();
                p2LoseArm.motionFinishLose();
                p3WinArm.motionFinishLose();
                p4WinArm.motionFinishLose();
                p1Lose.motionFinishLose();
                p2Lose.motionFinishLose();
                p3Win.motionFinishLose();
                p4Win.motionFinishLose();
                ctx.font = 'Bold 32px noto Sans ';
                ctx.textAlign = 'center';
                ctx.fillStyle = '#fff';
                ctx.fillText('RIGHT WIN', canvas.width / 2, canvas.height / 2 -40);
            }

        }
        renderGame();
	}, 1000 / fps);
}
let cover;

let rope1;
let ropeShadow;
let p1Arm;
let p2Arm;
let p3Arm;
let p4Arm;

let p1HoldArm;
let p2HoldArm;
let p3HoldArm;
let p4HoldArm;

let p1WinArm;
let p2WinArm;
let p3WinArm;
let p4WinArm;


let p1LoseArm;
let p2LoseArm;
let p3LoseArm;
let p4LoseArm;

// ---------------------------------
let p1;
let p2;
let p3;
let p4;

let p1Hold;
let p2Hold;
let p3Hold;
let p4Hold;


let p1Win;
let p2Win;
let p3Win;
let p4Win;

let p1Lose;
let p2Lose;
let p3Lose;
let p4Lose;


//펭귄 하나당 모션 4개
// 당기기
// 버티기
// 졌을때
// 이겼을 때
const init = () => {
    cover = new Rope('./img/cover.png', 0, 0);

    rope1 = new Rope('./img/real_rope.png', 0, canvas.height / 2 + 87);  
    ropeShadow = new Rope('./img/rope_shadow.png', 0, canvas.height / 2 + 87);  
    p1Arm = new Sprite(p1ArmState);
    p2Arm = new Sprite(p2ArmState);
    p3Arm = new Sprite(p3ArmState);
    p4Arm = new Sprite(p4ArmState);

    p1HoldArm = new Sprite(p1HoldArmState);
    p2HoldArm = new Sprite(p2HoldArmState);
    p3HoldArm = new Sprite(p3HoldArmState);
    p4HoldArm = new Sprite(p4HoldArmState);

    p1WinArm = new Sprite(p1WinArmState);
    p2WinArm = new Sprite(p2WinArmState);
    p3WinArm = new Sprite(p3WinArmState);
    p4WinArm = new Sprite(p4WinArmState);


    p1LoseArm = new Sprite(p1LoseArmState);
    p2LoseArm = new Sprite(p2LoseArmState);
    p3LoseArm = new Sprite(p3LoseArmState);
    p4LoseArm = new Sprite(p4LoseArmState);

    // 팔 선언

    p1 = new Sprite(p1State);
    p2 = new Sprite(p2State);
    p3 = new Sprite(p3State);
    p4 = new Sprite(p4State);

    p1Hold = new Sprite(p1HoldState);
    p2Hold = new Sprite(p2HoldState);
    p3Hold = new Sprite(p3HoldState);
    p4Hold = new Sprite(p4HoldState);

    p1Win = new Sprite(p1WinState);
    p2Win = new Sprite(p2WinState);
    p3Win = new Sprite(p3WinState);
    p4Win = new Sprite(p4WinState);


    p1Lose = new Sprite(p1LoseState);
    p2Lose = new Sprite(p2LoseState);
    p3Lose = new Sprite(p3LoseState);
    p4Lose = new Sprite(p4LoseState);

    renderGame()
}

window.onload = () => {
    
    init();
}