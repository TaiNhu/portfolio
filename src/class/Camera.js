import Fragment from "./Fragment";

class Camera extends Fragment{
    subTitle = null;


	constructor(scene) {
		super(scene)
		this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.subTitle = document.createElement("p")
		this.subTitle.classList.add("sub-title")
		document.querySelector("body").append(this.subTitle)
	}

    setTitle(title){
		this.subTitle.innerHTML = title	
    }

	setBg(color){
		this.context.fillStyle = color
		this.context.fillRect(0, 0, this.canvas.width, this.canvas.height)
	}

}

export default Camera;
