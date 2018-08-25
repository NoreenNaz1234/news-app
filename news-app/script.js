function intial() {



$.ajax({
	url:"https://newsapi.org/v2/everything?sources=ary-news&apiKey=8d4fe143bb6d43aaace9a8c5a32136a1",
	success: function(data) {
	 


// for(let data = 0; data < data.length; i++){




 
// 	 document.querySelector(".saudi").innerHTML= data.articles[data.length].author + "(author)" ;
// 	 document.querySelector(".fix").innerHTML= data.articles[i].title;
// 	 document.querySelector(".title").innerHTML= data.articles[i].description;
// 	 document.querySelector(".url").innerHTML= data.articles[i].url;
// 	 document.querySelector(".myimg").innerHTML= data.articles[i].urlToImage;

// 	 document.querySelector(".pbl").innerHTML= data.articles[i].publishedAt;
// 	}


	 document.querySelector(".saudi").innerHTML= data.articles[0].author + "(author)" ;
	 document.querySelector(".fix").innerHTML= data.articles[0].title;
	 document.querySelector(".title").innerHTML= data.articles[0].description;
	 document.querySelector(".url").innerHTML= data.articles[0].url;
	 document.querySelector(".myimg").innerHTML= data.articles[0].urlToImage;

	 document.querySelector(".pbl").innerHTML= data.articles[0].publishedAt;



     document.querySelector(".isl").innerHTML= data.articles[1].author  + "(author)";
	 document.querySelector(".tit").innerHTML+= data.articles[1].title;
	 document.querySelector(".des").innerHTML+= data.articles[1].description;
	 document.querySelector(".api").innerHTML+= data.articles[1].url;
	 document.querySelector(".image").innerHTML+= data.articles[1].urlToImage;

	 document.querySelector(".public").innerHTML+= data.articles[1].publishedAt;


     document.querySelector(".lah").innerHTML= data.articles[2].author  + "(author)";
	 document.querySelector(".tyt").innerHTML+= data.articles[2].title;
	 document.querySelector(".descri").innerHTML+= data.articles[2].description;
	 document.querySelector(".appi").innerHTML+= data.articles[2].url;
	 document.querySelector(".imag").innerHTML+= data.articles[2].urlToImage;

	 document.querySelector(".pub").innerHTML+= data.articles[2].publishedAt;



     document.querySelector(".fslabad").innerHTML= data.articles[3].author  + "(author)";
	 document.querySelector(".aut-tit").innerHTML+= data.articles[3].title;
	 document.querySelector(".descript").innerHTML+= data.articles[3].description;
	 document.querySelector(".url-app").innerHTML+= data.articles[3].url;
	 document.querySelector(".image-file").innerHTML+= data.articles[3].urlToImage;

	 document.querySelector(".publish").innerHTML+= data.articles[3].publishedAt;


     document.querySelector(".quetta").innerHTML= data.articles[4].author  + "(author)";
	 document.querySelector(".artical-tyt").innerHTML+= data.articles[4].title;
	 document.querySelector(".description").innerHTML+= data.articles[4].description;
	 document.querySelector(".url-api").innerHTML+= data.articles[4].url;
	 document.querySelector(".image-folder").innerHTML+= data.articles[4].urlToImage;

	 document.querySelector(".publish-at").innerHTML+= data.articles[4].publishedAt;


     document.querySelector(".muree").innerHTML= data.articles[5].author  + "(author)";
	 document.querySelector(".art-title").innerHTML+= data.articles[5].title;
	 document.querySelector(".explain").innerHTML+= data.articles[5].description;
	 document.querySelector(".link").innerHTML+= data.articles[5].url;
	 document.querySelector(".image-inter").innerHTML+= data.articles[5].urlToImage;

	 document.querySelector(".publish-to").innerHTML+= data.articles[5].publishedAt;


    
    document.querySelector(".khi").innerHTML= data.articles[6].author  + "(author)";
	 document.querySelector(".khi-title").innerHTML+= data.articles[6].title;
	 document.querySelector(".khi-explain").innerHTML+= data.articles[6].description;
	 document.querySelector(".khi-link").innerHTML+= data.articles[6].url;
	 document.querySelector(".khi-inter").innerHTML+= data.articles[6].urlToImage;

	 document.querySelector(".khi-publish-to").innerHTML+= data.articles[6].publishedAt;

     
    document.querySelector(".sport").innerHTML= data.articles[7].author  + "(author)";
	 document.querySelector(".sport-title").innerHTML+= data.articles[7].title;
	 document.querySelector(".sport-explain").innerHTML+= data.articles[7].description;
	 document.querySelector(".sport-link").innerHTML+= data.articles[7].url;
	 document.querySelector(".sport-inter").innerHTML+= data.articles[7].urlToImage;

	 document.querySelector(".sport-publish-to").innerHTML+= data.articles[7].publishedAt;



     console.log(data.articles[0]);
     console.log(data.articles[0].description);

		
	},
})
}