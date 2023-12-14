class Sprite {
    constructor(property) {
        //펭귄 인덱스 펭귄 좌표
        this.image = new Image();
        this.image.src = property.imageSrc;
        this.x = property.positionX;
        this.y = property.positionY;
        this.scale = 1;
        this.framesMax = property.framesMax;
        this.framesCurrent = 0;
        this.framesElapsed = 0;
        this.framesHold = property.framesHold; 
    }
    draw() {
        //이미지 그리기
        ctx.drawImage(
            this.image,
            this.framesCurrent * (this.image.width /this.framesMax),
            0,
            this.image.width / this.framesMax,
            this.image.height,
            this.x,
            this.y,
            (this.image.width / this.framesMax) * this.scale,
            this.image.height * this.scale
        )
    }
    motionPull() {
        this.draw()
        this.framesElapsed++
        if (this.framesElapsed % this.framesHold === 0) {  
            if (this.framesCurrent < this.framesMax -1){
                this.framesCurrent++
            } else {
                this.framesCurrent = 0 
            }
        }
    }
    motionHold() {
        //기본 당기기 모션
    }
    motionFinishWin() {
        //기본 당기기 모션
    }
    motionFinishLose() {
        this.draw()
        this.framesElapsed++
        
        if (this.framesElapsed % this.framesHold === 0) {  
            if (this.framesCurrent < this.framesMax -1){
                this.framesCurrent++
            } else {
                // this.framesCurrent = 0 
            }
        }
    }
}
class Rope {
    constructor(imageSrc ,x ,y) {
        this.image = new Image();
        this.image.src = imageSrc;
        this.x = x;
        this.y = y;
    }
    draw(x,y) {
        ctx.drawImage(this.image,x,y,this.image.width,this.image.height);
    }
}