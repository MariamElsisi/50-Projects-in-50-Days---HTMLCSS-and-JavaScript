
function expand(letter) {

    let jasmine = document.getElementById('jasmine');
    let lotus = document.getElementById('lotus');
    let rose = document.getElementById('rose');
    let sunflower = document.getElementById('sunflower');
    let tulip = document.getElementById('tulip');
    let jasmine_text = document.getElementById('bottom1');
    let lotus_text = document.getElementById('bottom2');
    let rose_text = document.getElementById('bottom3');
    let sunflower_text = document.getElementById('bottom4');
    let tulip_text = document.getElementById('bottom5');


    if (letter == 'j') {
        jasmine.style.width = '1160px';
        lotus.style.width = '130px';
        rose.style.width = '130px';
        sunflower.style.width = '130px';
        tulip.style.width = '130px';

        jasmine_text.style.opacity = '1';
        lotus_text.style.opacity = '0';
        rose_text.style.opacity = '0';
        sunflower_text.style.opacity = '0';
        tulip_text.style.opacity = '0';


    }

    else if (letter == 'l') {
        jasmine.style.width = '130px';
        lotus.style.width = '1160px';
        rose.style.width = '130px';
        sunflower.style.width = '130px';
        tulip.style.width = '130px';

        jasmine_text.style.opacity = '0';
        lotus_text.style.opacity = '1';
        rose_text.style.opacity = '0';
        sunflower_text.style.opacity = '0';
        tulip_text.style.opacity = '0';

    }

    else if (letter == 'r') {
        jasmine.style.width = '130px';
        lotus.style.width = '130px';
        rose.style.width = '1160px';
        sunflower.style.width = '130px';
        tulip.style.width = '130px';

        jasmine_text.style.opacity = '0';
        lotus_text.style.opacity = '0';
        rose_text.style.opacity = '1';
        sunflower_text.style.opacity = '0';
        tulip_text.style.opacity = '0';

    }

    else if (letter == 's') {
        jasmine.style.width = '130px';
        lotus.style.width = '130px';
        rose.style.width = '130px';
        sunflower.style.width = '1160px';
        tulip.style.width = '130px';

        jasmine_text.style.opacity = '0';
        lotus_text.style.opacity = '0';
        rose_text.style.opacity = '0';
        sunflower_text.style.opacity = '1';
        tulip_text.style.opacity = '0';

    }

    else if (letter == 't') {
        jasmine.style.width = '130px';
        lotus.style.width = '130px';
        rose.style.width = '130px';
        sunflower.style.width = '130px';
        tulip.style.width = '1160px';

        jasmine_text.style.opacity = '0';
        lotus_text.style.opacity = '0';
        rose_text.style.opacity = '0';
        sunflower_text.style.opacity = '0';
        tulip_text.style.opacity = '1';

    }

}