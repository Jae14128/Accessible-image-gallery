
const thumbnail= document.querySelector('.thumbnail')

const images=[

" athabasca-falls-athabasca-river-rocky-mountains-jasper-natio.webp  ",
"image of deer.jpg",
"Ocean image.webp",
"Woods image.jpg",
"Rabbit in nature.jpg",
"South American mountain image.webp"

];


const alt={
 "https://img.goodfon.com/wallpaper/big/0/d2/athabasca-falls-athabasca-river-rocky-mountains-jasper-natio.webp":  "an image of mountains and a waterfall in Canada",
 "https://i.ytimg.com/vi/IUN664s7N-c/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCK23ncwZjjd8IisSnQeSXEp5ZjXw":"an image of a deer",
 "https://muralsyourway.vtexassets.com/arquivos/ids/236036-825-auto?width=825&height=auto&aspect=true": "an image of fishes in the ocean",
 "https://www.treehugger.com/thmb/nSp8ESJ1N6zq_bsTVL_MoSrKAqA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1273584292-cbcd5f85f4c646d58f7a7fa158dcaaeb.jpg": "an image of the woods",
 "https://media.istockphoto.com/id/503488234/photo/watching-wild-european-rabbit.jpg?s=612x612&w=0&k=20&c=yg_7dfn_TL1Bp1iA9T9W14cfBtPAj0SJbefcMKoyE8I=": "a rabbit in the forests",
 "https://media.cntraveler.com/photos/654abc0a1e523cd2bb9bbb7c/master/pass/Cotopaxi-alain-bonnardeaux-87Bm-w4J0bc-unsplash.jpg": "sunset over mountain image",

};


images.forEach((imageName) => {
const newPic= document.createElement('thumbnail-container');
newPic.setAttribute("athabasca-falls-athabasca-river-rocky-mountains-jasper-natio.webp",`images/${PicName}`);
newPic.setAttribute("an image of mountains and a waterfall in Canada", alt[PicName]);
thumbnail.appendChild(newPic);


});


function handleImageClick ({target}) {
 showImg.setAttribute("athabasca-falls-athabasca-river-rocky-mountains-jasper-natio.webp", target.getAttribute("athabasca-falls-athabasca-river-rocky-mountains-jasper-natio.webp"));
 showImg.setAttribute("an image of mountains and a waterfall in Canada", target.getAttribute("an image of mountains and a waterfall in Canada"));
}

 const shownImage= document.querySelector('.shown-img');


images.forEach((images) => {
  const newPic1= document.createElement('thumbnail-container');
  const newPic2= document.createElement('large-image-container');
  newPic1.setAttribute("athabasca-falls-athabasca-river-rocky-mountains-jasper-natio.webp", `images/${picName}`);
  newPic2.setAttribute("an image of mountains and a waterfall in Canada", alt/[picName]);
  thumbnail.appendChild(newPic);
  thumbnail.addEventListener('click', handleImageClick);
});

