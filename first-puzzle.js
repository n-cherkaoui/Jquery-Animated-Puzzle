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
    //   'images/piece2.webp',
    //   'images/piece3.webp',
    //   'images/piece4.webp',
    //   'images/piece5.webp',
    //   'images/piece6.webp',
    //   'images/piece7.webp',
    //   'images/piece8.webp',
    //   'images/piece9.webp',
    ];
  
    // Shuffle the puzzle images to randomize their locations
    puzzleImages.sort(() => Math.random() - 0.5);
  
    for (let i = 1; i <= 6; i++) {
      const imageUrl = puzzleImages.pop();
      $('#puzzle-container').append(createPuzzlePiece(i, imageUrl));
    }
  
    // Function to move every piece but one to their correct positions
    function movePiecesToFinalPositions() {
      // Define the final positions for each puzzle piece
      const finalPositions = {
        'piece-1': { top: '0', left: '0' },
        // 'piece-2': { top: '0', left: '100px' },
        // 'piece-3': { top: '0', left: '200px' },
        // 'piece-4': { top: '100px', left: '0' },
        // 'piece-5': { top: '100px', left: '100px' },
        // 'piece-6' will remain in its random position
      };
  
      // Animate each puzzle piece to its final position
      $.each(finalPositions, function (pieceId, finalPosition) {
        $('#' + pieceId).animate(finalPosition);
      });
    }
  
    // Move every piece but one to their correct positions when the page loads
    movePiecesToFinalPositions();
  
    // Function to animate puzzle piece
    function animatePiece(direction) {
      const piece = $('#piece-6'); // Assume the last piece is the movable one
      const distance = 50;
  
      switch (direction) {
        case 'up':
          piece.animate({ top: `-=${distance}px` });
          break;
        case 'down':
          piece.animate({ top: `+=${distance}px` });
          break;
        case 'left':
          piece.animate({ left: `-=${distance}px` });
          break;
        case 'right':
          piece.animate({ left: `+=${distance}px` });
          break;
      }
    }
  
    // Button click event listeners
    $('#up').on('click', function () { animatePiece('up'); });
    $('#down').on('click', function () { animatePiece('down'); });
    $('#left').on('click', function () { animatePiece('left'); });
    $('#right').on('click', function () { animatePiece('right'); });
  });
  