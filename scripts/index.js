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

    



   


    var navItems=new Map([
        [destinations,initialMenu],
        [sepcials,initialMenu],
        [whyUs,aboutMenu],
        [experts,aboutMenu],
        [groups,initialMenu],

    ]);

    // var navItemState=new Map([
    //     [navItems.keys()[0],false],
    //     [navItems.keys()[1],false],
    //     [navItems.keys()[2],false],
    //     [navItems[3],false],
    //     [navItems[4],false],
    // ])

    // $('.image-section-button').click(function(){
    //     // Dynamically change background image to a different URL
    //     var imageURL = getRandomSlide();
    //     $('.image-section').css('background-image', 'url(' + imageURL.image + ')');
    //   });

    setInterval(changeBackgroundSlider,3000);
    setInterval(sidePosterSlider,3000);

    var navItemsKeys=Array.from(navItems.keys());
    var navItemsValues=Array.from(navItems.values());
    submenu.html(navItemsValues[0]);  
    navItemsKeys.forEach(function(item,index){
        $(navItemsKeys[index]).on('click', function(){
            submenu.html(navItemsValues[index]);  
            navItemsKeys[index].css('background-color', "white")       
          });
        $(navItemsKeys[index]).mouseover(function(){ 
        navItemsKeys[index].css('background-color', 'green') 
        $(menuCarets[index]).html(caretDown);  
        submenu.html(navItemsValues[index]);  
        }).mouseout(function(){  
        $(menuCarets[index]).html(careRight);
        });
    });   
      
  });

  var navbar = document.getElementById('navbar');
  var imageSection=document.getElementById('image-section');
   

  var sticky = navbar.offsetTop;

  window.onscroll = function() {
    stickNavbar();
  };

  function getRandomSlide(index){
    var imageSlider=new Map([
        ["YOUR NEXT DESTINATION: MADEIRA","https://c4.wallpaperflare.com/wallpaper/967/938/472/rock-atlantic-ocean-rugged-miradouro-da-ponta-do-rosto-wallpaper-preview.jpg"],
        ["DISCOVER THE WONDERS OF VIETNAM","https://c4.wallpaperflare.com/wallpaper/878/61/227/landscape-nature-rice-paddy-terraces-wallpaper-preview.jpg"],
        ["SIGHT SEE THROUGH CENTRAL & SOUTH AMERICA","https://c4.wallpaperflare.com/wallpaper/781/184/27/national-park-south-america-el-chalten-chile-wallpaper-preview.jpg"],
        ["YOUR NEXT DESTINATION: AFRICA","https://c4.wallpaperflare.com/wallpaper/92/481/105/lion-lion-cub-family-cub-wallpaper-preview.jpg"]
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
    } else {
      navbar.classList.remove('sticky');
      imageSection.classList.add('marg');
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


  