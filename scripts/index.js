$(document).ready(function(){
  // stickNavbar();
    var destinations=$("#destinations");
    var sepcials=$("#specials");
    var whyUs=$("#why-us");
    var experts=$("#experts");
    var groups=$("#groups");

    var initialMenu=$("#submenu-item-destinations");
    var aboutMenu=$("#submenu-item-about");  
    var submenu=$(".submenu");

    var menuCarets=$(".menu-item-wrapper").find(".caret-span");
    var caretDown='<i class="fa fa-caret-down"></i>';
    var careRight='<i class="fa fa-caret-right"></i>';

    var imageSection = $('.image-section');
    // imageSection.css('margin-top','0rem');

    NavBarActiveCheck();



   


    var navItems=new Map([
        [destinations,initialMenu],
        [sepcials,initialMenu],
        [whyUs,aboutMenu],
        [experts,aboutMenu],
        [groups,initialMenu],

    ]);
    setInterval(changeBackgroundSlider,3000);
    setInterval(sidePosterSlider,3000);

    // var navItemsKeys=Array.from(navItems.keys());
    // var navItemsValues=Array.from(navItems.values());
    // submenu.html(navItemsValues[0]);  
    // navItemsKeys.forEach(function(item,index){
    //     $(navItemsKeys[index]).on('click', function(){
    //         submenu.html(navItemsValues[index]);  
    //         navItemsKeys[index].css('background-color', "white")       
    //       });
    //     $(navItemsKeys[index]).mouseover(function(){ 
    //     navItemsKeys[index].css('background-color', 'green') 
    //     $(menuCarets[index]).html(caretDown);  
    //     submenu.html(navItemsValues[index]);  
    //     }).mouseout(function(){  
    //     $(menuCarets[index]).html(careRight);
    //     });
    // });   
      
  });

  var navbar = document.getElementById('navbar');
  var imageSection=document.getElementById('image-section');
   

  var sticky = navbar.offsetTop;

  window.onscroll = function() {
    stickNavbar();
  };

  function getRandomSlide(index){
    var imageSlider=new Map([
        ["YOUR NEXT DESTINATION: MADEIRA","./images/madeira.jpg"],
        ["DISCOVER THE WONDERS OF VIETNAM","./images/vietnam.jpg"],
        ["SIGHT SEE THROUGH CENTRAL & SOUTH AMERICA","./images/south-america.jpg"],
        ["YOUR NEXT DESTINATION: AFRICA","./images/africa.jpg"]
    ]);

    var sliderImageTitles=Array.from(imageSlider.keys());
    var sliderImages=Array.from(imageSlider.values());

   


    return sliderItem={
        title: sliderImageTitles[index],
        image: sliderImages[index]
    }

  }

  function stickNavbar() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add('sticky');
      imageSection.style.marginTop= '10rem';
       if(window.innerWidth <800){
        imageSection.style.marginTop= '0rem';
       }
      // imageSection.classList.add('add-margin') ;
    } else {
      navbar.classList.remove('sticky');
      // imageSection.classList.add('marg');
    }
  }

  function changeBackgroundSlider(){
    var randomNumber = Math.floor(Math.random() * 4);
    var imageURL = getRandomSlide(randomNumber);
    $('.image-content-title').text(imageURL.title);
    $('.image-section').css('background-image', 'url(' + imageURL.image + ')');
  }


  function sidePosterSlider(){
    var posters=[
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5uXNhsYWP2uCbR0qBlWwPjqJo-Bt2XUaqfw&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUfmWAbCzJyBHwS90VHLPKFmaxted6b761lvG0WZi8TS1fnjqXzmTDtVfNlDc1HE8Esow&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKBIh1MCdlgDadkLJFSEE7b4G3BjBeXQHp_Q&usqp=CAU"
    ];
    var randomNumber = Math.floor(Math.random() * 3);
    $('.side-poster-placeholder').css('background-image', 'url(' + posters[randomNumber] + ')');
  }


  function NavBarActiveCheck(){
    // nav titles
    var destinations=$("#destinations");
    var sepcials=$("#specials");
    var whyUs=$("#why-us");
    var experts=$("#experts");
    var groups=$("#groups");

    // nav subtitles

    var initialMenu=$("#submenu-item-destinations");
    var aboutMenu=$("#submenu-item-about");  
    var submenu=$(".submenu");

    var menuCarets=$(".menu-item-wrapper").find(".caret-span");
    var caretDown='<i class="fa fa-caret-down"></i>';
    var careRight='<i class="fa fa-caret-right"></i>';

    var navItems=new Map([
      [destinations,initialMenu],
      [sepcials,initialMenu],
      [whyUs,aboutMenu],
      [experts,aboutMenu],
      [groups,initialMenu],

  ]);

  var navItemsKeys=Array.from(navItems.keys());
    var navItemsValues=Array.from(navItems.values());
   
  var Items=[];

  navItemsKeys.forEach(function(item,index){
      var NavItem={
        title:navItemsKeys[index],
        subTitle:navItemsValues[index],
        isActive:false
      };
      Items.push(NavItem ); 
      // console.log(NavItem.titlle);
  });

 Items.forEach((element,index,array)=>{
    $(element.title).on('click',function(){
      element.isActive=true;
      submenu.html(element.subTitle);
    });

    $(element.title).mouseover(function(){
      submenu.html(element.subTitle);
      // element.isActive=true;
    }).mouseout(function(){
      // element.isActive =false;
    });
    
    if(element.isActive){
      $(menuCarets[index]).html(caretDown); 
    }else{
      $(menuCarets[index]).html(careRight);
    };
 });


  // submenu.html(Items[0].subTitle);  

    // navItemsKeys.forEach(function(item,index){
    //     $(navItemsKeys[index]).on('click', function(){
    //         submenu.html(navItemsValues[index]);  
    //         navItemsKeys[index].css('background-color', "white")       
    //       });
    //     $(navItemsKeys[index]).mouseover(function(){ 
    //     navItemsKeys[index].css('background-color', 'green') 
    //     $(menuCarets[index]).html(caretDown);  
    //     submenu.html(navItemsValues[index]);  
    //     }).mouseout(function(){  
    //     $(menuCarets[index]).html(careRight);
    //     });
    // });   

  }


  