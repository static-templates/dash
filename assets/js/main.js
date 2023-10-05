let bodyEl = document.body;
let day = true;

if ( localStorage.getItem('dark') ) {
    bodyEl.classList.add('dark');
    day = false;
    showNight();
} else {
    day = true;
    showDay();
}

bodyEl.classList.add('transition-colors');

document.getElementById('darkToggle').addEventListener('click', function(){
    bodyEl.classList.add('duration-50');
    
    if(bodyEl.classList.contains('dark')){
        localStorage.removeItem('dark');
        showDay(true);
        
    } else {
        localStorage.setItem('dark', true);
        showNight(true);
        
    }
});

document.getElementById('openMenu').addEventListener('click', function(){
    document.getElementById('menu').classList.remove('translate-x-full'); 
    document.getElementById('closeMenu').classList.remove('translate-x-64');
    document.getElementById('closeMenu').classList.remove('rotate-180');
    
    //document.getElementById('closeMenu').classList.remove('ease-in');
});

document.getElementById('closeMenu').addEventListener('click', function(){
    document.getElementById('closeMenu').classList.remove('duration-1000');
    document.getElementById('closeMenu').classList.add('duration-200');
    document.getElementById('closeMenu').classList.add('-translate-x-8');
    document.getElementById('closeMenu').classList.add('-rotate-45');

    //document.getElementById('closeMenu').classList.add('ease-in');
    setTimeout(function(){
        document.getElementById('closeMenu').classList.remove('-rotate-45');
        document.getElementById('closeMenu').classList.add('rotate-180');
        document.getElementById('closeMenu').classList.remove('duration-300');
        document.getElementById('closeMenu').classList.add('duration-1000');
        document.getElementById('closeMenu').classList.remove('-translate-x-8');
        document.getElementById('closeMenu').classList.add('translate-x-64');
        document.getElementById('menu').classList.add('translate-x-full');
    }, 200);
    
});

function showDay(animate){
    document.getElementById('sun').classList.remove('setting');
    document.getElementById('moon').classList.remove('rising');
    
    let timeout = 0;
    

    if(animate){
        timeout = 500;
        
        document.getElementById('moon').classList.add('setting');
    }

    setTimeout(function(){

        document.getElementById('moon').classList.add('hidden');
        document.getElementById('sun').classList.remove('hidden');

        if(animate){
            bodyEl.classList.remove('dark');
            document.getElementById('sun').classList.add('rising');
        }
        
    }, timeout);
}

function showNight(animate){
    document.getElementById('moon').classList.remove('setting');
    document.getElementById('sun').classList.remove('rising');

    let timeout = 0;
    

    if(animate){
        timeout = 500;
        
        document.getElementById('sun').classList.add('setting');
    }

    setTimeout(function(){

        document.getElementById('sun').classList.add('hidden');
        document.getElementById('moon').classList.remove('hidden');

        if(animate){
            bodyEl.classList.add('dark');
            document.getElementById('moon').classList.add('rising');
        }

    }, timeout);
}

function openMenu(){
    
}

function closeMenu(){
    document.getElementById('menu').classList.add('translate-x-full'); 
}
