<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>random phrase</title>
    <style>
        img {
            /* width: 60%; 
            height: 60%;  */
            margin: 0px; 
            cursor: pointer; 
        }
        
        .card_style {
            margin-top: 10vh;
            display: flex;
            /* position: sticky; */
            flex-direction: column;
            flex-wrap: nowrap;
            align-items: center;
            align-content: center;
        }
        .image-container {
            width: 250px; /* Ширина контейнера, настраивайте под ваши нужды */
            height: 382px; /* Высота контейнера, настраивайте под ваши нужды */
            perspective: 1000px; /* Добавляем перспективу для 3D-эффекта */
        }

        #rotating-image {
            width: 100%;
            height: 100%;
            transition: transform 0.5s; /* Добавляем анимацию для плавного поворота */
        }

        .rotated {
            transform: rotate(180deg); /* Поворот на 180 градусов */
        }
    </style>
</head>
<body style=" background-color: #c2c2c2; ">
    <div class="image-container" id="image-container">
        <div class = "card_style" id="rotating-image" >

            <img id="randomButton1" src="button_image1.png" alt="Кнопка 1">
            <img id="randomButton2" src="button_image2.png" alt="Кнопка 2">
        </div>
    </div>
    <div>
        <p id="randomPhrase" style=" width: 230px; margin-top: -39vh; margin-left: 224px; position: absolute; z-index: 3; background: white; border-radius: 10px; border-style: groove ; "></p>
        <!-- <h1 id="randomPhrase1"style=" margin-top: -8vh; margin-left: 59%;  position: absolute; background-color: beige; "></h1> -->
        <img src="msg.png" alt="Новая картинка" id="new-image" style="display: none; margin-top: -40vh; margin-left: 202px; position: absolute; width: 49%;">
    </div>
    
    <script src="script.js"></script>
    <script >
        const imageContainer = document.getElementById('image-container');
        const rotatingImage = document.getElementById('rotating-image');
        const newImage = document.getElementById('new-image');
        let canClick = true;

        imageContainer.addEventListener('click', (event) => {
            const boundingBox = rotatingImage.getBoundingClientRect();
            const clickY = event.clientY - boundingBox.top;
           

            if (clickY > boundingBox.height / 2) {
                rotatingImage.classList.toggle('rotated');
            }
        });

        document.getElementById('randomButton1').addEventListener('click', (event) => {
            newImage.style.display = 'block';
            setTimeout(() => {
                newImage.style.display = 'none'; 
            }, 100000);
            

        });
        document.getElementById('randomButton2').addEventListener('click', (event) => {
            newImage.style.display = 'block';
            setTimeout(() => {
                newImage.style.display = 'none'; 
            }, 100000);

        });

    </script>
</body>
</html>
