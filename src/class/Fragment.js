class Fragment {
	canvas = null;
	context = null;
	name = null;
	position = {
		x: 0,
		y: 0,
	};
	scale = {
		x: 1,
		y: 1,
	};

	constructor(canvas) {
		this.canvas = canvas;
		this.context = canvas.getContext("2d");
	}

	move(x, y) {
		if (x) {
			this.position.x = x;
		}
		if (y) {
			this.position.y = y;
		}
	}

	getCanvas() {
		return this.canvas;
	}

	getContext() {
		return this.context;
	}

	setOpacity(value) {
		this.context.globalAlpha = value;
	}

	render(child) {
		this.context.drawImage(
			child.canvas,
			child.position.x - (child.canvas.width * child.scale.x) / 2,
			child.position.y - (child.canvas.height * child.scale.y) / 2,
			child.canvas.width * child.scale.x,
			child.canvas.height * child.scale.y
		);
	}

	setSize(width, height) {
		this.canvas.width = width;
		this.canvas.height = height;
	}

	setWidth(width) {
		this.canvas.width = width;
	}

	setHeight(height) {
		this.canvas.height = height;
	}

	getWidth() {
		return this.canvas.width;
	}

	getHeight() {
		return this.canvas.height;
	}

	clear() {
		this.context.clearRect(0, 0, this.getWidth(), this.getHeight());
	}
}

export default Fragment;
