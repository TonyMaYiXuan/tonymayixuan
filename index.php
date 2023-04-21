<!DOCTYPE html>
<html>
<head>
	<title>My Website</title>
</head>
<body>
	<?php include 'header.php'; ?>
	<main>
		<section id="contact">
			<h2>Contact Us</h2>
			<form>
				<label for="name">Name:</label>
				<input type="text" id="name" name="name">
				<label for="email">Email:</label>
				<input type="email" id="email" name="email">
				<label for="message">Message:</label>
				<textarea id="message" name="message"></textarea>
				<button type="submit">Send</button>
			</form>
		</section>
	</main>
	<?php include 'footer.php'; ?>
	<script src="mainScript.js"></script>
</body>
</html>
