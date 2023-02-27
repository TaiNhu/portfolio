import Fragment from "./Fragment"

class Frame extends Fragment {

    image = null
    frame = null
    elapseFrame = 0

    constructor() {
        super(document.createElement("canvas"))
    }

    loadImage(image){
        this.image = image
        if(this.canvas.width == 300 || this.canvas.height == 150){
            if(this.canvas.width == 300){
                this.canvas.width = this.image.width
            }
            if(this.canvas.height == 150){
                this.canvas.height = this.image.height
            }
            this.context.drawImage(this.image, 0, 0, this.canvas.width, this.canvas.height)
        } else if(this.frame != null){
            this.context.drawImage(
                this.image, 
                this.canvas.width * this.frame, 
                0, 
                this.canvas.width, 
                this.canvas.height, 
                0, 
                0, 
                this.canvas.width, 
                this.canvas.height
            )
        } else {
            this.context.drawImage(
                this.image, 
                0, 
                0, 
                this.canvas.width, 
                this.canvas.height
            )
        }
    }

    renderImage(){
        if(this.canvas.width == 300 && this.canvas.height == 150){
            this.canvas.width = this.image.width
            this.canvas.height = this.image.height
            this.context.drawImage(this.image, 0, 0)
        } else if(this.frame != null){
            this.context.drawImage(
                this.image, 
                this.canvas.width * this.frame, 
                0, 
                this.canvas.width, 
                this.canvas.height, 
                0, 
                0, 
                this.canvas.width, 
                this.canvas.height
            )
        } else {
            this.context.drawImage(
                this.image, 
                0, 
                0, 
                this.canvas.width, 
                this.canvas.height
            )
        }
    }

    setFrame(frame){
        this.frame = frame
    }


}

export default Frame
