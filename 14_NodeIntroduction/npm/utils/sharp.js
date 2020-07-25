const sharp = require('sharp');

sharp('image.png')
	.resize(80)
	.grayscale()
	.toFile('resized.png');