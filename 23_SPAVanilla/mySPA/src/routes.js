const routes = [
	{
		path: '/404',
		template: '<h1>Not found</h1>'
	},
	{
		path: '/',
		template: `
			<h1>Welcome to my web site</h1>
			<br>
			<h2>I'm <strong id="skill">Frontend Developer</strong></h2>
			<button id="clickme">Click me</button>
		`
	},
	{
		path: '/contact',
		template: `
	<form action="#">
		<label for="">Name</label>
		<input type="text">
		
		<br>

		<label for="">Email</label>
		<input type="email">
		
		<br>

		<label for="">Gender</label> <br>
		
		<input type="radio" name="geneder" value="male"> Male	<br>
		<input type="radio" name="geneder" value="female"> Female <br>
		<input type="radio" name="geneder" value="Other"> Other <br>
		
		<select name="edad" id="">
			<option value="ninio">Niño</option>
			<option value="mayor">Mayor de edad</option>
			<option value="65">Mayor de 65 años</option>
		</select>
		
		<button type="submit" >Send</button>

	</form>`
	},
	{
		path: '/about',
		template: `
		<div class="content__hero">
			<div class="content__hero--image first">
				<img src="https://images.pexels.com/
			photos/1576937/pexels-photo-1576937.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500&h=330" alt="hero1">
				<div class="content__hero--info">
					<div>
						<h2>Image Title</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>
				</div>
			</div>
			<div class="content__hero--image">
				<img src="https://images.pexels.com/photos/4571816/pexels-photo-4571816.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="hero2">
				<div class="content__hero--info">
					<div>
						<h2>Image Title</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>
				</div>
			</div>
			<div class="content__hero--image">
				<img src="https://images.pexels.com/photos/4791620/pexels-photo-4791620.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="hero3">
				<div class="content__hero--info">
					<div>
						<h2>Image Title</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>
				</div>
			</div>
		</div>
		`
	},
];		