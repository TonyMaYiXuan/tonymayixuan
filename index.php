<!DOCTYPE html>
<html>
<head>
    <title>My Website</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        #game-region {
            width: 80%;
            height: 70%;
            position: absolute;
            top: 15%;
            left: 10%;
            border: solid black 1px;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 2;
            pointer-events: none;
        }
        #circle {
            width: 30px;
            height: 30px;
            background-color: blue;
            border-radius: 50%;
            position: absolute;
            z-index: 1;
            pointer-events: none;
        }
    </style>
</head>
<body>
    <?php include 'header.php'; ?>
    <main>
        <div id="game-region">
            <div id="circle"></div>
        </div>
        <!-- <section id="contact">
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
        -->
    </main>
    <?php include 'footer.php'; ?>
    <script src="mainScript.js"></script>
</body>
</html>
