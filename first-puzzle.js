$(document).ready(function () {
    // Function to create puzzle pieces with images
    function createPuzzlePiece(id, imageUrl) {
      return $('<div>', {
        class: 'puzzle-piece',
        id: 'piece-' + id
      }).append($('<img>', { src: imageUrl }));
    }
  
    // Initial setup: create puzzle pieces with images and append them to the container
    const puzzleImages = [
      'images/piece1.webp',
      'images/piece2.webp',
      'images/piece3.webp',
      'images/piece4.webp',
      'images/piece5.webp',
      'images/piece6.webp',
      'images/piece7.webp',
      'images/piece8.webp',
      'images/piece9.webp',
    ];
  
    // Shuffle the puzzle images to randomize their locations
    // puzzleImages.sort(() => Math.random() - 0.5);
  
    for (let i = 1; i <= 9; i++) {
      const imageUrl = puzzleImages.pop();
      $('#puzzle-container').append(createPuzzlePiece(i, imageUrl));
    }
  
    // Function to move every piece but one to their correct positions
    function movePiecesToFinalPositions() {
        $('#' + 'piece-1').animate({top: "100px"});

      // Define the final positions for each puzzle piece
    //   const finalPositions = {
    //     'piece-1': { top: '500px', left: '1000px' }
    //   };
  
    //   // Animate each puzzle piece to its final position
    //   $.each(finalPositions, function (pieceId, finalPosition) {
    //     console.log("#" + pieceId)
    //     $('#' + pieceId).animate(finalPosition);
    //   });
    }
  
    // Move every piece but one to their correct positions when the page loads
    movePiecesToFinalPositions();
  
    // Function to animate puzzle piece
    // function animatePiece(direction) {
    //   const piece = $('#piece-6'); // Assume the last piece is the movable one
    //   const distance = 50;
  
    //   switch (direction) {
    //     case 'up':
    //       piece.animate({ top: `-=${distance}px` });
    //       break;
    //     case 'down':
    //       piece.animate({ top: `+=${distance}px` });
    //       break;
    //     case 'left':
    //       piece.animate({ left: `-=${distance}px` });
    //       break;
    //     case 'right':
    //       piece.animate({ left: `+=${distance}px` });
    //       break;
    //   }
    // }
  
    // // Button click event listeners
    // $('#up').on('click', function () { animatePiece('up'); });
    // $('#down').on('click', function () { animatePiece('down'); });
    // $('#left').on('click', function () { animatePiece('left'); });
    // $('#right').on('click', function () { animatePiece('right'); });
  });

  <!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
  $(".btn1").click(function(){
    $("p").animate({top: "100px"});
  });
  $(".btn2").click(function(){
    $("p").animate({top: "0px"});
  });
});
</script>
</head>
<body>

<button class="btn1">Animate</button>
<button class="btn2">Reset</button>

<p style="position:relative">This is a paragraph.</p>

</body>
</html>
  