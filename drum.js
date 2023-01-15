const playSound = key => {
    switch (key) {
        case 'Q':
            new Audio('music/tom1.wav').play();
            break;
        case 'W':
            new Audio(' music/tom2.wav').play();
            break;
        case 'k':
            new Audio('music/k.wav').play();
            break;
        case 'A':
            new Audio('music/tom3.wav').play();
            break;
        case 'S':
            new Audio('music/S.wav').play();
            break;
        case 'D':
            new Audio('music/tom4.wav').play();
            break;
        case 'Z':
            new Audio('music/tom5.wav').play();
            break;
        default:
            console.log('Invalid key pressed');
    }
};
