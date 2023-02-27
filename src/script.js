import "./style.scss";
import Camera from "./class/Camera";
import Frame from "./class/frame";
import Galaxy from './class/Galaxy'
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

import emailjs from '@emailjs/browser'

// send email

window.onload = () => {
	history.scrollRestoration = "manual"

	document.querySelector("#contact-form").addEventListener("submit", (e) => {
		e.preventDefault();


		const form = e.target
		const value = {
			from_name: form.from_name.value,
			from_email: form.from_email.value,
			message: form.message.value
		}
		if (form.from_name.value && form.from_email.value && form.message.value) {
			emailjs.send('service_ne59y9s', 'template_qwi4l05', value, 'DjB09dMusHI1VVMZW')
				.then((response) => {
					document.querySelector(".info").style.color = "green"
					document.querySelector(".info").innerText = "Sended!"
				}, (err) => {
					document.querySelector(".info").style.color = "red"
					document.querySelector(".info").innerText = "Can't send right now."
				});
		} else {
			document.querySelector(".info").style.color = "red"
			document.querySelector(".info").innerText = "Lack of info"
		}
	})
}

// Image
import resumeImage from "./assets/images/resume-1.png";
import employeeCardImage from "./assets/images/employee-card.png";
import introductionImage from "./assets/images/introduction-1.jpg";
import backgroundImage from "./assets/images/background.png";
import attackRightImage from "./assets/images/Attack1_right.png";
import deathRightImage from "./assets/images/Death_right.png";
import shopImage from "./assets/images/shop.png";
import idleLeftImage from "./assets/images/Idle_left.png";
import idleRightImage from "./assets/images/Idle_right.png";
import heathBarImage from "./assets/images/heath-bar.png";
import emptyHeathBarImage from "./assets/images/empty-heath-bar.png";
import desktopShopImage from "./assets/images/desktop-shop.png";
import mobileShopImage from "./assets/images/mobile-shop.png";

// utils
import loadImage from "./utils/loadImage";


const fps = 60;
const interval = 1000 / fps;
let lastTime = 0;

// start up

const percentElement = document.querySelector(".percent")
const roadElement = document.querySelector(".road")
roadElement.style.strokeDasharray = 503;
setTimeout(() => {
	roadElement.style.strokeDashoffset = 503;
})

// global variable

let zoomOutOpacity = 0;

let zoomInOpacity = 1;

const next = document.querySelector(".button.right");
const prev = document.querySelector(".button.left");

// setting up

const canvas = document.querySelector("canvas.app");

const camera = new Camera(canvas);

const employeeCard = new Frame();
employeeCard.scale.x = 2;
employeeCard.scale.y = 2;

const resume = new Frame();
resume.scale.x = 2;
resume.scale.y = 2;

const introduction = new Frame();
introduction.scale.x = 1.5;
introduction.scale.y = 1.5;

setTimeout(() => {
	percentElement.innerText = "20%"
	roadElement.style.strokeDashoffset = 503 - 503 * .2;
}, 50)

// projectOne
const projectOne = new Frame();
const cloneOne = new Frame();

camera.setSize(window.innerWidth, window.innerHeight);

const heathBar = new Frame();

const emptyHeathBar = new Frame();

const shop = new Frame();

const rightEntity = new Frame();

const leftEntity = new Frame();

const attackEntity = new Frame();

const deathEntity = new Frame();


setTimeout(() => {
	percentElement.innerText = "50%"
	roadElement.style.strokeDashoffset = 503 - 503 * .5;
}, 100)
// projectTwo

const desktopShop = new Frame();

const cloneTwo = new Frame();

const mobileShop = new Frame();

// projectThree
// all Project 
const allProject = new Frame();
allProject.setSize(window.innerWidth * 2, window.innerHeight * 2)
allProject.position.x = window.innerWidth
const projectThree = new Frame();

const cloneThree = new Frame();
cloneThree.setSize(window.innerWidth, window.innerHeight)
cloneThree.position.x = window.innerWidth * .25
cloneThree.position.y = window.innerHeiht * .75

projectThree.setSize(window.innerWidth, window.innerHeight)
projectThree.position.x = window.innerWidth + projectThree.getWidth() / 2
projectThree.position.y = projectThree.getHeight() / 2

const galaxy = Galaxy.generator();

const scene = new THREE.Scene();

const c = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
c.position.z = 1;

const control = new OrbitControls(c, canvas)

const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight)

scene.add(galaxy);
setTimeout(() => {
	percentElement.innerText = "80%"
	roadElement.style.strokeDashoffset = 503 - 503 * .8;
}, 200)


let loadImages = [];

loadImages.push(loadImage(employeeCardImage));
loadImages.push(loadImage(resumeImage));
loadImages.push(loadImage(introductionImage));
loadImages.push(loadImage(backgroundImage));
loadImages.push(loadImage(shopImage));
loadImages.push(loadImage(attackRightImage));
loadImages.push(loadImage(deathRightImage));
loadImages.push(loadImage(idleRightImage));
loadImages.push(loadImage(idleLeftImage));
loadImages.push(loadImage(heathBarImage));
loadImages.push(loadImage(emptyHeathBarImage));
loadImages.push(loadImage(desktopShopImage));
loadImages.push(loadImage(mobileShopImage));

console.log("loading...")
setTimeout(() => {
	percentElement.innerText = "80%"
	roadElement.style.strokeDashoffset = 503 - 503 * .8;
})

Promise.all(loadImages).then((images) => {
	employeeCard.loadImage(images[0]);
	employeeCard.move(camera.getWidth() / 2, camera.getHeight() / 2);
	resume.loadImage(images[1]);
	resume.position.y = resume.getHeight() / 2;
	introduction.loadImage(images[2]);
	introduction.move(
		camera.getWidth() / 2,
		(introduction.getHeight() * introduction.scale.y) / 2
	);

	percentElement.innerText = "99%"
	roadElement.style.strokeDashoffset = 503 - 503 * .99;
	// project 1
	cloneOne.setSize(camera.getWidth(), camera.getHeight());
	projectOne.setSize(camera.getWidth(), camera.getHeight());
	projectOne.loadImage(images[3]);
	cloneOne.loadImage(images[3])
	projectOne.move(
		camera.getWidth() + projectOne.getWidth() / 2,
		projectOne.getHeight() / 2
	);

	heathBar.getCanvas().width = camera.getWidth();
	heathBar.position.x = heathBar.getWidth() / 2;
	heathBar.position.y = -heathBar.getHeight() / 2;
	heathBar.loadImage(images[9]);

	emptyHeathBar.getCanvas().width = camera.getWidth();
	emptyHeathBar.position.x = emptyHeathBar.getWidth() / 2;
	emptyHeathBar.position.y = emptyHeathBar.getHeight() / 2 - 12;
	emptyHeathBar.loadImage(images[10]);

	shop.setSize(118, 114);
	shop.setFrame(0);
	shop.scale.x = 4;
	shop.scale.y = 4;
	shop.loadImage(images[4]);
	shop.move(
		camera.getWidth() + shop.getWidth() / 2,
		(camera.getHeight() * 84) / 100 - (shop.getHeight() / 2) * shop.scale.y
	);

	attackEntity.setSize(200, 200);
	attackEntity.scale.x = 3;
	attackEntity.scale.y = 3;
	attackEntity.setFrame(0);
	attackEntity.loadImage(images[5]);
	attackEntity.move(
		120,
		(camera.getHeight() * 84) / 100 - (attackEntity.getHeight() * 36) / 100
	);

	deathEntity.setSize(200, 200)
	deathEntity.scale.x = 3;
	deathEntity.scale.y = 3;
	deathEntity.setFrame(0);
	deathEntity.loadImage(images[6]);
	deathEntity.move(
		240,
		(camera.getHeight() * 84) / 100 - (deathEntity.getHeight() * 43) / 100
	)

	rightEntity.setSize(200, 200);
	rightEntity.scale.x = 3;
	rightEntity.scale.y = 3;
	rightEntity.setFrame(0);
	rightEntity.loadImage(images[7]);
	rightEntity.move(
		120,
		(camera.getHeight() * 84) / 100 - (rightEntity.getHeight() * 36) / 100
	);



	leftEntity.setSize(200, 200);
	leftEntity.scale.x = 3;
	leftEntity.scale.y = 3;
	leftEntity.setFrame(0);
	leftEntity.loadImage(images[8]);
	leftEntity.move(
		240,
		(camera.getHeight() * 84) / 100 - (leftEntity.getHeight() * 36) / 100 - 15
	);

	// projectTwo
	desktopShop.getCanvas().width = camera.getWidth();
	desktopShop.loadImage(images[11]);
	desktopShop.move(
		camera.getWidth() / 2,
		desktopShop.getHeight() / 2
	)

	cloneTwo.loadImage(images[12])
	mobileShop.loadImage(images[12]);
	mobileShop.move(
		camera.getWidth() / 2,
		mobileShop.position.y - mobileShop.getHeight() / 2 + camera.getHeight()
	)
	cloneTwo.move(
		camera.getWidth() / 2,
		mobileShop.position.y - mobileShop.getHeight() / 2 + camera.getHeight()
	)


	mainLoop(0);
	document.querySelector(".load").style.display = 'none'
	document.querySelector(".contact").classList.remove("none")
	window.scroll(0, 0)
});

let opacityResume = 1;
let frame = 0;
let lastFrame = -1;

const mainLoop = (timeStamp) => {
	const delta = timeStamp - lastTime;
	if (delta > interval) {
		if (mouse.hold) {
			if (mouse.left && frame > 0) {
				frame--;
			} else if (!mouse.left && frame < 2100) {
				frame++;
			}
		}
		let direction = mouse.left ? -1 : 1;
		if (frame < 200 && lastFrame != frame) {
			if (frame === 0 && lastFrame != frame) {
				camera.setTitle("Hi! I'm Nguyen Nhu Tai.");
			}
			if (frame === 20 && lastFrame != frame) {
				camera.setTitle("Currently, I graduated now.");
			}
			resume.renderImage();
			camera.render(resume);
			resume.scale.x -= (2 - (window.innerWidth * 80 / 100) / (resume.getWidth())) / 200 * direction;
			resume.scale.y -= (2 - (window.innerWidth * 80 / 100) / (resume.getWidth())) / 200 * direction;
			employeeCard.scale.x -= (2 - (window.innerWidth * 80 / 100) / (resume.getWidth())) / 200 * direction;
			employeeCard.scale.y -= (2 - (window.innerWidth * 80 / 100) / (resume.getWidth())) / 200 * direction;
			opacityResume -= (0.01 * direction) / 2;
			camera.getContext().fillStyle = `rgba(255, 255, 255, ${opacityResume})`;
			camera.getContext().fillRect(0, 0, camera.getWidth(), camera.getHeight());
			resume.move(
				camera.getWidth() / 2,
				(resume.getHeight() * resume.scale.y) / 2
			);
			lastFrame = frame;
			camera.render(employeeCard);
		} else if (frame === 200 && lastFrame != frame) {
			camera
				.getContext()
				.clearRect(0, 0, camera.getWidth(), camera.getHeight());
			resume.renderImage();
			resume.move(
				camera.getWidth() / 2,
				(resume.getHeight() * resume.scale.y) / 2
			);
			camera.render(resume);
			camera.render(employeeCard);
		} else if (frame < 300 && lastFrame != frame) {
			employeeCard.position.y -= ((window.innerHeight / 2 - 200 * resume.scale.y) / 100) * direction;
			employeeCard.position.x -= ((window.innerWidth / 2 - (window.innerWidth * 10 / 100 + employeeCard.getWidth() * employeeCard.scale.x / 2 + 66 * resume.scale.x)) / 100) * direction;
			employeeCard.move(employeeCard.position.x);
			resume.renderImage();
			camera.render(resume);
			camera.render(employeeCard);
			lastFrame = frame;
		} else if (frame == 300 && lastFrame != frame) {
			camera.clear();
			introduction.scale.x = resume.scale.x;
			introduction.scale.y = resume.scale.y;
			introduction.position.y =
				(introduction.getHeight() * introduction.scale.y) / 2;
			camera.render(introduction);
			lastFrame = frame;
		} else if (frame < 500 && lastFrame != frame) {
			if (frame < 450) {
				camera.setTitle(
					"In the last two year, I have learned HTML, CSS, JS and building tools such as Webpack, ViteJS and Framework like ReactJS, Redux, Three.js and AngularJS as a Front-end developer"
				);
			} else if (frame < 500) {
				camera.setTitle(
					"Besides, I aslo know NodeJS, Java, RestFull API, MySql, SQL server, Firebase"
				);
			}
			camera.clear();
			introduction.position.y -= (Math.max(resume.getHeight() * resume.scale.y - window.innerHeight, 0)) / 200 * direction;
			introduction.position.x = camera.getWidth() / 2;
			camera.render(introduction);
			lastFrame = frame;
		} else if (frame < 600 && lastFrame != frame) {
			camera.clear();
			if (frame == 500) {
				opacityResume = 0;
				camera.setTitle(
					"With my knowledge and my hard work I have created some project"
				);
			}
			introduction.position.x -= window.innerWidth / 100 * direction;
			camera.render(introduction);
			opacityResume += 0.01 * direction;
			camera.getContext().fillStyle = `rgba(255, 255, 255, ${opacityResume})`;
			camera.getContext().fillRect(0, 0, camera.getWidth(), camera.getHeight());

			projectOne.position.x -= window.innerWidth / 100 * direction;
			if (projectOne.position.x >= (window.innerWidth + projectOne.getWidth() / 2) - 30 && direction < 0) {
				projectOne.position.x = window.innerWidth + projectOne.getWidth() / 2;
			} else if (projectOne.position.x <= window.innerWidth / 2 + 30 && direction > 0) {
				projectOne.position.x = window.innerWidth / 2;
			}
			projectOne.position.y = projectOne.getHeight() / 2;
			camera.render(projectOne);

			lastFrame = frame;
		} else if (frame < 700) {
			shop.elapseFrame++;
			rightEntity.elapseFrame++;
			leftEntity.elapseFrame++;
			if (lastFrame !== frame) {
				if (frame < 620) {
					heathBar.position.y += ((heathBar.getHeight() + 2) / 20) * direction;
					shop.position.x -= ((camera.getWidth() * 25) / 100 / 20) * direction;

					if (frame == 619) {
						heathBar.position.y = heathBar.getHeight() / 2;
						shop.position.x = (camera.getWidth() * 75) / 100;
					}
				} else if (frame > 630) {
					camera.setTitle("This is Fighting game, I finished it in 2 week.");
				}
				projectOne
					.getContext()
					.fillRect(0, 0, projectOne.getWidth(), projectOne.getHeight());
				lastFrame = frame;
			}
			projectOne.renderImage();
			if (shop.frame >= 5) shop.frame = 0;
			if (shop.elapseFrame > 10) {
				shop.setFrame(++shop.frame);
				shop.clear();
				shop.renderImage();
				shop.elapseFrame = 0;
			}
			projectOne.render(shop);
			projectOne.render(heathBar);
			if (rightEntity.frame >= 7) rightEntity.frame = 0;
			if (rightEntity.elapseFrame > 14) {
				rightEntity.setFrame(++rightEntity.frame);
				rightEntity.clear();
				rightEntity.renderImage();
				rightEntity.elapseFrame = 0;
			}
			if (leftEntity.frame >= 3) leftEntity.frame = 0;
			if (leftEntity.elapseFrame > 14) {
				leftEntity.setFrame(++leftEntity.frame);
				leftEntity.clear();
				leftEntity.renderImage();
				leftEntity.elapseFrame = 0;
			}
			projectOne.render(rightEntity);
			projectOne.render(leftEntity);
			cloneOne.render(shop)
			cloneOne.render(heathBar)
			cloneOne.render(rightEntity)
			cloneOne.render(leftEntity)
			camera.render(projectOne);
		} else if (frame < 800) {
			if (frame === 700) {
				camera.setTitle("This project was created using Vanilla JavaScript, Canvas HTML, CSS, and ViteJS, more infomation: <a href='https://github.com/TaiNhu/Fightting-Game' target='_blank'>GitHub.com.</a>")
			}
			projectOne.renderImage();
			shop.elapseFrame++;
			leftEntity.elapseFrame++;
			if (shop.frame >= 5) shop.frame = 0;
			if (shop.elapseFrame > 10) {
				shop.setFrame(++shop.frame);
				shop.clear();
				shop.renderImage();
				shop.elapseFrame = 0;
			}
			projectOne.render(shop);
			projectOne.render(heathBar);
			if (lastFrame !== frame) {
				attackEntity.elapseFrame++;
				if (attackEntity.elapseFrame > 14) {
					if (attackEntity.frame < 5 && direction > 0) attackEntity.frame++;
					else if (attackEntity.frame > 0 && direction < 0) attackEntity.frame--;
					attackEntity.setFrame(attackEntity.frame);
					attackEntity.clear();
					attackEntity.renderImage();
					attackEntity.elapseFrame = 0;
				}
				lastFrame = frame;
			}
			if (leftEntity.frame >= 3) leftEntity.frame = 0;
			if (leftEntity.elapseFrame > 14) {
				leftEntity.setFrame(++leftEntity.frame);
				leftEntity.clear();
				leftEntity.renderImage();
				leftEntity.elapseFrame = 0;
			}
			projectOne.render(leftEntity);
			projectOne.render(attackEntity);
			camera.render(projectOne);
		} else if (frame < 900) {
			projectOne.renderImage();
			shop.elapseFrame++;
			rightEntity.elapseFrame++;
			if (shop.frame >= 5) shop.frame = 0;
			if (shop.elapseFrame > 10) {
				shop.setFrame(++shop.frame);
				shop.clear();
				shop.renderImage();
				shop.elapseFrame = 0;
			}
			projectOne.render(shop);
			if (lastFrame !== frame) {
				deathEntity.elapseFrame++;
				if (deathEntity.elapseFrame > 14) {
					if (deathEntity.frame < 6 && direction > 0) deathEntity.frame++;
					else if (deathEntity.frame > 0 && direction < 0) deathEntity.frame--;
					deathEntity.setFrame(deathEntity.frame);
					deathEntity.clear();
					deathEntity.renderImage();
					deathEntity.elapseFrame = 0;
				}
				lastFrame = frame;
			}
			if (rightEntity.frame >= 7) rightEntity.frame = 0;
			if (rightEntity.elapseFrame > 14) {
				rightEntity.setFrame(++rightEntity.frame);
				rightEntity.clear();
				rightEntity.renderImage();
				rightEntity.elapseFrame = 0;
			}
			emptyHeathBar.renderImage();
			projectOne.render(emptyHeathBar);
			projectOne.render(rightEntity);
			projectOne.render(deathEntity);
			camera.render(projectOne);
		} else if (frame < 1000 && lastFrame !== frame) {
			if (frame === 940) {
				camera.setTitle("With my knowledge and understanding of React.js and FireBase, I finished this fashion shop within about a week.")
			}
			projectOne.scale.x -= 0.01 * direction;
			projectOne.scale.y -= 0.01 * direction;
			if (projectOne.scale.x > 0.95 && direction < 0) {
				projectOne.scale.x = 1;
				projectOne.scale.y = 1;
			}
			camera.clear();
			zoomInOpacity -= 1 / 100 * direction;
			if (zoomInOpacity < 0.05 && direction > 0) zoomInOpacity = 0
			desktopShop.renderImage();
			desktopShop.getContext().fillStyle = `rgba(255, 255, 255, ${zoomInOpacity})`
			desktopShop.getContext().fillRect(0, 0, desktopShop.getWidth(), desktopShop.getHeight());
			camera.render(desktopShop);
			camera.render(projectOne);
			zoomOutOpacity += 1 / 100 * direction;
			camera.getContext().fillStyle = `rgba(255, 255, 255, ${zoomOutOpacity})`
			camera.getContext().fillRect(projectOne.position.x - projectOne.getWidth() * projectOne.scale.x / 2, projectOne.position.y - projectOne.getHeight() * projectOne.scale.y / 2, projectOne.getWidth() * projectOne.scale.x, projectOne.getHeight() * projectOne.scale.y);
			lastFrame = frame;
		} else if (frame < 1200 && lastFrame !== frame) {
			camera.clear();
			desktopShop.position.y -= Math.max(desktopShop.getHeight() * desktopShop.scale.y - window.innerHeight, 0) / 200 * direction;
			desktopShop.renderImage();
			camera.render(desktopShop);
			lastFrame = frame;
		} else if (frame < 1300 && lastFrame !== frame) {
			if (frame === 1250) camera.setTitle("I also improved the responsiveness of the website. ")
			camera.clear();
			desktopShop.scale.x -= ((desktopShop.getWidth() - Math.min(window.innerWidth, Math.max(window.innerWidth * 0.33, 625))) / desktopShop.getWidth()) / 100 * direction;
			desktopShop.renderImage();
			camera.render(desktopShop);
			lastFrame = frame;
		} else if (frame < 1550 && lastFrame !== frame) {
			camera.clear();
			if (frame === 1400) {
				camera.setTitle("More detail: <a href='https://github.com/TaiNhu/shopByReactjs' target='_blank'>Github.com</a>")
			}
			if (frame < 1500) {
				mobileShop.canvas.width = Math.min(window.innerWidth, Math.max(window.innerWidth * .33, 625))
				cloneTwo.canvas.width = mobileShop.getWidth()
				mobileShop.position.y += (mobileShop.getHeight() - camera.getHeight()) / 200 * direction;
			}
			mobileShop.renderImage();
			camera.render(mobileShop);
			lastFrame = frame;
		} else if (frame >= 1550 && frame < 1750) {
			camera.clear();
			if (frame <= 1700 && lastFrame !== frame) {
				if (frame <= 1650) {
					if (frame === 1550) {
						camera.setTitle("Galaxy Generator is the next project. <br/>Three.js was used to create this project. By scrolling your mouse, you can zoom in and out, move by holding down the right mouse button, and rotate by holding down the left mouse button.")
					}
					projectThree.position.x -= window.innerWidth / 100 * direction;
					mobileShop.position.x -= window.innerWidth / 100 * direction;
					if (projectThree.position.x >= window.innerWidth + projectThree.getWidth() / 2 - 20 && direction < 0) {
						projectThree.position.x = window.innerWidth + projectThree.getWidth() / 2;
					} else if (projectThree.position.x <= window.innerWidth / 2 + 20 && direction > 0) {
						projectThree.position.x = window.innerWidth / 2
					}
				}
				lastFrame = frame;
			} else if (frame > 1700 && frame < 1750 && lastFrame !== frame) {
				if (frame === 1710) {
					camera.setTitle("More detail: <a href='https://github.com/TaiNhu/GalaxyGenerator' target='_blank'>Github.com</a>")
				}

				shop.elapseFrame++;
				rightEntity.elapseFrame++;
				leftEntity.elapseFrame++;
				projectThree.scale.x -= .5 / 50 * direction;
				projectThree.scale.y -= .5 / 50 * direction;
				allProject.scale.x -= .5 / 50 * direction;
				allProject.scale.y -= .5 / 50 * direction;
				projectThree.position.x -= window.innerWidth * .25 / 50 * direction;
				projectThree.position.y += window.innerHeight * .25 / 50 * direction;
				allProject.position.y += window.innerHeight * .5 / 50 * direction;
				allProject.position.x -= window.innerWidth * .5 / 50 * direction;
				if (shop.frame >= 5) shop.frame = 0;
				if (shop.elapseFrame > 10) {
					shop.setFrame(++shop.frame);
					shop.clear();
					shop.renderImage();
					shop.elapseFrame = 0;
				}
				if (rightEntity.frame >= 7) rightEntity.frame = 0;
				if (rightEntity.elapseFrame > 14) {
					rightEntity.setFrame(++rightEntity.frame);
					rightEntity.clear();
					rightEntity.renderImage();
					rightEntity.elapseFrame = 0;
				}
				if (leftEntity.frame >= 3) leftEntity.frame = 0;
				if (leftEntity.elapseFrame > 14) {
					leftEntity.setFrame(++leftEntity.frame);
					leftEntity.clear();
					leftEntity.renderImage();
					leftEntity.elapseFrame = 0;
				}
				let one = cloneOne;
				let two = cloneTwo;
				let three = cloneThree;
				one.scale.x = 1
				one.scale.y = 1
				one.position.x = window.innerWidth * .5
				one.position.y = window.innerHeight * .5
				two.scale.x = 1
				two.scale.y = 1
				two.position.x = window.innerWidth * 1.5
				two.position.y = two.getHeight() * .5
				three.scale.x = 1
				three.scale.y = 1
				three.getContext().drawImage(renderer.domElement, 0, 0)
				three.position.x = window.innerWidth * .5
				three.position.y = window.innerHeight * 1.5
				two.renderImage()
				one.render(shop)
				one.render(rightEntity)
				one.render(leftEntity)
				one.renderImage()
				allProject.render(one)
				allProject.render(two)
				allProject.render(three)
				lastFrame = frame;
			}
			control.update();
			galaxy.rotation.y = Math.PI * timeStamp * 0.00001;
			renderer.render(scene, c);
			renderer.setSize(projectThree.getWidth(), projectThree.getHeight());
			projectThree.getContext().drawImage(renderer.domElement, 0, 0);
			if (frame >= 1650) {
				camera.render(allProject);
			}
			camera.render(mobileShop);
			camera.render(projectThree)
		} else if (frame >= 1700 && frame < 2000 && lastFrame !== frame) {
			if (frame === 1800) {
				camera.setTitle("And That is all project, I want to show. <br /> Check my <a href='https://github.com/TaiNhu?tab=repositories' target='_blank'>Github</a> to see more.")
			}
			camera.clear();
			allProject.clear()
			shop.elapseFrame++;
			rightEntity.elapseFrame++;
			leftEntity.elapseFrame++;
			if (shop.frame >= 5) shop.frame = 0;
			if (shop.elapseFrame > 10) {
				shop.setFrame(++shop.frame);
				shop.clear();
				shop.renderImage();
				shop.elapseFrame = 0;
			}
			if (rightEntity.frame >= 7) rightEntity.frame = 0;
			if (rightEntity.elapseFrame > 14) {
				rightEntity.setFrame(++rightEntity.frame);
				rightEntity.clear();
				rightEntity.renderImage();
				rightEntity.elapseFrame = 0;
			}
			if (leftEntity.frame >= 3) leftEntity.frame = 0;
			if (leftEntity.elapseFrame > 14) {
				leftEntity.setFrame(++leftEntity.frame);
				leftEntity.clear();
				leftEntity.renderImage();
				leftEntity.elapseFrame = 0;
			}
			let one = cloneOne;
			let two = cloneTwo;
			let three = cloneThree;
			one.scale.x = 1
			one.scale.y = 1
			one.position.x = window.innerWidth * .5
			one.position.y = window.innerHeight * .5
			two.scale.x = 1
			two.scale.y = 1
			two.position.x = window.innerWidth * 1.5
			two.position.y = two.getHeight() * .51
			three.scale.x = 1
			three.scale.y = 1
			three.getContext().drawImage(renderer.domElement, 0, 0)
			three.position.x = window.innerWidth * .5
			three.position.y = window.innerHeight * 1.5
			two.renderImage()
			one.renderImage()
			one.render(shop)
			one.render(rightEntity)
			one.render(leftEntity)
			allProject.render(one)
			allProject.render(two)
			allProject.render(three)
			camera.render(allProject)
			control.update();
			galaxy.rotation.y = Math.PI * timeStamp * 0.00001;
			renderer.render(scene, c);
			renderer.setSize(projectThree.getWidth(), projectThree.getHeight());
			three.getContext().drawImage(renderer.domElement, 0, 0)
			lastFrame = frame;
		} else if (frame < 2100 && lastFrame !== frame) {
			if (frame === 2001) {
				camera.setTitle("You can also contact me right here");
			}
			window.scroll(0, window.scrollY + (window.innerHeight / 99 * direction))
			lastFrame = frame
		}
	}
	requestAnimationFrame(mainLoop);
};

const mouse = {
	hold: false,
	left: false,
};

next.addEventListener("mousedown", () => {
	mouse.hold = true;
	mouse.left = false;
});

next.addEventListener("mouseup", () => {
	mouse.hold = false;
});

prev.addEventListener("mousedown", () => {
	mouse.hold = true;
	mouse.left = true;
});

prev.addEventListener("mouseup", () => {
	mouse.hold = false;
});

next.addEventListener("touchstart", () => {
	mouse.hold = true;
	mouse.left = false;
});

next.addEventListener("touchend", () => {
	mouse.hold = false;
});

prev.addEventListener("touchstart", () => {
	mouse.hold = true;
	mouse.left = true;
});

prev.addEventListener("touchend", () => {
	mouse.hold = false;
});
