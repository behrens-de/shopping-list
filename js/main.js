init();
window.onresize = init;

/**
 *  This function calculates a new min-height of the first .cH100 element by subtracting the header and footer from the 100vh height.
 */
function firstH100(){
    const header = document.querySelector('.jp-main-header');
    const footer = document.querySelector('.jp-main-footer');
    
    const headerHeight = header.clientHeight;
    const footerHeight = footer.clientHeight;
    const firstPageHeight = headerHeight+footerHeight;
    
    const cH100 = document.querySelectorAll('.cH100');
    
    if(cH100[0]){
        cH100[0].setAttribute("style",`min-height:calc(100vh - ${firstPageHeight}px) !important;`);
    }    
}

/**
 *  A function that contains all functions that are to be initialized
 */
function init(){
    firstH100();  
}



